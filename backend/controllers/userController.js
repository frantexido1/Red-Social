import userModel from '../models/userModel.js';

class UserController {
    constructor() {
        this.model = userModel;
    }

    async register(req, res) {
        res.send('register');
    }

    async login(req, res) {
        res.send('login');
    }

}

export default UserController;