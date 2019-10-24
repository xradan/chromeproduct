chrome.runtime.sendMessage({type: "getProduct"}, function(jsonProduct) {
    if(typeof jsonProduct == "undefined") {
        // That's kind of bad
        alert('11111');
    } else {
        alert( JSON.stringify(jsonProduct));
    }
});