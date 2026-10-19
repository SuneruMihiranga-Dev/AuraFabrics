const image = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

export const sarees = [
  { id: 'saree-01', name: 'Blue Heritage Saree', category: 'Silk', image: image('saree-royal-blue.jpg'), alt: 'Model wearing an ornate deep-blue saree against a warm studio backdrop', position: 'center 45%', featured: true, priceLabel: 'Price on enquiry', isPlaceholder: true },
  { id: 'saree-02', name: 'The Celebration Drape', category: 'Festive', image: image('saree-festive.jpg'), alt: 'Model wearing a vividly patterned multicolor saree', position: 'center 28%', featured: true, priceLabel: 'Price on enquiry', isPlaceholder: true },
  { id: 'saree-03', name: 'Classic Black Saree', category: 'Everyday', image: image('saree-black.jpg'), alt: 'Model wearing a black saree with delicate embroidered details', position: 'center 34%', featured: true, priceLabel: 'Price on enquiry', isPlaceholder: true },
  { id: 'saree-04', name: 'Ruby Occasion Saree', category: 'Festive', image: image('saree-bridal-red.jpg'), alt: 'Model wearing a traditional bright-red saree with ornate borders', position: 'center 32%', featured: true, priceLabel: 'Price on enquiry', isPlaceholder: true },
  { id: 'saree-05', name: 'Forest Woven Saree', category: 'Silk', image: image('saree-forest.jpg'), alt: 'Model wearing a patterned earth-toned saree with teal details outdoors', position: 'center 30%', featured: true, priceLabel: 'Price on enquiry', isPlaceholder: true },
  { id: 'saree-06', name: 'Classic Red Saree', category: 'Everyday', image: image('saree-red-classic.jpg'), alt: 'Model wearing a vivid red saree with a light decorative border', position: 'center 32%', featured: true, priceLabel: 'Price on enquiry', isPlaceholder: true },
];

export const editorialImages = {
  hero: image('hero-royal-blue.jpg'),
  heroDetail: image('saree-detail.jpg'),
  about: image('saree-bridal-red.jpg'),
  contact: image('saree-forest.jpg'),
  story: image('saree-detail.jpg'),
  moods: {
    Silk: image('saree-forest.jpg'),
    Festive: image('saree-bridal-red.jpg'),
    Everyday: image('saree-black.jpg'),
  },
};
