import User from "../../models/User";
import File from "../../models/File";

class ListMaleController {
  async index(req, res){
    const listmale = await User.findAll({
      where: { gender: false },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        },
      ],
    });

    return res.json(listmale);
  }
}

export default new ListMaleController();
