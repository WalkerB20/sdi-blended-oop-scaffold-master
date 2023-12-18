class Member {
#memberAccount;

  constructor(name) {
    this.name = name;
    this.#memberAccount = [];
  }
}

//const newMember = new Member('Todd');

class BankAccount {
  #balance;
  #transactions;

  constructor(member) {
    if(!(member instanceof Member)) {
      throw new Error('Not an instance of Member class')
    };
    this.member = member;
    this.#balance = 0;
    this.#transactions = [];
  };
  

  get getBalance() {
    return this.#balance;
  };

  set setBalance(newBalance) {
    this.#balance = newBalance;
  };

  credit(amount) {
    this.#balance += amount;
    this.#transactions.push({ type: 'credit', amount, date: new Date() });
  };

  debit(amount) {
    this.#balance -= amount;
    this.#transactions.push({ type: 'credit', amount, date: new Date() });
  };

  checkBalance() {
    return `Current Balance: $${this.#balance}`;
  };

  static transactionHistory(account) {
    return account.#transactions;
}
}

    class CheckingAccount extends BankAccount {
      constructor(balance) {
        super(balance);
        //this.MIN_BALANCE = 50;
        //this.PENALTY_FEE = 40;
    }

    debit(amount){
      if(this.getBalance - amount < 0) {
        return 'Insufficient funds.';
      }
      super.debit(amount); {
        if(this.getBalance - amount < 50) {
          super.debit(40);
        return 'You have overdrawn your account. A $40 penalty fee has been applied.';
      }
    }
    super.debit(amount);
    return 'Insufficient.'
    }
  }

class SavingsAccount extends BankAccount {
  #linkedCheckingAccount;

  constructor(member) {
    super(member);
    this.member = member;
    this.#linkedCheckingAccount = CheckingAccount;
    this.debitTransactionCount = 0;
    this.MAX_DEBIT_TRANSACTIONS = 10;
    this.DEBIT_PENALTY_FEE = 50;
  }

  linkAccount(checkingAccount){
    if(checkingAccount instanceof CheckingAccount){
      this.#linkedCheckingAccount = checkingAccount;
    }
  }

  transfer(amount){
    if (this.#linkedCheckingAccount && this.getBalance >= amount) {
      this.debit(amount);
      this.#linkedCheckingAccount.credit(amount);
      console.log(`$${amount} transferred.`);
  } else {
      console.log('Transfer failed: Insufficient funds.');
  }
 }

 debit(amount){

  if(this.debitTransactionCount >= this.MAX_DEBIT_TRANSACTIONS){
    console.log('over the limit');
    super.debit(this.DEBIT_PENALTY_FEE)
    return;
    }
    super.debit(amount)
  this.debitTransactionCount++
 }
}

const distributeEvenly = () => {};
const distributeToSavings = () => {};

// Don't edit the code below this line:
// This injects your code into the 'window' so that the SpecRunner.html can display your tests in the browser

window.BankAccount = BankAccount;
window.CheckingAccount = CheckingAccount;
window.SavingsAccount = SavingsAccount;
window.Member = Member;
window.distributeEvenly = distributeEvenly;
window.distributeToSavings = distributeToSavings;
