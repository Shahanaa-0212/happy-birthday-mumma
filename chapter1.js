const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click",()=>{

    document.body.classList.add("fade-out");

    setTimeout(()=>{

        window.location.href="chapter2.html";

    },800);

});