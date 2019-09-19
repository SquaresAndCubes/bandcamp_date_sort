//BandCamp Date Sort Script//

//regular expression for finding dates in the titles of shows
var dateRegex = /([12]\d{3}.(0[1-9]|1[0-2]).(0[1-9]|[12]\d|3[01]))/

//function which sorts parent noded by child nodes nested text///////////////////
function sortUsingNestedText(parent, childSelector, keySelector, sort = "desc") {
  var items = parent.children(childSelector).sort(function(a, b) {
    var vA = $(keySelector, a).text().match(dateRegex);
    var vB = $(keySelector, b).text().match(dateRegex);
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
