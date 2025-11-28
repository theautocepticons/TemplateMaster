// ================================================
// Parts and DBD Table Management
// ================================================

import { updatePreview } from './preview.js';

export let additionalPartsCounter = 0;
export let additionalDBDsCounter = 0;
export let currentTemplate = 'breakfix';

export function setCurrentTemplate(template) {
    currentTemplate = template;
}

// Function to reset additional parts
export function resetAdditionalParts() {
    const tbody = document.getElementById('parts-table-body');
    if (tbody) {
        tbody.innerHTML = '';
        tbody.appendChild(createPartsTableRow(0));
    }
    additionalPartsCounter = 0;
}

// Function to create a parts table row (or row group for DBD)
export function createPartsTableRow(index) {
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
export function addPartsTableRow() {
    additionalPartsCounter++;
    const tbody = document.getElementById('parts-table-body');
    if (tbody) {
        tbody.appendChild(createPartsTableRow(additionalPartsCounter));
        updatePreview();
    }
}

// Function to delete a row from the parts table
export function deletePartsTableRow(row, secondRow = null) {
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
export function resetAdditionalDBDs() {
    const tbody = document.getElementById('dbds-table-body');
    if (tbody) {
        tbody.innerHTML = '';
        tbody.appendChild(createDBDTableRow(0));
    }
    additionalDBDsCounter = 0;
}

// Function to create a DBD table row
export function createDBDTableRow(index) {
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
export function addDBDTableRow() {
    additionalDBDsCounter++;
    const tbody = document.getElementById('dbds-table-body');
    if (tbody) {
        tbody.appendChild(createDBDTableRow(additionalDBDsCounter));
        updatePreview();
    }
}

// Function to delete a row from the DBD table
export function deleteDBDTableRow(row) {
    const tbody = document.getElementById('dbds-table-body');
    if (tbody && tbody.children.length > 1) {
        row.remove();
        updatePreview();
    }
}
