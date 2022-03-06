class NewsCotroller {

    //[GET] /news
    newsPage(req, res) {
        res.render("news");
    }

    //[GET] /news/:slug
    showDetail(req, res) {
        res.send("Detail New......!!!!")
    }

}
module.exports = new NewsCotroller;