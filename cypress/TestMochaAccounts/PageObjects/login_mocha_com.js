class loginuser{

loginbutton(){

    return cy.get('button').contains('Login')
}

email(){


  return  cy.get('#email')
}



password(){

 return cy.get('[type = "password"]')

}

loginenter(){

    return cy.get('button').contains('Login');
}


}
export default loginuser;