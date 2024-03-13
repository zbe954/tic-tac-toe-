function getMove() {
    const value = Math.random();
    return (
        value < 0.2 ? 'x' :
        value < 0.4 ? 'o' :
        null
    );
}

const board = new Array(20).fill(null).map(
    () => new Array(20).fill(null).map(getMove)
);

const container = document.querySelector('.js-container');

function renderRow(rowData) {
    let rowHtml = '<tr class="tic-tac-toe-row">';

    for(let cell of rowData) {
        rowHtml += `<td class="tic-tac-toe-cell">${cell ?? ''}</td>`;
    }

    rowHtml += '</tr>';
    return rowHtml;
}
function  renderBoard(board) {
    let html = '<table class="tic-tac-toe-board"><tbody>';

    for (let row of board) {
        html += renderRow(row);
    }

    html += '</tbody></table>';
    return html;
}

let html = renderBoard(board);
// Create the HTML for the tic-tac-toe board

container.innerHTML = html;
