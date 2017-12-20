$(() => {
  const rgb = {
    r: 0,
    g: 0,
    b: 0
  }

  const alertWhen = (type, name, min, max) => {
    if ($(name).val() > max) {
      $(name).val(max)
      alert(`${type} must less than ${max}`);
    } else if ($(name).val() < min) {
      $(name).val(min)
      alert(`${type} must more than ${min}`);
    }
  }

  const changeColorSpace = () => {
    $('#color-space').css('background-color', `rgb(${parseInt(rgb.r)},${parseInt(rgb.g)},${parseInt(rgb.b)})`);
  }

  const changeRGB = (rgb1) => {
    rgb.r = rgb1[0]
    rgb.g = rgb1[1]
    rgb.b = rgb1[2]
    $('#rgb-R').val(rgb.r)
    $('#rgb-G').val(rgb.g)
    $('#rgb-B').val(rgb.b)
  }

  const changeHSL = (hsl) => {
    $('#hsl-H').val(hsl[0])
    $('#hsl-S').val(hsl[1])
    $('#hsl-L').val(hsl[2])
  }

  const changeHSV = (hsv) => {
    $('#hsv-H').val(hsv[0])
    $('#hsv-S').val(hsv[1])
    $('#hsv-V').val(hsv[2])
  }

  const setUpRGB = (name) => {
    $(name).on('input', () => {
      alertWhen('RGB', name, 0, 255)
      rgb.r = $('#rgb-R').val()
      rgb.g = $('#rgb-G').val()
      rgb.b = $('#rgb-B').val()
      changeHSL(rgbToHsl(rgb.r, rgb.g, rgb.b));
      changeHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
      changeColorSpace();
    })
  }

  const setUpHSL = (name) => {
    $(name).on('input', () => {
      alertWhen('HSL', name, 0, 1)
      const hsl = {
        h: parseFloat($('#hsl-H').val()),
        s: parseFloat($('#hsl-S').val()),
        l: parseFloat($('#hsl-L').val())
      }
      changeRGB(hslToRgb(hsl.h, hsl.s, hsl.l));
      changeHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
      changeColorSpace();
    })
  }

  const setUpHSV = (name) => {
    $(name).on('input', () => {
      alertWhen('HSV', name, 0, 1)
      const hsv = {
        h: parseFloat($('#hsv-H').val()),
        s: parseFloat($('#hsv-S').val()),
        v: parseFloat($('#hsv-V').val())
      }
      changeRGB(hsvToRgb(hsv.h, hsv.s, hsv.v));
      changeHSL(rgbToHsl(rgb.r, rgb.g, rgb.b));
      changeColorSpace();
    })
  }

  setUpRGB('#rgb-R')
  setUpRGB('#rgb-G')
  setUpRGB('#rgb-B')

  setUpHSL('#hsl-H')
  setUpHSL('#hsl-S')
  setUpHSL('#hsl-L')

  setUpHSV('#hsv-H')
  setUpHSV('#hsv-S')
  setUpHSV('#hsv-V')

})
