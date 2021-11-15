import User from "../../models/User";
import File from "../../models/File";

class ListFemaleController {
  async index(req, res){
    const listFemale = await User.findAll({
      where: { gender: true},
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        },
      ],
    });

    return res.json(listFemale);
  }
}

export default new ListFemaleController();
