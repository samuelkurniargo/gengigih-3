let transactions = [
  {
    transactionId: "123456799",
    sourceId: "12345",
    destinationId: "67890",
    amount: 5.0,
    timestamp: "2023-06-01",
  },
];

export function createTransaction(sourceId, destinationId, amount) {
  const transaction = {
    transactionId: generateTransactionId(),
    sourceId,
    destinationId,
    amount,
    timestamp: new Date().toISOString(),
  };
  transactions.push(transaction);
  return transaction;
}
export function getAllTransactions() {
    return transactions;
  }

export function generateTransactionId() {
  return Math.random().toString(36).substring(2, 9);
}
