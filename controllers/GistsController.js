const models = require('../models');

const GistController = {
  show: (req, res) => {
    models
      .Gist
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
      .Gist
      .findAll()
      .then(data => res.send(data));

  },
  create: (req, res) => {
    const body = req.body;
    models
      .Gist
      .create({
        fileName: body.fileName,
        description: body.description,
        content: body.content,
        secret: body.secret,
      })
      .then(gist => {
        return res.send(gist);
      });
  },
  update: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    models
      .Gist
      .update(body, { where: { id: id }})
      .then(updated => {
        models
          .Gist
          .findByPk(id)
          .then(data => res.send(data));
      });
  },
  delete: (req, res) => {
    const id = req.params.id;
    models
      .Gist
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

module.exports = GistController;
