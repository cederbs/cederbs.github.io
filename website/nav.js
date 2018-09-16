/*eslint-env browser*/
var xhrnav = new XMLHttpRequest();
xhrnav.open("GET", "elements/nav.html", true);
xhrnav.send();
xhrnav.onreadystatechange = function insertNav() {
    'use strict';
    if (xhrnav.readyState === 4 && xhrnav.status === 200) {
        document.getElementById("nav").innerHTML = xhrnav.responseText;
    }
};

var xhrfoot = new XMLHttpRequest();
xhrfoot.open("GET", "elements/footer.html", true);
xhrfoot.send();
xhrfoot.onreadystatechange = function insertFooter() {
    'use strict';
    if (xhrfoot.readyState === 4 && xhrnav.status === 200) {
        document.getElementById("foot").innerHTML = xhrfoot.responseText;
    }
};