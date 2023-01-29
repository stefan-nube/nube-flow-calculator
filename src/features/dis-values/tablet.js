function disTablet() {
  let WidthMin = $('#tablet-w-min-dis').val()
  let WidthMax = $('#tablet-w-max-dis').val()
  let FontMin = $('#tablet-f-min-dis').val()
  let FontMax = $('#tablet-f-max-dis').val()
  let coefficient =
    ((FontMax - FontMin) / ((WidthMax / 100) * 1 - (WidthMin / 100) * 1)) * 1
  let base = (FontMin - (WidthMin / 100) * coefficient) / 16

  $('[width=tablet-dis]').text(WidthMin)
  $('[base=tablet]').text(base)
  $('[coefficient=tablet]').text(coefficient)
}

export default disTablet
