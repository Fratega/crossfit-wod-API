const { v4: uuid } = require("uuid");
const Member = require("../database/Member");

const getAllMembers = (filterParams) => {
  try {
    const allMembers = Member.getAllMembers(filterParams);
    return allMembers;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMembers
};