import express from "express";
import { transfer } from "./Transaction_service";

const app = express();

app.use(express.json());

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
