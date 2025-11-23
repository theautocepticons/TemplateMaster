// Template definitions
const templates = {
    // Break/Fix Task Notes template
    breakfix: {
        title: "Break/Fix Task Notes",
        fields: [
            { name: "taskId", label: "Task ID", type: "text" },
            { name: "assetTagConfirmed", label: "Was the asset tag visually confirmed?", type: "checkbox" },
            { name: "uponArrival", label: "Upon Arrival:", type: "textarea" },
            { name: "partReplaced", label: "Part(s) replaced?", type: "checkbox", hasConditionalFields: true },
            { name: "oldSerialNumber", label: "Old Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "newSerialNumber", label: "New Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "licensePlate", label: "License Plate", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "actionsTaken", label: "Actions Taken", type: "textarea" },
            { name: "wasEscalated", label: "Was this ticket escalated?", type: "checkbox", hasConditionalFields: true },
            { name: "escalatedTo", label: "Who was it escalated to?", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } },
            { name: "seniorTechAlias", label: "Alias of the senior who approved this:", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } }
        ],
        format: (data) => {
            let escalationInfo = "";
            if (data.wasEscalated === "checked") {
                escalationInfo = `

ESCALATION DETAILS:
- Escalated To: ${data.escalatedTo || "[Not specified]"}
- Senior Tech Approval: ${data.seniorTechAlias || "[Not specified]"}`;
            }

            // Format part replacement information
            let partReplacementInfo = "";
            if (data.partReplaced === "checked") {
                partReplacementInfo = `

PART(S) REPLACED: Yes
OLD SERIAL NUMBER: ${data.oldSerialNumber || "N/A"}
NEW SERIAL NUMBER: ${data.newSerialNumber || "N/A"}
LICENSE PLATE: ${data.licensePlate || "N/A"}`;
            } else {
                partReplacementInfo = "\nPART(S) REPLACED: No";
            }

            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${data.assetTagConfirmed === "checked" ? "Yes" : "No"}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}${partReplacementInfo}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${data.wasEscalated === "checked" ? "Yes" : "No"}${escalationInfo}`;
        }
    },

    // Network Task Notes template
    network: {
        title: "Network Task Notes",
        fields: [
            { name: "taskId", label: "Task ID", type: "text" },
            { name: "assetTagConfirmed", label: "Was the asset tag visually confirmed?", type: "checkbox" },
            { name: "uponArrival", label: "Upon Arrival:", type: "textarea" },
            { name: "sourceDevice", label: "Source Device:Port", type: "text" },
            { name: "endDevice", label: "End Device:Port", type: "text" },
            { name: "partReplaced", label: "Part(s) replaced?", type: "checkbox", hasConditionalFields: true },
            { name: "oldSerialNumber", label: "Old Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "newSerialNumber", label: "New Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "licensePlate", label: "License Plate", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "actionsTaken", label: "Actions Taken", type: "textarea" },
            { name: "wasEscalated", label: "Was this ticket escalated?", type: "checkbox", hasConditionalFields: true },
            { name: "escalatedTo", label: "Who was it escalated to?", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } },
            { name: "seniorTechAlias", label: "Alias of the senior who approved this:", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } }
        ],
        format: (data) => {
            let escalationInfo = "";
            if (data.wasEscalated === "checked") {
                escalationInfo = `

ESCALATION DETAILS:
- Escalated To: ${data.escalatedTo || "[Not specified]"}
- Senior Tech Approval: ${data.seniorTechAlias || "[Not specified]"}`;
            }

            // Format part replacement information
            let partReplacementInfo = "";
            if (data.partReplaced === "checked") {
                partReplacementInfo = `

PART(S) REPLACED: Yes
OLD SERIAL NUMBER: ${data.oldSerialNumber || "N/A"}
NEW SERIAL NUMBER: ${data.newSerialNumber || "N/A"}
LICENSE PLATE: ${data.licensePlate || "N/A"}`;
            } else {
                partReplacementInfo = "\nPART(S) REPLACED: No";
            }

            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${data.assetTagConfirmed === "checked" ? "Yes" : "No"}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}
SOURCE DEVICE:PORT: ${data.sourceDevice || "N/A"}
END DEVICE:PORT: ${data.endDevice || "N/A"}${partReplacementInfo}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${data.wasEscalated === "checked" ? "Yes" : "No"}${escalationInfo}`;
        }
    },

    // DBD Task Notes template
    dbd: {
        title: "DBD Task Notes",
        fields: [
            { name: "taskId", label: "Task ID", type: "text" },
            { name: "assetTagConfirmed", label: "Was the asset tag visually confirmed?", type: "checkbox" },
            { name: "uponArrival", label: "Upon Arrival:", type: "textarea" },
            { name: "partReplaced", label: "Part(s) replaced?", type: "checkbox", hasConditionalFields: true },
            { name: "oldSerialNumber", label: "Old Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "newSerialNumber", label: "New Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "licensePlate", label: "License Plate", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "driveLocation", label: "Location of drive being replaced", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "binNumber", label: "Bin #", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "properDiscard", label: "Was the drive discarded in the proper DBD bin?", type: "checkbox", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "actionsTaken", label: "Actions Taken", type: "textarea" },
            { name: "wasEscalated", label: "Was this ticket escalated?", type: "checkbox", hasConditionalFields: true },
            { name: "escalatedTo", label: "Who was it escalated to?", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } },
            { name: "seniorTechAlias", label: "Alias of the senior who approved this:", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } }
        ],
        format: (data) => {
            let escalationInfo = "";
            if (data.wasEscalated === "checked") {
                escalationInfo = `

ESCALATION DETAILS:
- Escalated To: ${data.escalatedTo || "[Not specified]"}
- Senior Tech Approval: ${data.seniorTechAlias || "[Not specified]"}`;
            }

            // Format part replacement information
            let partReplacementInfo = "";
            if (data.partReplaced === "checked") {
                partReplacementInfo = `

PART(S) REPLACED: Yes
OLD SERIAL NUMBER: ${data.oldSerialNumber || "N/A"}
NEW SERIAL NUMBER: ${data.newSerialNumber || "N/A"}
LICENSE PLATE: ${data.licensePlate || "N/A"}
DRIVE LOCATION: ${data.driveLocation || "N/A"}
BIN #: ${data.binNumber || "N/A"}
DRIVE DISCARDED IN PROPER DBD BIN: ${data.properDiscard === "checked" ? "Yes" : "No"}`;
            } else {
                partReplacementInfo = "\nPART(S) REPLACED: No";
            }

            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${data.assetTagConfirmed === "checked" ? "Yes" : "No"}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}${partReplacementInfo}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${data.wasEscalated === "checked" ? "Yes" : "No"}${escalationInfo}`;
        }
    },

    // Motherboard Task Notes template
    mobo: {
        title: "Motherboard Task Notes",
        fields: [
            { name: "taskId", label: "Task ID", type: "text" },
            { name: "assetTagConfirmed", label: "Was the asset tag visually confirmed?", type: "checkbox" },
            { name: "uponArrival", label: "Upon Arrival:", type: "textarea" },
            { name: "partReplaced", label: "Part(s) replaced?", type: "checkbox", hasConditionalFields: true },
            { name: "oldSerialNumber", label: "Old Motherboard Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "newSerialNumber", label: "New Motherboard Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "licensePlate", label: "License Plate", type: "text", conditionalOn: { field: "partReplaced", value: "checked" } },
            { name: "dbdMoved", label: "Were DBDs moved from old motherboard to new?", type: "checkbox", hasConditionalFields: true },
            { name: "dbdSerialNumber", label: "DBD Serial Number", type: "text", conditionalOn: { field: "dbdMoved", value: "checked" } },
            { name: "slotNumber", label: "Slot #", type: "text", conditionalOn: { field: "dbdMoved", value: "checked" } },
            { name: "actionsTaken", label: "Actions Taken", type: "textarea" },
            { name: "wasEscalated", label: "Was this ticket escalated?", type: "checkbox", hasConditionalFields: true },
            { name: "escalatedTo", label: "Who was it escalated to?", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } },
            { name: "seniorTechAlias", label: "Alias of the senior who approved this:", type: "text", conditionalOn: { field: "wasEscalated", value: "checked" } }
        ],
        format: (data) => {
            let escalationInfo = "";
            if (data.wasEscalated === "checked") {
                escalationInfo = `

ESCALATION DETAILS:
- Escalated To: ${data.escalatedTo || "[Not specified]"}
- Senior Tech Approval: ${data.seniorTechAlias || "[Not specified]"}`;
            }

            // Format motherboard replacement information
            let partReplacementInfo = "";
            if (data.partReplaced === "checked") {
                partReplacementInfo = `

PART(S) REPLACED: Yes
OLD MOTHERBOARD SERIAL NUMBER: ${data.oldSerialNumber || "N/A"}
NEW MOTHERBOARD SERIAL NUMBER: ${data.newSerialNumber || "N/A"}
LICENSE PLATE: ${data.licensePlate || "N/A"}`;
            } else {
                partReplacementInfo = "\nPART(S) REPLACED: No";
            }

            // Format DBD information
            let dbdInfo = "";
            if (data.dbdMoved === "checked") {
                dbdInfo = `

DBD(S) MOVED FROM OLD TO NEW MOTHERBOARD: Yes
DBD SERIAL NUMBER: ${data.dbdSerialNumber || "N/A"}
SLOT #: ${data.slotNumber || "N/A"}`;
            } else {
                dbdInfo = "\nDBD(S) MOVED: No";
            }

            return `TASK ID: ${data.taskId || "[No ID]"}
ASSET TAG CONFIRMED: ${data.assetTagConfirmed === "checked" ? "Yes" : "No"}

UPON ARRIVAL:
${data.uponArrival || "[No arrival notes recorded]"}${partReplacementInfo}${dbdInfo}

ACTIONS TAKEN:
${data.actionsTaken || "[No actions recorded]"}

TICKET ESCALATED: ${data.wasEscalated === "checked" ? "Yes" : "No"}${escalationInfo}`;
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

Asset Tag Confirmed: ${data.assetTagConfirmed === "checked" ? "Yes" : "No"}
Cable Label Verified: ${data.labelConfirmed === "checked" ? "Yes" : "No"}
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

// Initialize with the default template
generateFormFields();

// Add event listeners
templateSelect.addEventListener('change', changeTemplate);
copyBtn.addEventListener('click', copyToClipboard);
resetBtn.addEventListener('click', resetForm);

// Theme selector elements
const modeToggle = document.getElementById('mode-toggle');
const colorButtons = document.querySelectorAll('.color-btn');

// Initialize theme state
let isDarkMode = localStorage.getItem('darkMode') === 'true';
let accentColor = localStorage.getItem('accentColor') || 'blue';

// Apply saved theme on load
applyTheme();

// Mode toggle event listener
modeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme();
});

// Color button event listeners
colorButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        accentColor = this.getAttribute('data-color');
        localStorage.setItem('accentColor', accentColor);
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

    // Update accent color
    document.body.classList.remove('accent-blue', 'accent-purple', 'accent-green');
    document.body.classList.add(`accent-${accentColor}`);

    // Update active button state
    colorButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-color') === accentColor);
    });
}

// Function to change template
function changeTemplate() {
    // Save current form data before switching
    const savedData = {};
    const template = templates[currentTemplate];
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

    currentTemplate = templateSelect.value;
    generateFormFields();

    // Restore matching fields in the new template
    const newTemplate = templates[currentTemplate];
    newTemplate.fields.forEach(field => {
        if (field.name && savedData[field.name] !== undefined) {
            const input = document.getElementById(field.name);
            if (input) {
                if (field.type === 'checkbox') {
                    input.checked = savedData[field.name];
                    // Trigger visibility update for conditional fields
                    if (field.hasConditionalFields) {
                        updateConditionalFieldsVisibility(input);
                    }
                } else {
                    input.value = savedData[field.name];
                }
            }
        }
    });

    updatePreview();
}

// Function to generate form fields based on selected template
function generateFormFields() {
    templateForm.innerHTML = '';
    additionalPartsCounter = 0;
    additionalDBDsCounter = 0;

    const template = templates[currentTemplate];

    // Create a table body for the form fields
    const tbody = document.createElement('tbody');

    // First pass: Create all regular fields (non-conditional)
    template.fields.forEach(field => {
        // Skip conditional fields - we'll add them after their parent field
        if (field.conditionalOn) {
            return;
        }

        // Handle info/text-only fields
        if (field.type === 'info') {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.colSpan = 2;
            td.style.padding = '12px';
            td.style.backgroundColor = 'var(--highlight-bg)';
            td.style.borderLeft = '3px solid var(--primary-color)';
            td.style.borderRadius = '4px';
            td.style.fontSize = '14px';
            td.style.lineHeight = '1.5';
            td.style.color = 'var(--text-color)';

            // Check if text contains HTML
            if (field.text && field.text.includes('<')) {
                td.innerHTML = field.text;
            } else {
                td.textContent = field.text || field.label;
            }

            tr.appendChild(td);
            tbody.appendChild(tr);
            return;
        }

        const tr = document.createElement('tr');

        // Label cell
        const labelCell = document.createElement('td');
        const label = document.createElement('label');
        label.setAttribute('for', field.name);
        label.textContent = field.label;
        labelCell.appendChild(label);

        // Input cell
        const inputCell = document.createElement('td');

        // Create the input based on field type
        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else if (field.type === 'select' && field.options) {
            input = document.createElement('select');
            // Add an empty option first
            const emptyOption = document.createElement('option');
            emptyOption.value = '';
            emptyOption.textContent = '-- Select --';
            input.appendChild(emptyOption);

            // Add the rest of the options
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

        input.id = field.name;
        input.name = field.name;

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

    templateForm.appendChild(tbody);

    // Add conditional field containers after the table
    template.fields.forEach(field => {
        if (field.hasConditionalFields) {
            addConditionalFieldsForParent(field.name, template);
        }
    });
}

// New helper function to add conditional fields recursively
function addConditionalFieldsForParent(parentFieldName, template) {
    // Find all conditional fields that depend on this parent field
    const conditionalFields = template.fields.filter(f =>
        f.conditionalOn && f.conditionalOn.field === parentFieldName
    );

    if (conditionalFields.length === 0) return;

    // Create a container for the conditional fields
    const conditionalContainer = document.createElement('div');
    conditionalContainer.id = `conditional-container-${parentFieldName}`;
    conditionalContainer.className = 'conditional-fields-container';
    conditionalContainer.style.display = 'none';

    // Add header based on parent field
    const header = document.createElement('h3');
    header.style.marginTop = '0';
    header.style.marginBottom = '15px';
    header.style.color = 'var(--primary-color)';

    if (parentFieldName === 'partReplaced') {
        header.textContent = 'Replacement Parts';
    } else if (parentFieldName === 'wasEscalated') {
        header.textContent = 'Escalation Details';
    } else if (parentFieldName === 'dbdMoved') {
        header.textContent = 'DBD Information';
    }

    if (header.textContent) {
        conditionalContainer.appendChild(header);
    }

    // Special handling for partReplaced - use table layout
    if (parentFieldName === 'partReplaced' && ['breakfix', 'dbd', 'network', 'mobo'].includes(currentTemplate)) {
        // Create parts table
        const partsTable = document.createElement('table');
        partsTable.id = 'parts-table';
        partsTable.className = 'parts-table';

        // Create header row
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = currentTemplate === 'dbd'
            ? ['Old Serial', 'New Serial', 'License Plate', 'Drive Location', 'Bin #', 'Proper Discard', '']
            : ['Old Serial', 'New Serial', 'License Plate', ''];

        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        partsTable.appendChild(thead);

        // Create tbody
        const tbody = document.createElement('tbody');
        tbody.id = 'parts-table-body';

        // Add first row
        tbody.appendChild(createPartsTableRow(0));

        partsTable.appendChild(tbody);
        conditionalContainer.appendChild(partsTable);

        // Add "Add Row" button
        const addRowBtn = document.createElement('div');
        addRowBtn.className = 'add-more-link';
        addRowBtn.textContent = '+ Add Another Part';
        addRowBtn.addEventListener('click', addPartsTableRow);
        conditionalContainer.appendChild(addRowBtn);

        // Add the conditional container to the form
        templateForm.appendChild(conditionalContainer);
        return;
    }

    // Add each conditional field to the container (for non-parts fields)
    conditionalFields.forEach(condField => {
        // Handle info/text-only conditional fields
        if (condField.type === 'info') {
            const infoDiv = document.createElement('div');
            infoDiv.style.padding = '12px';
            infoDiv.style.margin = '10px 0';
            infoDiv.style.backgroundColor = '#f9f9f9';
            infoDiv.style.borderLeft = '3px solid var(--primary-color)';
            infoDiv.style.borderRadius = '4px';
            infoDiv.style.fontSize = '14px';
            infoDiv.style.lineHeight = '1.5';
            infoDiv.style.color = 'var(--text-color)';

            // Check if text contains HTML
            if (condField.text && condField.text.includes('<')) {
                infoDiv.innerHTML = condField.text;
            } else {
                infoDiv.textContent = condField.text || condField.label;
            }

            conditionalContainer.appendChild(infoDiv);
            return;
        }

        const condFormGroup = document.createElement('div');
        condFormGroup.className = 'form-group';

        const condLabel = document.createElement('label');
        condLabel.setAttribute('for', condField.name);
        condLabel.textContent = condField.label;

        let condInput;
        if (condField.type === 'textarea') {
            condInput = document.createElement('textarea');
        } else if (condField.type === 'select' && condField.options) {
            condInput = document.createElement('select');
            // Add an empty option first
            const emptyOption = document.createElement('option');
            emptyOption.value = '';
            emptyOption.textContent = '-- Select --';
            condInput.appendChild(emptyOption);

            // Add the rest of the options
            condField.options.forEach(optionText => {
                const option = document.createElement('option');
                option.value = optionText;
                option.textContent = optionText;
                condInput.appendChild(option);
            });
        } else if (condField.type === 'checkbox') {
            condInput = document.createElement('input');
            condInput.type = 'checkbox';
            condInput.style.marginLeft = '0';
            condInput.style.marginTop = '10px';
        } else {
            condInput = document.createElement('input');
            condInput.type = condField.type;
        }

        condInput.id = condField.name;
        condInput.name = condField.name;

        // Add event listener based on field type
        if (condField.type === 'select') {
            condInput.addEventListener('change', updatePreview);
        } else {
            condInput.addEventListener('input', updatePreview);
        }

        condFormGroup.appendChild(condLabel);
        condFormGroup.appendChild(condInput);
        conditionalContainer.appendChild(condFormGroup);
    });

    // Add the conditional container to the form
    templateForm.appendChild(conditionalContainer);

    // Add "Add More DBDs" for motherboard template
    if (parentFieldName === 'dbdMoved' && currentTemplate === 'mobo') {
        const additionalDBDsWrapper = document.createElement('div');
        additionalDBDsWrapper.className = 'additional-parts-wrapper';

        const additionalDBDsContainer = document.createElement('div');
        additionalDBDsContainer.id = 'additional-dbds-container';
        additionalDBDsWrapper.appendChild(additionalDBDsContainer);

        const addMoreDBDContainer = document.createElement('div');
        addMoreDBDContainer.id = 'add-more-dbd-container';

        const addMoreDBDLink = document.createElement('div');
        addMoreDBDLink.className = 'add-more-link';
        addMoreDBDLink.textContent = '+ Add More DBDs';
        addMoreDBDLink.addEventListener('click', addMoreDBDs);

        addMoreDBDContainer.appendChild(addMoreDBDLink);
        additionalDBDsWrapper.appendChild(addMoreDBDContainer);

        conditionalContainer.appendChild(additionalDBDsWrapper);
    }
}


// Function to update visibility of conditional fields based on checkbox state
function updateConditionalFieldsVisibility(checkbox) {
    const container = document.getElementById(`conditional-container-${checkbox.id}`);
    if (container) {
        if (checkbox.checked) {
            container.style.display = 'block';
            // Scroll to the container
            setTimeout(() => {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        } else {
            container.style.display = 'none';
            // Clear all input fields in the container
            const inputs = container.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                if (input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });

            // If this is the partReplaced checkbox, also reset additional parts
            if (checkbox.id === 'partReplaced') {
                resetAdditionalParts();
            }

            // If this is the dbdMoved checkbox, also reset additional DBDs
            if (checkbox.id === 'dbdMoved') {
                resetAdditionalDBDs();
            }
        }
    }
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

// Function to create a parts table row
function createPartsTableRow(index) {
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

    // DBD-specific fields
    if (currentTemplate === 'dbd') {
        // Drive Location
        td = document.createElement('td');
        input = document.createElement('input');
        input.type = 'text';
        input.name = `driveLocation${index}`;
        input.id = `driveLocation${index}`;
        input.addEventListener('input', updatePreview);
        td.appendChild(input);
        tr.appendChild(td);

        // Bin #
        td = document.createElement('td');
        input = document.createElement('input');
        input.type = 'text';
        input.name = `binNumber${index}`;
        input.id = `binNumber${index}`;
        input.addEventListener('input', updatePreview);
        td.appendChild(input);
        tr.appendChild(td);

        // Proper Discard checkbox
        td = document.createElement('td');
        input = document.createElement('input');
        input.type = 'checkbox';
        input.name = `properDiscard${index}`;
        input.id = `properDiscard${index}`;
        input.addEventListener('change', updatePreview);
        td.appendChild(input);
        tr.appendChild(td);
    }

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
function deletePartsTableRow(row) {
    const tbody = document.getElementById('parts-table-body');
    if (tbody && tbody.children.length > 1) {
        row.remove();
        updatePreview();
    }
}

// Function to reset additional DBDs
function resetAdditionalDBDs() {
    const additionalDBDsContainer = document.getElementById('additional-dbds-container');
    if (additionalDBDsContainer) {
        additionalDBDsContainer.innerHTML = '';
    }
    additionalDBDsCounter = 0;
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

// Function to add more parts
function addMoreParts() {
    additionalPartsCounter++;
    const container = document.getElementById('additional-parts-container');

    const partGroup = document.createElement('div');
    partGroup.className = 'additional-part-group';
    partGroup.id = `additional-part-${additionalPartsCounter}`;

    // Create a heading
    const heading = document.createElement('h4');
    heading.textContent = `Additional Part ${additionalPartsCounter}`;
    heading.style.marginTop = '0';
    partGroup.appendChild(heading);

    // Create common fields for all templates
    if (currentTemplate === 'mobo') {
        createFormField(partGroup, 'Old Motherboard Serial Number', `oldSerialNumber${additionalPartsCounter}`, 'text');
        createFormField(partGroup, 'New Motherboard Serial Number', `newSerialNumber${additionalPartsCounter}`, 'text');
        createFormField(partGroup, 'License Plate', `licensePlate${additionalPartsCounter}`, 'text');
    } else {
        createFormField(partGroup, 'Old Serial Number', `oldSerialNumber${additionalPartsCounter}`, 'text');
        createFormField(partGroup, 'New Serial Number', `newSerialNumber${additionalPartsCounter}`, 'text');
        createFormField(partGroup, 'License Plate', `licensePlate${additionalPartsCounter}`, 'text');
    }

    // Add DBD-specific fields
    if (currentTemplate === 'dbd') {
        createFormField(partGroup, 'Location of drive being replaced', `driveLocation${additionalPartsCounter}`, 'text');
        createFormField(partGroup, 'Bin #', `binNumber${additionalPartsCounter}`, 'text');

        // Add checkbox field for proper discard
        const properDiscardGroup = document.createElement('div');
        properDiscardGroup.className = 'form-group';

        const properDiscardLabel = document.createElement('label');
        properDiscardLabel.setAttribute('for', `properDiscard${additionalPartsCounter}`);
        properDiscardLabel.textContent = 'Was the drive discarded in the proper DBD bin?';

        const properDiscardInput = document.createElement('input');
        properDiscardInput.type = 'checkbox';
        properDiscardInput.id = `properDiscard${additionalPartsCounter}`;
        properDiscardInput.name = `properDiscard${additionalPartsCounter}`;

        properDiscardInput.addEventListener('change', updatePreview);

        properDiscardGroup.appendChild(properDiscardLabel);
        properDiscardGroup.appendChild(properDiscardInput);
        partGroup.appendChild(properDiscardGroup);
    }

    // Add Delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-group-btn';
    deleteButton.textContent = 'Delete this part';
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('data-part-id', additionalPartsCounter);
    deleteButton.onclick = function() {
        deletePartGroup(this.getAttribute('data-part-id'));
    };

    partGroup.appendChild(deleteButton);
    container.appendChild(partGroup);

    updatePreview();
}

// Function to add more DBDs (for motherboard template)
function addMoreDBDs() {
    additionalDBDsCounter++;
    const container = document.getElementById('additional-dbds-container');

    const dbdGroup = document.createElement('div');
    dbdGroup.className = 'additional-part-group';
    dbdGroup.id = `additional-dbd-${additionalDBDsCounter}`;

    // Create a heading
    const heading = document.createElement('h4');
    heading.textContent = `Additional DBD ${additionalDBDsCounter}`;
    heading.style.marginTop = '0';
    dbdGroup.appendChild(heading);

    // Create DBD-specific fields
    createFormField(dbdGroup, 'DBD Serial Number', `dbdSerialNumber${additionalDBDsCounter}`, 'text');
    createFormField(dbdGroup, 'Slot #', `slotNumber${additionalDBDsCounter}`, 'text');

    // Add Delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-group-btn';
    deleteButton.textContent = 'Delete this DBD';
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('data-dbd-id', additionalDBDsCounter);
    deleteButton.onclick = function() {
        deleteDBDGroup(this.getAttribute('data-dbd-id'));
    };

    dbdGroup.appendChild(deleteButton);
    container.appendChild(dbdGroup);

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

// Function to delete a part group
function deletePartGroup(partId) {
    partId = String(partId);

    const partGroup = document.getElementById(`additional-part-${partId}`);
    if (partGroup) {
        partGroup.remove();
        updatePreview();
    }
}

// Function to delete a DBD group
function deleteDBDGroup(dbdId) {
    dbdId = String(dbdId);

    const dbdGroup = document.getElementById(`additional-dbd-${dbdId}`);
    if (dbdGroup) {
        dbdGroup.remove();
        updatePreview();
    }
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
                formData[field.name] = input.checked ? "checked" : "";
            } else {
                formData[field.name] = input.value;
            }
        }
    });

    // Collect values from parts table
    if (['breakfix', 'dbd', 'network', 'mobo'].includes(currentTemplate)) {
        formData.additionalParts = [];

        const tbody = document.getElementById('parts-table-body');
        if (tbody) {
            const rows = tbody.querySelectorAll('tr');
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
                        const properDiscard = document.getElementById(`properDiscard${rowIndex}`);

                        if (driveLocation) partData.driveLocation = driveLocation.value;
                        if (binNumber) partData.binNumber = binNumber.value;
                        if (properDiscard) partData.properDiscard = properDiscard.checked ? "checked" : "";
                    }

                    // First row maps to the original field names
                    if (index === 0) {
                        formData.oldSerialNumber = partData.oldSerialNumber;
                        formData.newSerialNumber = partData.newSerialNumber;
                        formData.licensePlate = partData.licensePlate;
                        if (currentTemplate === 'dbd') {
                            formData.driveLocation = partData.driveLocation;
                            formData.binNumber = partData.binNumber;
                            formData.properDiscard = partData.properDiscard;
                        }
                    } else {
                        // Additional rows go to additionalParts
                        formData.additionalParts.push(partData);
                    }
                }
            });
        }
    }

    // Collect values from additional DBDs (for motherboard template)
    if (currentTemplate === 'mobo') {
        formData.additionalDBDs = [];

        // Look for all additional DBDs in the DOM
        for (let i = 1; i <= additionalDBDsCounter; i++) {
            const dbdGroup = document.getElementById(`additional-dbd-${i}`);
            if (dbdGroup) {
                const dbdSerial = document.getElementById(`dbdSerialNumber${i}`);
                const slotNum = document.getElementById(`slotNumber${i}`);

                if (dbdSerial && slotNum) {
                    formData.additionalDBDs.push({
                        id: i,
                        dbdSerialNumber: dbdSerial.value,
                        slotNumber: slotNum.value
                    });
                }
            }
        }
    }

    // Format the note
    let formattedNote = template.format(formData);

    // Add additional parts info to the formatted note
    if (['breakfix', 'dbd', 'network', 'mobo'].includes(currentTemplate) &&
        formData.additionalParts &&
        formData.additionalParts.length > 0) {

        formattedNote += '\n\nADDITIONAL PARTS:';

        formData.additionalParts.forEach((part, index) => {
            let additionalPartText = `\n\nPART #${index + 2}:
OLD SERIAL NUMBER: ${part.oldSerialNumber || "N/A"}
NEW SERIAL NUMBER: ${part.newSerialNumber || "N/A"}
LICENSE PLATE: ${part.licensePlate || "N/A"}`;

            // Add DBD-specific fields
            if (currentTemplate === 'dbd') {
                if (part.driveLocation !== undefined) {
                    additionalPartText += `\nDRIVE LOCATION: ${part.driveLocation || "N/A"}`;
                }
                if (part.binNumber !== undefined) {
                    additionalPartText += `\nBIN #: ${part.binNumber || "N/A"}`;
                }
                if (part.properDiscard !== undefined) {
                    additionalPartText += `\nDRIVE DISCARDED IN PROPER DBD BIN: ${part.properDiscard === "checked" ? "Yes" : "No"}`;
                }
            }

            formattedNote += additionalPartText;
        });
    }

    // Add additional DBDs info to the formatted note (for motherboard)
    if (currentTemplate === 'mobo' &&
        formData.additionalDBDs &&
        formData.additionalDBDs.length > 0) {

        formattedNote += '\n\nADDITIONAL DBDs:';

        formData.additionalDBDs.forEach((dbd, index) => {
            let additionalDBDText = `\n\nDBD #${index + 2}:
DBD SERIAL NUMBER: ${dbd.dbdSerialNumber || "N/A"}
SLOT #: ${dbd.slotNumber || "N/A"}`;

            formattedNote += additionalDBDText;
        });
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

    // Reset conditional field containers
    document.querySelectorAll('.conditional-fields-container').forEach(container => {
        container.style.display = 'none';
    });

    // Reset checkboxes (they might not be properly reset by the form.reset())
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset additional parts
    resetAdditionalParts();

    // Reset additional DBDs
    resetAdditionalDBDs();

    updatePreview();
}
