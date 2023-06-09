import randomFn from "../randomFn";
import User from "./User";

export default class Transit extends User<string, number, boolean> {
	constructor(holderName: string) {
		super('Transit', holderName, randomFn(100000, 999999), 0, true);
	}
}