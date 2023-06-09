import Account from "./classes/Account";
import Bank from "./classes/Bank";
import User from "./classes/User";
import randomFn from "./randomFn";


const account = new Account(new User('Main profile', 'John', randomFn(100000, 999999), 60000, true));
account.toString();
account.transfer(account.obj, account.transit, 5000);
account.transfer(account.transit, account.deposit, 5000);
account.close(account.closed);

const bank = new Bank();
bank.showInfo();
bank.add(account);
bank.add(new Account(new User('Main profile', 'Jane', randomFn(100000, 999999), 10000, true)));
bank.add(new Account(new User('Main profile', 'Alex', randomFn(100000, 999999), 9999, true)));
bank.showInfo();
bank.showDeposits();
bank.showTransits();