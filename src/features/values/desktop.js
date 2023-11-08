function valDesktop() {
  //width variables
  let widthMax = $('#d-w-max').val() / 16
  let widthMin = $('#d-w-min').val() / 16
  // font variables
  let rootFont = $('#root-size').val() / 16
  let fontMax = $('#d-f-max').val() / 16
  let fontMin = $('#d-f-min').val() / 16

  //applying of the variables
  $('[width=d-max]').text(widthMax)
  $('[width=d-min]').text(widthMin)
  $('[font=d-max]').text(fontMax)
  $('[font=d-min]').text(fontMin)
  $('[font=root]').text(rootFont)
}

export default valDesktop
