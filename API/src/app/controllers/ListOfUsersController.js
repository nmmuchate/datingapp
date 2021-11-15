import User from "../models/User";
import File from "../models/File";

class ListOfUsersController {
  async index(req, res){
    const listall = await User.findAll({
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        },
      ],
    });

    return res.json(listall);
  }
}

export default new ListOfUsersController();
