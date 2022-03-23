"use strict";

/* habilitando o CORS para outras conexões */
const cors    = require("cors");

const express = require("express"); /* express */
const axios   = require("axios");     /* axios */

const app     = express();

app.use(cors()); /* usa o cors */
app.get("/", async (req, res) => {
  /* a resposta é o response, { data } é o atributo data do response axios */
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    console.log(data);

    /* retorna a lista de users da API */
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen("4567");