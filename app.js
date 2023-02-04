function burger() {
    let hamburger = document.querySelector(".hamburger");
    let list = document.querySelector(".header-nav-menu");


    hamburger.addEventListener("click", function() {
        list.classList.toggle("on");
    })


    let link = document.querySelectorAll(".header-nav-link");

    for(i=0; i<link.length; i++) {
        link[i].addEventListener("click", function() {
            list.classList.remove("on")
        })
    }
}

burger();

