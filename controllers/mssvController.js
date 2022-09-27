const group14 = require("../models/group14");
const mygroup = require("../models/mygroup");

const mssvController = {
  addNewMember: (req, res, next) => {
    const id = Number(req.params.id);

    const member = group14.find((data) => {
      return data.id === id;
    });

    if (member) {
      const member_2 = mygroup.find((data) => {
        return data.id === id;
      });

      if (!member_2) {
        mygroup.push(member);
      } else {
        return res.send("Not Valid");
      }

      return res.json(mygroup);
    } else {
      return res.send("Not Valid");
    }
  },
  getMember: (req, res, next) => {
    const id = Number(req.params.id);

    const member = mygroup.find((data) => {
      return data.id === id;
    });

    if (member) {
      return res.json(member);
    } else {
      return res.json({ error: "Not Valid" });
    }
  },
};

module.exports = mssvController;
