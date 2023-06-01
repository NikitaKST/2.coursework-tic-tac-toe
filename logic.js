let players = ['x', 'o']; //массив с Информацией об игроках
let activePlayer = 0;
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

//функция создания поля и выбора игрока
function startGame() {
  activePlayer = 0;     //устанавливаем активного игрока
  board = [             //создаем игровое поле с массивом
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  renderBoard(board);   //вызваем функцию renderBoard для отрисовки игрового поля
};

function click(row, col) {
  board[row][col] = players[activePlayer]; //ячейку к символу игрока
  renderBoard(board);
  let hasWinner = checkWin(row, col); //проверяем наличие победителя
  if (hasWinner) {
    showWinner(players[activePlayer]); //если есть победитель, выводим его
  } else {
    activePlayer = (activePlayer + 1) % 2; //если нет, переходим к следующему игроку
  }
}

function checkWin(row, col) { //функция проверки значений
  let playerSymbol = players[activePlayer];
  // проверка строки
  if (board[row].every(val => val === playerSymbol)) {
    return true;
  }
  // проверка столбца
  if (board.every(row => row[col] === playerSymbol)) {
    return true;
  }
  // проверка диагонали
  if (row === col && board.every((row, index) => row[index] === playerSymbol)) {
    return true;
  }
  // проверка обратной диагонали
  if (row + col === board.length - 1 && board.every((row, index) => row[board.length - 1 - index] === playerSymbol)) {
    return true;
  }
  // нет выйгрыша
  return false;
}








