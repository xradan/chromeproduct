
chrome.browserAction.onClicked.addListener(function(tab) {
    if (tab) {
        chrome.tabs.sendMessage(tab.id, {showPopup: true});
    }
});
