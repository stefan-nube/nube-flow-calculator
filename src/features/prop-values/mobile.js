function proMobile() {
  //width variables
  let widthMax = $('#mobile-w-max').val()
  let widthMin = $('#mobile-w-min').val()
  // font variables
  let rootFont = $('#root-size').val()
  let fontMax = $('#mobile-f-max').val()
  let fontMin = $('#mobile-f-min').val()
  // mixin variables
  let widthSplit = widthMax - widthMin
  let fontRatio = (fontMin / fontMax) * rootFont
  let fontCoefficient = rootFont - fontRatio

  //applying of the variables
  $('[width=mobile]').text(widthMin)
  $('[split=mobile]').text(widthSplit)
  $('[font=mobile]').text(fontRatio)
  $('[coefficient=mobile]').text(fontCoefficient)
}

export default proMobile
