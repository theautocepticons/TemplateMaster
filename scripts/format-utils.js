// ================================================
// Format Helper Functions
// ================================================

import { CHECKED, DEFAULT_VALUE, DEFAULT_PLACEHOLDER } from './constants.js';

export function formatCheckbox(value) {
    return value === CHECKED ? "Yes" : "No";
}

export function truncateSerial(serial, length = 30) {
    if (!serial || serial === DEFAULT_VALUE || serial === DEFAULT_PLACEHOLDER) return serial;
    return serial/*.length > length ? '...' + serial.slice(-length) : serial*/;
}

export function formatPartsSummary(allParts, template) {
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

export function formatDBDsSummary(allDBDs) {
    if (!allDBDs || allDBDs.length === 0) return '';

    let summary = `\n\nMOVED DBDs (${allDBDs.length}):`;

    allDBDs.forEach(dbd => {
        const serial = truncateSerial(dbd.dbdSerialNumber || DEFAULT_VALUE);
        const slot = dbd.slotNumber || DEFAULT_VALUE;
        summary += `\n• ${serial} (Slot: ${slot})`;
    });

    return summary;
}

export function formatEscalationInfo(data) {
    if (data.wasEscalated === CHECKED) {
        return `

ESCALATION DETAILS:
- Escalated To: ${data.escalatedTo || DEFAULT_PLACEHOLDER}
- Senior Tech Approval: ${data.seniorTechAlias || DEFAULT_PLACEHOLDER}`;
    }
    return "";
}
