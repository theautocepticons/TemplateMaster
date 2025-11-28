// ================================================
// Main Entry Point
// ================================================

import { initButtonGlows } from './glow-effects.js';
import { initCustomSelect } from './custom-select.js';
import { initTheme } from './theme.js';
import { generateFormFields, changeTemplate, resetForm, setCurrentTemplate } from './form-generator.js';
import { copyToClipboard, updatePreview, setCurrentTemplate as setPreviewTemplate } from './preview.js';
import { setCurrentTemplate as setDetailsPanelTemplate } from './details-panel.js';
import { setCurrentTemplate as setPartsTableTemplate } from './parts-table.js';

// Initialize the application
function init() {
    // Set initial template across all modules
    const initialTemplate = 'breakfix';
    setCurrentTemplate(initialTemplate);
    setPreviewTemplate(initialTemplate);
    setDetailsPanelTemplate(initialTemplate);
    setPartsTableTemplate(initialTemplate);

    // Generate initial form
    generateFormFields();

    // Initialize UI components
    initButtonGlows();
    initCustomSelect('#template-select-wrapper');
    initTheme();

    // Add event listeners
    const templateSelect = document.getElementById('template-select');
    const copyBtn = document.getElementById('copy-btn');
    const resetBtn = document.getElementById('reset-btn');

    if (templateSelect) {
        templateSelect.addEventListener('change', () => {
            changeTemplate();
            const newTemplate = templateSelect.value;
            setPreviewTemplate(newTemplate);
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', copyToClipboard);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', resetForm);
    }

    // Initial preview update
    updatePreview();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
