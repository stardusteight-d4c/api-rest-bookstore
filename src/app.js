import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on('error', console.log.bind(console, ' // Database Connection: Erro de conexão'));
db.once('open', () => {
    console.log('// Database Connection: conexão bem sucedida');
})

const app = express();
app.use(express.json());
routes(app);

export default app;
