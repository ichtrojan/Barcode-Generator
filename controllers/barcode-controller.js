let qr = require('qr-image')
let file = require('fs')

exports.create = (req, res, next) => {
  let text = req.body.text
  let stamp = new Date().getTime()

  let qr_svg = qr.image(text, {
    type: 'svg'
  })

  let download = qr_svg.pipe(file.createWriteStream('./public/barcodes/'+stamp+'barcode.svg'))

  let svg_string = qr.imageSync(text, {
    type: 'svg'
  })

  console.log('barcode created')
  res.download(download.path)
}
