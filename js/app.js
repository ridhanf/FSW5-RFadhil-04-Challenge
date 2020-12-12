const listSign = ["batu", "gunting", "kertas"];
var timesRun;

const getSign = () => {  
  const randomIdxPlayer = Math.floor(Math.random() * 3);
  const randomIdxComputer = Math.floor(Math.random() * 3);
  console.log("Player:" + listSign[randomIdxPlayer] + "\t Computer:" + listSign[randomIdxComputer]);
  timesRun += 1;
  if (timesRun == 20) {
    clearInterval(intervalGenerator);
    outputPlayer = listSign[randomIdxPlayer];
    outputComputer = listSign[randomIdxComputer];
    console.log("Player:" + outputPlayer + "\t Computer:" + outputComputer);
  }
}

const refreshButton = () => {
  timesRun = 0;
  intervalGenerator = setInterval(getSign, 100);
}