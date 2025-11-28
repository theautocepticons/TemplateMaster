/**
 * Wave Background - Neon tubes with Three.js
 */
import * as THREE from 'three';
import chroma from 'chroma-js';

// SimplexNoise
const SimplexNoise = (function() {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    const grad3 = [
        [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
        [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
        [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
    ];

    function SimplexNoise(seed) {
        this.p = new Uint8Array(256);
        this.perm = new Uint8Array(512);
        this.permMod12 = new Uint8Array(512);

        const random = seed ? mulberry32(seed) : Math.random;
        for (let i = 0; i < 256; i++) this.p[i] = i;
        for (let i = 255; i > 0; i--) {
            const j = Math.floor(random() * (i + 1));
            [this.p[i], this.p[j]] = [this.p[j], this.p[i]];
        }
        for (let i = 0; i < 512; i++) {
            this.perm[i] = this.p[i & 255];
            this.permMod12[i] = this.perm[i] % 12;
        }
    }

    function mulberry32(a) {
        return function() {
            let t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }

    SimplexNoise.prototype.noise2D = function(x, y) {
        const perm = this.perm, permMod12 = this.permMod12;
        let n0, n1, n2;
        const s = (x + y) * F2;
        const i = Math.floor(x + s);
        const j = Math.floor(y + s);
        const t = (i + j) * G2;
        const X0 = i - t, Y0 = j - t;
        const x0 = x - X0, y0 = y - Y0;
        let i1, j1;
        if (x0 > y0) { i1 = 1; j1 = 0; }
        else { i1 = 0; j1 = 1; }
        const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
        const ii = i & 255, jj = j & 255;
        const gi0 = permMod12[ii + perm[jj]];
        const gi1 = permMod12[ii + i1 + perm[jj + j1]];
        const gi2 = permMod12[ii + 1 + perm[jj + 1]];
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 < 0) n0 = 0;
        else { t0 *= t0; n0 = t0 * t0 * (grad3[gi0][0] * x0 + grad3[gi0][1] * y0); }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 < 0) n1 = 0;
        else { t1 *= t1; n1 = t1 * t1 * (grad3[gi1][0] * x1 + grad3[gi1][1] * y1); }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 < 0) n2 = 0;
        else { t2 *= t2; n2 = t2 * t2 * (grad3[gi2][0] * x2 + grad3[gi2][1] * y2); }
        return 70 * (n0 + n1 + n2);
    };

    return SimplexNoise;
})();

const simplex = new SimplexNoise();


/**
 * Custom curve
 */
class CustomCurve extends THREE.Curve {
    constructor(x, y, l, noise) {
        super();
        this.x = x;
        this.y = y;
        this.l = l;
        this.noise = noise;
        this.yn = this.y * this.noise.coef;
    }
    getPoint(t) {
        let x = this.x + t * this.l;
        let xn = x * this.noise.coef;
        let noise1 = simplex.noise2D(xn + this.noise.time, this.yn - this.noise.time);
        let noise2 = simplex.noise2D(this.yn + this.noise.time, xn - this.noise.time);
        let z = noise2 * this.noise.height;
        let y = this.y + noise1 * this.noise.height;
        return new THREE.Vector3(x, y, z);
    }
}

/**
 * Tube class
 */
class Tube {
    constructor(x, y, l, segments, radius, color, noise) {
        this.segments = segments;
        this.radialSegments = 8;
        this.radius = radius;

        this.curve = new CustomCurve(x, y, l, noise);
        this.geometry = new THREE.TubeGeometry(this.curve, segments, radius, this.radialSegments, false);
        this.material = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8, roughness: 0.2 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
    update() {
        const newGeometry = new THREE.TubeGeometry(
            this.curve,
            this.segments,
            this.radius,
            this.radialSegments,
            false
        );
        this.geometry.dispose();
        this.geometry = newGeometry;
        this.mesh.geometry = this.geometry;
    }
}

function App(conf) {
    conf = {
        fov: 75,
        cameraZ: 150,
        background: 0x000000,
        tubeRadius: 3,
        resY: 10,
        resX: 4,
        noiseCoef: 50,
        timeCoef: 50,
        heightCoef: 20,
        ambientColor: 0xcccccc,
        lightIntensity: 2000,
        light1Color: 0x24f59e,
        light2Color: 0xe15040,
        light3Color: 0x1b859e,
        light4Color: 0x4cb04b,
        ...conf
    };

    let renderer, scene, camera;
    let width, height, wWidth, wHeight;
    // Use THREE.MathUtils.randFloat like the example's TMath.randFloat
    const randFloat = THREE.MathUtils.randFloat;

    let light1, light2, light3, light4;
    let objects, noiseConf = {};
    let cscale;
    const STORAGE_KEY = 'waveBackground_animated';
    let animating = localStorage.getItem(STORAGE_KEY) === 'true';
    let animationId = null;
    // Use fixed initial color like the example
    updateCScale(chroma('#d11f6c'));

    init();

    function init() {
        console.log('App.init() called');
        const canvas = document.getElementById('wave-bg');
        console.log('Canvas element:', canvas);
        if (!canvas) {
            console.warn('Wave background canvas not found');
            return;
        }

        renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        console.log('Renderer created:', renderer);
        camera = new THREE.PerspectiveCamera(conf.fov);
        camera.position.z = conf.cameraZ;

        updateSize();
        console.log('After updateSize - wWidth:', wWidth, 'wHeight:', wHeight);
        window.addEventListener('resize', updateSize, false);

        initScene();
        console.log('Scene initialized, objects:', objects?.length);
        animate();
    }

    function initScene() {
        scene = new THREE.Scene();
        if (conf.background !== undefined) scene.background = new THREE.Color(conf.background);
        initLights();
        initObjects();
        camera.position.z = 130;
    }

    function initLights() {
        scene.add(new THREE.AmbientLight(conf.ambientColor, 0.3));

        const z = 50;
        const lightDistance = 1000;
        light1 = new THREE.PointLight(conf.light1Color, conf.lightIntensity, lightDistance);
        light1.position.set(0, wHeight / 2, z);
        scene.add(light1);
        light2 = new THREE.PointLight(conf.light2Color, conf.lightIntensity, lightDistance);
        light2.position.set(0, -wHeight / 2, z);
        scene.add(light2);
        light3 = new THREE.PointLight(conf.light3Color, conf.lightIntensity, lightDistance);
        light3.position.set(wWidth / 2, 0, z);
        scene.add(light3);
        light4 = new THREE.PointLight(conf.light4Color, conf.lightIntensity, lightDistance);
        light4.position.set(-wWidth / 2, 0, z);
        scene.add(light4);
    }

    function initObjects() {
        updateNoise();
        const nx = Math.round(wWidth / conf.resX) + 1;
        const ny = Math.round(wHeight / conf.resY) + 1;
        objects = [];
        let tube, color;
        for (let j = 0; j < ny; j++) {
            color = cscale(randFloat(0, 1)).hex();
            tube = new Tube(-wWidth / 2, -wHeight / 2 + j * conf.resY, wWidth, nx, conf.tubeRadius, color, noiseConf);
            objects.push(tube);
            scene.add(tube.mesh);
        }
    }

    function updateNoise() {
        noiseConf.coef = conf.noiseCoef * 0.00012;
        noiseConf.height = conf.heightCoef;
        noiseConf.time = Date.now() * conf.timeCoef * 0.000002;
    }

    function getThemeHues() {
        const style = getComputedStyle(document.body);
        const hue1 = parseInt(style.getPropertyValue('--hue1')) || 222;
        const hue2 = parseInt(style.getPropertyValue('--hue2')) || hue1;
        return { hue1, hue2 };
    }

    function isDarkMode() {
        return document.body.classList.contains('dark-mode');
    }

    function updateBackgroundColor() {
        if (scene) {
            const dark = isDarkMode();
            scene.background = new THREE.Color(dark ? 0x000000 : 0xf0f2f5);
            // Adjust ambient light for light mode
            if (scene.children[0] && scene.children[0].isAmbientLight) {
                scene.children[0].intensity = dark ? 0.3 : 0.5;
            }
        }
    }

    function updateThemeLights() {
        // Use requestAnimationFrame to ensure CSS has been applied
        requestAnimationFrame(() => {
            const { hue1, hue2 } = getThemeHues();
            // Update background based on dark/light mode
            updateBackgroundColor();
            // Create vibrant neon colors from the theme hues
            // Primary lights
            light1.color = new THREE.Color(chroma.hsl(hue1, 1, 0.6).hex());
            light3.color = new THREE.Color(chroma.hsl(hue1, 0.95, 0.55).hex());
            // Secondary lights - higher lightness and intensity for better visibility
            light2.color = new THREE.Color(chroma.hsl(hue2, 1, 0.65).hex());
            light2.intensity = conf.lightIntensity * 1.3;
            light4.color = new THREE.Color(chroma.hsl(hue2, 1, 0.6).hex());
            light4.intensity = conf.lightIntensity * 1.3;
            // Re-render if paused to show changes
            if (!animating) {
                renderer.render(scene, camera);
            }
        });
    }

    function updateColors() {
        const color = chroma.random();
        updateCScale(color);
        for (let i = 0; i < objects.length; i++) {
            objects[i].material.color = new THREE.Color(cscale(randFloat(0, 1)).hex());
        }
        light1.color = new THREE.Color(chroma.random().hex());
        light2.color = new THREE.Color(chroma.random().hex());
        light3.color = new THREE.Color(chroma.random().hex());
        light4.color = new THREE.Color(chroma.random().hex());
    }

    function updateCScale(color) {
        const colors = [
            color.set('hsl.s', randFloat(0, 1)).set('hsl.l', randFloat(0, 0.3)).hex(),
            color.set('hsl.s', randFloat(0, 1)).set('hsl.l', 0.3 + randFloat(0, 0.4)).hex(),
            color.set('hsl.s', randFloat(0, 1)).set('hsl.l', 0.7 + randFloat(0, 0.3)).hex(),
            '#ffffff',
        ];
        cscale = chroma.scale(colors);
    }

    function animate() {
        if (!animating) return;
        animationId = requestAnimationFrame(animate);
        animateObjects();
        animateLights();
        renderer.render(scene, camera);
    }

    function pause() {
        animating = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    function resume() {
        if (!animating) {
            animating = true;
            animate();
        }
    }

    function setAnimated(enabled) {
        localStorage.setItem(STORAGE_KEY, enabled ? 'true' : 'false');
        if (enabled) {
            resume();
        } else {
            pause();
            // Position lights to show both colors nicely when static
            const dx = wWidth / 2;
            const dy = wHeight / 2;
            // Primary lights on top-left and bottom-right
            light1.position.set(-dx * 0.5, dy * 0.5, 50);
            light3.position.set(dx * 0.5, -dy * 0.5, 50);
            // Secondary lights on top-right and bottom-left
            light2.position.set(dx * 0.5, dy * 0.5, 50);
            light4.position.set(-dx * 0.5, -dy * 0.5, 50);
            // Render one final frame
            renderer.render(scene, camera);
        }
    }

    function isAnimated() {
        return animating;
    }

    function animateObjects() {
        updateNoise();
        for (let i = 0; i < objects.length; i++) {
            objects[i].update();
        }
    }

    function animateLights() {
        const time = Date.now() * 0.001;
        const dx = wWidth / 2;
        const dy = wHeight / 2;
        light1.position.x = Math.sin(time * 0.1) * dx;
        light1.position.y = Math.cos(time * 0.2) * dy;
        light2.position.x = Math.cos(time * 0.3) * dx;
        light2.position.y = Math.sin(time * 0.4) * dy;
        light3.position.x = Math.sin(time * 0.5) * dx;
        light3.position.y = Math.sin(time * 0.6) * dy;
        light4.position.x = Math.sin(time * 0.7) * dx;
        light4.position.y = Math.cos(time * 0.8) * dy;
    }

    function updateSize() {
        width = window.innerWidth;
        height = window.innerHeight;
        if (renderer && camera) {
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            const wsize = getRendererSize();
            wWidth = wsize[0];
            wHeight = wsize[1];
        }
    }

    function getRendererSize() {
        const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
        const vFOV = (cam.fov * Math.PI) / 180;
        const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
        const width = height * cam.aspect;
        return [width, height];
    }

    // Set initial light colors from theme
    updateThemeLights();

    // Apply saved animation state (after a frame to ensure everything is initialized)
    if (!animating) {
        requestAnimationFrame(() => setAnimated(false));
    }

    return {
        updateColors,
        updateTheme: updateThemeLights,
        setAnimated,
        isAnimated,
        pause,
        resume
    };
}

// Initialize
function initWaveBackground() {
    console.log('initWaveBackground called');
    const app = App();
    console.log('App created:', app);
    window.waveBackground = {
        updateTheme: () => app?.updateTheme(),
        updateColors: () => app?.updateColors(),
        setAnimated: (enabled) => app?.setAnimated(enabled),
        isAnimated: () => app?.isAnimated() ?? true,
        pause: () => app?.pause(),
        resume: () => app?.resume()
    };
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWaveBackground);
} else {
    initWaveBackground();
}
