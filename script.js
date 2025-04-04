document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icon");

    icons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.classList.add("hovered");
        });

        icon.addEventListener("mouseleave", () => {
            icon.classList.remove("hovered");
        });
    });
});