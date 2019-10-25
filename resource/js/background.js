
// background.js
/*var jsonProduct = 0;
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
*/

chrome.browserAction.onClicked.addListener(function(tab) {
    alert('icon clicked');
    if (tab) {
        alert('222');
        chrome.tabs.sendMessage(tab.id, {showProductDiv: true});
    }
});

/*chrome.browserAction.onClicked.addListener(function(tab) {
    alert('1111');


});*/