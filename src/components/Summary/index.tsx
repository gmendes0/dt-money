import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import totalIMG from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "deposit":
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
          break;
        case "withdraw":
          acc.withdraw += transaction.amount;
          acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="entradas" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="saídas" />
        </header>

        <strong>
          {summary.withdraw > 0 && "- "}
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIMG} alt="total" />
        </header>

        <strong>
          {new Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
