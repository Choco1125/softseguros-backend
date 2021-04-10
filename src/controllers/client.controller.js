const clientModel = require('../models/client.model');

const ClientController = {
  async find(req, res) {
    const { id } = req.params;
    let clients;

    if (id) {
      clients = await clientModel.findById(id);
    } else {
      clients = await clientModel.getAll();
    }

    if (!clients) return res.status(404).json({
      message: 'User not found!'
    });

    res.status(200).json(clients);
  },
  async save(req, res) {
    const { fullname, email, birthdate } = req.body;

    const saved = await clientModel.save(fullname, email, birthdate);

    if (!saved) return res.status(500).json({
      message: "Can not create client, try again!"
    });

    res.status(201).json({
      message: 'User created!'
    });
  }
}

module.exports = ClientController;