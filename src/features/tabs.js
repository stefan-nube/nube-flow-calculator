function tabs() {
  $('#tab-proporional').click(function () {
    $('[tab=indicator]').addClass('first')
    $('[tab=proportional-alert]').removeClass('hide')
    $('[tab=disproportional-alert]').addClass('hide')
    $('[tab=proportional-code]').removeClass('hide')
    $('[tab=disproportional-code]').addClass('hide')
    $('[tab=proportional-values]').removeClass('hide')
    $('[tab=disproportional-values]').addClass('hide')
  })

  $('#tab-disproporional').click(function () {
    $('[tab=indicator]').removeClass('first')
    $('[tab=proportional-alert]').addClass('hide')
    $('[tab=disproportional-alert]').removeClass('hide')
    $('[tab=proportional-code]').addClass('hide')
    $('[tab=disproportional-code]').removeClass('hide')
    $('[tab=proportional-values]').addClass('hide')
    $('[tab=disproportional-values]').removeClass('hide')
  })

  $('#tab-disproporional-alert').click(function () {
    $('[tab=indicator]').removeClass('first')
    $('[tab=proportional-alert]').addClass('hide')
    $('[tab=disproportional-alert]').removeClass('hide')
    $('[tab=proportional-code]').addClass('hide')
    $('[tab=disproportional-code]').removeClass('hide')
    $('[tab=proportional-values]').addClass('hide')
    $('[tab=disproportional-values]').removeClass('hide')
  })
}

export default tabs
