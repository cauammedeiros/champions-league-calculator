function calculatePoints() {
    // Getting input values
    let win = parseInt(document.getElementById('win').value);
    let draw = parseInt(document.getElementById('draw').value);
    let lose = parseInt(document.getElementById('lose').value);

    const WIN_POINTS = 3;
    const DRAW_POINTS = 1;
    const GAMES = 8;

    // Validation
    if (win + draw + lose !== GAMES) {
        document.getElementById('output').innerHTML = "Invalid number of matches, the total needs to be equal to 8";
        return;
    }

    // Calculating points
    let winPoints = WIN_POINTS * win;
    let drawPoints = DRAW_POINTS * draw;
    let totalPoints = winPoints + drawPoints;

    // Output results
    let output = `
        Your team has ${winPoints} points for winning ${win} matches.<br>
        Your team has ${drawPoints} points for drawing ${draw} matches.<br>
        Your team lost ${lose} matches, gaining 0 points.<br>
        <strong>Total points: ${totalPoints}</strong>
    `;

    document.getElementById('output').innerHTML = output;
}
