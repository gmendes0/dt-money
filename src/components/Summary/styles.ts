import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: calc(
    -2.5rem - 5.19025rem
  ); // padding do main - metade do tamanho do card

  div {
    background: var(--shape);
    padding: 1.574375rem 2rem;
    border-radius: var(--border-radius);
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 1rem;
    }

    strong {
      display: inline-block;
      margin-top: 1.88125rem;
      font-size: 2.25rem;
      line-height: 3.375rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: var(--white);
    }
  }
`;
