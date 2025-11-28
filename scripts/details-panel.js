// ================================================
// Details Panel Management
// ================================================

import { templates } from './templates.js';
import { createInput } from './dom-helpers.js';
import { createPartsTableRow, addPartsTableRow, createDBDTableRow, addDBDTableRow, additionalPartsCounter, additionalDBDsCounter, setCurrentTemplate as setPartsTableTemplate } from './parts-table.js';
import { updatePreview } from './preview.js';

// Track active details sections
export let activeDetailsSections = new Set();
let currentTemplate = 'breakfix';

export function setCurrentTemplate(template) {
    currentTemplate = template;
    setPartsTableTemplate(template);
}

// Details panel functions
export function showDetailsPanel() {
    const detailsPanel = document.getElementById('details-panel');
    const app = document.getElementById('app');
    if (detailsPanel && app) {
        detailsPanel.classList.add('visible');
        app.classList.add('has-details');
    }
}

export function hideDetailsPanel() {
    const detailsPanel = document.getElementById('details-panel');
    const app = document.getElementById('app');
    const detailsContent = document.getElementById('details-content');

    if (detailsPanel && app && detailsContent) {
        detailsPanel.classList.remove('visible');
        app.classList.remove('has-details');
        detailsContent.innerHTML = '';
        activeDetailsSections.clear();
    }
}

export function updateDetailsPanel() {
    const detailsContent = document.getElementById('details-content');
    if (!detailsContent) return;

    // Clear existing content
    detailsContent.innerHTML = '';

    if (activeDetailsSections.size === 0) {
        hideDetailsPanel();
        return;
    }

    showDetailsPanel();

    // Add content for each active section
    activeDetailsSections.forEach(sectionId => {
        addDetailsSectionContent(sectionId);
    });
}

// Function to add content for a details section
function addDetailsSectionContent(sectionId) {
    const detailsContent = document.getElementById('details-content');
    if (!detailsContent) return;

    const template = templates[currentTemplate];
    const section = document.createElement('div');
    section.className = 'details-section';
    section.dataset.sectionId = sectionId;

    // Add section header if there are multiple sections
    if (activeDetailsSections.size > 1) {
        const sectionHeader = document.createElement('h4');
        sectionHeader.className = 'section-subheader';
        if (sectionId === 'partReplaced') sectionHeader.textContent = 'Parts Replacement';
        if (sectionId === 'wasEscalated') sectionHeader.textContent = 'Escalation Details';
        if (sectionId === 'dbdMoved') sectionHeader.textContent = 'DBD Information';
        section.appendChild(sectionHeader);
    }

    // Handle parts replacement table
    if (sectionId === 'partReplaced' && ['breakfix', 'dbd', 'network', 'mobo'].includes(currentTemplate)) {
        // Add section label for DBD
        if (currentTemplate === 'dbd') {
            const sectionLabel = document.createElement('h4');
            sectionLabel.className = 'details-section-label';
            sectionLabel.textContent = 'Replaced DBDs';
            section.appendChild(sectionLabel);
        }

        const partsTable = document.createElement('table');
        partsTable.id = 'parts-table';
        partsTable.className = 'parts-table';

        // Only add headers for non-DBD templates
        if (currentTemplate !== 'dbd') {
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const headers = ['Old Serial', 'New Serial', 'License Plate', ''];

            headers.forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            partsTable.appendChild(thead);
        }

        const tbody = document.createElement('tbody');
        tbody.id = 'parts-table-body';
        tbody.appendChild(createPartsTableRow(0));
        partsTable.appendChild(tbody);
        section.appendChild(partsTable);

        const addRowBtn = document.createElement('div');
        addRowBtn.className = 'add-more-link';
        addRowBtn.textContent = '+ Add Another Part';
        addRowBtn.addEventListener('click', addPartsTableRow);
        section.appendChild(addRowBtn);
    }

    // Handle DBD moved table
    if (sectionId === 'dbdMoved' && currentTemplate === 'mobo') {
        const dbdTable = document.createElement('table');
        dbdTable.id = 'dbds-table';
        dbdTable.className = 'parts-table';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['DBD Serial', 'Slot #', ''];

        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        dbdTable.appendChild(thead);

        const tbody = document.createElement('tbody');
        tbody.id = 'dbds-table-body';
        tbody.appendChild(createDBDTableRow(0));
        dbdTable.appendChild(tbody);
        section.appendChild(dbdTable);

        const addRowBtn = document.createElement('div');
        addRowBtn.className = 'add-more-link';
        addRowBtn.textContent = '+ Add Another DBD';
        addRowBtn.addEventListener('click', addDBDTableRow);
        section.appendChild(addRowBtn);
    }

    // Handle escalation fields
    if (sectionId === 'wasEscalated') {
        const conditionalFields = template.fields.filter(f =>
            f.conditionalOn && f.conditionalOn.field === 'wasEscalated'
        );

        conditionalFields.forEach(condField => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.setAttribute('for', condField.name);
            label.textContent = condField.label;

            const input = createInput(condField);
            input.addEventListener('input', updatePreview);

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            section.appendChild(formGroup);
        });
    }

    detailsContent.appendChild(section);
}
