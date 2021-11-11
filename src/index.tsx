import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela",
          type: "deposit",
          category: "Desenvolvimento",
          amount: 2500,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Despezas",
          amount: 400,
          createdAt: new Date(),
        },
        {
          id: 3,
          title: "Internet",
          type: "withdraw",
          category: "Despezas",
          amount: 180,
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("transactions", () => this.schema.all("transaction"));

    this.post("transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      // data.id = Math.floor(Math.random() + new Date().getTime());

      schema.create("transaction", data);

      return data;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
