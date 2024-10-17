import schedule_a_demo_mocha from "./PageObjects/schedule_a_demo_mocha";

import {faker} from '@faker-js/faker';

const nameRandomun = faker.internet.userName('Demo','Test');
// const domainname = "vmsjdi6i.mailosaur.net";
// const emailRandom = (nameRandomun+"@".concat(domainname));
const email = faker.internet.email('test','mocha','yopmail.com')
const cell_phone= faker.phone.number('501-###-###');
const date = faker.date.future();
const message = faker.lorem.paragraph(3);
const demo = new schedule_a_demo_mocha();


describe('Mocha Accounting Demo',()=>{

beforeEach(()=>{
 
    cy.visit('');
    demo.sadnavigation().click();
    cy.wait(10000);
     
    })


it("Schedule A Demo",()=>{

demo.username().type(nameRandomun);
demo.email().type(email);
demo.contactNumber().type(cell_phone);
cy.wait(5000);
demo.newdate().type("2024-10-31");
demo.time().type("13:11");
demo.message().type(message);
demo.submitbutton().click();
cy.log('Demo scheduled  successfully');

})


})