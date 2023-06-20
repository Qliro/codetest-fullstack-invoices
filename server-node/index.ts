import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { getInvoicesFromDB } from "./database";

const app: Express = express();
const port = 5046;
app.use(cors());

app.get("/invoices", async (req: Request, res: Response, next: NextFunction) => {
  const invoices = await getInvoicesFromDB();
  res.send(invoices);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Server Error");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
