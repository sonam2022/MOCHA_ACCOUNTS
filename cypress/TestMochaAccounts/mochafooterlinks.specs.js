
import footer_links_mocha from "./PageObjects/footer_links_mocha";

const footerlink = new footer_links_mocha();

describe('Mocha Footer links Navigation',function(){

 
it("Visit all footer links",function(){
    
cy.visit("");
cy.wait(5000);
  
footerlink.footerclass().eq(1).scrollIntoView();

footerlink.footerclass().each((links)=>{
    
    cy.get(links).invoke('attr','target','_blank').click({force:true});

   
  cy.log(cy.url());
    

})
})

})