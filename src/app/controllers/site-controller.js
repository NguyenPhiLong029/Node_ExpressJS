class SiteCotroller {

    //[GET] /news
    homePage(req, res) {
        res.render("home");
    }

    //[GET] /news/:slug
    searchPage(req, res) {
        res.render("search");
    }

}
module.exports = new SiteCotroller;