import randomFn from "../randomFn";
import User from "./User";

export default class Deposit extends User<string, number, boolean> {
	constructor(holderName: string) {
		super('Deposit', holderName, randomFn(100000, 999999), 0, true);
	}
}