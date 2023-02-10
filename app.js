document.addEventListener("scroll", () => {
    const scroll = window.scrollY;


    /* hero title */
    const titleScroll = scroll / 1.4;

    const SecOneLeft = document.querySelectorAll(".sec-one-left");
    const SecOneRight = document.querySelectorAll(".sec-one-right");
    
    for(i=0; i<SecOneRight.length; i++) {
        if(scroll < 500) {
            SecOneRight[i].style.transform = `translate(${titleScroll}px)`;
            SecOneLeft[i].style.transform = `translate(${-titleScroll}px)`;
        }
    }


    const SecOneAll = document.querySelectorAll(".sec-one-hero-h1");

    for(i=0; i < SecOneAll.length; i++) {

        if(scroll < 500) {
            SecOneAll[i].style.opacity = 1 - (scroll/400);
        }
    }


    /* go up btn */

    const upBTN = document.querySelector(".go-up-btn");

    if(scroll > 400) {
        upBTN.classList.add("go-up-btn-active");
    } else {
        upBTN.classList.remove("go-up-btn-active");
    }


    /* comments on sec 3 */

    const commentOne = document.querySelector(".sec-three-comment-one");
    const commentTwo = document.querySelector(".sec-three-comment-two");

    const commentsScroll = (scroll - 1200) / 1.4;
    console.log(commentsScroll)

    if(commentsScroll > -300 && commentsScroll < 400) {
        commentOne.style.transform = `translate(${commentsScroll}px) rotate(${-20 + (commentsScroll / 4)}deg)`;
        commentTwo.style.transform = `translate(${-commentsScroll}px) rotate(${10 + (commentsScroll / 4)}deg)`;
    }
})


/* waiting to be called by goUpBTN */
function goUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
