//BandCamp Date Sort Script//


//function which sorts parent noded by child nodes nested text///////////////////
function sortUsingNestedText(parent, childSelector, keySelector, sort = "desc") {
  var items = parent.children(childSelector).sort(function(a, b) {
    var vA = $(keySelector, a).text();
    var vB = $(keySelector, b).text();
    if (sort == "desc") {
      return (vA > vB) ? -1 : (vA < vB) ? 1 : 0;
    } else if (sort == "asc") {
      return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
    }
  });
  parent.append(items);
}
/////////////////////////////////////////////////////////////////////////////////


//function for scrolling the page all the way down////////
var lastScrollHeight = 0;
//define autoscroll function
function autoScroll() {
  var sh = document.documentElement.scrollHeight;
  if (sh != lastScrollHeight) {
    lastScrollHeight = sh;
    document.documentElement.scrollTop = sh;
  }
}
