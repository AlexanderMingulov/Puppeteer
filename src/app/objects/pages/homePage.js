const BasePage = require("./basePage");
const BaseObjet = require("../baseObject");
const ph = require('../../pageHolder');
ui = require('../../ui');


class HomePage extends BasePage {

    get getTweetButton() {

        return (async () => {
            try {
                return (await this.ph.page.$$('.tweetBtn_2SHy'))[0]
            } catch (e) {
                return 0;
            }
        })();

    }

    get getStartedButton() {

        return (async () => {
            try {
                return (await this.ph.page.$$('.buttons_1r9m>a'))[0]
            } catch (e) {
                return 0;
            }
        })();

    }

    get getDocsButton() {

        return (async () => {
            try {
                return (await this.ph.page.$$('.navbar__item navbar__link'))[0]
            } catch (e) {
                return 0;
            }
        })();

    }

    get getSearchButton() {
        return this.ph.page.$('.DocSearch-Button-Placeholder');
    }


    async getText(element) {
        return (await this.ph.page.evaluate(node => node.textContent, await this[element])).trim();
    }

}

module.exports = HomePage;