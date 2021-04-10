const clientModel = require('../models/client.model');

const ClientController = {
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