
async function clickElement(selector: string) {
    /**
     * convert protocol result into WebdriverIO element
     * e.g. when element was fetched with `getActiveElement`
     */
    console.log(selector)
    $(selector).click();
}
exports.default = clickElement;
