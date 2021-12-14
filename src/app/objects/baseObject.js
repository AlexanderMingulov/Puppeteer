class BaseObject {
    ph = require('../pageHolder');

    async getText(element) {
        return (await this.ph.page.evaluate(node => node.textContent, await this[element])).trim();
    }


}

module.exports = BaseObject;