const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");
menuToggle.addEventListener("click", () => {navbar.classList.toggle("active");});
function validateContactForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "none";
    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        alert("Please fill in all fields!");
        return false;
    }
    if (!email.value.includes("@")) {
        alert("Please enter a valid email address!");
        return false;
    }
    successMessage.style.display = "block";
    name.value = "";
    email.value = "";
    message.value = "";
    return false;
}
