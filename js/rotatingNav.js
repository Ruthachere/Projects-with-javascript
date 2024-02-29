//JS CODE FOR ROTATING NAVIGATION
const open = document.querySelector('.open-btn');
const close = document.querySelector('.close-btn');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));

// JS CODE FOR HIDDEN SEARCH WIDGET
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus();
})
