// Load footer component into pages
async function loadFooterComponent() {
    try {
        const response = await fetch('./components/footer.html');
        const footerHTML = await response.text();
        const footerContainer = document.getElementById('footer-component');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
        }
    } catch (error) {
        console.error('Error loading footer component:', error);
    }
}

// Load footer when document is ready
document.addEventListener('DOMContentLoaded', loadFooterComponent);
