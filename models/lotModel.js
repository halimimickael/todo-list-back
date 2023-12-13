const mongoose = require("mongoose");
// const Joi = require("joi");

const lotSchema = new mongoose.Schema({
  lots:String,
});


const lotModel = mongoose.model("lots",lotSchema);
exports.lotModel = lotModel;


exports.validLots = (_bodyData) => {
  let joiSchema = Joi.object({
    lots:Joi.string().min(2).max(500).required()
  })

  return joiSchema.validate(_bodyData);
}