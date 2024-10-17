import login_mocha_com from '../TestMochaAccounts/PageObjects/login_mocha_com';


describe('Mocha Accounting Login',function(){

   const login = new login_mocha_com();
   beforeEach(function(){

      cy.fixture("mochalogindetails.json").then(function(data){
      globalThis.logindata = data;
      cy.visit('');
      cy.url().should('include','mochaaccounting');
      console.log("Pass1");
      login.loginbutton().click();
         
      })
   })

it('Login with Valid credentials',function(){
    
   login.email().type(logindata.email);
   login.password().type(logindata.password2);
   login.loginenter().click();
  // login.logoutbutton().should('be.visible');
   cy.log('User logged in  successfully');

  })

  
     })

