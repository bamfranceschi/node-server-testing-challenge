const router = require("express").Router();

const Users = require("./users-model.js");

const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.remove(id)
    .then(removed => {
      if (removed) {
        res.status(200).json({ message: "user deleted" });
      } else {
        res.status(400).json({ message: "could not find user by that id" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "something went wrong" });
    });
});

module.exports = router;
