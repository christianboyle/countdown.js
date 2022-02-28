// https://stackoverflow.com/a/29883167

function findNextTabStop(el) {
  var universe = document.querySelectorAll(
    'input, button, select, textarea, a[href]'
  )
  var list = Array.prototype.filter.call(universe, function (item) {
    return item.tabIndex >= '0'
  })
  var index = list.indexOf(el)
  return list[index + 1] || list[0]
}
