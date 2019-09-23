//BandCamp Date Sort Script//

//regular expression for finding dates in the titles of shows
var dateRegex = /([12]\d{3}.(0[1-9]|1[0-2]).(0[1-9]|[12]\d|3[01]))/;

//function which sorts parent noded by child nodes nested text///////////////////
function sortUsingNestedText(parent, childSelector, keySelector) {
  var items = parent.children(childSelector).sort(function(a, b) {
    var vA = $(keySelector, a);
    var vB = $(keySelector, b);
    console.log(vA[0].innerText);
    console.log(vB[0].innerText);
    var esc_vA = decodeURI(vA[0].innerText);
    var esc_vB = decodeURI(vB[0].innerText);
    //console.log(esc_vA + '\n' + esc_vB)
    var vC = '';
    var vD = '';
    if (esc_vA.match(dateRegex)) {
      vC = esc_vA.match(dateRegex)[0];
    } else {
      vC = esc_vA;
    }
    if (esc_vB.match(dateRegex)) {
      vD = esc_vB.match(dateRegex)[0];
    } else {
      vD = esc_vB;
    }

    // console.log(vC + '\n' + vD);
    return (vC < vD) ? -1 : (vC > vD) ? 1 : ;
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
