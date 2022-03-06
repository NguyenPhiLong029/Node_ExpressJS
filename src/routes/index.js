const newRouter = require('./news');
const siteRouter = require('./site');

function Routes(app){

    app.use('/news', newRouter);

    app.use('/', siteRouter);

}
module.exports = Routes;
