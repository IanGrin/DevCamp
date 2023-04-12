 const heading = document.getElementById('mainHeading');

 heading.onclick = () => {
    if (heading.classList.contains('activeHeading')) {
        heading.classList.remove('activeHeading');
        heading.classList.add('nonActiveHeading');
    } else {
        heading.classList.remove('nonActiveHeading');
        heading.classList.add('activeHeading');
    }
 }
//  heading.onclick = () => {
//     if (heading.classList.contains('activeHeading')) {
//         heading.className = 'nonActiveHeading'
//     } else {
//         heading.className = 'activeHeading'
//     }
//  }