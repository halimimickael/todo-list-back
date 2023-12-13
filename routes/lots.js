const express = require("express");
const { lotModel } = require("../models/lotModel");
const router = express.Router();

router.get("/", async (req, res) => {
  let data = await lotModel.find({});
  res.json(data);
});

router.post("/", async (req, res) => {
  // req.body
  let lot = new lotModel(req.body);
  await lot.save();
  res.json(lot);
});

router.delete("/:idDel", async (req, res) => {
  try {
    let data = await lotModel.deleteOne({ _id: req.params.idDel });
    // deletedCount:1
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

// edit
router.put("/:idEdit", async (req, res) => {
  try {
    let data = await lotModel.updateOne({ _id: req.params.idEdit }, req.body);
    // si la mise à jour réussit, data contiendra un champ "n" égal à 1
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
