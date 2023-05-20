setInterval(elementSelectFree, 1000);

function elementSelectFree() {
    const curUrl = document.location.href;

    try {
        if (document.location.href.indexOf('/app-content/privacy-policy?source=dashboard') > 0) {
            if (checkTonTaiContent("span", "Chính sách quyền riêng tư")) {
                const data = document.getElementsByClassName('mdc-text-field__input')[0].value;
                if (!data) {
                    document.getElementsByClassName('mdc-text-field__input')[0].value = 'https://lethanh98.com/ ';
                }
                if(data==='https://lethanh98.com/'){
                    ClickNext("div", "Lưu");
                    setTimeout(function () {
                        document.location.href = replaceAll(curUrl, 'app-content/privacy-policy?source=dashboard', 'app-content/testing-credentials?source=dashboard')
                    }, 2000);
                }
            }
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/testing-credentials?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[0].click()
            ClickNext("div", "Lưu");
            setTimeout(function () {
                document.location.href = replaceAll(curUrl, 'app-content/testing-credentials?source=dashboard', 'app-content/ads-declaration?source=dashboard')
            }, 2000);
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/ads-declaration?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[0].click()
            ClickNext("div", "Lưu");
            setTimeout(function () {
                document.location.href = replaceAll(curUrl, 'app-content/ads-declaration?source=dashboard', 'app-content/content-rating-overview?source=dashboard')
            }, 2000);
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/content-rating-overview?source=dashboard') > 0) {
            ClickNext("div", "Bắt đầu trả lời bảng câu hỏi");

            document.getElementsByClassName('mdc-text-field__input')[0].value = 'lethanh9398@gmail.com ';
            document.getElementsByClassName('mdc-radio__native-control')[2].click()
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/content-rating-iarc-questionnaire?source=dashboard') > 0) {
            const data = document.getElementsByClassName('mdc-text-field__input')[0].value;
            if(!data){
                document.getElementsByClassName('mdc-text-field__input')[0].value = 'lethanh9398@gmail.com ';
                document.getElementsByClassName('mdc-radio__native-control')[2].click()
            }
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
            setTimeout(function () {
                ClickNext("div", "Lưu");
            }, 2000);
            setTimeout(function () {
                ClickNext("div", "Tiếp theo")
            }, 2000);
            setTimeout(function () {
                ClickNext("div", "Lưu");
            }, 2000);

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
                    setTimeout(function () {
                        ClickNext("div", "Tiếp theo")
                    }, 2000);
                } catch (e) {
                }
            }
            if (checkTonTaiContent("span", "Mức phân loại nội dung")) {
                try {
                    var element = document.getElementsByClassName('mdc-checkbox__native-control')[5]
                    if (!element.checked) {
                        element.click();
                    }
                    setTimeout(function () {
                        ClickNext("div", "Tiếp theo")
                    }, 2000);
                } catch (e) {
                }
            }

            if (checkTonTaiContent("span", "Sự hiện diện trong Cửa hàng Play")) {
                try {
                    document.getElementsByClassName('mdc-radio__native-control')[1].click()
                    setTimeout(function () {
                        ClickNext("div", "Tiếp theo");
                    }, 2000);
                } catch (e) {
                }
            }
            if (checkTonTaiContent("span", "Dưới đây là những thông tin bạn đã cho chúng tôi biết")) {
                try {
                    setTimeout(function () {
                        ClickNext("div", "Lưu")
                        document.location.href = replaceAll(curUrl, 'app-content/target-audience-content?source=dashboard', 'app-content/news-declaration?source=dashboard')
                    }, 2000);
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
                  setTimeout(function () {
                      ClickNext("div", "Lưu");
                      document.location.href = replaceAll(curUrl, 'app-content/news-declaration?source=dashboard', 'app-content/regulated-health-apps?source=dashboard')
                }, 2000);

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
            setTimeout(function () {
                ClickNext("div", "Lưu");
                document.location.href = replaceAll(curUrl, 'app-content/regulated-health-apps?source=dashboard', 'app-content/data-privacy-security?source=dashboard')
            }, 2000);
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/data-privacy-security?source=dashboard') > 0) {
            setTimeout(function () {
                ClickNext("span", "Tiếp theo")
            }, 1000);
            setTimeout(function () {
                document.getElementsByClassName('mdc-radio__native-control')[4].click();
            }, 2000);
            setTimeout(function () {
                ClickNext("span", "Tiếp theo")
            }, 3000);
            setTimeout(function () {
                ClickNext("div", "Lưu")
            }, 4000);
            setTimeout(function () {
                document.location.href = replaceAll(curUrl, 'app-content/data-privacy-security?source=dashboard', 'app-content/government-apps?source=dashboard')
            }, 5000);
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('/app-content/government-apps?source=dashboard') > 0) {
            document.getElementsByClassName('mdc-radio__native-control')[1].click();
            setTimeout(function () {
                ClickNext("div", "Lưu")
            }, 1000);
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
function replaceAll(data, keyWorkReplace, wordReplace) {
    return data.split(keyWorkReplace).join(wordReplace);
}
