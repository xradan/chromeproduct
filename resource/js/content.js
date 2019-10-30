chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message.showPopup == true) {
        chrome.storage.sync.get('remoteUrl', function(result) {
            var url = prompt("Please enter the url to post or an email address", result.remoteUrl);
            if (url.length > 0) {
                chrome.storage.sync.set({'remoteUrl': url}, function () {
                    if (validateEmail(url)) {
                        window.open('mailto:' + url + '?subject=' + window.location.href + '&body=' + document.documentElement.innerHTML);
                    } else {
                        postPageData(url);
                    }

                });
            }
        });
    }
});


function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}



function postPageData(url)
{
    var windowHeight = screen.height-200;
    var windowWidth = screen.width-200;
    var left= (screen.width/2)-(windowWidth/2);
    var top = (screen.height/2)-(windowHeight/2);

    window.open("Post Page", "newWindow", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+windowWidth+', height='+windowHeight+', top='+top+', left='+left);

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", url);
    form.setAttribute("target", "newWindow");

    var hiddenField1 = document.createElement("input");
    hiddenField1.setAttribute("type", "hidden");
    hiddenField1.setAttribute("id", "pageUrl");
    hiddenField1.setAttribute("name", "pageUrl");
    hiddenField1.setAttribute("value", window.location.href);

    var hiddenField2 = document.createElement("input");
    hiddenField2.setAttribute("type", "hidden");
    hiddenField2.setAttribute("id", "pageBody");
    hiddenField2.setAttribute("name", "pageBody");
    hiddenField2.setAttribute("value", document.documentElement.innerHTML);

    form.appendChild(hiddenField1);
    form.appendChild(hiddenField2);

    document.body.appendChild(form);
    form.submit();

}





