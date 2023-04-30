


export function setLocalUserInfo(userInfo: any) {
  localStorage.setItem('t_user_info', JSON.stringify(userInfo))
}


interface UserInfo {
  'avatarUrl'?: string,
  'passwordExists'?: boolean,
  'userEmail'?: string,
  'userName'?: string
}
export function getLocalUserInfo() {
  const userInfoStr = localStorage.getItem('t_user_info')
  const userInfo = userInfoStr ? JSON.parse(userInfoStr) : {}
  return {
    'avatarUrl': userInfo?.avatarUrl,
    'passwordExists': userInfo?.passwordExists,
    'userEmail': userInfo?.userEmail,
    'userName': userInfo?.userName
  }
}


// getLocalUserInfo