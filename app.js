const num = document.querySelector("h1");
for (let i = 0; i <= 100; i++) {
    setTimeout(function() {
        let counter = i;
        num.innerText = i + "*";

        
        if(counter === 100) {
            const fadeOut = document.querySelectorAll(".fade");
        
            for(i=0; i<fadeOut.length; i++) {
                fadeOut[i].classList.add("out");
            }
        }


        setTimeout(function() {
            if(counter === 100) {
                if (screen.width <= 425) {
                    document.location = "mobile/index.html";
                } else {
                    document.location = "desktop/index.html";
                }
              }
        }, 1000);
    },i * 10);
}