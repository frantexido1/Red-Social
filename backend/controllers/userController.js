class UserController {
    constructor() {

    }

    async register(req, res) {
        res.send('register');
    }

    async login(req, res) {
        res.send('login');
    }

}

export default UserController;