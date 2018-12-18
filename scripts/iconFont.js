const SVGIcons2SVGFontStream = require('svgicons2svgfont');
const svg2ttf = require('svg2ttf');
const fs = require('fs');
const icons = require('../assets/icons/icons.js');

const fontStream = new SVGIcons2SVGFontStream({
    fontName: 'IOTA icons',
});

fontStream
    .pipe(fs.createWriteStream('./Icons.svg'))
    .on('finish', () => {
        const ttf = svg2ttf(fs.readFileSync('Icons.svg', 'utf8'), {});
        fs.writeFileSync('./assets/iota-icons.ttf', Buffer.from(ttf.buffer));
        console.log('Font successfully created!');
    })
    .on('error', (err) => {
        console.log(err);
    });

Object.keys(icons).forEach((glyph) => {
    const iconFile = fs.createReadStream(`./assets/icons/${glyph}.svg`);
    iconFile.metadata = {
        unicode: [icons[glyph]],
        name: glyph,
    };
    fontStream.write(iconFile);
});

fontStream.end();
