
// 6-16位，包含字母、数字
export function isValidPassword(pwd: string): boolean {
  return /^(?=.*[A-Za-z])(?=.*\d).{6,16}$/g.test(pwd)
}

export function isValidEmail(email: string): boolean {
  const regExp = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'g')
  return regExp.test(email)
}