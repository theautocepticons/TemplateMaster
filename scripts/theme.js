// ================================================
// Theme Management
// ================================================

// Color hue mappings
const colorHues = {
    blue: 222,
    purple: 280,
    green: 145,
    red: 0,
    orange: 30,
    cyan: 190
};

// Theme state
export let isDarkMode = localStorage.getItem('darkMode') !== 'false'; // Default to true (dark mode)
export let primaryColor = localStorage.getItem('primaryColor') || 'blue';
export let secondaryColor = localStorage.getItem('secondaryColor') || 'none';

// Function to apply the theme
export function applyTheme() {
    const modeToggle = document.getElementById('mode-toggle');
    const primaryColorButtons = document.querySelectorAll('.color-buttons[data-color-type="primary"] .color-btn');
    const secondaryColorButtons = document.querySelectorAll('.color-buttons[data-color-type="secondary"] .color-btn');

    // Update dark mode
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        if (modeToggle) modeToggle.textContent = '🌙';
    } else {
        document.body.classList.remove('dark-mode');
        if (modeToggle) modeToggle.textContent = '☀️';
    }

    // Remove all color classes
    document.body.classList.remove(
        'primary-blue', 'primary-purple', 'primary-green', 'primary-red', 'primary-orange', 'primary-cyan',
        'secondary-blue', 'secondary-purple', 'secondary-green', 'secondary-red', 'secondary-orange', 'secondary-cyan'
    );

    // Apply primary color
    document.body.classList.add(`primary-${primaryColor}`);

    // Apply secondary color (if not "none") or sync with primary
    if (secondaryColor !== 'none') {
        document.body.classList.add(`secondary-${secondaryColor}`);
        // Clear any inline --hue2 style so the class takes effect
        document.documentElement.style.removeProperty('--hue2');
    } else {
        // When secondary is "none", set --hue2 to match primary's hue
        document.documentElement.style.setProperty('--hue2', colorHues[primaryColor]);
    }

    // Update active button states
    primaryColorButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-color') === primaryColor);
    });
    secondaryColorButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-color') === secondaryColor);
    });
}

// Initialize theme event listeners
export function initTheme() {
    const modeToggle = document.getElementById('mode-toggle');
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const modalClose = document.getElementById('modal-close');
    const primaryColorButtons = document.querySelectorAll('.color-buttons[data-color-type="primary"] .color-btn');
    const secondaryColorButtons = document.querySelectorAll('.color-buttons[data-color-type="secondary"] .color-btn');

    // Apply saved theme on load
    applyTheme();

    // Settings modal event listeners
    if (settingsBtn && settingsModal && modalClose) {
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('show');
        });

        modalClose.addEventListener('click', () => {
            settingsModal.classList.remove('show');
        });

        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.remove('show');
            }
        });
    }

    // Mode toggle event listener
    if (modeToggle) {
        modeToggle.addEventListener('click', function() {
            isDarkMode = !isDarkMode;
            localStorage.setItem('darkMode', isDarkMode);
            applyTheme();
        });
    }

    // Primary color button event listeners
    primaryColorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            primaryColor = this.getAttribute('data-color');
            localStorage.setItem('primaryColor', primaryColor);
            applyTheme();
        });
    });

    // Secondary color button event listeners
    secondaryColorButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            secondaryColor = this.getAttribute('data-color');
            localStorage.setItem('secondaryColor', secondaryColor);
            applyTheme();
        });
    });
}
