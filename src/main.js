import copyCode from './features/copy-code'
import valueUpdate from './features/values-update'

$(document).ready(function () {
  // after the page elements are all loaded, then run the script
  // Set the width inputs
  $('#d-w-max').val('1440')
  $('#d-w-min').val('992')
  $('#t-w-max').val('991')
  $('#t-w-min').val('768')
  $('#m-w-max').val('767')
  $('#m-w-min').val('240')
  // Set the font size inputs
  $('#d-f-max').val('16')
  $('#d-f-min').val('14')
  $('#t-f-max').val('16')
  $('#t-f-min').val('12')
  $('#m-f-max').val('16')
  $('#m-f-min').val('12')
  $('#root-size').val('16')

  copyCode()
  valueUpdate()
})

valueUpdate()

$('#root-font').click(function () {
  $('[target=root-font]').toggleClass('disabled')
})
