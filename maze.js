var loser = false;  // whether the user has hit a wall

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

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

function startClick() {
    loser = false;
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