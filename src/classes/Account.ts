import User from "./User";
import Transit from "./Transit";
import Deposit from "./Deposit";
import Closed from "./Closed";

export default class Account<T extends User<string, number, boolean>> {
	obj: T;
	deposit: Deposit;
	transit: Transit;
	closed: Closed;
	constructor(obj: T) {
		this.obj = obj;
		this.deposit = new Deposit(this.obj.holderName);
		this.transit = new Transit(this.obj.holderName);
		this.closed = new Closed(this.obj.holderName);
	}
	public toString() {
		console.log(`----------------------------`);
		this.obj.activeAccount === true ? console.log('Account active') : console.log('Account inactive');
		console.log(`${this.obj.accountStatus}\nHolder name: ${this.obj.holderName}\nAccount number: ${this.obj.accountNumber}\nCurrent amount of money: ${this.obj.sum}$`);
		console.log(`\n${this.deposit.accountStatus}\nAccount number: ${this.deposit.accountNumber}\nCurrent amount of money: ${this.deposit.sum}$`);
		console.log(`\n${this.transit.accountStatus}\nAccount number: ${this.transit.accountNumber}\nCurrent amount of money: ${this.transit.sum}$`);
		console.log(`----------------------------`);
	}
	public transfer(from: T, to: T, amount: number): void {
		if (from.activeAccount === false || to.activeAccount === false) console.log("\n" + `You can't transfer your money from/to the closed account.`);
		else if (from.sum <= 0) console.log(`You have no money on this account.`);
		else {
			to.sum += amount;
			from.sum -= amount;
			console.log(`You transered ${amount}$ from ${from.holderName}'s ${from.accountStatus} to ${to.accountStatus}.\nNow on ${from.accountStatus} account: ${from.sum},\n${to.accountStatus} account: ${to.sum}.`);
			console.log(`----------------------------`);
			return;
		}
	}
	public close(obj: T): void {
		if (this.obj.activeAccount === false) console.log('Account already inactive.');
		else {
			obj.sum = this.obj.sum;
			this.obj = obj;
			console.log(`Account inactive\n${this.obj.accountStatus}\nHolder name: ${this.obj.holderName}\nAccount number: ${this.obj.accountNumber}\nCurrent amount of money: ${this.obj.sum}$`);
			console.log(`----------------------------`);
		}
	}
}