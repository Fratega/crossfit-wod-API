const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllMembers = (filterParams) => {
  try {
    let members = DB.members;
    if (filterParams.mode) {
      return DB.members.filter((member) =>
        member.mode.toLowerCase().includes(filterParams.mode)
      );
    }
    return members;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

module.exports = {
  getAllMembers
};