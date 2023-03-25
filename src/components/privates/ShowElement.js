import { validationRole, validationPermissions } from "../../utils/validations"

export const ShowElement = ({ user, permissions, children }) => {
  if (!user || Object.entries(user).length === 0) return;

  if (!validationRole(user.role)) return;

  if (!validationPermissions(user, permissions)) return;

  return (
    <>
      { children }
    </>
  )
}
