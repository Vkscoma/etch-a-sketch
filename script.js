const grid = document.querySelector('.grid-container');
const button = document.querySelector('#reset-btn');
const blackButton = document.querySelector('#black-btn');
const randomButton = document.querySelector('#random-btn');

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

function createMobileGrid() {
    for (let i = 0; i < 64; i++) {
        createGridItems();
    }
}

function createFinalGrid() {
    if (window.innerWidth < 768) {
        createMobileGrid();
    } else {
        createGrid();
    }
}

createFinalGrid();

function clearGrid() {
    grid.innerHTML = '';
}

grid.addEventListener('pointerover', (e) => {
    e.target.style.backgroundColor = 'black';
});

button.addEventListener('click', () => {
    clearGrid();
    createFinalGrid();
});

blackButton.addEventListener('click', () => {
    clearGrid();
    createFinalGrid();
    grid.addEventListener('pointerover', (e) => {
        e.target.style.backgroundColor = 'black';
    });
});

randomButton.addEventListener('click', () => {
    clearGrid();
    createFinalGrid();
    grid.addEventListener('pointerover', (e) => {
        e.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
});