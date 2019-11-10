const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const cors = require('cors');


const mock = express();
const port = 4000;
const template = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';


function generateData() {
    const contract = {
        name: 'ThoughtRiver test contract',
        id: 'dc89ff49-8449-11e7-ac1d-3c52820efd20',
        data: []
    };

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function (pageNumber) {
        const pageContent = {
            id: `${pageNumber}`,
            paragraphs: []
        };
        for (let i = 0; i < 100; i++) {
            pageContent.paragraphs.push({text: `item:${i}-${template}`, id: i, page: pageNumber})
        }
        contract.data.push(pageContent);
    });

    return contract;
}

async function start() {
    mock.use(bodyParser.json());
    mock.use(cors());
    global.mockData = generateData();
    await routes(mock);
    mock.listen(port, () => console.log(`Mock listening on port ${port}!`));
}

start().catch((e) => console.log(e));

