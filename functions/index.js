const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// Routers
const usuarioRouter = require("./route/usuario");
const jabaRouter = require("./route/jaba");
const procesoRouter = require("./route/proceso");
const proceso = require("./model/proceso");
const app = express();
app.use(express.json());
app.use(cors());
// Rutas
app.use("/usuario", usuarioRouter);
app.use("/jaba", jabaRouter);
app.use("/proceso", procesoRouter);
const port = process.env.PORT || 8080;

exports.apiplanta = functions.https.onRequest(app);

