//BandCamp Date Sort Script//

//regular expression for finding dates in the titles of shows
var dateRegex = /([12]\d{3}.(0[1-9]|1[0-2]).(0[1-9]|[12]\d|3[01]))/;

//function which sorts parent noded by child nodes nested text///////////////////
function sortUsingNestedText(parent, childSelector, keySelector) {
  var items = parent.children(childSelector).sort(function(a, b) {
    var vA = $(keySelector, a).text();
    var vB = $(keySelector, b).text();
    var vC = '';
    var vD = '';
    if (vA.match(dateRegex)) {
      var vC = vA.match(dateRegex)[0];
    } else {
      vC = vA;
    }
    if (vB.match(dateRegex)) {
      var vD = vB.match(dateRegex)[0];
    } else {
      vD = vB;
    }

    console.log(vC + '\n' + vD);
    return (vC > vD) ? -1 : (vC < vD) ? 1 : 0;
  });
  parent.append(items);
}



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
