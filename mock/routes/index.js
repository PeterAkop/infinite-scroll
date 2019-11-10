const contract = require('./contract');
const paragraphs = require('./paragraphs');


module.exports = async (app) => {
    app.use('/contract', contract);
    app.use('/paragraphs', paragraphs);
};
