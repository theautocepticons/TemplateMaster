// ================================================
// Preview and Clipboard Functionality
// ================================================

import { CHECKED } from './constants.js';
import { formatPartsSummary, formatDBDsSummary } from './format-utils.js';
import { templates } from './templates.js';

let currentTemplate = 'breakfix';

export function setCurrentTemplate(template) {
    currentTemplate = template;
}

// Function to update preview as user types
export function updatePreview() {
    const previewDiv = document.getElementById('preview');
    if (!previewDiv) return;

    const formData = {};
    const template = templates[currentTemplate];

    // Collect values from regular fields
    template.fields.forEach(field => {
        const input = document.getElementById(field.name);
        if (input) {
            // Handle checkbox values differently
            if (field.type === 'checkbox') {
                formData[field.name] = input.checked ? CHECKED : "";
            } else {
                formData[field.name] = input.value;
            }
        }
    });

    // Collect ALL parts from parts table into a single array
    if (['breakfix', 'dbd', 'network', 'mobo'].includes(currentTemplate)) {
        formData.allParts = [];

        const tbody = document.getElementById('parts-table-body');
        if (tbody) {
            // For DBD, only select primary rows to avoid duplicates (two rows per entry)
            const rowSelector = currentTemplate === 'dbd' ? 'tr.parts-row-primary' : 'tr';
            const rows = tbody.querySelectorAll(rowSelector);
            rows.forEach((row, index) => {
                const rowIndex = row.dataset.rowIndex;
                const oldSerial = document.getElementById(`oldSerialNumber${rowIndex}`);
                const newSerial = document.getElementById(`newSerialNumber${rowIndex}`);
                const licensePlate = document.getElementById(`licensePlate${rowIndex}`);

                if (oldSerial && newSerial && licensePlate) {
                    const partData = {
                        id: index + 1,
                        oldSerialNumber: oldSerial.value,
                        newSerialNumber: newSerial.value,
                        licensePlate: licensePlate.value
                    };

                    // Add DBD-specific fields
                    if (currentTemplate === 'dbd') {
                        const driveLocation = document.getElementById(`driveLocation${rowIndex}`);
                        const binNumber = document.getElementById(`binNumber${rowIndex}`);

                        if (driveLocation) partData.driveLocation = driveLocation.value;
                        if (binNumber) partData.binNumber = binNumber.value;
                    }

                    // Add all parts to the array
                    formData.allParts.push(partData);
                }
            });
        }
    }

    // Collect ALL DBDs from DBD table into a single array (for motherboard template)
    if (currentTemplate === 'mobo') {
        formData.allDBDs = [];

        const dbdTbody = document.getElementById('dbds-table-body');
        if (dbdTbody) {
            const rows = dbdTbody.querySelectorAll('tr');
            rows.forEach((row, index) => {
                const rowIndex = row.dataset.rowIndex;
                const dbdSerial = document.getElementById(`dbdSerialNumber${rowIndex}`);
                const slotNum = document.getElementById(`slotNumber${rowIndex}`);

                if (dbdSerial && slotNum) {
                    const dbdData = {
                        id: index + 1,
                        dbdSerialNumber: dbdSerial.value,
                        slotNumber: slotNum.value
                    };

                    // Add all DBDs to the array
                    formData.allDBDs.push(dbdData);
                }
            });
        }
    }

    // Format the note
    let formattedNote = template.format(formData);

    // Add parts summary at the bottom (only if parts were replaced)
    if (['breakfix', 'dbd', 'network', 'mobo'].includes(currentTemplate) &&
        formData.partReplaced === CHECKED &&
        formData.allParts &&
        formData.allParts.length > 0) {

        formattedNote += formatPartsSummary(formData.allParts, currentTemplate);
    }

    // Add DBDs summary at the bottom (for motherboard template, only if DBDs were moved)
    if (currentTemplate === 'mobo' &&
        formData.dbdMoved === CHECKED &&
        formData.allDBDs &&
        formData.allDBDs.length > 0) {

        formattedNote += formatDBDsSummary(formData.allDBDs);
    }

    previewDiv.textContent = formattedNote;
}

// Function to copy to clipboard
export function copyToClipboard() {
    const previewDiv = document.getElementById('preview');
    const copyMessage = document.getElementById('copy-message');
    if (!previewDiv) return;

    const noteText = previewDiv.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(noteText)
            .then(() => showCopyMessage())
            .catch(() => fallbackCopyTextToClipboard(noteText));
    } else {
        fallbackCopyTextToClipboard(noteText);
    }
}

// Show copy success message
function showCopyMessage() {
    const copyMessage = document.getElementById('copy-message');
    if (copyMessage) {
        copyMessage.classList.add('show');
        setTimeout(() => {
            copyMessage.classList.remove('show');
        }, 2000);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        // Position offscreen
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (successful) {
            showCopyMessage();
        } else {
            console.error('Fallback: Could not copy text');
            alert('Could not copy text. Please select the text manually.');
        }
    } catch (err) {
        console.error('Fallback: Could not copy text', err);
        alert('Could not copy text. Please select the text manually.');
    }
}
