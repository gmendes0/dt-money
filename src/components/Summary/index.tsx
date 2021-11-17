import { useContext } from "react";
import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import totalIMG from "../../assets/total.svg";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="entradas" />
        </header>

        <strong>
          {transactions.reduce((acc: number = 0, transaction) => {
            if (transaction.type === "deposit") return acc + transaction.amount;

            return acc;
          }, 0)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeIMG} alt="saídas" />
        </header>

        <strong>R$ 1500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIMG} alt="total" />
        </header>

        <strong>R$ 2600,00</strong>
      </div>
    </Container>
  );
}
