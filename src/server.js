import express, {json} from "express";
import cors from "cors";
import saveImageRoute from "./routes/saveImageRoute.js";

const app = express();

app.use(cors());
app.use(json());

app.use(saveImageRoute);

app.listen(5000,()=>console.log(`Servidor rodando na porta ${5000}`));
