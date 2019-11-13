const models = require('../models');

const ReposController = {
  show: (req, res) => {
    models
      .Repo
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
      .Repo
      .findAll()
      .then(data => res.send(data));

  },
  create: (req, res) => {
    const body = req.body;
    models
      .Repo
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
      .Repo
      .update(body, { where: { id: id }})
      .then(updated => {
        models
          .Repo
          .findByPk(id)
          .then(data => res.send(data));
      });
  },
  delete: (req, res) => {
    const id = req.params.id;
    models
      .Repo
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

module.exports = ReposController;