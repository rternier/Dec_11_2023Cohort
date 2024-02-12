const Account = require('./account');

class accountStore {
  constructor() {
    this.accounts = [];
  }

  // Create an account
  createAccount(emailAddress, name, password, salt, dateCreated) {
    const account = new Account(emailAddress, name, password, salt, dateCreated);
    this.accounts.push(account);
    return account;
  }

  // Read all accounts
  getAllAccounts() {
    return this.accounts;
  }

  // Read an account by email address
  getAccountByEmail(emailAddress) {
    return this.accounts.find(account => account.emailAddress === emailAddress);
  }

  // Update an account by email address
  updateAccount(emailAddress, updatedData) {
    const account = this.getAccountByEmail(emailAddress);
    if (account) {
      Object.assign(account, updatedData);
      return account;
    }
    return null;
  }

  // Delete an account by email address
  deleteAccount(emailAddress) {
    const index = this.accounts.findIndex(account => account.emailAddress === emailAddress);
    if (index !== -1) {
      const deletedAccount = this.accounts.splice(index, 1);
      return deletedAccount[0];
    }
    return null;
  }
}

const as = new accountStore;
module.exports = as;
