const express = require('express');
const cors = require('cors');
const path = require('path');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const app = express();
const port = 3000;

const loremPrefix = 'Lorem ipsum dolor sit amet';
const loremIpsum = new LoremIpsum({
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
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:length/:type/:ipsum', (req, res) => {
    const { length, type, ipsum } = req.params;
    const data = () => {        
        if (type === "words") return loremIpsum.generateWords(Number(length));
        if (type === "lists") return loremIpsum.generateSentences(Number(length));
        else return loremIpsum.generateParagraphs(Number(length));
    }
    const paragraph = ipsum == 'true' ? `${loremPrefix} ${data()}` : data();
    res.status(200).json({ paragraph, type, ipsum });   
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

