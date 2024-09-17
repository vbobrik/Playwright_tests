const SOURCE_FIELD = 'Start typing or insert a link';
const TARGET_FIELD = '#dstBox [role="textbox"]';
const TARGET_FIELD_IMG = "//*[@accept='image/*']/parent::div";
const SWITCH_BUTTON = 'Switch direction';
const SOURCE_LANG_BUTTON = '#srcLangButton';
const TARGET_LANG_BUTTON = '#dstLangButton';

class TranslatePage {
    constructor (page) {
        this.page = page;
    }

    getSourceField () {
        return this.page.getByLabel(SOURCE_FIELD).first();
    }

    getTargetFieldImg () {
        return this.page.locator(TARGET_FIELD_IMG);
    }

    getTargetLangButton () {
        return this.page.locator(TARGET_LANG_BUTTON);
    }

    getSouceLangButton () {
        return page.locator(SOURCE_LANG_BUTTON);
    }

    // getSouceField () {
    //     return page.getByLabel(SOURCE_FIELD).first();
    // }

    // getSouceField () {
    //     return page.getByLabel(SOURCE_FIELD).first();
    // }
}

module.exports = TranslatePage