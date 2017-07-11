# TestOTPSent
A simple test to test OTP sent to user

I wrote a Two factor authentication for a web app that used the following lines of code to send an OTP to the user email at the time of registration. There is an interesting use case at line sessionStorage.setItem('otpSent', otp); that prompted me to check if it is a valid use case for a test double scenario.

    var numbers = new Array(1);
    var otp=' ';
    for (var i = 0; i < numbers.length; i++) {
      numbers[i] = leftPad(randomIntInc(1,10), 4,randomInt(1,53));
      otp=otp+numbers[i];
      }           

      var mailSuccess=false;    
      sessionStorage.setItem('otpSent', otp); // To check and validate with session of user

As is, stored into the sessionStorage object, the validating part of the OTP is pretty simple - as long as the user's browser is open, the OTP value can be validated. But, what if the security policy defines that the user be allowed 4 hours or 24 hours to validate the OTP and so, has the luxury of closing the browser window? This prompted me to examine the use case for a test double.

Before venturing into test doubles, here is a simpler version of testing the data stored in MongoDb.

Pre-requisites: MongoDb, NodeJS, SuperTest, Mocha

This example is an extension of the other repos related to the "./lib/users.js", which had used static data in the other examples.

Please use the "users" document, "mydb_users_65435097575", to import the data document for the test case. 

The MongoDB database name is "mydb", the collection name is "users" and the default MongoDB port is used.
