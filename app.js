const modal = document.getElementById("birthdayModal");
const btn = document.getElementById("openModal");
const span = document.querySelector(".close");

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = () => {
    modal.style.display = "flex";
};

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = () => {
    modal.style.display = "none";
};

// Cuando el usuario hace clic fuera del modal, también lo cierra
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};