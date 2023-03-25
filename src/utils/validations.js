export const validationRole = (role = '') => {
  const allowedRoles = ['admin', 'editor'];
  
  const isAdmin = allowedRoles.includes(role.toLocaleLowerCase())

  return isAdmin;
}

export const validationPermissions = (user, permissions = []) => {
  // No requerie permiso
  if (permissions.length === 0) return true;

  // Valida que tenga permisos
  if (!user.permissions) return false;

  // Si es admin siempre tiene permiso
  const fullAccess = user.permissions.some((permission) => permission === 'fullAccess');
  if (fullAccess) return true;

  // Valida que tenga los permisos
  const havePermision = user.permissions.filter((permission) => permissions.includes(permission));
  if (havePermision.length > 0) return true

  // Es admin pero no tiene permisos
  return false
}