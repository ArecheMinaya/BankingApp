import { AccountType } from "./account";
import { Currency } from "./currency";
import { Movement } from "./movement";

// Tipo para la cuenta bancaria
export interface AccountInformation {
  id: number;
  accountNumber: string;
  accountType: AccountType;
  accountBalance: number;
  accountCurrency: Currency;
  maskedNumber: string;
  cardNumber: string;
  cardHolder: string;
  cardCVV: string;
}

// Modelo principal que agrupa la cuenta y los movimientos
export interface AccountDetailModel {
  account: AccountInformation;
  recentMovements: Movement[];
}
