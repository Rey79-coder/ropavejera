const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Camisas' },
    { name: 'Pantalones' },
    { name: 'Zapatos' },
    { name: 'Juguetes' },
    { name: 'Articulos' }
  ]);

  
  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Camisa Azul',
      description:
        'Talla: Chica, Necesita una pequeña reparación en la manga',
      image: 'special.jpg',
      category: categories[0]._id,
      price: 5.00,
      quantity: 1
    },

    {
      name: 'Camisa Blanca Formal',
      description:
        'Talla: Grande, Buenas condiciones y excelente para entrevistas de trabajo',
      image: 'special-1.jpg',
      category: categories[0]._id,
      price: 15.00,
      quantity: 1
    },

    {
      name: 'Pantalon de Mezclilla',
      category: categories[1]._id,
      description:
        'Talla: Mediana de hombre, buenas condiciones',
      image: 'casual.jpg',
      price: 30.00,
      quantity: 1
    },

    {
      name: 'Arrangement for One',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'casual-1.jpg',
      price: 3.99,
      quantity: 1
    },

    {
      name: 'A Special Box For You',
      category: categories[1]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'casual-2.jpg',
      price: 14.99,
      quantity: 1
    },

    {
      name: 'Heart Display',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'wedding.jpg',
      price: 399.99,
      quantity: 1
    },

    {
      name: 'Bouquet Vintage',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'wedding-2.jpg',
      price: 199.99,
      quantity: 1
    },

    {
      name: 'Roses at Bedtime',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'wedding-3.jpg',
      price: 9.99,
      quantity: 1
    },

    {
      name: 'Spinning Rose Center Table',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'sorry.jpg',
      price: 1.99,
      quantity: 1
    },

    {
      name: 'Set of Orchids',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'sorry-1.jpg',
      price: 2.99,
      quantity: 1
    },

    {
      name: 'Funeral',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'special-3.jpg',
      price: 7.99,
      quantity: 1
    },

    {
      name: 'White Roses',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'funeral.jpg',
      price: 9.99,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'ropavejera',
    lastName: 'Segunda Mano',
    email: 'ropavejera@testmail.com',
    password: 'ropavejera12345'
  });

  console.log('users seeded');

  process.exit();
});
