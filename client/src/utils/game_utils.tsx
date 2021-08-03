export const validateGame = (squares: string[]) => {
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combos.length; i++) {
    const [a, b, c] = combos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export const isBoardFull = (squares: string[]) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }
  return true;
};

export function aiChecker(squares: string[], player: string) {
 debugger
  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let goodOptions = [];
  for (let i = 0; i < combos.length; i++) {
    const [a, b, c] = combos[i];
    if (squares[a] === player && squares[b] === player) {
      goodOptions.push(squares[c]);
    }
    if (squares[a] === player && squares[c] === player) {
      goodOptions.push(squares[b]);
    }
    if (squares[b] === player && squares[c] === player) {
      goodOptions.push(squares[a]);
    }else{
     return
    }
  }
  return goodOptions;
}

// export function isWinner(gameData: string[], player: Object){
//   const COMBOS = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for(let i = 0; i < COMBOS.length; i++){
//       let won = true;

//       for(let j = 0; j < COMBOS[i].length; j++){
//           let id = COMBOS[i][j];
//           won = gameData[id] == player && won;
//       }

//       if(won){
//           return true;
//       }
//   }
//   return false;
// }

// export const isTie=(gameData: string[])=>{
//   let isBoardFill: boolean = true;
//   for(let i = 0; i < gameData.length; i++){
//       isBoardFill = gameData[i] && isBoardFill ? true : false
//   }
//   if(isBoardFill){
//       return true;
//   }
//   return false;
// }

// export const getEmptyCells = (gameData: string[], PLAYER: object) =>{
//   let emptycells = [];
//   for (let i = 0 ; i < gameData.length ; i++){
//     if(!gameData[i])
//       emptycells.push(i)
//   }
//   return emptycells
// }

// export const minMax = (gameData: string[], PLAYER: Object): any => {
//   let player = PLAYER
//   if (isWinner(gameData, player.man)) return { evaluation: -10 };
//   else if (isWinner(gameData, player.computer)) return { evaluation: 10 };
//   else if (isTie(gameData)) return { evaluation: 0 };

//   let empty = getEmptyCells(gameData);

//   let moves = [];
//   for (let i = 0; i < empty.length; i++) {
//     let id = empty[i];

//     let backup = gameData[id];

//     gameData[id] = PLAYER == player.man ? player.man : player.computer;
// console.log(id)

//     let move = { evaluation: 0, id: 0 };

//     move.id = id;
//     //  gameData[id] = player
//     if (PLAYER == player.computer) {
//       move.evaluation = minMax(gameData, player.man).evaluation;
//     } else {
//       move.evaluation = minMax(gameData, player.computer).evaluation;
//     }
//     gameData[id] = backup;

//     moves.push(move);
//   }

//   let bestMove;
//   if (PLAYER == player.computer) {
//     // MAXIMIZER
//     let bestEvaluation: number = -999999;
//     let noOfMove = 0;
//     for (let i = 0; i < moves.length; i++) {
//       if (moves[i].evaluation > bestEvaluation) {
//         noOfMove++
//         bestEvaluation = moves[i].evaluation;
//         bestMove = moves[i];
//       }
//     }
//   } else {
//     // MINIMIZER
//     let bestEvaluation: number = 99999999;
//     let noOfMove = 0
//     for (let i = 0; i < moves.length; i++) {
//       if (moves[i].evaluation < bestEvaluation ) {
//         noOfMove++
//         bestEvaluation = moves[i].evaluation;
//         bestMove = moves[i];
//       }
//     }
//   }

//   return bestMove;
// };
