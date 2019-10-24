

function getDefaultProductJson() {
    return {
        "product": {
            "name": document.getElementsByClassName("product-title")[0].innerHTML,
            "body_html": "<strong>Good snowboard!</strong>",
            "vendor": "Burton",
            "product_type": "Snowboard",
            "variants": [
                {
                    "option1": "Blue",
                    "option2": "155"
                },
                {
                    "option1": "Black",
                    "option2": "159"
                }
            ],
            "options": [
                {
                    "name": "Color",
                    "values": [
                        "Blue",
                        "Black"
                    ]
                },
                {
                    "name": "Size",
                    "values": [
                        "155",
                        "159"
                    ]
                }
            ]
        }
    };
}

function getAliexpressProductJson() {
    return {
        "product": {
            "title": document.getElementsByClassName("product-title")[0].innerHTML,
            "short_description": document.getElementsByClassName("product-specs")[0].innerHTML,
            "description": document.getElementsByClassName("product-overview")[0].innerHTML,
            "vendor": "Burton",
            "product_type": "Snowboard",
            "variants": [
                {
                    "option1": "Blue",
                    "option2": "155"
                },
                {
                    "option1": "Black",
                    "option2": "159"
                }
            ],
            "options": [
                {
                    "name": "Color",
                    "values": [
                        "Blue",
                        "Black"
                    ]
                },
                {
                    "name": "Size",
                    "values": [
                        "155",
                        "159"
                    ]
                }
            ]
        }
    };
}


if (window.location.hostname == 'www.aliexpress.com') {
    chrome.runtime.sendMessage({type: "setProduct", Product: getAliexpressProductJson()});
} else if (window.location.hostname == 'www.1688.com') {

} else {
    chrome.runtime.sendMessage({type: "setProduct", Product: getDefaultProductJson()});
}
