const dateElement = document.getElementById('dateComponent');
const dateBtn = document.getElementById('dateBtn');

// renderDate = () => {
//     dateElement.innerHTML = Date();
// }

dateBtn.addEventListener('click', (event) => {
    dateElement.innerHTML = Date();
});