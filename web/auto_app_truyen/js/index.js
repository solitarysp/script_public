setInterval(elementSelectFree, 5000);

function elementSelectFree() {
    try {
        if (document.location.href.indexOf('/app-content/privacy-policy?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-text-field__input')[0].value = 'https://lethanh98.com/ ';
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/testing-credentials?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[0].click()
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/content-rating-iarc-questionnaire?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-text-field__input')[0].value = 'lethanh9398@gmail.com ';
            document.getElementsByClassName('mdc-radio__native-control')[2].click()
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/content-rating-iarc-questionnaire?source=dashboard') > 0) {
            const inputs = document.getElementsByClassName('mdc-radio__native-control')
            for (let i = 0; i < inputs.length; i++) {
                if(i%2 >0){
                    document.getElementsByClassName('mdc-radio__native-control')[i].click()
                }
            }
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/target-audience-content?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-checkbox__native-control')[5].click()
            document.getElementsByClassName('mdc-radio__native-control')[1].click()
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/news-declaration?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[0].click()
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/regulated-health-apps?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-checkbox__native-control')[2].click()
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/government-apps?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[1].click()
        }
    } catch (e) {

    }
}