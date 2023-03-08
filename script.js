const grid = document.querySelector('.grid-container');
const button = document.querySelector('#reset-btn');

function createGridItems() {
    const gridItems = document.createElement('div');
    gridItems.classList.add('grid-item');
    grid.appendChild(gridItems);
};

function createGrid() {
    for (let i = 0; i < 256; i++) {
        createGridItems();
    }
};

createGrid();

grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'black';
});

button.addEventListener('click', () => {
    grid.innerHTML = '';
    createGrid();
});