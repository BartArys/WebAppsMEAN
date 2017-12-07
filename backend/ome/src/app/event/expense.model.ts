import { Person } from '../person/person/person.model';
import { Event } from './event.model';
export class Expense {

    static fromJSON(json: any): Expense {
        const paidBy = json.paidBy ? Person.fromJSON(json.paidBy) : null;
        const paidFor: Array<Person> = json.paidFor ? json.paidFor.map(person => Person.fromJSON(person)) : null;
        let event: Event;
        if (json.event instanceof String) {
            event = new Event(null, json.event, null, null);
        } else if (json.event) {
            event = Event.fromJSON(json.event);
        }
        return new Expense(json.description, json._id, json.amount, paidBy, paidFor, event);
    }

    constructor(private _description: String, private _id: String,
        private _amount: Number, private _paidBy: Person, private _paidFor: Array<Person>, private _event: Event) {
    }

    get id(): String {
        return this._id;
    }

    get description(): String {
        return this._description;
    }

    set description(desc: String) {
        this._description = desc;
    }
    get amount(): Number {
        return this._amount;
    }

    set amount(amount: Number) {
        this._amount = amount;
    }

    get paidBy(): Person {
        return this._paidBy;
    }

    get paidFor(): Array<Person> {
        return this._paidFor;
    }

    get event(): Event {
        return this._event;
    }

    public toJSON(): any {
        return {
            id: this._id,
            description: this._description,
            amount: this._amount,
            paidBy: this._paidBy,
            paidFor: this._paidFor
        };
    }

}
