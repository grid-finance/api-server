const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
  supervisor: ['getUsers', 'manageUsers', 'admin'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
