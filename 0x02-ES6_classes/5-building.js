/*eslint-disable */

class Building{
    constructor(sqft) {
        this._sqft = sqft;
    }

    get sqft() {
        return this.sqft;
    }

    evacuationWarningMessage() {
        throw new error('Class extending Building must override evacuationWarningMessage');
    }
}

export default Building;