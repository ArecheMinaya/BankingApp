import { Currency } from "./currency";

export interface Movement {
  id: number;
  type: "debit" | "credit"; // Solo acepta "debit" o "credit"
  amount: number;
  date: string; // Formato ISO (Ej: "2023-06-01")
  customerName: string;
  currency: Currency;
}

export interface RecentMovements {
  recentMovements: Movement[];
}
