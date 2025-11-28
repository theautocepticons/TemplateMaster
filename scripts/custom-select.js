// ================================================
// Custom Select Dropdown
// ================================================

export function initCustomSelect(wrapperSelector) {
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

export function closeAllCustomSelects() {
    document.querySelectorAll('.custom-select.open').forEach(select => {
        select.classList.remove('open');
        select.querySelector('.custom-select-trigger')?.setAttribute('aria-expanded', 'false');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', closeAllCustomSelects);
