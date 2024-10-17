import register_mocha_com from './PageObjects/register_mocha_com'
import 'cypress-v10-preserve-cookie';
import {faker} from '@faker-js/faker';
import { phone_number } from 'faker/lib/locales/az';


const nameRandomun = faker.internet.userName('Mocha','Random');
const fullname =faker.name.fullName();
const domainname = "vmsjdi6i.mailosaur.net";
const emailRandom = (nameRandomun+"@".concat(domainname));
//const randomPass = faker.internet.password();
const cell_phone= faker.phone.number('501-###-###');
const company =  faker.company.name();



describe('Mocha User registration',function(){


  const userreg = new register_mocha_com();

it('Register successfully done',function(){
    cy.visit('');
    userreg.registerclick().click();
    userreg.fullname().type(fullname);
    userreg.emailaddress().type(emailRandom);
    console.log(emailRandom)
    userreg.phone_number().type(cell_phone);
    userreg.companyName().type(company);
    cy.wait(500);
    userreg.password().type("Test@1234");  
    userreg.confirmPassword().type("Test@1234");
     userreg.AcceptTC().click();
     cy.wait(10000)
    userreg.signup().click();
    cy.wait(30000);
    userreg.successfulregistration().should('be.visible');
    cy.wait(30000);
  })
  
     it('Account Activation Email', () => {
     const serverId = 'vmsjdi6i';
     console.log(emailRandom);
    
             cy.mailosaurSearchMessages(serverId, {
              sentTo: emailRandom}).then(email => {
               console.log(email.items[0]);
                expect(email.items[0].from[0].email).to.contain("@mochatechnologies.com");
                expect(email.items[0].from[0].email).to.contain("sales");
                expect(email.items[0].to[0].email).to.contain(emailRandom);
                expect(email.items[0].subject).to.contain('Verify your email for Mocha Accounting!');
                console.log("Test Pass");
              cy.mailosaurGetMessageById(email.items[0].id).then(emailbody =>{
                console.log(emailbody);
             var accountactlink = emailbody.html.links[1].href;
                console.log(accountactlink);
                cy.visit(accountactlink);
                cy.wait(20000);
                cy.log('User registered  successfully');
              })
          

            })
})


})



