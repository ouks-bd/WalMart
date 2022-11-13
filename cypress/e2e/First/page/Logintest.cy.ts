/// <reference types="cypress" />
import {LoginPage} from "../test/login.cy"


const login = new LoginPage()

    it("Login",function() {
        login.navigate();
        // login.Menue('test');
        // login.enterUsername('forhadcocacola@gmail.com');
        
       // login.enterPassword('34');
       // login.clickLogin();

});