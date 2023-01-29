function disMobile() {
  let WidthMin = $('#mobile-w-min-dis').val()
  let WidthMax = $('#mobile-w-max-dis').val()
  let FontMin = $('#mobile-f-min-dis').val()
  let FontMax = $('#mobile-f-max-dis').val()
  let coefficient =
    ((FontMax - FontMin) / ((WidthMax / 100) * 1 - (WidthMin / 100) * 1)) * 1
  let base = (FontMin - (WidthMin / 100) * coefficient) / 16

  $('[width=mobile-dis]').text(WidthMin)
  $('[base=mobile]').text(base)
  $('[coefficient=mobile]').text(coefficient)
}

export default disMobile
