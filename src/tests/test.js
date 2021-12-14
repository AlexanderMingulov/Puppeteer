const ph = require('../app/pageHolder');
const ui = require('../app/ui');
const header = require('../app/objects/controls/header');
homePage = require('../app/objects/pages/homePage');
const puppeteer = require('puppeteer');


describe('Test suite for main page', function () {



    before(async () => {
        await ui.ph.launch();
    });

    after(() => {
        ui.ph.finish();
    });

    beforeEach(async () => {
        await ui.ph.create();
        await ui.ph.page.goto('https://webdriver.io/');
        ui.ph.page.waitForResponse('https://webdriver.io/img/logo-webdriver-io.png');

    });

    afterEach(async () => {
        await ui.ph.close();
    });

    it('tweetButton', async function () {
        const elementText = await ui.homePage.getText('getTweetButton');
        ui.expect(elementText).to.equal('Tweet');
    });

    it('getStartedButton', async function () {
        const elementText = await ui.homePage.getText('getStartedButton');
        ui.expect(elementText).to.equal('Get Started');
    });

    it('docsButton', async function () {
        const elementText = await ui.homePage.getText('getDocsButton');
        ui.expect(elementText).to.equal('Docs');
    });

    it('searchButton', async function () {
            const elementText = await ui.homePage.getText('getSearchButton');
            ui.expect(elementText).to.equal('Search');
        });




});