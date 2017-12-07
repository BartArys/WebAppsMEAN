import { Person } from '../person/person/person.model';
import { Expense } from './expense.model';

export class Event {

    private _people: Array<Person>;
    private _expenses: Array<Expense>;
    private _id: String;

    static fromJSON(json: any): Event {
        let people = [];
        if (json.people) {
            people = json.people.map(person => Person.fromJSON(person));
        }

        let expenses = [];
        if (json.expenses) {
            expenses = json.expenses.map(exp => Expense.fromJSON(exp));
        }

        return new Event(json.name, json._id,
            people,
            expenses
        );
    }

    constructor(private _name: String, id?: String, people?: Array<Person>, expenses?: Array<Expense>) {
        if (id) {
            this._id = id;
        }

        if (people) {
            this._people = people;
        } else {
            this._people = [];
        }

        this._expenses = expenses || [];

    }

    get name(): String {
        return this._name;
    }

    get id(): String {
        return this._id;
    }

    get people(): Array<Person> {
        return this._people;
    }

    get expenses(): Array<Expense> {
        return this._expenses;
    }

    set expenses(expenses: Array<Expense>) {
        this._expenses = expenses;
    }

    public toJSON(): any {
        return {
            name: this._name,
            id: this._id,
            people: this._people.map(person => person.toJSON())
        };
    }



}
