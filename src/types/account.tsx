import { Currency } from "./currency";

export interface AccountType {
  accountTypeShortName: string;
  accountTypeName: string;
}
export interface Account {
  id: number;
  accountNumber: string;
  accountType: AccountType;
  accountBalance: number;
  accountCurrency: Currency;
  maskedNumber: string;
  customerName: string;
  bankName: string;
  alias: string;
}
export const accountsTest: Account[] = [
  {
    id: 1,
    accountNumber: "1234567890",
    accountType: {
      accountTypeShortName: "SAV",
      accountTypeName: "Cuenta de Ahorro",
    },
    accountBalance: 5000.0,
    accountCurrency: {
      currency: "USD",
      currencyLabel: "$",
    },
    maskedNumber: "****67890",
    customerName: "John Doe",
    bankName: "Banco Popular",
    alias: "Cuenta Principal",
  },
  {
    id: 2,
    accountNumber: "0987654321",
    accountType: {
      accountTypeShortName: "CHK",
      accountTypeName: "Cuenta Corriente",
    },
    accountBalance: 3200.5,
    accountCurrency: {
      currency: "DOP",
      currencyLabel: "RD$",
    },
    maskedNumber: "****54321",
    customerName: "Jane Smith",
    bankName: "Banreservas",
    alias: "Cuenta de Nómina",
  },
  {
    id: 3,
    accountNumber: "1122334455",
    accountType: {
      accountTypeShortName: "SAV",
      accountTypeName: "Cuenta de Ahorro",
    },
    accountBalance: 8750.75,
    accountCurrency: {
      currency: "EUR",
      currencyLabel: "€",
    },
    maskedNumber: "****34455",
    customerName: "Carlos Pérez",
    bankName: "Banco Santander",
    alias: "Ahorros Europa",
  },
  {
    id: 4,
    accountNumber: "6677889900",
    accountType: {
      accountTypeShortName: "INV",
      accountTypeName: "Cuenta de Inversión",
    },
    accountBalance: 15000.0,
    accountCurrency: {
      currency: "USD",
      currencyLabel: "$",
    },
    maskedNumber: "****89900",
    customerName: "Laura Martínez",
    bankName: "JP Morgan",
    alias: "Inversión 2024",
  },
  {
    id: 5,
    accountNumber: "5544332211",
    accountType: {
      accountTypeShortName: "CHK",
      accountTypeName: "Cuenta Corriente",
    },
    accountBalance: 2700.4,
    accountCurrency: {
      currency: "DOP",
      currencyLabel: "RD$",
    },
    maskedNumber: "****32211",
    customerName: "Pedro Gómez",
    bankName: "Banco BHD León",
    alias: "Cuenta Personal",
  },
];
