setInterval(elementSelectFree, 1000);

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
                if (i % 2 > 0) {
                    document.getElementsByClassName('mdc-radio__native-control')[i].click()
                }
            }
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/target-audience-content?source=dashboard') > 0) {
            if (checkTonTaiContent("span", "Độ tuổi mục tiêu")) {
                try {
                    var element = document.getElementsByClassName('mdc-checkbox__native-control')[5]
                    if (!element.checked) {
                        element.click();
                    }
                    ClickNext("div", "Tiếp theo")
                } catch (e) {
                }
            }

            if (checkTonTaiContent("span", "Sự hiện diện trong Cửa hàng Play")) {
                try {
                    document.getElementsByClassName('mdc-radio__native-control')[1].click()
                } catch (e) {
                }
            }
            if (checkTonTaiContent("span", "Dưới đây là những thông tin bạn đã cho chúng tôi biết")) {
                try {
                    ClickNext("div", "Lưu")
                } catch (e) {
                }
            }
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/news-declaration?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[0].click()
            try {
                ClickNext("div", "Lưu")
            } catch (e) {
            }
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/regulated-health-apps?source=dashboard') > 0) {
            var element = document.getElementsByClassName('mdc-checkbox__native-control')[2]
            if (!element.checked) {
                element.click();
            }
            ClickNext("div", "Lưu")
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/data-privacy-security?source=dashboard') > 0) {
            ClickNext("span", "Tiếp theo")
            document.getElementsByClassName('mdc-radio__native-control')[4].click();
            ClickNext("span", "Tiếp theo")
            ClickNext("div", "Lưu")
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/government-apps?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[1].click();
            ClickNext("div", "Lưu");
        }
    } catch (e) {

    }
}

function ClickNext(tagName, content) {
    const elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.trim() == content) {
            elements[i].click();
        }
    }
}

function checkTonTaiContent(tagName, content) {
    const elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent.trim() == content) {
            return true;
        }
    }
    return false;
}