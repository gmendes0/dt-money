import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("transactions", () => [
      {
        id: 1,
        title: "Desenvolvimento de Site",
        amount: 12000,
        type: "deposit",
        category: "Venda",
        createdAt: new Date(),
      },
    ]);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
