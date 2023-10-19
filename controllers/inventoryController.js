const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    //validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }
    if (inventoryType === "in" && user.role !== "admin") {
      throw new Error("Not a donar account");
    }
    if (inventoryType === "out" && user.role !== "admin") {
      throw new Error("not a hospital");
    }
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Exam record Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "errr in create inventoryu API",
      error,
    });
  }
};

module.exports = { createInventoryController };
