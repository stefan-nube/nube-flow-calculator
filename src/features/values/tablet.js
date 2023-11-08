function valTablet() {
  //width variables
  let widthMax = $('#t-w-max').val() / 16
  let widthMin = $('#t-w-min').val() / 16
  // font variables
  let fontMax = $('#t-f-max').val() / 16
  let fontMin = $('#t-f-min').val() / 16

  //applying of the variables
  $('[width=t-max]').text(widthMax)
  $('[width=t-min]').text(widthMin)
  $('[font=t-max]').text(fontMax)
  $('[font=t-min]').text(fontMin)
}

export default valTablet
