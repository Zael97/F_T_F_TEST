const utils = require('../utils/utils');
const ReposGetter = require('../models/ReposGetter');
const CommitsGetter = require('../models/CommitsGetter');
exports.login_post = async (req, res, next) => {
    const username = req.body.name;
    const token = utils.createToken(username);
    res.cookie('jwt', token, { maxAge: 1000 * 60 * 30, httpOnly: false });
    res.status(200).json({ data: req.body.name });
}
exports.me = async (req, res, next) => {
    try {
        const token = utils.extractToken(req);
        const user = utils.verify(token);
        res.status(200).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
exports.repos_get = async (req, res, next) => {
    try {
        const token = utils.extractToken(req);
        const user = utils.verify(token);
        const repos_getter = new ReposGetter(user);
        const repos = await repos_getter.getRepos();
        res.status(200).json({ repos });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
exports.commits_get = async (req, res, next) => {
    try {
        const token = utils.extractToken(req);
        const user = utils.verify(token);
        const commits_getter = new CommitsGetter(user, req.body.repo);
        const commits = await commits_getter.getCommits();
        res.status(200).json({ commits });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}