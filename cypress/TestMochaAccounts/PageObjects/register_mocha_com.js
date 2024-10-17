class registration{

    registerclick(){
return  cy.get('button').contains('Sign Up for Free');

}

fullname(){
return cy.get('#first_name');

}

emailaddress(){
return cy.get('#email');
}

phone_number(){
  return  cy.get('#phone_number');

}

companyName(){

 return   cy.get('#companyName')
}

password(){

  return  cy.get('#password');
}

confirmPassword(){

  return cy.get('#confirmPassword');
}
  AcceptTC(){

    return cy.get('#invalidCheck');

}
signup(){

return cy.get('button').contains('Sign Up');
}
successfulregistration(){

  return cy.get('span').contains('Thank you for registering for Mocha Accounting');
}

}
export default registration;
