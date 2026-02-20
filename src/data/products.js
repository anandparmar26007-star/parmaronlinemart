const products = [
  {
    id: 1,
    name: 'Golden Honey Mangoes',
    category: 'Fruits',
    price: 3.99,
    rating: 4.6,
    description: 'Sweet, juicy mangoes sourced locally.',
    image: 'https://picsum.photos/seed/product1/600/400',
    images: ['https://picsum.photos/seed/product1a/800/600','https://picsum.photos/seed/product1b/800/600']
  },
  {
    id: 2,
    name: 'Organic Bananas',
    category: 'Fruits',
    price: 1.29,
    rating: 4.3,
    description: 'Ripe organic bananas, perfect for smoothies.',
    image: 'https://picsum.photos/seed/product2/600/400',
    images: ['https://picsum.photos/seed/product2a/800/600']
  },
  {
    id: 3,
    name: 'Fresh Spinach Bag',
    category: 'Vegetables',
    price: 2.49,
    rating: 4.2,
    description: 'Crisp spinach, ideal for salads and cooking.',
    image: 'https://picsum.photos/seed/product3/600/400',
    images: ['https://picsum.photos/seed/product3a/800/600']
  },
  {
    id: 4,
    name: 'Brown Bread Loaf',
    category: 'Bakery',
    price: 2.99,
    rating: 4.1,
    description: 'Artisan wholegrain brown bread, freshly baked.',
    image: 'https://picsum.photos/seed/product4/600/400',
    images: ['https://picsum.photos/seed/product4a/800/600']
  },
  {
    id: 5,
    name: 'Greek Yogurt 500g',
    category: 'Dairy',
    price: 4.5,
    rating: 4.7,
    description: 'Creamy Greek yogurt, high protein.',
    image: 'https://picsum.photos/seed/product5/600/400',
    images: ['https://picsum.photos/seed/product5a/800/600']
  },
  {
    id: 6,
    name: 'Free-Range Eggs (12)',
    category: 'Dairy',
    price: 3.75,
    rating: 4.5,
    description: 'Large free-range eggs, farm fresh.',
    image: 'https://picsum.photos/seed/product6/600/400',
    images: ['https://picsum.photos/seed/product6a/800/600']
  },
  {
    id: 7,
    name: 'Almond Butter Jar',
    category: 'Pantry',
    price: 8.99,
    rating: 4.4,
    description: 'Creamy almond butter with no added sugar.',
    image: 'https://picsum.photos/seed/product7/600/400',
    images: ['https://picsum.photos/seed/product7a/800/600']
  },
  {
    id: 8,
    name: 'Extra Virgin Olive Oil',
    category: 'Pantry',
    price: 12.5,
    rating: 4.8,
    description: 'Cold-pressed extra virgin olive oil.',
    image: 'https://picsum.photos/seed/product8/600/400',
    images: ['https://picsum.photos/seed/product8a/800/600']
  },
  {
    id: 9,
    name: 'Brown Rice 1kg',
    category: 'Pantry',
    price: 2.99,
    rating: 4.0,
    description: 'Healthy brown rice perfect for everyday meals.',
    image: 'https://picsum.photos/seed/product9/600/400',
    images: ['https://picsum.photos/seed/product9a/800/600']
  },
  {
    id: 10,
    name: 'Chicken Breast 500g',
    category: 'Meat',
    price: 6.49,
    rating: 4.2,
    description: 'Lean boneless chicken breast, fresh.',
    image: 'https://picsum.photos/seed/product10/600/400',
    images: ['https://picsum.photos/seed/product10a/800/600']
  },
  {
    id: 11,
    name: 'Paneer Block 400g',
    category: 'Dairy',
    price: 5.25,
    rating: 4.6,
    description: 'Soft and fresh paneer for curries and grills.',
    image: 'https://picsum.photos/seed/product11/600/400',
    images: ['https://picsum.photos/seed/product11a/800/600']
  },
  {
    id: 12,
    name: 'Ripe Strawberries Box',
    category: 'Fruits',
    price: 3.5,
    rating: 4.4,
    description: 'Sweet strawberries, great for desserts.',
    image: 'https://picsum.photos/seed/product12/600/400',
    images: ['https://picsum.photos/seed/product12a/800/600']
  },
  {
    id: 13,
    name: 'Cheddar Cheese 200g',
    category: 'Dairy',
    price: 3.99,
    rating: 4.3,
    description: 'Mild cheddar cheese, perfect for sandwiches.',
    image: 'https://picsum.photos/seed/product13/600/400',
    images: ['https://picsum.photos/seed/product13a/800/600']
  },
  {
    id: 14,
    name: 'Organic Lentils 500g',
    category: 'Pantry',
    price: 2.1,
    rating: 4.5,
    description: 'High-protein organic red lentils.',
    image: 'https://picsum.photos/seed/product14/600/400',
    images: ['https://picsum.photos/seed/product14a/800/600']
  },
  {
    id: 15,
    name: 'Fresh Coriander Bunch',
    category: 'Vegetables',
    price: 0.79,
    rating: 4.0,
    description: 'Aromatic coriander bunch for garnishing.',
    image: 'https://picsum.photos/seed/product15/600/400',
    images: ['https://picsum.photos/seed/product15a/800/600']
  },
  {
    id: 16,
    name: 'Salted Butter 200g',
    category: 'Dairy',
    price: 2.5,
    rating: 4.2,
    description: 'Premium salted butter for baking and cooking.',
    image: 'https://picsum.photos/seed/product16/600/400',
    images: ['https://picsum.photos/seed/product16a/800/600']
  },
  {
    id: 17,
    name: 'Coffee Beans 250g',
    category: 'Beverages',
    price: 6.99,
    rating: 4.7,
    description: 'Rich roasted coffee beans with aromatic notes.',
    image: 'https://picsum.photos/seed/product17/600/400',
    images: ['https://picsum.photos/seed/product17a/800/600']
  },
  {
    id: 18,
    name: 'Green Tea Bags (20)',
    category: 'Beverages',
    price: 2.99,
    rating: 4.1,
    description: 'Soothing green tea bags for daily use.',
    image: 'https://picsum.photos/seed/product18/600/400',
    images: ['https://picsum.photos/seed/product18a/800/600']
  },
  {
    id: 19,
    name: 'Tomato Ketchup 400g',
    category: 'Pantry',
    price: 1.99,
    rating: 4.0,
    description: 'Classic tomato ketchup for all dishes.',
    image: 'https://picsum.photos/seed/product19/600/400',
    images: ['https://picsum.photos/seed/product19a/800/600']
  },
  {
    id: 20,
    name: 'Potato 2kg Bag',
    category: 'Vegetables',
    price: 3.2,
    rating: 4.1,
    description: 'Starchy potatoes ideal for fries and mash.',
    image: 'https://picsum.photos/seed/product20/600/400',
    images: ['https://picsum.photos/seed/product20a/800/600']
  },
  {
    id: 21,
    name: 'Salmon Fillet 300g',
    category: 'Seafood',
    price: 9.99,
    rating: 4.6,
    description: 'Fresh salmon fillet, rich in omega-3.',
    image: 'https://picsum.photos/seed/product21/600/400',
    images: ['https://picsum.photos/seed/product21a/800/600']
  },
  {
    id: 22,
    name: 'Mozzarella Cheese 200g',
    category: 'Dairy',
    price: 3.5,
    rating: 4.3,
    description: 'Soft mozzarella, great for pizzas.',
    image: 'https://picsum.photos/seed/product22/600/400',
    images: ['https://picsum.photos/seed/product22a/800/600']
  },
  {
    id: 23,
    name: 'Apple Gala (pack)',
    category: 'Fruits',
    price: 2.99,
    rating: 4.2,
    description: 'Crisp gala apples for snacks and baking.',
    image: 'https://picsum.photos/seed/product23/600/400',
    images: ['https://picsum.photos/seed/product23a/800/600']
  },
  {
    id: 24,
    name: 'Cucumber (each)',
    category: 'Vegetables',
    price: 0.5,
    rating: 4.0,
    description: 'Fresh crunchy cucumbers.',
    image: 'https://picsum.photos/seed/product24/600/400',
    images: ['https://picsum.photos/seed/product24a/800/600']
  },
  {
    id: 25,
    name: 'Orange Juice 1L',
    category: 'Beverages',
    price: 2.2,
    rating: 4.1,
    description: 'Cold-pressed orange juice.',
    image: 'https://picsum.photos/seed/product25/600/400',
    images: ['https://picsum.photos/seed/product25a/800/600']
  },
  {
    id: 26,
    name: 'Pasta Penne 500g',
    category: 'Pantry',
    price: 1.5,
    rating: 4.0,
    description: 'Durum wheat penne pasta.',
    image: 'https://picsum.photos/seed/product26/600/400',
    images: ['https://picsum.photos/seed/product26a/800/600']
  },
  {
    id: 27,
    name: 'Olives Jar 200g',
    category: 'Pantry',
    price: 3.0,
    rating: 4.2,
    description: 'Brined green olives, ready to eat.',
    image: 'https://picsum.photos/seed/product27/600/400',
    images: ['https://picsum.photos/seed/product27a/800/600']
  },
  {
    id: 28,
    name: 'Canned Tuna 160g',
    category: 'Pantry',
    price: 1.99,
    rating: 4.1,
    description: 'Premium tuna in sunflower oil.',
    image: 'https://picsum.photos/seed/product28/600/400',
    images: ['https://picsum.photos/seed/product28a/800/600']
  },
  {
    id: 29,
    name: 'Dark Chocolate 100g',
    category: 'Snacks',
    price: 2.5,
    rating: 4.5,
    description: '70% cocoa rich dark chocolate.',
    image: 'https://picsum.photos/seed/product29/600/400',
    images: ['https://picsum.photos/seed/product29a/800/600']
  },
  {
    id: 30,
    name: 'Granola Mix 400g',
    category: 'Breakfast',
    price: 4.2,
    rating: 4.3,
    description: 'Crunchy granola with nuts and honey.',
    image: 'https://picsum.photos/seed/product30/600/400',
    images: ['https://picsum.photos/seed/product30a/800/600']
  },
  {
    id: 31,
    name: 'Sourdough Loaf',
    category: 'Bakery',
    price: 3.75,
    rating: 4.4,
    description: 'Tangy sourdough, hand-crafted.',
    image: 'https://picsum.photos/seed/product31/600/400',
    images: ['https://picsum.photos/seed/product31a/800/600']
  },
  {
    id: 32,
    name: 'Butter Cookies 200g',
    category: 'Snacks',
    price: 1.99,
    rating: 4.0,
    description: 'Light and buttery cookies.',
    image: 'https://picsum.photos/seed/product32/600/400',
    images: ['https://picsum.photos/seed/product32a/800/600']
  },
  {
    id: 33,
    name: 'Peanut Chikki 250g',
    category: 'Sweets',
    price: 2.5,
    rating: 4.3,
    description: 'Traditional peanut brittle.',
    image: 'https://picsum.photos/seed/product33/600/400',
    images: ['https://picsum.photos/seed/product33a/800/600']
  },
  {
    id: 34,
    name: 'Masala Spice Mix 100g',
    category: 'Pantry',
    price: 1.2,
    rating: 4.2,
    description: 'Aromatic spice mix for curries.',
    image: 'https://picsum.photos/seed/product34/600/400',
    images: ['https://picsum.photos/seed/product34a/800/600']
  },
  {
    id: 35,
    name: 'Garlic (pack)',
    category: 'Vegetables',
    price: 0.99,
    rating: 4.1,
    description: 'Fresh garlic bulbs.',
    image: 'https://picsum.photos/seed/product35/600/400',
    images: ['https://picsum.photos/seed/product35a/800/600']
  },
  {
    id: 36,
    name: 'Baby Carrots 500g',
    category: 'Vegetables',
    price: 1.75,
    rating: 4.0,
    description: 'Sweet baby carrots, washed and ready.',
    image: 'https://picsum.photos/seed/product36/600/400',
    images: ['https://picsum.photos/seed/product36a/800/600']
  },
  {
    id: 37,
    name: 'Coconut Water 1L',
    category: 'Beverages',
    price: 2.49,
    rating: 4.2,
    description: 'Refreshing natural coconut water.',
    image: 'https://picsum.photos/seed/product37/600/400',
    images: ['https://picsum.photos/seed/product37a/800/600']
  },
  {
    id: 38,
    name: 'Mango Chutney 300g',
    category: 'Pantry',
    price: 2.99,
    rating: 4.1,
    description: 'Sweet and tangy mango chutney.',
    image: 'https://picsum.photos/seed/product38/600/400',
    images: ['https://picsum.photos/seed/product38a/800/600']
  },
  {
    id: 39,
    name: 'Green Peas Frozen 400g',
    category: 'Frozen',
    price: 1.99,
    rating: 4.0,
    description: 'Quick-cook frozen green peas.',
    image: 'https://picsum.photos/seed/product39/600/400',
    images: ['https://picsum.photos/seed/product39a/800/600']
  },
  {
    id: 40,
    name: 'Soda Sparkling 330ml',
    category: 'Beverages',
    price: 0.9,
    rating: 3.9,
    description: 'Refreshing sparkling soda.',
    image: 'https://picsum.photos/seed/product40/600/400',
    images: ['https://picsum.photos/seed/product40a/800/600']
  },
  {
    id: 41,
    name: 'Chocolate Spread 400g',
    category: 'Pantry',
    price: 3.49,
    rating: 4.3,
    description: 'Creamy chocolate spread for toast.',
    image: 'https://picsum.photos/seed/product41/600/400',
    images: ['https://picsum.photos/seed/product41a/800/600']
  },
  {
    id: 42,
    name: 'Tofu Block 300g',
    category: 'Vegetarian',
    price: 2.8,
    rating: 4.1,
    description: 'High-protein tofu for stir-fries.',
    image: 'https://picsum.photos/seed/product42/600/400',
    images: ['https://picsum.photos/seed/product42a/800/600']
  },
  {
    id: 43,
    name: 'Oatmeal 1kg',
    category: 'Breakfast',
    price: 3.0,
    rating: 4.2,
    description: 'Whole grain rolled oats.',
    image: 'https://picsum.photos/seed/product43/600/400',
    images: ['https://picsum.photos/seed/product43a/800/600']
  },
  {
    id: 44,
    name: 'Mayonnaise 250g',
    category: 'Pantry',
    price: 1.8,
    rating: 4.0,
    description: 'Creamy mayonnaise for sandwiches.',
    image: 'https://picsum.photos/seed/product44/600/400',
    images: ['https://picsum.photos/seed/product44a/800/600']
  },
  {
    id: 45,
    name: 'Pineapple Slice Tin',
    category: 'Canned',
    price: 1.5,
    rating: 4.0,
    description: 'Canned pineapple slices in syrup.',
    image: 'https://picsum.photos/seed/product45/600/400',
    images: ['https://picsum.photos/seed/product45a/800/600']
  },
  {
    id: 46,
    name: 'Honey 250g',
    category: 'Pantry',
    price: 5.0,
    rating: 4.6,
    description: 'Pure natural honey.',
    image: 'https://picsum.photos/seed/product46/600/400',
    images: ['https://picsum.photos/seed/product46a/800/600']
  },
  {
    id: 47,
    name: 'Samosa (6pcs)',
    category: 'Snacks',
    price: 2.99,
    rating: 4.2,
    description: 'Crispy potato-filled samosas.',
    image: 'https://picsum.photos/seed/product47/600/400',
    images: ['https://picsum.photos/seed/product47a/800/600']
  },
  {
    id: 48,
    name: 'Masala Chai Mix 100g',
    category: 'Beverages',
    price: 1.99,
    rating: 4.1,
    description: 'Spiced chai mix for a warming cup.',
    image: 'https://picsum.photos/seed/product48/600/400',
    images: ['https://picsum.photos/seed/product48a/800/600']
  },
  {
    id: 49,
    name: 'Peanut Butter Cookies 200g',
    category: 'Snacks',
    price: 2.2,
    rating: 4.0,
    description: 'Crunchy peanut butter cookies.',
    image: 'https://picsum.photos/seed/product49/600/400',
    images: ['https://picsum.photos/seed/product49a/800/600']
  },
  {
    id: 50,
    name: 'Mixed Nuts 300g',
    category: 'Snacks',
    price: 6.5,
    rating: 4.5,
    description: 'Roasted mixed nuts with a pinch of salt.',
    image: 'https://picsum.photos/seed/product50/600/400',
    images: ['https://picsum.photos/seed/product50a/800/600']
  }
]

// Ensure every product has the requested tags
products.forEach(p => {
  if (!p.tags) p.tags = ['grocery', 'fastfood', 'food']
})

// ensure every product includes the requested tags
products.forEach(p => { if (!p.tags) p.tags = ['grocery','fastfood','food'] })

export default products
