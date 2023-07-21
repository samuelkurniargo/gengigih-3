import express from "express";
import { getAllCustomersData } from "./User_service.js";

const app = express();

app.use(express.json());

app.get("/getCustomer", (req, res) => {
  const user = getAllCustomersData();
  res.json({
    data: user,
  });
});
