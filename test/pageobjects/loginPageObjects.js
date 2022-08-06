

class LoginPage{
    /**
     * define selectors using getter methods
     */
    get inp_userName(){
        return $('#user-name')
    }
    get inp_password(){
        return $('#password')
    }
    get btn_submit(){
        return $('#login-button')
    }
    get txt_loginError(){
        return $('h3[data-test="error"]')
    }
    get lockUserMsg(){
        return "Epic sadface: Sorry, this user has been locked out."
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inp_userName.setValue(username);
        await this.inp_password.setValue(password);
        await this.btn_submit.click();
    }
    /**
     *  Method to enter username only
     */
    enterUserName(username){
        this.inp_userName.setValue(username);
    }

    /**
     *  Method to enter password only
     */
    enterPassword(password){
        this.inp_password.setValue(password)
    }

}

module.exports = new LoginPage();
