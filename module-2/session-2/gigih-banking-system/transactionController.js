import express from "express";
import { transfer, getAllTransactionsData } from "./Transaction_service.js";

const app = express();

app.use(express.json());

app.get("/transaction", (req, res) => {
  const transaction = getAllTransactionsData();
  res.json({
    data: transaction,
  });
});

app.post("/transaction", (req, res) => {
  try {
    const { sourceAccount, destinationAccount, amount } = req.body;

    if (!sourceAccount || !destinationAccount || !amount) {
      throw new Error("Insufficient Parameter");
    }
    transfer(sourceAccount, destinationAccount, amount);
    res.status(201).json({ message: "Transaction created successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
