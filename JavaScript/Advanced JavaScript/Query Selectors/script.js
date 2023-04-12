const widget = document.querySelector('.widget');

function contentToggle() {
    if (widget.classList.contains('showElement')) {
        widget.classList.remove('showElement');
        widget.classList.add('hideElement')
    } else {
        widget.classList.remove('hideElement');
        widget.classList.add('showElement')
    }
}

// const headings = document.querySelectorAll('div');

// function contentToggle() {
//     headings.forEach((heading) => {
//         if (heading.classList.contains('showElement')) {
//             heading.classList.remove('showElement');
//             heading.classList.add('hideElement')
//         } else {
//             heading.classList.remove('hideElement');
//             heading.classList.add('showElement')
//         }
//     })
// }