
//responsive

function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "top-menu") {
        x.className += " responsive";
    } else {
        x.className = "top-menu";
    }
}

//page loading from top after refreshing

window.onbeforeunload = function(){
    window.scrollTo(0,0);
};
