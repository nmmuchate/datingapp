import User from '../models/User';

class UserController {
  async store(req, res) {

    const userExists = await User.findOne({ where: { email : req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.'})
    }

    const { id, name, email, gender } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      gender
    });
  }
}

export default new UserController();
