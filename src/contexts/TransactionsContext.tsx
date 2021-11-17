import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

type TransactionsProviderProps = {
  children: React.ReactNode;
};

type Transaction = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
};

// type TransactionInput = {
//   title: string;
//   type: string;
//   category: string;
//   amount: number;
// };

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

// type TransactionInput = Pick<
//   Transaction,
//   "amount" | "category" | "title" | "type"
// >;

type TransactionContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider(props: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post<{ transaction: Transaction }>(
      "transactions",
      {
        transaction: { ...transactionInput, createdAt: new Date() },
      }
    );

    const { transaction } = response.data;

    console.log(transaction);

    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("transactions")
      .then((response) => {
        if (response.status !== 200)
          alert("Não foi possível obter as transações");

        setTransactions(response.data.transactions);
      });
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {props.children}
    </TransactionsContext.Provider>
  );
}
