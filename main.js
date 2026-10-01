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
        saludodinamicoElemento.textContent = "🌆 ¡Hola,Buenas tardes!";
    } else {
        saludodinamicoElemento.textContent = "🌙 ¡Buenas noches!";
    }

    // 2. ANIMACIONES GSAP
    gsap.from(".bloque-menu", {
        x: "-100vw",
        opacity: 0,
        duration: 1.8,
        ease: "elastic.out(1, 0.5)",
        delay: 0.1
    });

    // Seleccionamos las tarjetas restantes directamente
    gsap.from(".bloque-contenido, .bloque-foto, .bloque-educacion, .bloque-idiomas, .bloque-formulario, .bloque-footer", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.8
        
    });

    // 3. VALIDACIÓN DEL FORMULARIO DE REGISTRO
    const formulario = document.getElementById("form-registro");
    const mensajeEstado = document.getElementById("mensaje-estado");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombreVal = document.getElementById("nombre").value.trim();
        const emailVal = document.getElementById("email").value.trim().toLowerCase();
        const telefonoVal = document.getElementById("telefono").value.trim();

        // Regla 1: Nombre completo
        if (nombreVal.length < 3) {
            mensajeEstado.textContent = "❌ Por favor, escribe tu nombre y apellidos completos.";
            mensajeEstado.className = "mensaje-error";
            return;
        }

        // Regla 2: Gmail
        const regexGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!regexGmail.test(emailVal)) {
            mensajeEstado.textContent = "❌ El correo debe ser una dirección válida de Gmail (ejemplo@gmail.com).";
            mensajeEstado.className = "mensaje-error";
            return;
        }

        // Regla 3: Teléfono Español
        const regexTelefonoEsp = /^[6789]\d{8}$/;
        if (!regexTelefonoEsp.test(telefonoVal)) {
            mensajeEstado.textContent = "❌ Introduce un número de teléfono español válido (9 dígitos empezando por 6, 7, 8 o 9).";
            mensajeEstado.className = "mensaje-error";
            return;
        }

        // Registro exitoso
        mensajeEstado.textContent = `¡Registro exitoso, ${nombreVal}! Nos pondremos en contacto contigo pronto. 🎉`;
        mensajeEstado.className = "mensaje-exito";

        formulario.reset();
    });

});