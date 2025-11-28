// ================================================
// DOM Element Creation Helpers
// ================================================

export function createInput(field) {
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

export function createInfoElement(text) {
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

export function createFormField(parent, labelText, fieldId, fieldType) {
    const group = document.createElement('div');
    group.className = 'form-group';

    const label = document.createElement('label');
    label.setAttribute('for', fieldId);
    label.textContent = labelText;

    const input = document.createElement('input');
    input.type = fieldType;
    input.id = fieldId;
    input.name = fieldId;

    group.appendChild(label);
    group.appendChild(input);
    parent.appendChild(group);
}
