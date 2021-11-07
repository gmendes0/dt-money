import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import totalIMG from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeIMG} alt="entradas" />
        </header>

        <strong>R$ 4100,00</strong>
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
