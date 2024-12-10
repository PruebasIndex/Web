const M = document.getElementById("menu");
const B = document.getElementById("bars");
let A;

B.addEventListener("click", function() {  
    if (!A) {
        M.style.transform = "translateY(0%)";
        M.style.transition = "transform .3s";
        B.className = "fa-solid fa-xmark"
    }

    else{
        M.style.transform = "translateY(-102%)";
        B.className = "fa-solid fa-bars";
    }

    A = !A;
});

document.addEventListener("click", function(e) {
    if (!M.contains(e.target) && !B.contains(e.target)) {
        M.style.transform = "translateY(-102%)";
        B.className = "fa-solid fa-bars";
        A = !A;
    }
});
