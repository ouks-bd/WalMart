export class LoginPage{

    Login_url='https://www.walmart.com/'
    //Menue_Colapse ='cy.get('.b--none > .ld')'
    Login_username='ld_ui_textfield_80835'
    Login_password='#pass2'
  //  Login_click=""

    navigate(){
        cy.visit(this.Login_url)
    }
    Menue (menue:string){
        cy.get('.b--none > .ld').click
           // cy.get(this.Menue_Colapse).type(menue)
    }
     
    enterUsername(username : string){
        cy.get(this.Login_username).type(username);
    }

    enterPassword(password:string){
        cy.get(this.Login_password).type(password);
    }
    clickLogin(){
        cy.contains('SIGN IN').click()
    }

}