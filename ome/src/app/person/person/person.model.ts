export class Person {
    private _firstname: String;
    private _lastname: String;
    private _email: String;

    public static fromJSON(json: any) {
        return new Person(json.firstname, json.lastname, json.email, json._id);
    }

    constructor(firstname: String, lastname: String, email: String, private _id?: String) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
    }

    toJSON(): any {
        return {
            firstname: this._firstname,
            lastname: this._lastname,
            email: this._email,
            id: this._id
        };
    }

    public get firstname(): String {
        return this._firstname;
    }

    public set firstname(value: String) {
        this._firstname = value;
    }


    public get lastname(): String {
        return this._lastname;
    }

    public set lastname(value: String) {
        this._lastname = value;
    }


    public get email(): String {
        return this._email;
    }

    public set email(value: String) {
        this._email = value;
    }

    public get id() {
        return this._id;
    }

}
