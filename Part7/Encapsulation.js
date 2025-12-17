// Encaptulation in JavaScript
// And Getter and Setter Methods

class Person{
    constructor(email, password){
        this.email = email;
        this._password = password;
    }
    get emailAddress(){
        return this.email.toUpperCase();
    }
    set emailAddress(newEmail){
        this.email = newEmail;
    }
    get password(){
        return `{this.password}ramesh`
    }
    set password(newPassword){
        this._password = newPassword;
    }
}
let person = new Person("ramesh@example.com", "mypassword");
console.log(person.emailAddress);