const Member = require("../model/Member");
const validator = require("validator");

// ---------------  Get all members from database ----------------------------

exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// --------------- Add a new member to database -----------------------------------

exports.addMember = async (req, res) => {
  const { name } = req.body;

  try {
    // If the field is empty an error is send
    if (validator.isEmpty(name, { ignore_whitespace: true })) {
      throw new Error("Champ vide");
    }
    // Numbers and special characters are not allowed
    if (
      validator.matches(
        name,
        /^(?=.\D{0,}$)[\u00c0-\u01ffa-zA-Z]+(?:['-\s][\u00c0-\u01ffa-zA-Z]+)*$/
      ) === false
    ) {
      throw new Error("Caractères non autorisés");
    }
    // The number of characters is limited to 50
    if (validator.isLength(name, { max: 50 }) === false) {
      throw new Error("Le nom saisi dépasse les 50 caractères autorisés");
    }
    const member = new Member({ name });
    const newMember = await member.save();
    res.status(201).json({
      message: "Un nouveau membre a été ajouté à l'équipage !",
      newMember,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
