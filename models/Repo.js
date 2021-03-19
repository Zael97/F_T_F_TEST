
module.exports = class Repo {

    constructor(id, name, full_name, owner, url, description, html_url) {
        this._id = id;
        this._name = name;
        this._full_name = full_name;
        this._owner = owner;
        this._url = url;
        this._description = description;
        this._html_url = html_url;
    }
}