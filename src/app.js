import express from "express";
import userRoutes from "./routes/userRouters.js";

const app = express();

/* Permite que o Express entenda
dados JSON no corpo da requisição */
app.use(express.json());

/**Define o endpoint (prefixo) /users para as
 * rotas de usuários
 */
app.use("/users", userRoutes);

export default app;