import { darken, transparentize } from "polished";
import styled from "styled-components";

type RadioBoxProps = {
  isActive: boolean;
  activeColor: "green" | "red";
};

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border-radius: var(--border-radius);
    border: 1px solid var(--input-border-color);
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }

    outline-color: var(--text-title);
  }

  button[type="submit"] {
    background: var(--green);
    margin-top: 1.5rem;
    height: 4rem;
    width: 100%;

    border: 0;
    border-radius: var(--border-radius);

    color: var(--white);
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;

    outline-color: var(--text-title);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  margin: 1rem 0;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--border-radius);
  border: 1px solid var(--input-border-color);

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "var(--background)"};

  transition: border 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")}; // var(--input-border-color)
  }

  img {
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--text-title);
  }
`;
