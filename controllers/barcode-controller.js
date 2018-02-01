exports.create = (req, res, next) => {
  let text = req.body.text

  var qr_svg = qr.image(text, { type: 'svg' });
  qr_svg.pipe(require('fs').createWriteStream('barcode.svg'));
  var svg_string = qr.imageSync(text, { type: 'svg' });
}
