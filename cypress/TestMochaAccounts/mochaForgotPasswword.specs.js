import forgotPasword_mocha_com from './PageObjects/forgotPassword_mocha_com';
import login_mocha_com from './PageObjects/login_mocha_com';
import register_mocha_com from './PageObjects/register_mocha_com'

import {faker} from '@faker-js/faker';

describe('Mocha Forget Password',()=>{
 const forpwd = new forgotPasword_mocha_com();
 const login = new login_mocha_com();

it('Forgot password screen',() =>{
    cy.fixture("forgotpasswordemails.json").then(function(data){
        globalThis.emaildata = data;
        console.log(emaildata.email)
    cy.visit('');
login.loginbutton().click();
forpwd.forgotpasswordnav().click();
forpwd.entermail().type(emaildata.email);
cy.wait(10000);
forpwd.clickSubmit().click();
cy.wait(30000)

    })

})
it('Gets Password Reset email from Mailosaur', () => {
    const serverId = 'vmsjdi6i';
    console.log(emaildata.email);
    cy.mailosaurSearchMessages(serverId, {
        sentTo: emaildata.email}).then(email => {
         console.log(email.items[0]);
 cy.mailosaurGetMessage(serverId, {
        sentTo: emaildata.email
    }).then(email => {
        console.log(emaildata.email);
        expect(email.subject).to.contain("Here's your PIN ");
        const otp = email.html.codes[0].value;
    console.log(otp);
 
        
            forpwd.enterVerificationCode().type(otp);
            forpwd.clickVerify().click();

        forpwd.enterNewPassword().type('Mocha@4321')
        forpwd.enterConfirmPassword().type('Mocha@4321')
        forpwd.clickSubmit2().click();
        cy.log('Password reset successfull');

    })

    })
   

})
})

