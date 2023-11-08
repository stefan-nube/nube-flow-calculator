import valDesktop from './values/desktop'
import valMobile from './values/mobile'
import valTablet from './values/tablet'

function valueUpdate() {
  //Proportional triggers
  $('.calc_values_input').on('keyup change', function () {
    valDesktop()
    valTablet()
    valMobile()
  })
}

export default valueUpdate
