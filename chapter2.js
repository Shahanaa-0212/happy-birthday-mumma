const intro = document.getElementById("intro");

const video = document.getElementById("birthdayVideo");

// Show intro for 3 seconds

setTimeout(() => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.opacity = "0";

setTimeout(()=>{

    intro.style.display = "none";

    video.style.visibility = "visible";

    video.style.opacity = "1";

    video.play().catch(error => {

    console.log(error);

});

},1000);

    },1000);

},3000);

// When the birthday video ends

video.addEventListener("ended",()=>{

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href="ending.html";

    },1000);

});