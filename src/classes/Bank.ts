import Account from "./Account";
import User from "./User";
import { AccountTypes } from "../AccountTypes";

export default class Bank<T extends Account<User<string, number, boolean>>> {
	users: T[] = [];
	accounts: AccountTypes[] = [];
	public showInfo() {
		if (this.users.length === 0) console.log(`No accounts in bank.`);
		else {
			for (let i = 0; i < this.users.length; i++) {
				const user = this.users[i];
				user.toString();
			}
		}
	}
	public showDeposits() {
		if (this.accounts.length === 0) console.log(`No accounts in bank.`);
		else {
			for (let i = 0; i < this.accounts.length; i++) {
				const account = this.accounts[i][0];
				console.log(`\n${account.accountStatus}\nHolder name: ${account.holderName}\nAccount number: ${account.accountNumber}\nCurrent amount of money: ${account.sum}$`);
			}
			console.log(`----------------------------`);
		}
	}
	public showTransits() {
		if (this.accounts.length === 0) console.log(`No accounts in bank.`);
		else {
			for (let i = 0; i < this.accounts.length; i++) {
				const account = this.accounts[i][1];
				console.log(`\n${account.accountStatus}\nHolder name: ${account.holderName}\nAccount number: ${account.accountNumber}\nCurrent amount of money: ${account.sum}$`);
			}
			console.log(`----------------------------`);
		}
	}
	public add(obj: T) {
		this.users.push(obj);
		this.accounts.push([obj.deposit, obj.transit, obj.closed]);
	}
}