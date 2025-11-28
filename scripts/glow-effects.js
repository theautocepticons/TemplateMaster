// ================================================
// Glow Effect Component
// ================================================

/**
 * Adds glow/shine effects to an element
 * @param {HTMLElement} element - The element to add glows to
 * @param {Object} options - Configuration options
 * @param {boolean} options.topRight - Add top-right glow (default: true)
 * @param {boolean} options.bottomLeft - Add bottom-left glow (default: true)
 */
export function addGlowEffects(element, options = {}) {
    const {
        topRight = true,
        bottomLeft = true
    } = options;

    // Remove existing glow elements
    element.querySelectorAll('.glow-effect').forEach(el => el.remove());

    if (topRight) {
        // Top-right shine (sharp line on border)
        const shine = document.createElement('span');
        shine.className = 'glow-effect glow-effect--shine';
        element.appendChild(shine);

        // Top-right glow (soft blur)
        const glow = document.createElement('span');
        glow.className = 'glow-effect glow-effect--glow';
        element.appendChild(glow);

        // Top-right bright glow (tighter inner highlight)
        const glowBright = document.createElement('span');
        glowBright.className = 'glow-effect glow-effect--glow glow-effect--glow-bright';
        element.appendChild(glowBright);
    }

    if (bottomLeft) {
        // Bottom-left shine
        const shineBottom = document.createElement('span');
        shineBottom.className = 'glow-effect glow-effect--shine glow-effect--bottom';
        element.appendChild(shineBottom);

        // Bottom-left glow
        const glowBottom = document.createElement('span');
        glowBottom.className = 'glow-effect glow-effect--glow glow-effect--bottom';
        element.appendChild(glowBottom);

        // Bottom-left bright glow
        const glowBrightBottom = document.createElement('span');
        glowBrightBottom.className = 'glow-effect glow-effect--glow glow-effect--glow-bright glow-effect--bottom';
        element.appendChild(glowBrightBottom);
    }
}

/**
 * Initialize glow effects on buttons
 */
export function initButtonGlows() {
    document.querySelectorAll('.btn').forEach(btn => {
        addGlowEffects(btn);
    });
}
