import { commonUtils } from "./common.utils";

export const userUtils = {
  getCurrentUser,
  getCurrentUserId,
  getCurrentUserName,
  getCurrentTeamId,
  getCurrentTeamName
};
let userInfoJson = null;

function getCurrentUser() {
  let currentUserItem = localStorage.getItem('cu')
  let key = localStorage.getItem('authToken')
  if(currentUserItem != null && userInfoJson == null) {
      return JSON.parse(currentUserItem);
  }
  return userInfoJson;
}

function getCurrentUserId() {
  let currentUser = getCurrentUser()
  if (currentUser) {
    return currentUser.id;
  }
}
function getCurrentUserName() {
  let currentUser = getCurrentUser()
  if (currentUser) {
    return currentUser.firstName + ' ' + currentUser.lastName ;
  }
}
function getCurrentTeamId() {
  let currentUser = getCurrentUser()
  if (currentUser) {
    return currentUser.defaultUserTeamDetails.id;
  }
}
function getCurrentTeamName() {
  let currentUser = getCurrentUser()
  if (currentUser) {
    return currentUser.defaultUserTeamDetails.name;
  }
}