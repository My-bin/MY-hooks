/**
 * duration - 需要时间  ms
 * from - 开始数字
 * to - 结束数字
 * onProgress - 回调函数
 */
export const animation = (duration, from, to, onProgress) => {
  // 获取每毫秒变化多少
  const speed = (to - from) / duration
  // 拿到开始执行时间
  const startTime = Date.now()
  // 拿到当前数字
  let value = from
  function _run() {
    // 让value进行变化
    // 拿到当前时间
    const now = Date.now()
    // 获取开始时间到现在执行的时间相差多少
    const time = now - startTime
    if (time >= duration) {
      value = to
      onProgress && onProgress(value)
      return
    }
    // 关键代码  用每毫秒变化的值*当前进行了多少毫秒了得到值赋给value
    value = from + speed * time
    requestAnimationFrame(_run)
  }
  _run()
}
