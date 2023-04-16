setInterval(elementSelectFree, 2000);

function elementSelectFree() {
    try {
        if (document.location.href.indexOf('select-plan') > 0) {
            var spans = document.getElementsByTagName("span");
            for (let i = 0; i < spans.length; i++) {
                if (spans[i].textContent.trim() == 'Free') {
                    spans[i].click();
                }
                if (spans[i].textContent.trim() == 'Continue') {
                    spans[i].click();
                }
            }
        }
    } catch (e) {

    }
}

setInterval(ReviewDNSDelete, 2000);

function ReviewDNSDelete() {
    try {
        if (document.location.href.indexOf('confirm-scanned-records') > 0) {
            var buttons = document.getElementsByTagName("button");
            var buttonsDelete = null;
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].getAttribute('data-testid') == 'dns-record-form-delete-button') {
                    buttonsDelete = buttons[i];
                }
            }
            var spans = document.getElementsByTagName("span");
            var isOpenDeleteRecord = null;
            for (let i = 0; i < spans.length; i++) {
                if (spans[i].textContent.trim() == 'Are you sure you want to delete this record?') {
                    isOpenDeleteRecord = true;
                }
            }
            if (!isOpenDeleteRecord) {
                buttonsDelete.click()
            }
        }
    } catch (e) {

    }

    try {
        if (document.location.href.indexOf('confirm-scanned-records') > 0) {
            var buttons = document.getElementsByTagName("button");
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].getAttribute('data-testid') == 'dns-table-row-edit-link') {
                    if (buttons[i].getAttribute('aria-expanded') == 'false') {
                        buttonsEdit = buttons[i].click();
                    }
                }
            }

            var buttonsDelete = null;
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].getAttribute('data-testid') == 'dns-delete-modal-confirm-button') {
                    buttonsDelete = buttons[i];
                }
            }
            buttonsDelete.click()
        }
    } catch (e) {

    }
    try {
        if (document.location.href.indexOf('confirm-scanned-records') > 0) {
            var ipConfig = document.getElementById("ipv4_address").value

            if (ipConfig == '34.67.122.48' || ipConfig == '34.143.243.116' || ipConfig == '34.142.159.194') {
                var buttons = document.getElementsByTagName("button");
                for (let i = 0; i < buttons.length; i++) {
                    if (buttons[i].getAttribute('data-testid') == 'control-button') {
                        buttons[i].click();
                        const curUrl = document.location.href;
                        setTimeout(function () {
                            document.location.href = replaceAll(curUrl, 'confirm-scanned-records', 'recommendations')
                        }, 2000);
                    }
                }
            }
        }
    } catch (e) {

    }
}

setInterval(NameserverDirections, 2000);

function NameserverDirections() {
    try {
        if (document.location.href.indexOf('nameserver-directions') > 0) {
            var spans = document.getElementsByTagName("span");
            var doneNameservers = null;
            for (let i = 0; i < spans.length; i++) {
                if (spans[i].textContent.trim() == 'Done, check nameservers') {
                    doneNameservers = spans[i];
                }
            }
            setTimeout(function () {
                doneNameservers.click()
            }, 100);
        }
    } catch (e) {

    }
}


setInterval(allRecommendations, 3000);

function allRecommendations() {
    try {
        if (document.location.href.indexOf('/recommendations') > 0) {
            var spans = document.getElementsByTagName("span");
            for (let i = 0; i < spans.length; i++) {
                if (spans[i].textContent.trim() == 'Get started') {
                    setTimeout(function () {
                        spans[i].click();
                    }, 1000);
                }
            }

            var inputCheckBox = document.getElementsByTagName("input");
            for (let i = 0; i < inputCheckBox.length; i++) {
                if (inputCheckBox[i].getAttribute('type') == 'checkbox') {
                    var checkBox = inputCheckBox[i];
                    if (!checkBox.checked) {
                        checkBox.click()
                    }
                }
            }

            var button = document.getElementsByTagName("button");
            for (let i = 0; i < button.length; i++) {
                if (button[i].textContent.trim() == 'Save') {
                    if (document.getElementById("automatic_https_rewrites") || document.getElementById("always_use_https")) {
                        setTimeout(function () {
                            button[i].click();
                        }, 2000);
                    } else {
                        // case Auto Minify
                        var isOK = true;
                        var inputCheckBoxisOK = document.getElementsByTagName("input");
                        for (let i = 0; i < inputCheckBoxisOK.length; i++) {
                            if (inputCheckBoxisOK[i].getAttribute('type') == 'checkbox') {
                                if (!inputCheckBoxisOK[i].checked) {
                                    isOK = false;
                                }
                            }
                        }
                        if (isOK) {
                            setTimeout(function () {
                                button[i].click();
                            }, 6000);
                        }
                    }
                }
            }

            var spanFinish = document.getElementsByTagName("span");
            for (let i = 0; i < spanFinish.length; i++) {
                if (spanFinish[i].textContent.trim() == 'Finish') {
                    setTimeout(function () {
                        document.location.href = replaceAll(document.location.href, 'recommendations', 'ssl-tls')
                    }, 1000);
                }
            }
        }
    } catch (e) {

    }
}

setInterval(SSLConfig, 2000);

function SSLConfig() {
    var oneRecommenderSSL = null;
    var doneNameservers = null;

    try {
        if (document.location.href.indexOf('/ssl-tls') > 0) {
            var buttons = document.getElementsByTagName("input");
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].getAttribute('aria-labelledby') == 'ssl-recommender-title') {
                    oneRecommenderSSL = buttons[i];
                }
            }
            if (!oneRecommenderSSL.checked) {
                oneRecommenderSSL.click()
            }
        }
    } catch (e) {

    }

    try {
        if (document.location.href.indexOf('/ssl-tls') > 0) {
            var spans = document.getElementsByTagName("span");
            for (let i = 0; i < spans.length; i++) {
                if (spans[i].textContent.trim() == 'Flexible') {
                    doneNameservers = spans[i];
                }
            }
            doneNameservers.click()
        }
    } catch (e) {

    }

    try {
        if (document.location.href.indexOf('/ssl-tls') > 0) {

            setTimeout(function () {
                if (oneRecommenderSSL.checked && doneNameservers)
                    document.location.href = replaceAll(document.location.href, 'ssl-tls', 'security/settings')
            }, 3000);


        }
    } catch (e) {

    }
}

setInterval(setSecurityLevel, 2000);

function setSecurityLevel() {
    try {
        if (document.location.href.indexOf('/security/settings') > 0) {
            var buttonsListLevel = document.getElementById("downshift-0-toggle-button");
            if (buttonsListLevel.textContent != 'Essentially Off') {
                var lis = document.getElementsByTagName("li");
                var levelEssentially = null;
                for (let i = 0; i < lis.length; i++) {
                    if (lis[i].textContent.trim() == 'Essentially Off') {
                        levelEssentially = lis[i];
                    }
                }
                if (levelEssentially) {
                    setTimeout(function () {
                        levelEssentially.click()
                    }, 1000);

                } else {
                    buttonsListLevel.click()
                }
            } else {
                setTimeout(function () {
                    document.location.href = replaceAll(document.location.href, 'security/settings', 'caching/configuration')
                }, 1000);
            }
        }
    } catch (e) {

    }
}


setInterval(browserCacheLevel, 2000);

function browserCacheLevel() {
    try {
        if (document.location.href.indexOf('/caching/configuration') > 0) {
            var buttonsListLevel = document.getElementById("downshift-0-toggle-button");
            if (buttonsListLevel.textContent != 'Respect Existing Headers') {
                var lis = document.getElementsByTagName("li");
                var levelEssentially = null;
                for (let i = 0; i < lis.length; i++) {
                    if (lis[i].textContent.trim() == 'Respect Existing Headers') {
                        levelEssentially = lis[i];
                    }
                }
                if (levelEssentially) {
                    setTimeout(function () {
                        levelEssentially.click()
                    }, 1000);
                } else {
                    buttonsListLevel.click()
                }
            }
        }
    } catch (e) {

    }
}

function replaceAll(data, keyWorkReplace, wordReplace) {
    return data.split(keyWorkReplace).join(wordReplace);
}
