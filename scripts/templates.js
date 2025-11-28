// ================================================
// Template Definitions
// ================================================

import { CHECKED } from './constants.js';
import { formatCheckbox, formatEscalationInfo } from './format-utils.js';

// Shared field definitions
export const commonTaskFields = [
    { name: "taskId", label: "Task ID", type: "text" },
    { name: "assetTagConfirmed", label: "Was the asset tag visually confirmed?", type: "checkbox" },
    { name: "uponArrival", label: "Upon Arrival:", type: "textarea" }
];

export const partReplacementFields = [
    { name: "partReplaced", label: "Part(s) replaced?", type: "checkbox", hasConditionalFields: true },
    { name: "oldSerialNumber", label: "Old Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
    { name: "newSerialNumber", label: "New Serial Number", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } },
    { name: "licensePlate", label: "License Plate", type: "text", conditionalOn: { field: "partReplaced", value: CHECKED } }
];

export const escalationFields = [
    { name: "actionsTaken", label: "Actions Taken", type: "textarea" },
    { name: "wasEscalated", label: "Was this ticket escalated?", type: "checkbox", hasConditionalFields: true },
    { name: "escalatedTo", label: "Who was it escalated to?", type: "text", conditionalOn: { field: "wasEscalated", value: CHECKED } },
    { name: "seniorTechAlias", label: "Alias of the senior who approved this:", type: "text", conditionalOn: { field: "wasEscalated", value: CHECKED } }
];

// Template definitions
export const templates = {
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
SOURCE DEVICE:PORT: ${data.sourceDevice || "N/A"}
END DEVICE:PORT: ${data.endDevice || "N/A"}

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
            { type: "info", text: `If a task is quarantined, please direct the requestor to <a href="https://microsoft.sharepoint.com/sites/COIPartnerResourceCenter/SitePages/CO+-Partner-Resource-Center.aspx?ct=1748876712863&or=Teams-HL&ga=1&LOF=1&xsdata=MDV8MDJ8fDdlZjg4MTg4OGJiMjQ0MzBhMTFjMDhkZTFhMTY3ODAwfDcyZjk4OGJmODZmMTQxYWY5MWFiMmQ3Y2QwMTFkYjQ3fDB8MHw2Mzg5NzY4ODA5MzgxMTkxMDB8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKRFFTSTZJbFJsWVcxelgwRlVVRk5sY25acFkyVmZVMUJQVEU5R0lpd2lWaUk2SWpBdU1DNHdNREF3SWl3aVVDSTZJbGRwYmpNeUlpd2lRVTRpT2lKUGRHaGxjaUlzSWxkVUlqb3hNWDA9fDF8TDJOb1lYUnpMekU1T21KaVpHTm1OalUzTWpZNFpqUXhNVGs1Tm1Rek5UZGxObU16TnpFeFptTTNRSFJvY21WaFpDNTJNaTl0WlhOellXZGxjeTh4TnpZeU1Ea3hNamt5T0Rnd3w4YTcwMGYyOTdiZDE0NzE0YzkwNDA4ZGUxYTE2NzdmZnxlNzQ5NGE4MjI3NjI0N2Q5OGYwMTNlNDI2ZWFiMmI5ZA%3D%3D&sdata=ZGtMSy9JZVhOYlRFRnFHV1M0MlFWc1pQbEp1OXArZWdoSnpBVGY0bDlUbz0%3D&ovuser=72f988bf-86f1-41af-91ab-2d7cd011db47%2Caguajardo%40microsoft.com&OR=Teams-HL&CT=1762904435825&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiI0OS8yNTExMDYxMzYwMSIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D" target="_blank">the CO&I Partner Resource Center</a> for further instructions on how to proceed with scheduling work windows for quarantined tasks.`}
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
