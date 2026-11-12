/**
 * Otimiza a captura do template og-ns.html para public/og-ns.png.
 * Uso: node scripts/og-image/optimize.mjs <entrada.png> <saida.png>
 *
 * Garante 1200 × 630 exatos e PNG comprimido (WhatsApp, LinkedIn e
 * Facebook aceitam PNG; WebP ainda não é suportado de forma confiável
 * por todos os leitores de Open Graph).
 */
import sharp from 'sharp';

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('Uso: node scripts/og-image/optimize.mjs <entrada.png> <saida.png>');
  process.exit(1);
}

const info = await sharp(input)
  .resize(1200, 630, { fit: 'cover', position: 'left top' })
  .png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
  .toFile(output);

console.log(`${output}: ${info.width}×${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
