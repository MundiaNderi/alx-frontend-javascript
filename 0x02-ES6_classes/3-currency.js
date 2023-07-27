//Implement a class named Currency:
// Constructor attributes:
// code (String)
// name (String)
// Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
// Implement a getter and setter for each attribute.
// Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
/*eslint-disable */
class Currency {
    constructor(code, name) {
        this._code = this.ValidatedString(code, "Code");
        this._name = this.ValidatedString(name, "Name");
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        this._code = this.ValidatedString(code, "Code"); 
    }

    get name () {
        return this._name;
    }

    set name(newName) {
        this._name = this.ValidatedString(name, "Name"); 
    }

    validateString(value, attribute) {
        if (typeof value !== "string") {
            throw new TypeError('${attribute} must be a string');
        }
        return value;

    }
}

export default Currency;










