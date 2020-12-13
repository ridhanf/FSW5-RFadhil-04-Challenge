const listSign = ["batu", "gunting", "kertas"];
var timesRun;
var player1Sign = document.getElementsByClassName("player1Sign")
var computerSign = document.getElementsByClassName("computerSign")
var randomIdxPlayer1Before = 0;
var randomIdxComputerBefore = 0;

const ubahWarnaLatar = (list, idx) => {
  list[idx].style.backgroundColor = "gray";
}

const resetWarnaLatar = (list, idx) => {
  list[idx].style.backgroundColor =  "#AE876B";
}

const getSign = () => {  
  const randomIdxPlayer1 = Math.floor(Math.random() * 3);
  const randomIdxComputer = Math.floor(Math.random() * 3);
  // console.log("Player1:" + listSign[randomIdxPlayer1] + "\t Computer:" + listSign[randomIdxComputer]);
  ubahWarnaLatar(player1Sign, randomIdxPlayer1);
  ubahWarnaLatar(computerSign, randomIdxComputer);
  if (timesRun > 0) {
    resetWarnaLatar(player1Sign, randomIdxPlayer1Before);
    resetWarnaLatar(computerSign, randomIdxComputerBefore);
  }
  randomIdxPlayer1Before = randomIdxPlayer1;
  randomIdxComputerBefore = randomIdxComputer;
  timesRun += 1;
  if (timesRun == 25) {
    clearInterval(intervalGenerator);
    outputPlayer1 = listSign[randomIdxPlayer1];
    outputComputer = listSign[randomIdxComputer];
    ubahWarnaLatar(player1Sign, randomIdxPlayer1);
    ubahWarnaLatar(computerSign, randomIdxComputer);
    // console.log("Player1:" + outputPlayer1 + "\t Computer:" + outputComputer);
    timesRun = 0;
  }
}

const refreshButton = () => {
  timesRun = 0;
  intervalGenerator = setInterval(getSign, 50);
}