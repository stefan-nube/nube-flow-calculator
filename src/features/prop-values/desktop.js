function proDesktop() {
  //width variables
  let widthMax = $('#desktop-w-max').val()
  let widthMin = $('#desktop-w-min').val()
  let widthWider = $('#desktop-w-max-wider').val()
  // font variables
  let rootFont = $('#root-size').val()
  let fontMax = $('#desktop-f-max').val()
  let fontMin = $('#desktop-f-min').val()
  let fontWider = $('#desktop-f-max-wider').val()
  // mixin variables
  let widthSplit = widthMax - widthMin
  let widthSplitWider = widthWider - widthMax
  let fontRatio = (fontMin / fontMax) * rootFont
  let fontRatioWider = (fontWider / fontMax) * rootFont
  let fontCoefficient = rootFont - fontRatio
  let fontCoefficientWider = fontRatioWider - rootFont
  let widthContainer = widthMax / 16
  let widthContainerWider = widthWider / 16
  //applying of the variables
  $('[width=desktop]').text(widthMax)
  $('[width=desktop-small]').text(widthMin)
  $('[width=desktop-wide]').text(widthWider)
  $('[split=desktop-tablet]').text(widthSplit)
  $('[split=desktop-wide]').text(widthSplitWider)
  $('[font=desktop]').text(fontRatio)
  $('[font=desktop-wide]').text(fontRatioWider)
  $('[container=size]').text(widthContainer)
  $('[container=size-wide]').text(widthContainerWider)
  $('[coefficient=desktop]').text(fontCoefficient)
  $('[coefficient=desktop-wide]').text(fontCoefficientWider)
  $('[font=root]').text(rootFont)
}

export default proDesktop
