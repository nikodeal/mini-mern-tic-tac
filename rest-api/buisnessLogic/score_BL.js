const jsonFile = require("jsonfile");
const scoreFilePath = "score.json";

const scoreData = () => {
  return new Promise((resolve, reject) => {
    jsonFile.readFile(scoreFilePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const setScoreData = (obj) => {
  return new Promise((resolve, reject) => {
    jsonFile.writeFile(scoreFilePath, obj, (err) => {
      err ? reject(err) : resolve("updated");
    });
  });
};

const updateScore = async (obj) => {
  let tempObj = {
    data: {
      playerOne: obj.playerOne,
      playerTwo: obj.playerTwo,
    },
  };

  const setData = await setScoreData(tempObj);
  console.log(setData.data);
};

module.exports = {
  scoreData,
  setScoreData,
  updateScore
};
