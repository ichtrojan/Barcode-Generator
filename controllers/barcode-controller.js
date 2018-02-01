exports.create = (req, res, next) => {
  let text = req.body.text
  let stamp = new Date()

  var qr_svg = qr.image(text, { type: 'svg' });
  qr_svg.pipe(require('fs').createWriteStream('barcode'+stamp'.svg'));
  var svg_string = qr.imageSync(text, { type: 'svg' });
}
