const div = document.querySelector('div');
const gameButton = document.querySelector('button');

createGrid(16);

gameButton.addEventListener('click', function() {
    const n = prompt('How many squares per side?');
    createGrid(n);
});

function createGrid(n) {
    // Clear the existing grid
    while (div.firstChild) {
        div.firstChild.remove();
    }

    // Create the new grid
    for (i=1; i<=n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (j=1; j<=n; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', function() {
                this.classList.add('cell-hovered');
            });
            row.appendChild(cell);
        }
        div.appendChild(row);
    }
}

const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    gameButton.classList.toggle('dark');
    themeButton.classList.toggle('dark');
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.classList.toggle('dark'));
});
