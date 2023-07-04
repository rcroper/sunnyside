const toggle = document.querySelector('.mobilebtn');
const nav = document.querySelector('.nav');


toggle.addEventListener('click', () => {
    nav.classList.toggle ("open");
})