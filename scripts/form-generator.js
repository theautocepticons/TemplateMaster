// ================================================
// Form Generation
// ================================================

import { templates } from './templates.js';
import { createInput, createInfoElement } from './dom-helpers.js';
import { updatePreview } from './preview.js';
import { activeDetailsSections, hideDetailsPanel, updateDetailsPanel, setCurrentTemplate as setDetailsPanelTemplate } from './details-panel.js';
import { setCurrentTemplate as setPartsTableTemplate, additionalPartsCounter, additionalDBDsCounter } from './parts-table.js';

export let currentTemplate = 'breakfix';

export function setCurrentTemplate(template) {
    currentTemplate = template;
    setDetailsPanelTemplate(template);
    setPartsTableTemplate(template);
}

// Function to change template
export function changeTemplate() {
    const templateSelect = document.getElementById('template-select');
    if (!templateSelect) return;

    const previousTemplate = currentTemplate;
    const newTemplateValue = templateSelect.value;

    // Only preserve data between network and workAuth templates
    const shouldPreserveData =
        (previousTemplate === 'network' && newTemplateValue === 'workAuth') ||
        (previousTemplate === 'workAuth' && newTemplateValue === 'network');

    let savedData = {};
    if (shouldPreserveData) {
        const template = templates[previousTemplate];
        template.fields.forEach(field => {
            if (field.name) {
                const input = document.getElementById(field.name);
                if (input) {
                    if (field.type === 'checkbox') {
                        savedData[field.name] = input.checked;
                    } else {
                        savedData[field.name] = input.value;
                    }
                }
            }
        });
    }

    setCurrentTemplate(newTemplateValue);
    generateFormFields();

    // Restore matching fields only if preserving data
    if (shouldPreserveData) {
        const newTemplate = templates[currentTemplate];
        newTemplate.fields.forEach(field => {
            if (field.name && savedData[field.name] !== undefined) {
                const input = document.getElementById(field.name);
                if (input) {
                    if (field.type === 'checkbox') {
                        input.checked = savedData[field.name];
                        if (field.hasConditionalFields) {
                            updateConditionalFieldsVisibility(input);
                        }
                    } else {
                        input.value = savedData[field.name];
                    }
                }
            }
        });
    }

    updatePreview();
}

// Function to generate form fields based on selected template
export function generateFormFields() {
    const templateForm = document.getElementById('template-form');
    if (!templateForm) return;

    templateForm.innerHTML = '';

    const template = templates[currentTemplate];

    // Separate info fields from form fields
    const infoFieldsBefore = [];
    const infoFieldsAfter = [];
    const formFields = [];
    let foundFormField = false;

    template.fields.forEach(field => {
        if (field.conditionalOn) return;

        if (field.type === 'info') {
            if (foundFormField) {
                infoFieldsAfter.push(field);
            } else {
                infoFieldsBefore.push(field);
            }
        } else {
            foundFormField = true;
            formFields.push(field);
        }
    });

    // Add info elements before table
    infoFieldsBefore.forEach(field => {
        const infoElement = createInfoElement(field.text || field.label);
        infoElement.style.marginBottom = '15px';
        templateForm.appendChild(infoElement);
    });

    // Create table with form fields
    const tbody = document.createElement('tbody');
    formFields.forEach(field => {
        const tr = document.createElement('tr');

        // Label cell
        const labelCell = document.createElement('td');
        const label = document.createElement('label');
        label.setAttribute('for', field.name);
        label.textContent = field.label;
        labelCell.appendChild(label);

        // Input cell
        const inputCell = document.createElement('td');
        const input = createInput(field);

        // Add event listeners
        if (field.type === 'checkbox' && field.hasConditionalFields) {
            input.addEventListener('change', function() {
                updateConditionalFieldsVisibility(this);
                updatePreview();
            });
        } else if (field.type === 'select' && field.hasConditionalFields) {
            input.addEventListener('change', handleConditionalFields);
        } else if (field.type === 'select') {
            input.addEventListener('change', updatePreview);
        } else {
            input.addEventListener('input', updatePreview);
        }

        inputCell.appendChild(input);
        tr.appendChild(labelCell);
        tr.appendChild(inputCell);
        tbody.appendChild(tr);
    });

    if (tbody.children.length > 0) {
        templateForm.appendChild(tbody);
    }

    // Add info elements after table
    infoFieldsAfter.forEach(field => {
        const infoElement = createInfoElement(field.text || field.label);
        infoElement.style.marginTop = '15px';
        templateForm.appendChild(infoElement);
    });

    // Reset details panel when switching templates
    hideDetailsPanel();
}

// Function to update visibility of conditional fields based on checkbox state
export function updateConditionalFieldsVisibility(checkbox) {
    if (checkbox.checked) {
        activeDetailsSections.add(checkbox.id);
    } else {
        activeDetailsSections.delete(checkbox.id);

        // Reset counters when unchecking
        if (checkbox.id === 'partReplaced') {
            // Reset handled in parts-table.js when needed
        }
        if (checkbox.id === 'dbdMoved') {
            // Reset handled in parts-table.js when needed
        }
    }

    updateDetailsPanel();
}

// Function to handle showing/hiding conditional fields
function handleConditionalFields(event) {
    const triggerField = event.target;
    const triggerValue = triggerField.value;
    const conditionalFields = document.querySelectorAll(`.conditional-field[data-depends-on="${triggerField.id}"]`);

    conditionalFields.forEach(field => {
        const requiredValue = field.getAttribute('data-depends-value');
        if (triggerValue === requiredValue) {
            field.style.display = 'block';
        } else {
            field.style.display = 'none';
            // Clear values in hidden fields
            const inputs = field.querySelectorAll('input, textarea, select');
            inputs.forEach(input => input.value = '');
        }
    });

    updatePreview();
}

// Reset form function
export function resetForm() {
    const templateForm = document.getElementById('template-form');
    if (templateForm) {
        templateForm.reset();

        // Reset checkboxes (they might not be properly reset by the form.reset())
        document.querySelectorAll('#template-form input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Hide details panel and reset counters
        hideDetailsPanel();

        updatePreview();
    }
}
