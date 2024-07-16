import { Router } from "express";
import verificarAutenticacion from '../middlewares/autenticacion.js'
import {
    login,
    registro,
    actualizarEmail,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword,
    listarTiendas,
    listarproductosIDtienda,
    listarproductosporID,
    listarproductosporCategoria
} from "../controllers/administrador_controller.js";
const router =Router()


router.post('/registro',registro)
router.post('/login',login)
router.post('/recuperar-password',recuperarPassword)
router.get('/recuperar-password/:token',comprobarTokenPasword)
router.post('/nuevo-password/:token',nuevoPassword)
router.put('/administrador/actualizaremail',verificarAutenticacion,actualizarEmail)
router.put('/administrador/actualizarpassword',verificarAutenticacion,actualizarPassword)
router.get('/administrador/listartiendas',listarTiendas) 
router.get('/administrador/producto/listarproductos/:id',listarproductosporID) 
router.get('/administrador/productos/categoria/:Categoria',listarproductosporCategoria) 
router.get('/administrador/tienda/productos/:id_tienda',listarproductosIDtienda)
export default router