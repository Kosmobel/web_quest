const sizeY = 8; 
const sizeX = 15; 

const grid = new Array(sizeY);
for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(sizeX).fill(null).map(() => ({
        value: "",
        empty: true,
        number: null
    }));
}

const crosswordDiv = document.getElementById('crossword');
crosswordDiv.innerHTML = '';

let words_placed = [];

function placeWord(word, startRow, startCol, direction, question) {
    if (direction === 'horizontal') {
        for (let i = 0; i < word.length; i++) {
            grid[startRow][startCol + i].value = word[i];
            grid[startRow][startCol + i].empty = false;
        }
    } else {
        for (let i = 0; i < word.length; i++) {
            grid[startRow + i][startCol].value = word[i];
            grid[startRow + i][startCol].empty = false;
        }
    }
    words_placed.push({
        word_str: word,
        row: startRow,
        col: startCol,
        direction: direction,
        question: question
    });
}

function showAnswers() {
    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX; j++) {
            if (!grid[i][j].empty) {
                const input = document.querySelector(`tr:nth-child(${i + 1}) td:nth-child(${j + 1}) input`);
                input.value = grid[i][j].value;
            }
        }
    }
}

function repaint() {
    crosswordDiv.innerHTML = '';
    const table = document.createElement('table');
    for (let i = 0; i < sizeY; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < sizeX; j++) {
            const cell = document.createElement('td');
            cell.style.position = 'relative'; 
            cell.style.padding = '0'; 

            if (!grid[i][j].empty) {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.style.width = '100%'; 
                input.style.height = '100%'; 
                input.style.boxSizing = 'border-box'; 
                input.style.border = 'none'; 
                input.style.outline = 'none'; 
                input.style.textAlign = 'center'; 

                if (grid[i][j].number !== null) {
                    const label = document.createElement('label');
                    label.style.position = 'absolute';
                    label.style.top = '2px';
                    label.style.left = '2px';
                    label.style.fontSize = '0.7em';
                    label.style.pointerEvents = 'none';
                    label.innerText = grid[i][j].number;
                    cell.appendChild(label);
                }

                cell.appendChild(input);
            } else {
                cell.style.backgroundColor = '#004d40';
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    crosswordDiv.appendChild(table);
    assignInputEvents();
}




function generateClues() {
    const horizontalClues = document.getElementById('horizontal-clues');
    const verticalClues = document.getElementById('vertical-clues');
    horizontalClues.innerHTML = '';
    verticalClues.innerHTML = '';
    let questionNumber = 1;

    words_placed.forEach(word => {
        const clueItem = document.createElement('li');
        clueItem.innerText = `${questionNumber}. ${word.question}`;

        if (word.direction === 'horizontal') {
            horizontalClues.appendChild(clueItem);
        } else {
            verticalClues.appendChild(clueItem);
        }

        if (word.direction === 'horizontal') {
            grid[word.row][word.col].number = questionNumber;
        } else {
            grid[word.row][word.col].number = questionNumber;
        }

        questionNumber++;
    });
}

function checkAnswers() {
    let correctCount = 0;
    let totalCount = 0;

    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX; j++) {
            if (!grid[i][j].empty) {
                totalCount++;
                const input = document.querySelector(`tr:nth-child(${i + 1}) td:nth-child(${j + 1}) input`);
                if (input.value.toLowerCase() === grid[i][j].value.toLowerCase()) {
                    correctCount++;
                    input.style.backgroundColor = 'lightgreen'; 
                } else {
                    input.style.backgroundColor = 'lightcoral'; 
                }
            }
        }
    }

    const percentage = (correctCount / totalCount) * 100;
    if (percentage > 75) {
        alert(`Вы прошли! Правильных ответов: ${correctCount} из ${totalCount} (${percentage.toFixed(2)}%)`);
        window.location.href = "final.html";
    } else {
        alert(`Вы не прошли. Правильных ответов: ${correctCount} из ${totalCount} (${percentage.toFixed(2)}%)`);
    }

    
}


function generateCrossword() {
    placeWord("робот", 0, 5, "horizontal", "Игровое устройство для виртуального футбола");
    
    placeWord("клавиатура", 1, 0, "horizontal", "Команда, участвующая в турнире");
    placeWord("диск", 2, 7, "horizontal", "Команда, участвующая в турнире");
    placeWord("курсор", 3, 6, "horizontal", "Команда, участвующая в турнире");
    placeWord("защита", 4, 5, "horizontal", "Команда, участвующая в турнире");
    placeWord("компьютер", 5, 0, "horizontal", "Команда, участвующая в турнире");
    placeWord("программист", 6, 4, "horizontal", "Команда, участвующая в турнире");
    placeWord("монитор", 7, 6, "horizontal", "Команда, участвующая в турнире");
    /*
    placeWord("тренировка", 8, 4, "vertical", "Процесс подготовки команды к матчу");
    placeWord("инновация", 15, 0, "horizontal", "Процесс интеграции технологий в спорт");
    placeWord("фифа", 6, 6, "vertical", "Известная футбольная игра на компьютере");
    placeWord("футболист", 6, 6, "horizontal", "Игрок в футбол");
    placeWord("бомбардир", 6, 9, "vertical", "Самый результативный игрок команды");
    placeWord("футзал", 1, 11, "vertical", "Место проведения фиджитал-футбола");
    placeWord("бутсы", 2, 10, "horizontal", "Часть футбольного оборудования, которую надевают на ноги");
    placeWord("пас", 0, 13, "vertical", "Процесс передачи мяча от одного игрока к другому");
    placeWord("стриминг", 6, 13, "vertical", "Цифровая трансляция матча в реальном времени");
    placeWord("киберспорт", 9, 12, "horizontal", "Цифровой спорт");
    placeWord("щитки", 11, 12, "horizontal", "Элемент формы для защиты ног");
    placeWord("гол", 13, 13, "horizontal", "Радостное событие для футбольной команды");
    placeWord("персонаж", 9, 18, "vertical", "Цифровой аватар игрока в виртуальной игре");
    placeWord("трекер", 9, 21, "vertical", "Устройство для отслеживания движений игроков");
    placeWord("фиджитал", 15, 12, "horizontal", "Традиционный вид спорта, соединенный с цифровыми технологиями");
    placeWord("камера", 12, 21, "horizontal", "Цифровое оборудование для трансляции матчей");
    placeWord("мяч", 12, 23, "vertical", "Округлый и его пинают");
    placeWord("спорт", 9, 25, "vertical", "Деятельность, направленная на укрепление организма");
    */
    
    repaint();
}

function setFocus(input, row, col) {
    const nextInput = document.querySelector(`tr:nth-child(${row + 1}) td:nth-child(${col + 1}) input`);
    if (nextInput) {
        nextInput.focus();
    }
}

function handleArrowKeys(event, row, col) {
    switch (event.key) {
        case 'ArrowUp':
            if (row > 0) setFocus(event.target, row - 1, col);
            break;
        case 'ArrowDown':
            if (row < sizeY - 1) setFocus(event.target, row + 1, col);
            break;
        case 'ArrowLeft':
            if (col > 0) setFocus(event.target, row, col - 1);
            break;
        case 'ArrowRight':
            if (col < sizeX - 1) setFocus(event.target, row, col + 1);
            break;
    }
}

function assignInputEvents() {
    for (let i = 0; i < sizeY; i++) {
        for (let j = 0; j < sizeX; j++) {
            if (!grid[i][j].empty) {
                const input = document.querySelector(`tr:nth-child(${i + 1}) td:nth-child(${j + 1}) input`);
                if (input) {
                    input.addEventListener('keydown', function(event) {
                        handleArrowKeys(event, i, j);
                    });
                }
            }
        }
    }
}

generateCrossword();