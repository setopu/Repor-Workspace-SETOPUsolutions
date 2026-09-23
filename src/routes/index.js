import { Router } from "express";

const router = Router();

const hora = new Date().toLocaleTimeString("es-CO");

router.get("/", (req, res) => {
    res.render("index", {
        etiqueta: "SETOPU solutions - Inicio",
        hora: hora
    });
});

router.get("/contactos", (req, res) => {
    res.render("contactos", {
        etiqueta: "Contacto",
        hora: hora
    });
});

router.get("/sobre_nosotros", (req, res) => {
    res.render("sobre_nosotros", {
        etiqueta: "Sobre Nosotros"
    });
});

router.get("/login", (req, res) => {
    res.render("login", {
        etiqueta: "Iniciar Sesión",
        mensaje: null
    });
});

router.post("/login", (req, res) => {
    const { usuario, contrasena } = req.body;

    if (usuario === "admin" && contrasena === "1234") {
        return res.redirect("/menu");
    } else {
        return res.render("login", {
            etiqueta: "Iniciar Sesión",
            mensaje: "Usuario o contraseña incorrectos"
        });
    }
});

router.get("/menu", (req, res) => {
    res.render("menu", {
        etiqueta: "Menú Principal"
    });
});

export default router;