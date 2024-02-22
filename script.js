// Select the div and button elements
const div = document.querySelector('div');
const gameButton = document.querySelector('button');

// Create an initial grid of 16x16
createGrid(16);

// Add an event listener to the game button to create a new grid
gameButton.addEventListener('click', function() {
    const n = prompt('How many squares per side?');
    createGrid(n);
});

// Function to create a grid
function createGrid(n) {
    // Clear the existing grid
    while (div.firstChild) {
        div.firstChild.remove();
    }

    // Create the new grid
    for (i=1; i<=n; i++) {
        // Create a new row
        const row = document.createElement('div');
        row.classList.add('row');
        for (j=1; j<=n; j++) {
            // Create a new cell
            const cell = document.createElement('div');
            cell.classList.add('cell');
            // Add an mouseover event listener to the cell and count hovers
            cell.dataset.hoverCount = 0;
            cell.addEventListener('mouseover', function() {
                let hoverCount = Number(this.dataset.hoverCount);
                hoverCount++;
                this.dataset.hoverCount = hoverCount;
                if (hoverCount <= 10) {
                    let darkness = hoverCount * 10;
                    if (document.body.classList.contains('dark')) {
                        this.style.backgroundColor = `rgba(255, 255, 255, ${darkness / 100})`;
                    } else {
                        this.style.backgroundColor = `rgba(0, 0, 0, ${darkness / 100})`;
                    }
                }
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
});
