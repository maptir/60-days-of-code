$(() => {
  const rgb = {
    r: 0,
    g: 0,
    b: 0
  }

  const changeColorSpace = () => {
    $('#color-space').css('background-color', `rgb(${rgb.r},${rgb.g},${rgb.b})`);
  }

  const changeRGB = (rgb1) => {
    rgb.r = rgb1[0]
    rgb.g = rgb1[1]
    rgb.b = rgb1[2]
    console.log(`RGB: ${rgb1}`);
    $('#rgb-R').val(rgb.r)
    $('#rgb-G').val(rgb.g)
    $('#rgb-B').val(rgb.b)
  }

  const changeHSL = (hsl) => {
    console.log(`HSL: ${hsl}`);
    $('#hsl-H').val(hsl[0])
    $('#hsl-S').val(hsl[1])
    $('#hsl-L').val(hsl[2])
  }

  const changeHSV = (hsv) => {
    console.log(`HSV: ${hsv}`);
    $('#hsv-H').val(hsv[0])
    $('#hsv-S').val(hsv[1])
    $('#hsv-V').val(hsv[2])
  }

  const setUpRGB = (name) => {
    $(name).on('input', () => {
      if ($(name).val() > 255) {
        $(name).val(255)
        alert('RGB must less than 255');
      } else if ($(name).val() < 0) {
        $(name).val(0)
        alert('RGB must more than 0');
      } else {
        rgb.r = $('#rgb-R').val()
        rgb.g = $('#rgb-G').val()
        rgb.b = $('#rgb-B').val()
        changeHSL(rgbToHsl(rgb.r, rgb.g, rgb.b));
        changeHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
        changeColorSpace();
      }
    })
  }

  const setUpHSL = (name) => {
    $(name).on('input', () => {
      if ($(name).val() > 1) {
        $(name).val(1)
        alert('HSL must less than 1');
      } else if ($(name).val() < 0) {
        $(name).val(0)
        alert('HSL must more than 0');
      } else {
        const hsl = {
          h: parseFloat($('#hsl-H').val()),
          s: parseFloat($('#hsl-S').val()),
          l: parseFloat($('#hsl-L').val())
        }
        changeRGB(hslToRgb(hsl.h, hsl.s, hsl.l));
        changeHSV(rgbToHsv(rgb.r, rgb.g, rgb.b));
        changeColorSpace();
      }
    })
  }

  const setUpHSV = (name) => {
    $(name).on('input', () => {
      if ($(name).val() > 1) {
        $(name).val(1)
        alert('HSV must less than 1');
      } else if ($(name).val() < 0) {
        $(name).val(0)
        alert('HSV must more than 0');
      } else {
        const hsv = {
          h: parseFloat($('#hsv-H').val()),
          s: parseFloat($('#hsv-S').val()),
          v: parseFloat($('#hsv-V').val())
        }
        changeRGB(hsvToRgb(hsv.h, hsv.s, hsv.v));
        changeHSL(rgbToHsl(rgb.r, rgb.g, rgb.b));
        changeColorSpace();
      }
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
