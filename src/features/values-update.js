import disDesktop from './dis-values/desktop'
import disMobile from './dis-values/mobile'
import disTablet from './dis-values/tablet'
import proDesktop from './prop-values/desktop'
import proMobile from './prop-values/mobile'
import proTablet from './prop-values/tablet'

function valueUpdate() {
  //Disproportional triggers
  $(
    '#desktop-w-min-dis, #desktop-w-max-dis, #desktop-f-min-dis, #desktop-f-max-dis'
  ).on('keyup change', function () {
    disDesktop()
  })

  $(
    '#mobile-w-min-dis, #mobile-w-max-dis, #mobile-f-min-dis, #mobile-f-max-dis'
  ).on('keyup change', function () {
    disMobile()
  })
  $(
    '#tablet-w-min-dis, #tablet-w-max-dis, #tablet-f-min-dis, #tablet-f-max-dis'
  ).on('keyup change', function () {
    disTablet()
  })

  //Proportional triggers
  $(
    '#desktop-w-min, #desktop-w-max, #desktop-w-max-wider, #desktop-f-min, #desktop-f-max, #desktop-f-max-wider'
  ).on('keyup change', function () {
    proDesktop()
  })
  $('#tablet-w-min, #tablet-w-max, #tablet-f-min, #tablet-f-max').on(
    'keyup change',
    function () {
      proTablet()
    }
  )
  $('#mobile-w-min, #mobile-w-max, #mobile-f-min, #mobile-f-max').on(
    'keyup change',
    function () {
      proMobile()
    }
  )
  $('#root-size').on('keyup change', function () {
    proMobile()
    proTablet()
    proDesktop()
  })
}

export default valueUpdate
