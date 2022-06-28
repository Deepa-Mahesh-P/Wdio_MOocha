class LoginPage {
    open() {
        browser.url('/');
    }

    async buttonLogin() {
        // await clickElement('aaa')
        return clickElement('.login');
        // return $('.login');
    }

    get inputEmail() {
        return $('body #email');
    }

    get inputPassword() {
        return $('body #passwd');
    }

    get buttonSignIn() {
        return $('body #SubmitLogin');
    }

    get userLoggedIn() {
        return $('.account');
    }

    get welcomeMessage() {
        return $('.info-account');
    }

    login(email: string, password: string) {
        this.buttonLogin;

        this.inputEmail.waitForEnabled();
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);

        this.buttonSignIn.click();
        this.welcomeMessage.waitForExist();
    }
}

export default new LoginPage();

