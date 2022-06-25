console.log("START SCRIPT");
const fs = require('fs');
try {
    const resultJson = [];
    let data = fs.readFileSync('../assets/data/quiz_mt.txt', 'utf8');
    data = data.split('\r\n');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    const questions = data.filter(item => (!letters.includes(item[0])));
    let answers = data.filter(item => (letters.includes(item[0])));
    questions.forEach(question => {
        let inlineLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
        const objectData = {
            question,
            correct: "answer_dummy",
        };
        letters.forEach(x => {
            //console.log(answers[0]);
            //console.log(inlineLetters[0]);
        if (answers[0] && inlineLetters[0] === answers[0][0]) {
            objectData[`answer_${inlineLetters[0].toLowerCase()}`] = answers[0].substring(3);
            answers.shift(0);
            inlineLetters.shift(0);
        }});
        resultJson.push(objectData);
        console.log(resultJson);
        fs.writeFileSync(
            '../assets/data/quiz_mt_TEST.json',
            JSON.stringify(resultJson, null, 2)
          );
    });
  } catch (err) {
    console.error(err);
  }