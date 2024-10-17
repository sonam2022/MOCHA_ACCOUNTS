class scheduleademo{

sadnavigation(){

        return cy.get('button').contains('Schedule a Demo')
    }

username(){

return cy.get('#name')

}

email(){


    return cy.get('#email')
}

contactNumber(){

return cy.get('#contactNumber')

}

newdate(){

return cy.get('#date')

}


time(){

    return cy.get('#time')

}

message(){

return cy.get('#message')

}

submitbutton(){

     return cy.get('button').contains('Submit');
    
    }

}

export default scheduleademo;