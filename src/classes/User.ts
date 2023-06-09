export default class User<T, U, V> {
	public accountStatus: T;
	private _holderName: T;
	private _accountNumber: U;
	private _sum: U;
	public activeAccount: V;
	constructor(accountStatus: T, holderName: T, accountNumber: U, sum: U, activeAccount: V) {
		this.accountStatus = accountStatus;
		this._holderName = holderName;
		this._accountNumber = accountNumber;
		this._sum = sum;
		this.activeAccount = activeAccount;
	}
	public get holderName(): T {
		return this._holderName;
	}
	public set holderName(value: T) {
		this._holderName = value;
	}
	public get accountNumber(): U {
		return this._accountNumber;
	}
	public set accountNumber(value: U) {
		this._accountNumber = value;
	}
	public get sum(): U {
		return this._sum;
	}
	public set sum(value: U) {
		this._sum = value;
	}
}