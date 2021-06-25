document.addEventListener("DOMContentLoaded", () => {
    
    const button = document.getElementsByClassName("sayhi")[0];
    const reply = document.getElementsByClassName("second")[0];

    button.addEventListener("click", () => {
        reply.classList.toggle("hidden");
        button.innerHTML = button.innerHTML === "Done" ? "Say Hi" : "Done";
    })

})