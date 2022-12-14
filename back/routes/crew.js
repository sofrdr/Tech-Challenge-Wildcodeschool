const express = require("express");
const router = express.Router();
const crewCtrl = require("../controllers/crew");

router.get("/", crewCtrl.getMembers);
router.post("/", crewCtrl.addMember);

module.exports = router;
