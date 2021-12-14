const BaseObject = require('../baseObject');
const ph = require('../../pageHolder');
ui = require('../../ui');


class Header extends BaseObject {

    get logo() {
        return this.ph.page.$('.navbar__logo');
    }

    get subTitle() {
        return this.ph.page.$('.hero__subtitle');
    }


}

module.exports = Header;