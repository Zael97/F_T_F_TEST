const Repo = require('../models/Repo');
const axios = require('axios').default;
module.exports = class ReposGetter {
    constructor(owner) {
        this._owner = owner;
        this._repos = [];
    }
    async getRepos() {
        try {
            const response = await axios.get(`https://api.github.com/users/${this._owner}/repos`);
            response.data.forEach(repo => {
                let owner = {
                    login: repo.owner.login,
                    id: repo.owner.id,
                    avatar_url: repo.owner.avatar_url,
                    url: repo.owner.html_url
                }
                this._repos.push(new Repo(repo.id, repo.name, repo.full_name, owner, repo.url, repo.description, repo.html_url));
            })
            return this._repos;
        } catch (err) {
            console.log(err);
        }
    }
}