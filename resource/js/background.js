
// background.js
var jsonProduct = 0;
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "setProduct":
                jsonProduct = message.Product;
                break;
            case "getProduct":
                sendResponse(jsonProduct);
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);