// src/utils/Loadimg.js

// Glob statis per folder
export const logos = import.meta.glob('../assets/img/logos/*.svg', { eager: true, as: 'url' });
export const Ho = import.meta.glob('../assets/img/Ho/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
export const Tokobunga = import.meta.glob('../assets/img/Tokobunga/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
export const Zis = import.meta.glob('../assets/img/Zis/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });


// Format object supaya key = nama file tanpa ekstensi
const formatImages = (images) => {
  const result = {};
  for (const path in images) {
    const name = path.split('/').pop().replace(/\.(png|jpg|jpeg|svg)$/, '');
    result[name] = images[path];
  }
  return result;
};

export const formattedLogos = formatImages(logos);
export const formattedHo = formatImages(Ho);
export const formattedTokobunga = formatImages(Tokobunga);
export const formattedZis = formatImages(Zis);

