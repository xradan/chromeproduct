/*$(document).ready(function(){
   alert('working');
  chrome.runtime.sendMessage({type: "getProduct"}, function(jsonProduct) {
       if(typeof jsonProduct == "undefined") {
           // That's kind of bad
           alert('There is no Product loaded');
       } else {
           //alert( JSON.stringify(jsonProduct));
           //alert(jsonProduct.product.name);
           $('.js-name').val(jsonProduct.product.name);
           $('.js-description').val(jsonProduct.product.short_description + '<br>' +  jsonProduct.product.description);
           $('.js-show').text( JSON.stringify(jsonProduct));
       }
   });
});*/