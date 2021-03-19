//const Commit = require('../models/Commit');
const Commit = require('../models/Commit');
const axios = require('axios').default;
module.exports = class CommitsGetter {
    constructor(owner, repo) {
        this._owner = owner;
        this._repo = repo;
        this._commits = [];
    }
    async getCommits() {
        try {
            const response = await axios.get(`https://api.github.com/repos/${this._owner}/${this._repo}/commits`);
            response.data.forEach(commit => {
                this._commits.push(new Commit(commit.sha, commit.commit.author.name, commit.commit.author.email, commit.commit.author.date, commit.commit.message));
            });
            return this._commits;
        } catch (err) {
            console.log(err.message);
        }
    }
}