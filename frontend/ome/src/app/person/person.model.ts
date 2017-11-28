export class Person {
    private _firstName: String;
    private _lastName: String;
    private _email: String;

    private events = Array<String>();

    constructor(firstName: String, lastName: String, email: String) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;

    }


    public get firstName(): String {
        return this._firstName;
    }

    public set firstName(value: String) {
        this._firstName = value;
    }


    public get lastName(): String {
        return this._lastName;
    }

    public set lastName(value: String) {
        this._lastName = value;
    }


    public get email(): String {
        return this._email;
    }

    public set email(value: String) {
        this._email = value;
    }


}