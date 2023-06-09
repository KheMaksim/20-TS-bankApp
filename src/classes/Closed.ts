import randomFn from "../randomFn";
import User from "./User";

export default class Closed extends User<string, number, boolean> {
	constructor(holderName: string) {
		super('Closed', holderName, randomFn(100000, 999999), 0, false);
	}
}
