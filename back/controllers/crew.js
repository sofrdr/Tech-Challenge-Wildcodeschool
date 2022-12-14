const Member = require("../model/Member");

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.addMember = async (req, res) => {
  const { name } = req.body;

  try {
    const member = new Member({ name });
    const newMember = await member.save();
    res
      .status(201)
      .json({
        message: "Un nouveau membre a été ajouté à l'équipage !",
        newMember,
      });
  } catch (error) {
    res.status(400).json({ error });
  }
};
