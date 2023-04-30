export function getNetworkType(): string {
  const ua = navigator.userAgent
  const matchRes = ua.match(/NetType\/\w+/)
  let networkStr = matchRes ? matchRes[0] : 'NetType/other'
  networkStr = networkStr.toLowerCase().replace('nettype/', '')
  let networkType = ''
  switch (networkStr) {
    case 'wifi':
      networkType = 'wifi'
      break
    case '4g':
      networkType = '4g'
      break
    case '3g':
    case '3gnet':
      networkType = '3g'
      break
    case '2g':
      networkType = '2g'
      break
    default:
      networkType = 'other'
  }
  return networkType
}