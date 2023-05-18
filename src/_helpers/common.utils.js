import { userUtils } from "./user.utils";

export const commonUtils = {
 
  getCurrentUser,
  getCurrentUserId,
  getCurrentUserName
};


function getCurrentUser() {
  return userUtils.getCurrentUser();
}

function getCurrentUserId() {
  let currentUser = getCurrentUser();
  if (currentUser) {
    return currentUser.id;
  }
}
function getCurrentUserName() {
  let currentUser = getCurrentUser();
  if (currentUser) {
    return currentUser.name;
  }
}