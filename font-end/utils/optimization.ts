

// 节流
export function throttle(fn: (e) => void, delay: number) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  }
}


// 防抖
export function debounce(fn: (e) => void, delay: number) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}