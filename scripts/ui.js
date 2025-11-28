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
function addGlowEffects(element, options = {}) {
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
function initButtonGlows() {
    document.querySelectorAll('.btn').forEach(btn => {
        addGlowEffects(btn);
    });
}

// ================================================
// Custom Select Dropdown
// ================================================

function initCustomSelect(wrapperSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    if (!wrapper) return;

    const trigger = wrapper.querySelector('.custom-select-trigger');
    const dropdown = wrapper.querySelector('.custom-select-dropdown');
    const options = wrapper.querySelectorAll('.custom-select-option');
    const valueDisplay = wrapper.querySelector('.select-value');
    const hiddenSelect = wrapper.querySelector('select');

    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = wrapper.classList.contains('open');
        closeAllCustomSelects();
        if (!isOpen) {
            wrapper.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });

    // Handle option selection
    options.forEach(option => {
        option.addEventListener('click', () => {
            const value = option.getAttribute('data-value');
            const text = option.textContent;

            // Update display
            valueDisplay.textContent = text;

            // Update hidden select
            if (hiddenSelect) {
                hiddenSelect.value = value;
                hiddenSelect.dispatchEvent(new Event('change'));
            }

            // Update selected state
            options.forEach(opt => {
                opt.classList.remove('selected');
                opt.setAttribute('aria-selected', 'false');
            });
            option.classList.add('selected');
            option.setAttribute('aria-selected', 'true');

            // Close dropdown
            wrapper.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        });
    });

    // Keyboard navigation
    trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            trigger.click();
        } else if (e.key === 'Escape') {
            wrapper.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        }
    });
}

function closeAllCustomSelects() {
    document.querySelectorAll('.custom-select.open').forEach(select => {
        select.classList.remove('open');
        select.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded', 'false');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', closeAllCustomSelects);

// ================================================
// Constants
// ================================================
const CHECKED = "checked";
const DEFAULT_VALUE = "N/A";
const DEFAULT_PLACEHOLDER = "[Not specified]";

// Format helper functions
function formatCheckbox(value) {
    return value === CHECKED ? "Yes" : "No";
}

function truncateSerial(serial, length = 6) {
    if (!serial || serial === DEFAULT_VALUE || serial === DEFAULT_PLACEHOLDER) return serial;
    return serial.length > length ? '...' + serial.slice(-length) : serial;
}

function formatPartsSummary(allParts, template) {
    if (!allParts || allParts.length === 0) return '';

    let summary = `\n\nREPLACED PARTS (${allParts.length}):`;

    allParts.forEach(part => {
        const oldSerial = truncateSerial(part.oldSerialNumber || DEFAULT_VALUE);
        const newSerial = truncateSerial(part.newSerialNumber || DEFAULT_VALUE);
        const lp = part.licensePlate || DEFAULT_VALUE;

        let line = `\n• ${oldSerial} → ${newSerial} (LP: ${lp})`;

        // Add DBD-specific fields for dbd template
        if (template === 'dbd') {
            const loc = part.driveLocation || DEFAULT_VALUE;
            const bin = part.binNumber || DEFAULT_VALUE;
            line += ` | Loc: ${loc}, Bin: ${bin}`;
        }

        summary += line;
    });

    return summary;
}

function formatDBDsSummary(allDBDs) {
    if (!allDBDs || allDBDs.length === 0) return '';

    let summary = `\n\nMOVED DBDs (${allDBDs.length}):`;

    allDBDs.forEach(dbd => {
        const serial = truncateSerial(dbd.dbdSerialNumber || DEFAULT_VALUE);
        const slot = dbd.slotNumber || DEFAULT_VALUE;
        summary += `\n• ${serial} (Slot: ${slot})`;
    });

    return summary;
}

function formatEscalationInfo(data) {
    if (data.wasEscalated === CHECKED) {
        return `

ESCALATION DETAILS:
- Escalated To: ${data.escalatedTo || DEFAULT_PLACEHOLDER}
- Senior Tech Approval: ${data.seniorTechAlias || DEFAULT_PLACEHOLDER}`;
    }
    return "";
}

// DOM element creation helpers
function createInput(field) {
    let input;
    if (field.type === 'textarea') {
        input = document.createElement('textarea');
    } else if (field.type === 'select' && field.options) {
        input = document.createElement('select');
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '-- Select --';
        input.appendChild(emptyOption);
        field.options.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText;
            option.textContent = optionText;
            input.appendChild(option);
        });
    } else if (field.type === 'checkbox') {
        input = document.createElement('input');
        input.type = 'checkbox';
    } else {
        input = document.createElement('input');
        input.type = field.type;
    }

    if (field.name) {
        input.id = field.name;
        input.name = field.name;
    }

    return input;
}

function createInfoElement(text) {
    const element = document.createElement('div');
    element.style.padding = '12px';
    element.style.backgroundColor = 'var(--highlight-bg)';
    element.style.borderLeft = '3px solid var(--primary-color)';
    element.style.borderRadius = '4px';
    element.style.fontSize = '14px';
    element.style.lineHeight = '1.5';
    element.style.color = 'var(--text-color)';
    element.style.overflowWrap = 'break-word';
    element.style.wordBreak = 'break-word';

    if (text && text.includes('<')) {
        element.innerHTML = text;
    } else {
        element.textContent = text;
    }

    return element;
}

// Shared field definitions
const commonTaskFields = [
    { name: "taskId", label: "Task ID", type: "text" },
    { name: "assetTagConfirmed", label: "Was the asset tag visually confirmed?", type: "checkbox" },
    { name: "uponArrival", label: "Upon Arrival:", type: "textarea" }
];

const partReplacementFields = [
    { name: "partReplaced", label: "Part(s) replaced?", type: "checkbox", hasConditionalFields: true },
    { name: "oldSerialNumber", label: "Old Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
    { name: "newSerialNumber", label: "New Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
    { name: "licensePlate", label: "License Plate", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } }
];

const escalationFields = [
    { name: "actionsTaken", label: "Actions Taken", type: "textarea" },
    { name: "wasEscalated", label: "Was this ticket escalated?", type: "checkbox", hasConditionalFields: true },
    { name: "escalatedTo", label: "Who was it escalated to?", type: "text", conditionalOn: { field: "wasEscalated", value: CHECKED } },
    { name: "seniorTechAlias", label: "Alias of the senior who approved this:", type: "text", conditionalOn: { field: "wasEscalated", value: CHECKED } }
];

// Template definitions
const templates = {
    // Break/Fix Task Notes template
    breakfix: {
        title: "Break/Fix Task Notes",
        fields: [
            ...commonTaskFields,
            ...partReplacementFields,
            ...escalationFields
        ],
        format: (data) => {
            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${formatCheckbox(data.assetTagConfirmed)}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${formatCheckbox(data.wasEscalated)}${formatEscalationInfo(data)}`;
        }
    },

    // Network Task Notes template
    network: {
        title: "Network Task Notes",
        fields: [
            ...commonTaskFields,
            { name: "sourceDevice", label: "Source Device:Port", type: "text" },
            { name: "endDevice", label: "End Device:Port", type: "text" },
            ...partReplacementFields,
            ...escalationFields
        ],
        format: (data) => {
            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${formatCheckbox(data.assetTagConfirmed)}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}
SOURCE DEVICE:PORT: ${data.sourceDevice || DEFAULT_VALUE}
END DEVICE:PORT: ${data.endDevice || DEFAULT_VALUE}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${formatCheckbox(data.wasEscalated)}${formatEscalationInfo(data)}`;
        }
    },

    // DBD Task Notes template
    dbd: {
        title: "DBD Task Notes",
        fields: [
            ...commonTaskFields,
            ...partReplacementFields,
            { name: "driveLocation", label: "Location of drive being replaced", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
            { name: "binNumber", label: "Bin #", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
            ...escalationFields
        ],
        format: (data) => {
            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${formatCheckbox(data.assetTagConfirmed)}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${formatCheckbox(data.wasEscalated)}${formatEscalationInfo(data)}`;
        }
    },

    // Motherboard Task Notes template
    mobo: {
        title: "Motherboard Task Notes",
        fields: [
            ...commonTaskFields,
            { name: "partReplaced", label: "Part(s) replaced?", type: "checkbox", hasConditionalFields: true },
            { name: "oldSerialNumber", label: "Old Motherboard Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
            { name: "newSerialNumber", label: "New Motherboard Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
            { name: "licensePlate", label: "License Plate", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
            { name: "dbdMoved", label: "Were DBDs moved from old motherboard to new?", type: "checkbox", hasConditionalFields: true },
            { name: "dbdSerialNumber", label: "DBD Serial Number", type: "text", conditionalOn: { field: "dbdMoved", value: CHECKED } },
            { name: "slotNumber", label: "Slot #", type: "text", conditionalOn: { field: "dbdMoved", value: CHECKED } },
            ...escalationFields
        ],
        format: (data) => {
            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${formatCheckbox(data.assetTagConfirmed)}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${formatCheckbox(data.wasEscalated)}${formatEscalationInfo(data)}`;
        }
    },

    // Work Window Request Email template
    workwindow: {
        title: "Work Window Request Email",
        fields: [
            { type: "info", text: `You can confirm availability for a specific dates via <a href="https://dccentral.microsoft.com/tasks/query/advanced/30704" target="_blank">SN-DCCentral</a> for SN or <a href="https://dccentral.microsoft.com/tasks/query/advanced/31722" target="_blank">SAT-DCCentral</a> for SAT. Our work window policy can be found <a href="https://microsoft.sharepoint.com/:w:/r/teams/dcops/reflib/_layouts/15/Doc.aspx?sourcedoc=%7B34AC5FCF-C562-4F64-922F-AD9AED915DEA%7D&file=Work%20Window%20Policy.docx&wdOrigin=TEAMS-MAGLEV.teams_ns.rwc&action=default&mobileredirect=true" target="_blank">here</a> for reference.`},
            { name: "taskId", label: "Task ID", type: "text" },
            { name: "date", label: "Suggested Date", type: "text" },
            { name: "time", label: "Time of Availability", type: "text" },
            { type: "info", text: `If a task is quarantined, please direct the requestor to <a href="https://microsoft.sharepoint.com/sites/COIPartnerResourceCenter/SitePages/CO+-Partner-Resource-Center.aspx?ct=1748876712863&or=Teams-HL&ga=1&LOF=1&xsdata=MDV8MDJ8fDdlZjg4MTg4OGJiMjQ0MzBhMTFjMDhkZTFhMTY3ODAwfDcyZjk4OGJmODZmMTQxYWY5MWFiMmQ3Y2QwMTFkYjQ3fDB8MHw2Mzg5NzY4ODA5MzgxMTkxMDB8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T21KaVpHTm1OalUzTWpZNFpqUXhNVGs1Tm1Nek5UZGxObU16TnpFeFptTTNRSFJvY21WaFpDNTJNaTl0WlhOellXZGxjeTh4TnpZeU1Ea3hNamt5T0Rnd3w4YTcwMGYyOTdiZDE0NzE0YzkwNDA4ZGUxYTE2NzdmZnxlNzQ5NGE4MjI3NjI0N2Q5OGYwMTNlNDI2ZWFiMmI5ZA%3D%3D&sdata=ZGtMSy9JZVhOYlRFRnFHV1M0MlFWc1pQbEp1OXArZWdoSnpBVGY0bDlUbz0%3D&ovuser=72f988bf-86f1-41af-91ab-2d7cd011db47%2Caguajardo%40microsoft.com&OR=Teams-HL&CT=1762904435825&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTExMDYxMzYwMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" target="_blank">the CO&I Partner Resource Center</a> for further instructions on how to proceed with scheduling work windows for quarantined tasks.`}
        ],
        format: (data) => {
            return `WORK WINDOW REQUEST - TASK ID: ${data.taskId || "TaskIdHolder"}

Hello,

We are writing to schedule a work window for Task #${data.taskId || "TaskIdHolder"}. We are available to begin a work window between 09:00 AM CST and 02:00 PM CST or 09:00 PM CST and 02:00 AM CST. Our next available window is available for ${data.date || "DATE"} at ${data.time || "TIME"}. Please confirm whether this time is acceptable for your team.

Important considerations:
• A minimum of 24 hours' notice is required for all work windows to ensure System Services can confirm availability and prepare accordingly.
• Prompt confirmation is essential. Delayed replies may result in the proposed time slot becoming unavailable, as our resources are limited and we cannot reserve slots indefinitely.
• Please ensure all necessary traffic is removed or rerouted prior to the work window start time to facilitate a timely and efficient completion of the requested work.

We appreciate your prompt attention to this matter.`;
        }
    },

    // IDF/T2 Work Authorization template
    workAuth: {
        title: "Work Authorization Request",
        fields: [
            { name: "taskId", label: "Task ID", type: "text" },
            { name: "taskLink", label: "Task Link", type: "text" },
            { name: "sourceDevice", label: "Source Device:Port", type: "text" },
            { name: "expectedHop", label: "Expected Hop (leave empty if unknown)", type: "text" },
            { name: "endDevice", label: "End Device:Port", type: "text" },
            { name: "actionsTaken", label: "Actions being taken", type: "text" },
            { name: "assetTagConfirmed", label: "Was the asset tag visually confirmed?", type: "checkbox" },
            { name: "labelConfirmed", label: "Was the cable label visually confirmed?", type: "checkbox" },
            { name: "secondTech", label: "Alias of Second Tech QC", type: "text" }
        ],
        format: (data) => {
            return `LINK APPROVAL REQUEST - TASK ID: ${data.taskId || "N/A"}

Task Link: ${data.taskLink || "N/A"}
Source Device:Port: ${data.sourceDevice || "N/A"}
Expected Hop: ${data.expectedHop || "N/A"}
End Device:Port: ${data.endDevice || "N/A"}
Required Actions: ${data.actionsTaken || "N/A"}

Asset Tag Confirmed: ${formatCheckbox(data.assetTagConfirmed)}
Cable Label Verified: ${formatCheckbox(data.labelConfirmed)}
2nd Tech QC Alias: ${data.secondTech || "N/A"}`;
        }
    }
};

// Current template and parts counter
let currentTemplate = 'breakfix';
let additionalPartsCounter = 0;
let additionalDBDsCounter = 0;

// DOM elements
const templateForm = document.getElementById('template-form');
const previewDiv = document.getElementById('preview');
const templateSelect = document.getElementById('template-select');
const copyBtn = document.getElementById('copy-btn');
const resetBtn = document.getElementById('reset-btn');
const copyMessage = document.getElementById('copy-message');
const app = document.getElementById('app');
const detailsPanel = document.getElementById('details-panel');
const detailsContent = document.getElementById('details-content');

// Track active details sections
let activeDetailsSections = new Set();

// Initialize with the default template
generateFormFields();

// Initialize button glow effects
initButtonGlows();

// Initialize custom select dropdown
initCustomSelect('#template-select-wrapper');

// Add event listeners
templateSelect.addEventListener('change', changeTemplate);
copyBtn.addEventListener('click', copyToClipboard);
resetBtn.addEventListener('click', resetForm);

// Details panel functions
function showDetailsPanel() {
    detailsPanel.classList.add('visible');
    app.classList.add('has-details');
}

function hideDetailsPanel() {
    detailsPanel.classList.remove('visible');
    app.classList.remove('has-details');
    detailsContent.innerHTML = '';
    activeDetailsSections.clear();
}

function updateDetailsPanel() {
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

// Theme selector elements
const modeToggle = document.getElementById('mode-toggle');
const animationToggle = document.getElementById('animation-toggle');
const primaryColorButtons = document.querySelectorAll('.color-buttons[data-color-type="primary"] .color-btn');
const secondaryColorButtons = document.querySelectorAll('.color-buttons[data-color-type="secondary"] .color-btn');

// Settings modal elements
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const modalClose = document.getElementById('modal-close');

// Color hue mappings
const colorHues = {
    blue: 222,
    purple: 280,
    green: 145,
    red: 0,
    orange: 30,
    cyan: 190
};

// Initialize theme state
let isDarkMode = localStorage.getItem('darkMode') !== 'false'; // Default to true (dark mode)
let primaryColor = localStorage.getItem('primaryColor') || 'blue';
let secondaryColor = localStorage.getItem('secondaryColor') || 'none';
let isAnimated = localStorage.getItem('waveBackground_animated') === 'true'; // Default to false (paused)

// Apply saved theme on load
applyTheme();

// Settings modal event listeners
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

// Mode toggle event listener
modeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme();
});

// Animation toggle event listener
animationToggle.addEventListener('click', function() {
    isAnimated = !isAnimated;
    localStorage.setItem('waveBackground_animated', isAnimated);
    updateAnimationToggle();
});

function updateAnimationToggle() {
    animationToggle.textContent = isAnimated ? '▶️' : '⏸️';
    if (window.waveBackground) {
        window.waveBackground.setAnimated(isAnimated);
    }
}

// Initialize animation toggle on load
updateAnimationToggle();

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

// Function to apply the theme
function applyTheme() {
    // Update dark mode
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        modeToggle.textContent = '🌙';
    } else {
        document.body.classList.remove('dark-mode');
        modeToggle.textContent = '☀️';
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

    // Notify canvas background of theme change
    if (window.waveBackground) {
        window.waveBackground.updateTheme();
    }
}

// Function to change template
function changeTemplate() {
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

    currentTemplate = newTemplateValue;
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
function generateFormFields() {
    templateForm.innerHTML = '';
    additionalPartsCounter = 0;
    additionalDBDsCounter = 0;

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
function updateConditionalFieldsVisibility(checkbox) {
    if (checkbox.checked) {
        activeDetailsSections.add(checkbox.id);
    } else {
        activeDetailsSections.delete(checkbox.id);

        // Reset counters when unchecking
        if (checkbox.id === 'partReplaced') {
            additionalPartsCounter = 0;
        }
        if (checkbox.id === 'dbdMoved') {
            additionalDBDsCounter = 0;
        }
    }

    updateDetailsPanel();
}

// Function to add content for a details section
function addDetailsSectionContent(sectionId) {
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

// Function to reset additional parts
function resetAdditionalParts() {
    const tbody = document.getElementById('parts-table-body');
    if (tbody) {
        tbody.innerHTML = '';
        tbody.appendChild(createPartsTableRow(0));
    }
    additionalPartsCounter = 0;
}

// Function to create a parts table row (or row group for DBD)
function createPartsTableRow(index) {
    if (currentTemplate === 'dbd') {
        // DBD uses two-row layout per entry
        const fragment = document.createDocumentFragment();

        // Row 1: Old Serial, New Serial, LP, Delete button
        const tr1 = document.createElement('tr');
        tr1.dataset.rowIndex = index;
        tr1.className = 'parts-row-primary';

        let td = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'text';
        input.name = `oldSerialNumber${index}`;
        input.id = `oldSerialNumber${index}`;
        input.placeholder = 'Old Serial';
        input.addEventListener('input', updatePreview);
        td.appendChild(input);
        tr1.appendChild(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.type = 'text';
        input.name = `newSerialNumber${index}`;
        input.id = `newSerialNumber${index}`;
        input.placeholder = 'New Serial';
        input.addEventListener('input', updatePreview);
        td.appendChild(input);
        tr1.appendChild(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.type = 'text';
        input.name = `licensePlate${index}`;
        input.id = `licensePlate${index}`;
        input.placeholder = 'LP';
        input.addEventListener('input', updatePreview);
        td.appendChild(input);
        tr1.appendChild(td);

        // Delete button
        td = document.createElement('td');
        td.rowSpan = 2;
        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'delete-row-btn';
        deleteBtn.textContent = '×';
        deleteBtn.addEventListener('click', function() {
            deletePartsTableRow(tr1, tr2);
        });
        td.appendChild(deleteBtn);
        tr1.appendChild(td);

        // Row 2: Location, Bin (spanning 3 columns)
        const tr2 = document.createElement('tr');
        tr2.dataset.rowIndex = index;
        tr2.className = 'parts-row-secondary';

        td = document.createElement('td');
        td.colSpan = 2;
        input = document.createElement('input');
        input.type = 'text';
        input.name = `driveLocation${index}`;
        input.id = `driveLocation${index}`;
        input.placeholder = 'Drive Location';
        input.addEventListener('input', updatePreview);
        td.appendChild(input);
        tr2.appendChild(td);

        td = document.createElement('td');
        input = document.createElement('input');
        input.type = 'text';
        input.name = `binNumber${index}`;
        input.id = `binNumber${index}`;
        input.placeholder = 'Bin #';
        input.addEventListener('input', updatePreview);
        td.appendChild(input);
        tr2.appendChild(td);

        fragment.appendChild(tr1);
        fragment.appendChild(tr2);
        return fragment;
    }

    // Non-DBD templates: single row
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = index;

    // Old Serial
    let td = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = `oldSerialNumber${index}`;
    input.id = `oldSerialNumber${index}`;
    input.addEventListener('input', updatePreview);
    td.appendChild(input);
    tr.appendChild(td);

    // New Serial
    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'text';
    input.name = `newSerialNumber${index}`;
    input.id = `newSerialNumber${index}`;
    input.addEventListener('input', updatePreview);
    td.appendChild(input);
    tr.appendChild(td);

    // License Plate
    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'text';
    input.name = `licensePlate${index}`;
    input.id = `licensePlate${index}`;
    input.addEventListener('input', updatePreview);
    td.appendChild(input);
    tr.appendChild(td);

    // Delete button
    td = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-row-btn';
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', function() {
        deletePartsTableRow(tr);
    });
    td.appendChild(deleteBtn);
    tr.appendChild(td);

    return tr;
}

// Function to add a new row to the parts table
function addPartsTableRow() {
    additionalPartsCounter++;
    const tbody = document.getElementById('parts-table-body');
    if (tbody) {
        tbody.appendChild(createPartsTableRow(additionalPartsCounter));
        updatePreview();
    }
}

// Function to delete a row from the parts table
function deletePartsTableRow(row, secondRow = null) {
    const tbody = document.getElementById('parts-table-body');
    // For DBD (two rows per entry), minimum is 2 rows; otherwise, minimum is 1
    const minRows = currentTemplate === 'dbd' ? 2 : 1;
    if (tbody && tbody.children.length > minRows) {
        row.remove();
        if (secondRow) secondRow.remove();
        updatePreview();
    }
}

// Function to reset additional DBDs
function resetAdditionalDBDs() {
    const tbody = document.getElementById('dbds-table-body');
    if (tbody) {
        tbody.innerHTML = '';
        tbody.appendChild(createDBDTableRow(0));
    }
    additionalDBDsCounter = 0;
}

// Function to create a DBD table row
function createDBDTableRow(index) {
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = index;

    // DBD Serial Number
    let td = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = `dbdSerialNumber${index}`;
    input.id = `dbdSerialNumber${index}`;
    input.addEventListener('input', updatePreview);
    td.appendChild(input);
    tr.appendChild(td);

    // Slot #
    td = document.createElement('td');
    input = document.createElement('input');
    input.type = 'text';
    input.name = `slotNumber${index}`;
    input.id = `slotNumber${index}`;
    input.addEventListener('input', updatePreview);
    td.appendChild(input);
    tr.appendChild(td);

    // Delete button
    td = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-row-btn';
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', function() {
        deleteDBDTableRow(tr);
    });
    td.appendChild(deleteBtn);
    tr.appendChild(td);

    return tr;
}

// Function to add a new row to the DBD table
function addDBDTableRow() {
    additionalDBDsCounter++;
    const tbody = document.getElementById('dbds-table-body');
    if (tbody) {
        tbody.appendChild(createDBDTableRow(additionalDBDsCounter));
        updatePreview();
    }
}

// Function to delete a row from the DBD table
function deleteDBDTableRow(row) {
    const tbody = document.getElementById('dbds-table-body');
    if (tbody && tbody.children.length > 1) {
        row.remove();
        updatePreview();
    }
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

// Helper function to create form fields
function createFormField(parent, labelText, fieldId, fieldType) {
    const group = document.createElement('div');
    group.className = 'form-group';

    const label = document.createElement('label');
    label.setAttribute('for', fieldId);
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = fieldType;
    input.id = fieldId;
    input.name = fieldId;
    input.addEventListener('input', updatePreview);

    group.appendChild(label);
    group.appendChild(input);
    parent.appendChild(group);
}

// Function to update preview as user types
function updatePreview() {
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
function copyToClipboard() {
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
    copyMessage.classList.add('show');
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 2000);
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

// Reset form function
function resetForm() {
    templateForm.reset();

    // Reset checkboxes (they might not be properly reset by the form.reset())
    document.querySelectorAll('#template-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Hide details panel and reset counters
    hideDetailsPanel();
    additionalPartsCounter = 0;
    additionalDBDsCounter = 0;

    updatePreview();
}

