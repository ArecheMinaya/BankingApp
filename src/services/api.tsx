// src/services/api.ts
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Crear una instancia de Axios
const api = axios.create({
  baseURL: "https://api.example.com",
});

// Crear una instancia de MockAdapter
const mock = new MockAdapter(api, { delayResponse: 500 });

// Definir las respuestas al consultar cuentas
mock.onGet("/userInformation").reply(200, {
  userInfo: {
    name: "John Doe",
    image: "https://example.com/profile/johndoe.png",
  },
  accounts: [
    {
      id: 1,
      accountNumber: "1234567890",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 2500.75,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****67890",
      alias: "Mi cuenta de ahorro",
      bankName: "Mi Banco",
    },
    {
      id: 2,
      accountNumber: "0987654321",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 15000.0,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****54321",
      alias: "Manejo de ahorro",
      bankName: "Mi Banco",
    },
    {
      id: 3,
      accountNumber: "1122334455",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 500.25,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****34455",
      alias: "segunda cuenta de ahorro",
      bankName: "Mi Banco",
    },
  ],
});

// Definir las respuestas al consultar detalle de cuenta

mock.onGet("/accountDetail", { params: { id: 1 } }).reply(200, {
  account: {
    id: 1,
    accountNumber: "1234567890",
    accountType: {
      accountTypeShortName: "SAV",
      accountTypeName: "Cuenta de Ahorro",
    },
    accountBalance: 2500.75,
    accountCurrency: {
      currency: "DOP",
      currencyLabel: "RD$",
    },
    maskedNumber: "****67890",
    cardNumber: "1234 5678 9012 3456",
    cardHolder: "John Doe",
    cardCVV: "123",
  },
  recentMovements: [
    {
      id: 1,
      type: "debit",
      amount: 1000.0,
      date: "2023-06-01",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 2,
      type: "credit",
      amount: 500.0,
      date: "2023-06-05",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 3,
      type: "credit",
      amount: 200.0,
      date: "2023-06-10",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 4,
      type: "debit",
      amount: 100.0,
      date: "2023-06-15",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 5,
      type: "credit",
      amount: 50.0,
      date: "2023-06-20",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
  ],
});

mock.onGet("/accountDetail", { params: { id: 2 } }).reply(200, {
  account: {
    id: 2,
    accountNumber: "0987654321",
    accountType: {
      accountTypeShortName: "SAV",
      accountTypeName: "Cuenta de Ahorro",
    },
    accountBalance: 15000.0,
    accountCurrency: {
      currency: "DOP",
      currencyLabel: "RD$",
    },
    maskedNumber: "****54321",
    cardNumber: "1234 5678 9012 3456",
    cardHolder: "John Doe",
    cardCVV: "123",
  },
  recentMovements: [
    {
      id: 1,
      type: "debit",
      amount: 1000.0,
      date: "2023-06-01",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 2,
      type: "credit",
      amount: 500.0,
      date: "2023-06-05",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 3,
      type: "credit",
      amount: 200.0,
      date: "2023-06-10",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 4,
      type: "debit",
      amount: 100.0,
      date: "2023-06-15",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 5,
      type: "credit",
      amount: 50.0,
      date: "2023-06-20",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
  ],
});

mock.onGet("/accountDetail", { params: { id: 3 } }).reply(200, {
  account: {
    id: 3,
    accountNumber: "1122334455",
    accountType: {
      accountTypeShortName: "SAV",
      accountTypeName: "Cuenta de Ahorro",
    },
    accountBalance: 500.25,
    accountCurrency: {
      currency: "DOP",
      currencyLabel: "RD$",
    },
    maskedNumber: "****34455",
    cardNumber: "1234 5678 9012 3456",
    cardHolder: "John Doe",
    cardCVV: "123",
  },
  recentMovements: [
    {
      id: 1,
      type: "debit",
      amount: 1000.0,
      date: "2023-06-01",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 2,
      type: "credit",
      amount: 500.0,
      date: "2023-06-05",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 3,
      type: "credit",
      amount: 200.0,
      date: "2023-06-10",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 4,
      type: "debit",
      amount: 100.0,
      date: "2023-06-15",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 5,
      type: "credit",
      amount: 50.0,
      date: "2023-06-20",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
  ],
});

// Definir las respuestas al consultar Transferencias

mock.onGet("/recentMovements", { params: { id: 1 } }).reply(200, {
  recentMovements: [
    {
      id: 1,
      type: "debit",
      amount: 1000.0,
      date: "2023-06-01",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 2,
      type: "credit",
      amount: 500.0,
      date: "2023-06-05",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 3,
      type: "credit",
      amount: 200.0,
      date: "2023-06-10",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 4,
      type: "debit",
      amount: 100.0,
      date: "2023-06-15",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 5,
      type: "credit",
      amount: 50.0,
      date: "2023-06-20",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
  ],
});

mock.onGet("/recentMovements", { params: { id: 2 } }).reply(200, {
  recentMovements: [
    {
      id: 1,
      type: "debit",
      amount: 1000.0,
      date: "2023-06-01",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 2,
      type: "credit",
      amount: 500.0,
      date: "2023-06-05",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 3,
      type: "credit",
      amount: 200.0,
      date: "2023-06-10",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
  ],
});

mock.onGet("/recentMovements", { params: { id: 3 } }).reply(200, {
  recentMovements: [
    {
      id: 1,
      type: "debit",
      amount: 1000.0,
      date: "2023-06-01",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 2,
      type: "credit",
      amount: 500.0,
      date: "2023-06-05",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
    {
      id: 3,
      type: "credit",
      amount: 200.0,
      date: "2023-06-10",
      customerName: "John Doe",
      currency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
    },
  ],
});

mock.onGet("/getAccountsForTransfer").reply(200, {
  accounts: [
    {
      id: 1,
      accountNumber: "1234567890",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 2500.75,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****67890",
      alias: "Mi cuenta de ahorro",
      bankName: "Mi Banco",
    },
    {
      id: 2,
      accountNumber: "0987654321",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 15000.0,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****54321",
      alias: "Manejo de ahorro",
      bankName: "Mi Banco",
    },
    {
      id: 3,
      accountNumber: "1122334455",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 500.25,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****34455",
      alias: "segunda cuenta de ahorro",
      bankName: "Mi Banco",
    },
  ],
  beneficiaryAccounts: [
    {
      id: 1,
      accountNumber: "1234567890",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 2500.75,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****67890",
      alias: "Mi cuenta de ahorro",
      bankName: "Mi Banco",
    },
    {
      id: 2,
      accountNumber: "0987654321",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 15000.0,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****54321",
      alias: "Manejo de ahorro",
      bankName: "Mi Banco",
    },
    {
      id: 3,
      accountNumber: "1122334455",
      accountType: {
        accountTypeShortName: "SAV",
        accountTypeName: "Cuenta de Ahorro",
      },
      accountBalance: 500.25,
      accountCurrency: {
        currency: "DOP",
        currencyLabel: "RD$",
      },
      maskedNumber: "****34455",
      alias: "segunda cuenta de ahorro",
      bankName: "Mi Banco",
    },
  ],
});

export default api;
