class forgotpwd{

    forgotpasswordnav(){

        return cy.get('a').contains('Forgot password?')
    }

    entermail(){

        return cy.get('#email');

    }


 clickSubmit(){
        return  cy.get('button').contains('Next')

    }

enterVerificationCode(){

    return cy.get('#verification_code');

}

clickVerify(){
 return cy.get('button').contains('Submit');


}

enterNewPassword(){

return cy.get('#password')

}

enterConfirmPassword(){

    return cy.get('#confirmPassword')
    
    }

  clickSubmit2(){

        return cy.get('button').contains('Next')
        
        }

}

export default forgotpwd;