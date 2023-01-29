function disDesktop() {
  let WidthMin = $('#desktop-w-min-dis').val()
  let WidthMax = $('#desktop-w-max-dis').val()
  let FontMin = $('#desktop-f-min-dis').val()
  let FontMax = $('#desktop-f-max-dis').val()
  let coefficient =
    ((FontMax - FontMin) / ((WidthMax / 100) * 1 - (WidthMin / 100) * 1)) * 1
  let base = (FontMin - (WidthMin / 100) * coefficient) / 16
  let scaleStop = FontMax / 16
  let dContainer = WidthMax / 16

  $('[width=desktop-dis]').text(WidthMin)
  $('[width=desktop-inf-dis]').text(WidthMax)
  $('[base=desktop]').text(scaleStop)
  $('[container=max-w-dis]').text(dContainer)
  $('[base=desktop-infinite]').text(base)
  $('[coefficient=desktop-infinite]').text(coefficient)
}

export default disDesktop
