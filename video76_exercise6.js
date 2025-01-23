
  // the person
  function Person(fullname, age, idNumber) {
      this.fullname = fullname;
      this.age = age;
      this.idNumber = idNumber;
  }
  Person.prototype.toString = function() {
      return `${this.fullname}(id=${this.idNumber})`;
  }

  // the account
  function Account(owner, number, amount) {
      this.owner = owner;
      this.number = number;
      this.amount = amount;
  }
  Account.prototype.transfer = function (account, amount) {
      if (this.amount >= amount) {
          this.amount -= amount;
          console.log(`${amount} transferred from ${this} to ${account}`)
      }
      else {
          console.log("Transfer failed. Insufficient deposits.")
      }
  }
  Account.prototype.toString = function () {
      return `[${this.owner}(number=${this.number}, amount=${this.amount})]`;
  }


  let bob = new Person("Bob", 24, "123413123");
  let tom = new Person("Tom", 44, "125343143");

  let account1 = new Account(bob, "123456789012345", 100);
  let account2 = new Account(tom, "023456789012345", 200);

  account1.transfer(account2, 50);
  account1.transfer(account2, 60);
