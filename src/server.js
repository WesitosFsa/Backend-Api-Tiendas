import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routerAdministrador from './routers/administrador_routes.js';
import routerUsuario from './routers/usuario_routes.js';
import routerProducto from './routers/productos_routes.js';

const app = express();
dotenv.config();

const corsOptions = {
  origin: 'https://fronend-quito-tech.onrender.com/', // Cambia esto al dominio de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Server on");
});
app.use('/api', routerAdministrador);
app.use('/api', routerUsuario);
app.use('/api', routerProducto);

app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

export default app;
