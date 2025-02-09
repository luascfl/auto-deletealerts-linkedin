// Helper function to wait for an element to be available in the DOM
function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
        callback(element);
        return;
    }

    const observer = new MutationObserver((mutations, me) => {
        const elem = document.querySelector(selector);
        if (elem) {
            me.disconnect(); // Stop observing when the element is found
            callback(elem);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

// Helper function to check if an element is visible and clickable
function isClickable(element) {
    return element && element.offsetParent !== null && !element.disabled;
}

function deleteAlerts() {
    // Step 1: Function to click the edit button
    function clickEditButton() {
        waitForElement('button[title*="Editar alerta de vaga"]', (editButton) => {
            if (isClickable(editButton)) {
                editButton.click();
                console.log("Edit button clicked.");

                // Proceed to click the delete button after a slight delay
                setTimeout(clickDeleteButton, 1000);
            } else {
                console.log("Edit button not clickable.");
            }
        });
    }

    // Step 2: Function to click the "Excluir alerta de vaga" button
    function clickDeleteButton() {
        waitForElement('button', () => {
            const deleteButton = Array.from(document.querySelectorAll('button')).find(button =>
                button.textContent.includes('Excluir alerta de vaga') ||
                button.getAttribute('aria-label')?.includes('Excluir alerta de vaga')
            );

            if (isClickable(deleteButton)) {
                deleteButton.click();
                console.log("'Excluir alerta de vaga' button clicked.");

                // Proceed to confirm deletion after a slight delay
                setTimeout(confirmDelete, 1000);
            } else {
                console.log("'Excluir alerta de vaga' button not clickable.");
            }
        });
    }

    // Step 3: Function to confirm deletion by clicking the "Excluir" button
    function confirmDelete() {
        waitForElement('button', () => {
            const confirmButton = Array.from(document.querySelectorAll('button')).find(button =>
                button.textContent.trim() === 'Excluir'
            );

            if (isClickable(confirmButton)) {
                confirmButton.click();
                console.log("'Excluir' button clicked successfully.");

                // Wait for the alert to be deleted before restarting
                setTimeout(deleteAlerts, 2000);
            } else {
                console.log("'Excluir' button not clickable.");
            }
        });
    }

    // Start the process from Step 1
    clickEditButton();
}

// Start the process of deleting alerts
deleteAlerts();