

setInterval(elementSelectFree, 5000);

function elementSelectFree() {
    try {
        if (document.location.href.indexOf('/app-content/privacy-policy?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-text-field__input')[0].value ='https://lethanh98.com/';
        }
    } catch (e) {

    }
}