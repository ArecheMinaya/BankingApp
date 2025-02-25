import { Account } from "./account";
export interface TransferInformation {
  amount: number;
  account: Account;
  beneficiaryAccount: Account;
  date: string;
}
