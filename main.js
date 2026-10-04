/* =================================================== */
/* LÓGICA Y ANIMACIONES - FABIÁN CRISANTO              */
/* =================================================== */

window.addEventListener("DOMContentLoaded", () => {

    // 1. SALUDO DINÁMICO
    const saludodinamicoElemento = document.getElementById("saludo-dinamico");
    const horaActual = new Date().getHours();

    if (horaActual >= 6 && horaActual < 12) {
        saludodinamicoElemento.textContent = "☀️ ¡Muy buenos días!";
    } else if (horaActual >= 12 && horaActual < 20) {
        saludodinamicoElemento.textContent = "🌆 ¡Hola, Buenas tardes!";
    } else {
        saludodinamicoElemento.textContent = "🌙 ¡Buenas noches!";
    }

    // 2. ANIMACIONES GSAP
    gsap.from(".bloque-menu", {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "bounce.out",
        delay: 0.1
    });

    gsap.from(".bloque-contenido, .bloque-formulario, .bloque-footer", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
    });

    // 3. VALIDACIÓN DEL FORMULARIO DE REGISTRO! 
    const formulario = document.getElementById("form-registro");
    const mensajeEstado = document.getElementById("mensaje-estado");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombreVal = document.getElementById("nombre").value.trim();
        const emailVal = document.getElementById("email").value.trim().toLowerCase();
        const telefonoVal = document.getElementById("telefono").value.trim();

        if (nombreVal.length < 3) {
            mensajeEstado.textContent = "❌ Escribe tu nombre completo.";
            mensajeEstado.className = "mensaje-error";
            return;
        }

        const regexGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!regexGmail.test(emailVal)) {
            mensajeEstado.textContent = "❌ Usa un correo de Gmail válido.";
            mensajeEstado.className = "mensaje-error";
            return;
        }

        const regexTelefonoEsp = /^[6789]\d{8}$/;
        if (!regexTelefonoEsp.test(telefonoVal)) {
            mensajeEstado.textContent = "❌ Introduce un número de teléfono español válido.";
            mensajeEstado.className = "mensaje-error";
            return;
        }

        mensajeEstado.textContent = `¡Registro exitoso, ${nombreVal}! 🎉`;
        mensajeEstado.className = "mensaje-exito";
        formulario.reset();
    });
});
