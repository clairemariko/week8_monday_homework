
//this is just a constructor
var Bank = require('./bank/bank.js');
var sampleAccounts = require('./sample.json');
var Account = require ('./bank/account.js');

window.onload = function(){
  console.log("webpack app started");
  var bank = new Bank();
  //of will give you the element , in will give you the index
  for( var accountData of sampleAccounts){
    bank.addAccount( new Account(accountData) );
  }

  // console.log('our bank', bank);
  // console.log('total cash', bank.totalCash());
  var totalDisplay = document.getElementById('total');
  totalDisplay.innerText = "Total in Bank: £" + bank.totalCash();


  //total amount in personal accounts

  // console.log('our bank', bank);
  // console.log('total cash', bank.totalCash('personal'));
  var totalDisplay = document.getElementById('personal_total');
  totalDisplay.innerText = "Total in Personal Accounts: £" + bank.totalCash('personal');

  //total amount in business accounts

    // console.log('our bank', bank);
    // console.log('total cash', bank.totalCash('business'));
    var totalDisplay = document.getElementById('business_total');
    totalDisplay.innerText = "Total in Business Accounts: £" + bank.totalCash('business');




  //display all those who have personal accounts
  var personalList = document.getElementById("personal_accounts");
  var allPersonalAccounts = bank.filteredAccounts("personal");

    for(var accountPersonal of allPersonalAccounts){
      var li = document.createElement("li");
      li.innerText = accountPersonal.owner + " " + "£" + accountPersonal.amount;
      personalList.appendChild(li);

    };

 

  //display all those who have a business acccounts
  var businessList = document.getElementById('business_accounts')
  var businessDisplay = bank.filteredAccounts('business');

    for(var accountBusiness of businessDisplay){
      var li = document.createElement("li");
      li.innerText = accountBusiness.owner + " " + "£" + accountBusiness.amount;
      businessList.appendChild(li);
    };

};
