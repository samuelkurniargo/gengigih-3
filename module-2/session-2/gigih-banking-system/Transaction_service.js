import { getCustomer } from "./Customer_model.js";

import { createTransaction, getAllTransactions } from "./Transaction_model.js";

export function transfer(sourceId, destinationId, amount) {
  let sourceAccount = getCustomer(sourceId);
  let destinationAccount = getCustomer(destinationId);

  if (!sourceAccount || !destinationAccount) {
    throw new Error("Invalid source or destination account");
  }
  if (sourceAccount.balance < amount) {
    throw new Error("Insufficient balance in the source account");
  }
  sourceAccount.balance -= amount;
  destinationAccount.balance += amount;

  createTransaction(
    sourceAccount.customerId,
    destinationAccount.destinationId,
    amount
  );
  return;
}
export const getAllTransactionsData = () => {
  return getAllTransactions();
};
