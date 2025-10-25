document.addEventListener("DOMContentLoaded", function () {


    alert("Welcome to the Sign in page!");

    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "orange";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "";
        });
    });

});
