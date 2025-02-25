import { Account } from "./account";

export interface UserInfo {
  name: string;
  image: string;
}
export interface UserModel {
  userInfo: UserInfo;
  accounts: Account[];
}
