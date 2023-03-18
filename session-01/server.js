const express = require('express');
const cors = require('cors');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const app = express();
const port = 3000;

const staticLorem = 'Lorem ipsum dolor sit amet';
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

app.use(cors());

app.get('/:length/:type/:static', (req, res) => {
    const { length, type, static } = req.params;
    const data = () => {        
      console.log(length, type, static)
        if (type === "words") return lorem.generateWords(Number(length));
        if (type === "lists") return lorem.generateSentences(Number(length));
        else return lorem.generateParagraphs(Number(length));
    }
    const paragraph = static == 'true' ? `${staticLorem} ${data()}` : data();
    res.status(200).json({ paragraph, type, static });   
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

