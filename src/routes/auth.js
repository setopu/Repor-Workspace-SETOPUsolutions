import { Router } from "express";

const router = Router();

// Ruta POST login
router.post("/api/login", (req, res) => {
    const { usuario, contrasena } = req.body;

    console.log("Usuario recibido:", usuario);
    console.log("Contraseña recibida:", contrasena);

    if (usuario === "admin" && contrasena === "1234") {
        res.redirect("/dashboard");
    } else {
        res.send("Usuario o contraseña incorrectos");
    }
});

router.get("/registro", (req, res) => {
    res.send("Aquí formulario registro.");
});

router.get("/recuperar-password", (req, res) => {
    res.send("Recuperar password.");
});

router.get("/recuperar-usuario", (req, res) => {
    res.send("Recuperar usuario.");
});

router.get("/dashboard", (req, res) => {
    res.send("Bienvenido al sistema");
});

export default router;