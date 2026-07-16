const playBtn = document.getElementById("playBtn");

const video = document.getElementById("introVideo");

const introMusic = document.getElementById("introMusic");


const videoSection = document.getElementById("videoSection");

const loginSection = document.getElementById("loginSection");

const welcomeSection = document.getElementById("welcomeSection");

const profilePage = document.getElementById("profilePage");

const welcomeText = document.getElementById("welcomeText");

const continueBtn = document.getElementById("continueBtn");

const userName = document.getElementById("userName");

const welcomeContent = document.querySelector(".welcome-content");


// Show login after the 4-second intro

window.addEventListener("load", () => {

    introMusic.play().catch(() => {

        console.log("Autoplay blocked");

    });

    setTimeout(() => {

        videoSection.style.opacity = "0";

        setTimeout(() => {

            videoSection.style.display = "none";

            introMusic.pause();

            introMusic.currentTime = 0;

            loginSection.style.display = "flex";

        }, 800);

    }, 4000);

});

continueBtn.addEventListener("click",()=>{

    const name = userName.value.trim();

    if(name===""){

        alert("Please enter your name ❤️");

        return;

    }

    loginSection.style.display = "none";

    welcomeSection.style.display = "flex";

    welcomeText.innerHTML = name + " ❤️";

    // Fade in the welcome text

    setTimeout(()=>{

        welcomeContent.classList.add("showWelcome");

    },100);

    // After 3 seconds, fade it out

    setTimeout(()=>{

        welcomeContent.classList.remove("showWelcome");

    },3000);

    // After 4 seconds, hide welcome screen
    // (Later we'll replace this with the Profile Page)

    setTimeout(()=>{

        welcomeSection.style.display="none";

        profilePage.style.display = "block";

    },4000);

});

playBtn.addEventListener("click",()=>{

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href="chapter1.html";

    },800);

});