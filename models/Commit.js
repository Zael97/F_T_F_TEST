module.exports = class Commit {
    constructor(id, author, email, date, message) {
        this._id = id;
        this._author = author;
        this._date = date;
        this._email = email;
        this._message = message;
    }
}