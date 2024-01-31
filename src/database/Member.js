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

const getOneMember = (memberId) => {
  try {
    const member = DB.members.find((member) => member.id === memberId);
    if (!member) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${memberId}'`,
      };
    }
    return member;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewMember = (newMember) => {
  try {
    const isAlreadyAdded =
      DB.members.findIndex((member) => member.id === newMember.id) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Already exist`,
      };
    }
    DB.members.push(newMember);
    saveToDatabase(DB);
    return newMember;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneMember = (memberId, changes) => {
  try {
    const isAlreadyAdded =
      DB.member.findIndex((member) => member.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Member with the name '${changes.name}' already exists`,
      };
    }
    const indexForUpdate = DB.member.findIndex(
      (member) => member.id === memberId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${memberId}'`,
      };
    }
    const updatedMember = {
      ...DB.member[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.member[indexForUpdate] = updatedMember;
    saveToDatabase(DB);
    return updatedMember;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneMember = (memberId) => {
  try {
    const indexForDeletion = DB.members.findIndex(
      (member) => member.id === memberId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${memberId}'`,
      };
    }
    DB.members.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllMembers,
  createNewMember,
  getOneMember,
  updateOneMember,
  deleteOneMember,
  };