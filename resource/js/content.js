var jquery = '<script src="' + chrome.extension.getURL('resource/js/jquery-3.2.1.min.js') + '" ></script>';
$('head').append(jquery);




var getProductJson = function() {
    return {
        "product": {
            "name": "",
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
};




if (window.location.hostname == "www.aliexpress.com") {

    var name = $(".product-title").length > 0 ? $(".product-title")[0].innerHTML : '';

    var description = $(".product-overview").length  > 0 ? $(".product-overview")[0].innerHTML : '';

    var short_name = '';
    if ($('span:contains("SPECIFICATIONS")').length > 0) {
        $('span:contains("SPECIFICATIONS")')[0].click();
        short_name = ($(".product-specs").length > 0) ? $(".product-specs")[0].innerHTML : '';
    }



    var minPrice = '';
    var maxPrice = '';
    var price = $(".product-price-value").length  > 0 ? $(".product-price-value")[0].innerHTML : '';

    var color =  $(".sku-property-image").map(function() {
                    return {'image': $(this).find('img').first().attr('src'), 'color' : $(this).find('img').first().attr('title')};
                }).get();
    var images = $(".images-view-item").map(function() {
                    return $(this).find('img').first().attr('src');
                }).get();

    var review_star = $(".overview-rating-average").length  > 0 ? $(".overview-rating-average")[0].innerHTML : '';
    var review_count = $(".product-reviewer-reviews").length  > 0 ? $(".product-reviewer-reviews")[0].innerHTML : '';

    var sold = $(".product-reviewer-sold").length  > 0 ? $(".product-reviewer-sold")[0].innerHTML : '';

    var quantity = $(".product-quantity-tip").length  > 0 ? $(".product-quantity-tip")[0].innerHTML : '';

    var shipping = $(".product-shipping-price").length  > 0 ? $(".product-shipping-price")[0].innerHTML : '';

    var originUrl = window.location;
    var vendor = $(".shop-name").length  > 0 ? $(".shop-name").find('a').first()[0].innerText : '';
    var vendorUrl = $(".shop-name").length  > 0 ? $(".shop-name").find('a').first()[0].href : '';


    getProductJson = function() {
        return {
            "product": {
                "name": name,
                "short_description": short_name,
                "description": description,

                'color' : color,
                "price": price,
                'quantity' : quantity,

                "review_star": review_star,
                "review_count": review_count,

                "sold": sold,

                "images" : images,
                'shipping' : shipping,

                'vendor' : vendor,
                'originUrl' : originUrl,
                'vendorUrl' : vendorUrl
            }
        };
    };
}


function PopupCenter(pageURL, title,w,h) {
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);

}


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.showProductDiv == true) {
        PopupCenter();
    }
});






