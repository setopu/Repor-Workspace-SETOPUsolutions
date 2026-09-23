import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Rutas
app.use(indexRouter);
app.use(authRouter);
// Archivos estáticos
app.use(express.static(join(__dirname, 'public')));
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});




