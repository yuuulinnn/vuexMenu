// 限制只能输入数字
const numberValidateFn = function (el) {
  el.addEventListener('keyup', function () {
    el.value = el.value.replace(/[^\d]/g, '') || ''
    el.dispatchEvent(new Event('input')) // 手动触发input事件，数据响应。
  })
}

// 限制只能输入金额类格式
const priceValidateFn = function (el) {
  el.addEventListener('keyup', function () {
    el.value = el.value.replace(/[^\d.]/g, '').replace(/\.{2,}/g, '.').replace('.', '$#$').replace(/\./g, '').replace('$#$', '.').replace(/^(\\-)*(\d+)\.(\d\d).*$/, '$1$2.$3').replace(/^\./g, '') || ''
    el.dispatchEvent(new Event('input')) // 手动触发input事件，数据响应。
  })
}

export default {
  bind (el, binding) {
    if (el.tagName.toLowerCase() !== 'input') {
      el = el.getElementsByTagName('input')[0]
    }
    switch (binding.arg) {
      case undefined: case 'number':
        numberValidateFn(el)
        break
      case 'price':
        priceValidateFn(el)
        break
      default:
        break
    }
  }
}
