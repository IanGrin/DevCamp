const imgs = document.querySelectorAll('.site-img');

imgs.forEach(img => {
    img.addEventListener('mouseover', (event) => {
        const captionElement = event.target.parentElement.children[1];
        captionElement.className = 'show-img-overlay';
    })
})

imgs.forEach(img => {
    img.addEventListener('mouseout', (event) => {
        const captionElement = event.target.parentElement.children[1];
        captionElement.className = 'hide-img-overlay';
    })
})