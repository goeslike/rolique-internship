const { passwordHasher } = require('../helpers');
const { User } = require('../dataBase');

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const {
                // eslint-disable-next-line no-unused-vars
                firstname, lastname, email, role, password
            } = req.body;

            const hashedPassword = await passwordHasher.hash(password);
            const newUser = await User.create({
                ...req.body,
                password: hashedPassword
            });

            res.json(newUser);

            next();
        } catch (error) {
            next(error);
        }
    },

    getAllUser: async (req, res, next) => {
        try {
            const users = await User.find({});

            res.json(users);
        } catch (error) {
            next(error);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const { email, name } = req.user;

            await User.findByIdAndUpdate(req.params.userId, req.body);

            res.json(`user id:${req.params.userId} updated`);
        } catch (error) {
            next(error);
        }
    },
};
