// Korrekt metode fra undervisningen d. 6 marts

document.querySelectorAll('nav > ul > li > a').forEach(menuOption => {
    menuOption.addEventListener('click', function() {
        
        // Only the clicked menu option is displayed as selected.
        document.querySelectorAll(`nav > ul > li > a`).forEach(option => {
            option.classList.remove('selected');
        });
        this.classList.add('selected');
        
        // The page title is updated accordingly
        document.title = `${this.innerText} | Restaurant KEA`;
        
        // The corresponding page is shown. The rest are hidden
        const dataTarget = this.getAttribute('data-target');        
        document.querySelector(`#${dataTarget}`).classList.remove('hidden');
        document.querySelectorAll(`.page:not(#${dataTarget})`).forEach(page => {
            page.classList.add('hidden');
        });
    });
});