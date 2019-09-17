//This script is executed when the toolbar icon is clicked

//clicks the view all items button//////////////
var show_more = document.querySelector('.show-more') !== null;
if (show_more) {
  document.querySelector('.show-more').click();
} else {}


//scrolls to bottom of page exposing all items////////////
window.setInterval(autoScroll, 100);


//waits 8 seconds for scrolling to complete and then sorts shows//
setTimeout(function timer() {
  sortUsingNestedText($('.collection-grid'), "li", "div.collection-item-title", "desc");
}, 8000);


//waits 10 seconds and scrolls page all the way back to the top///
setTimeout(function timer2() {
  window.scrollTo(0, 0);
}, 10000);
