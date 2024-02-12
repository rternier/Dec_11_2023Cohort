class Account {
    constructor(emailAddress, name, password, salt, dateCreated, dateDeleted) {
      this.emailAddress = emailAddress;
      this.name = name;
      this.password = password;
      this.salt = salt;
      this.dateCreated = dateCreated;
      this.dateDeleted = dateDeleted;
    }
  }
  
  module.exports = Account;