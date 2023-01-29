import gsap from 'gsap'

function copyCode() {
  $('[nf-element=copy]').click(function () {
    const parent = $('#code')
    const children = parent.children()
    let textToCopy = parent.text()
    children.each(function () {
      if ($(this).hasClass('hidden-child')) {
        textToCopy = textToCopy.replace($(this).text(), '')
      }
    })
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard')
        gsap.to("[nf-element='copied']", {
          duration: 1,
          opacity: 1,
          ease: 'back.out(1.7)',
        })
        setTimeout(function () {
          gsap.to("[nf-element='copied']", { duration: 0.5, opacity: 0 })
        }, 2000)
        // Change color of the icon
        gsap.to(this, {
          duration: 1,
          color: '#165FF2',
          ease: 'back.out(1.7)',
        })
        setTimeout(function () {
          gsap.to('[nf-element=copy]', {
            duration: 0.5,
            color: '#0c111c',
          })
        }, 2000)
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  })

  $('[nf-element=copy-dis]').click(function () {
    const parent = $('#code-dis')
    const children = parent.children()
    let textToCopy = parent.text()
    children.each(function () {
      if ($(this).hasClass('hidden-child')) {
        textToCopy = textToCopy.replace($(this).text(), '')
      }
    })
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard')
        gsap.to("[nf-element='copied-dis']", {
          duration: 1,
          opacity: 1,
          ease: 'back.out(1.7)',
        })
        setTimeout(function () {
          gsap.to("[nf-element='copied-dis']", { duration: 0.5, opacity: 0 })
        }, 2000)
        // Change color of the icon
        gsap.to(this, {
          duration: 1,
          color: '#165FF2',
          ease: 'back.out(1.7)',
        })
        setTimeout(function () {
          gsap.to('[nf-element=copy-dis]', {
            duration: 0.5,
            color: '#0c111c',
          })
        }, 2000)
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err)
      })
  })
}

export default copyCode
