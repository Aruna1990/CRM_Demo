import * as types from '../constants/ActionTypes';

export function fetchUserList(page, username) {
  console.log(page);
  return {type: types.FETCH_USER_LIST, page, username};
}
export function fetchUsersNextPage(username) {
  return {type: types.FETCH_USERS_NEXT_PAGE, username};
}

export function fetchPointlogList(username, startDate, endDate) {
  return {type: types.FETCH_POINTLOG_LIST, username, startDate, endDate};
}
export function enablePointlogItem(logId) {
  return {type: types.ENABLE_POINTLOG_ITEM, logId};
}
export function disablePointlogItem(logId) {
  return {type: types.DISABLE_POINTLOG_ITEM, logId};
}

export function fetchPersonalInfo(userId) {
  return {type: types.FETCH_PERSONAL_INFO, userId};
}
export function updatePersonalInfo(userId) {
  return {type: types.UPDATE_PERSONAL_INFO, userId};
}
export function fetchPointOverview(userId) {
  return {type: types.UPDATE_PERSONAL_INFO, userId};
}
export function enablePointLog(logId) {
  return {type: types.ENABLE_POINTLOG_ITEM, logId};
}
export function disablePointLog(logId) {
  return {type: types.DISABLE_POINTLOG_ITEM, logId};
}
