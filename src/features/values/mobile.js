function valMobile() {
  //width variables
  let widthMax = $('#m-w-max').val() / 16
  let widthMin = $('#m-w-min').val() / 16
  // font variables
  let fontMax = $('#m-f-max').val() / 16
  let fontMin = $('#m-f-min').val() / 16

  //applying of the variables
  $('[width=m-max]').text(widthMax)
  $('[width=m-min]').text(widthMin)
  $('[font=m-max]').text(fontMax)
  $('[font=m-min]').text(fontMin)
}

export default valMobile
