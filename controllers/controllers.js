const mygroup = require("./../models/mygroup");

function getAllMembers(req, res) {
  if (mygroup) {
    res.status(200).json(mygroup);
  } else {
    res.status(400).json({ error: "No member" });
  }
}

module.exports = {
  getAllMembers,
};
