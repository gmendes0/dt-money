import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import closeIMG from "../../assets/close.svg";
import incomeIMG from "../../assets/income.svg";
import outcomeIMG from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const DEPOSIT = "deposit";
const WITHDRAW = "withdraw";

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState(DEPOSIT);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = { title, value, category, type };

    api.post("transactions", { data }).then((response) => {
      console.log(response);
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeIMG} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType(DEPOSIT)}
            isActive={type === DEPOSIT}
            activeColor="green"
          >
            <img src={incomeIMG} alt="entrada" />

            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType(WITHDRAW)}
            isActive={type === WITHDRAW}
            activeColor="red"
          >
            <img src={outcomeIMG} alt="saída" />

            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
