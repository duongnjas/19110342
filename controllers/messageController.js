const mygroup = require("../models/mygroup");

const messageController = {
  getMember: (req, res, next) => {
    const id = Number(req.params.id);

    const member = mygroup.find((data) => {
      return data.id === id;
    });

    if (member) {
      return res.send(`<ul><li>${member.name}</li></ul>`);
    } else {
      return res.send("Not Valid");
    }
  },
  getAllMember: (req, res) => {
    const htmls = mygroup.map((data) => {
      return `<li>${data.name}</li>`;
    });

    return res.send(`<ul>${htmls.join("")}</ul>`);
  },
};

module.exports = messageController;
