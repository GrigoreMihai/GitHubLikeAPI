const models = require('../models');

const UsersController = {
  show: (req, res) => {
    models
      .User
      .findByPk(req.params.id)
      .then(data => {
        if (!data) {
          return res.send({});
        }

        return res.send(data);
      })
  },
  index: (req, res) => {
    models
      .User
      .findAll()
      .then(data => res.send(data));

  },
  create: (req, res) => {
    const body = req.body;
    models
      .User
      .create({
        firstName: body.firstName,
        lastName: body.lastName,
      })
      .then(user => {
        return res.send(user);
      });
  },
  update: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    models
      .User
      .update(body, { where: { id: id }})
      .then(updated => {
        models
          .User
          .findByPk(id)
          .then(data => res.send(data));
      });
  },
  delete: (req, res) => {
    const id = req.params.id;
    models
      .User
      .destroy({
        where: {
          id: id,
        }
      })
      .then(data => {
        return res.send(true);
      })
  },
};

module.exports = UsersController;
