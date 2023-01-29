function proTablet() {
  //width variables
  let widthMax = $('#tablet-w-max').val()
  let widthMin = $('#tablet-w-min').val()
  // font variables
  let rootFont = $('#root-size').val()
  let fontMax = $('#tablet-f-max').val()
  let fontMin = $('#tablet-f-min').val()
  // mixin variables
  let widthSplit = widthMax - widthMin
  let fontRatio = (fontMin / fontMax) * rootFont
  let fontCoefficient = rootFont - fontRatio

  //applying of the variables
  $('[width=tablet]').text(widthMin)
  $('[split=tablet]').text(widthSplit)
  $('[font=tablet]').text(fontRatio)
  $('[coefficient=tablet]').text(fontCoefficient)
}

export default proTablet
