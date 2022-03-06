class SiteCotroller {

    //[GET] /home
    homePage(req, res) {
        res.render("home");
    }

    //[GET] /search
    searchPage(req, res) {
        res.render("search");
    }

}
module.exports = new SiteCotroller;