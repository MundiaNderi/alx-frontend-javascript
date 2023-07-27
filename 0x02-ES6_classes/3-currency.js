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

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }

    validateString(value, attribute) {
        if (typeof value !== "string") {
            throw new TypeError('${attribute} must be a string');
        }
        return value;

    }
}

export default Currency;










