// Minimal setup for RGB text effect
document.addEventListener('DOMContentLoaded', function() {
    // Add data-text attributes for RGB split effect
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.setAttribute('data-text', heading.textContent);
    });
});