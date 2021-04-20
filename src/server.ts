import express from "express";
import "./database"
import { routes as settingRoutes } from "./routes/SettingsRoute";

const app = express();

app.get("/", (_, response) => {
    return response.json({ msg: "Aplicação básica de node ts" })
});

app.use(express.json());

app.use(settingRoutes);

app.listen(4200, () => console.log("Servidor funcionando na porta 4200"));
