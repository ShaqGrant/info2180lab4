var loser = null;  

window.onload = function() {
    $("start").onclick = Click;
    $("end").onmouseover = End;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
    document.body.observe("mousemove", onBody);   
};


function onBody(event) {
    if (loser === false && event.element() == document.body) {
        overBoundary(event);
    }
}


function overBoundary(event) {
    if (loser === false) {
        loser = true;
        $("status").textContent = "You Lose!";
        var boundaries = $$("div#maze div.boundary");
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].addClassName("youlose");
        }
        event.stop();  
    }
}


function Click() {
    loser = false;
    $("status").textContent = "Start";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}


function End() {
    if (loser === false) {
        $("status").textContent = "You win!";
    }
    event.stop();
}