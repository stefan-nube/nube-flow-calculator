import './styles/style.css'

import copyCode from './features/copy-code'
import disDesktop from './features/dis-values/desktop'
import disMobile from './features/dis-values/mobile'
import disTablet from './features/dis-values/tablet'
import tabs from './features/tabs'
import valueUpdate from './features/values-update'

tabs()

$(document).ready(function () {
  // after the page elements are all loaded, then run the script
  // Set the width inputs
  $('#desktop-w-max').val('1440')
  $('#desktop-w-max-wider').val('1920')
  $('#desktop-w-min').val('992')
  $('#tablet-w-max').val('991')
  $('#tablet-w-min').val('768')
  $('#mobile-w-max').val('767')
  $('#mobile-w-min').val('240')
  // Set the font size inputs
  $('#desktop-f-max').val('72')
  $('#desktop-f-min').val('63')
  $('#desktop-f-max-wider').val('90')
  $('#tablet-f-max').val('72')
  $('#tablet-f-min').val('54')
  $('#mobile-f-max').val('56')
  $('#mobile-f-min').val('40')
  $('#root-size').val('16')

  $('[tab=disproportional-alert]').addClass('hide')
  $('[tab=disproportional-code]').addClass('hide')
  $('[tab=disproportional-values]').addClass('hide')

  // Set the width inputs for disproportional
  $('#desktop-w-max-dis').val('1440')
  $('#desktop-w-min-dis').val('992')
  $('#tablet-w-max-dis').val('991')
  $('#tablet-w-min-dis').val('768')
  $('#mobile-w-max-dis').val('767')
  $('#mobile-w-min-dis').val('240')
  // Set the font size inputs for disproportional
  $('#desktop-f-max-dis').val('16')
  $('#desktop-f-min-dis').val('14')
  $('#tablet-f-max-dis').val('16')
  $('#tablet-f-min-dis').val('14')
  $('#mobile-f-max-dis').val('14')
  $('#mobile-f-min-dis').val('12')
  copyCode()

  disDesktop()
  disTablet()
  disMobile()
})

valueUpdate()

$('#max-width').click(function () {
  $('[target=desktop-wide]').toggleClass('disabled')
  $('[target=desktop-code]').toggleClass('hidden-child')
})

$('#root-font').click(function () {
  $('[target=root-font]').toggleClass('disabled')
})

$('#infinite-scaling').click(function () {
  $('[target=desktop-dis]').toggleClass('hidden-child')
})
