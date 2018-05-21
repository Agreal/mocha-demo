// 决赛对阵名词
const FinalGame = [1, 2];
// 比赛轮次：决赛，半决赛，8强，16强..., or 选手最多个数；

/**
 * 蛇形排阵
 * @param playerNumber
 */
function playerOrder(playerNumber) {
  if (FinalGame.length === playerNumber) {
    return FinalGame;
  }
  return playerOrder1(FinalGame, playerNumber);
}

function playerOrder1(playPositions, playerNumber) {
  if (playPositions.length === playerNumber) {
    return playPositions;
  }
  return playerOrder1(extendPlayPosition(playPositions), playerNumber);
}

function extendPlayPosition(list) {
  let result = [];
  const max = list.length * 2 + 1;
  list.forEach((item, index) => {
    let extendItem;
    if (index % 2 === 0) {
      extendItem = [
        item,
        max - item
      ];
    } else {
      extendItem = [
        max - item,
        item
      ];
    }
    result = result.concat(extendItem);
  });
  return result;
}


// [1, 2]
// [1, 4, 3, 2]
// [1, 8, 5, 4, 3, 6, 7, 2]
exports.playerOrder = playerOrder;
