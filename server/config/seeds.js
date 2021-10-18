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
      name: 'Camisa Boss',
      description:
        'Talla: Chica, Necesita una pequeña reparación en la manga',
      image: 'camisa_0.jpg',
      category: categories[0]._id,
      price: 20.00,
      quantity: 1
    },

    {
      name: 'Camisa Blanca Formal',
      description:
        'Talla: Grande, Buenas condiciones y excelente para entrevistas de trabajo',
      image: 'camisa_1.jpg',
      category: categories[0]._id,
      price: 20.00,
      quantity: 1
    },

    {
      name: 'Camisa de rayas',
      category: categories[0]._id,
      description:
        'Talla: Mediana de hombre, buenas condiciones',
      image: 'camisa_2.jpg',
      price: 20.00,
      quantity: 1
    },

    {
      name: 'Camisa Manchester',
      category: categories[0]._id,
      description:
        'Talla: Mediana de hombre, buenas condiciones',
      image: 'camisa_3.jpg',
      price: 50.00,
      quantity: 1
    },

    {
      name: 'Pantalon Capri',
      category: categories[1]._id,
      description:
        'Pantalon de Mujer talla mediana',
      image: 'casual-2.jpg',
      price: 40.00,
      quantity: 1
    },

    {
      name: 'Pantalon 3/4',
      category: categories[1]._id,
      description:
        'Pantalon de Mujer talla mediana',
      image: 'pantalon_0.jpg',
      price: 40.00,
      quantity: 1
    },

    {
      name: 'Pantalon de mujer grande',
      category: categories[1]._id,
      description:
        'Muy comodo para ajustar la lonja',
      image: 'pantalon_1.jpg',
      price: 40.00,
      quantity: 1
    },

    {
      name: 'Pantalon de Mezclilla para ninas',
      category: categories[1]._id,
      description:
        'Pantalon de mezclilla para mujercitas',
      image: 'pantalon_2.jpg',
      price: 20.00,
      quantity: 1
    },

    {
      name: 'Spinning Rose Center Table',
      category: categories[1]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'pantalon_3.jpg',
      price: 1.99,
      quantity: 1
    },

    {
      name: 'Tacones',
      category: categories[2]._id,
      description:
        'Sexy y en buenas condiciones.',
      image: 'zapatos_0.jpg',
      price: 60.00,
      quantity: 1
    },

    {
      name: 'Zapatos cafes',
      category: categories[2]._id,
      description:
        'Comodos y para trabajar.',
      image: 'zapatos_1.jpg',
      price: 30.00,
      quantity: 1
    },

    {
      name: 'Zapato cerrado azul',
      category: categories[2]._id,
      description:
        'Listos y ajustados para largas caminatas.',
      image: 'zapatos_2.jpg',
      price: 30.00,
      quantity: 1
    },

    {
      name: 'Pato Donald',
      category: categories[3]._id,
      description:
        'Comodos y para trabajar.',
      image: 'zapatos_1.jpg',
      price: 30.00,
      quantity: 1
    },
    {
      name: 'Zapatos cafes',
      category: categories[3]._id,
      description:
        'Comodos y para trabajar.',
      image: 'zapatos_1.jpg',
      price: 30.00,
      quantity: 1
    },
    {
      name: 'Zapatos cafes',
      category: categories[3]._id,
      description:
        'Comodos y para trabajar.',
      image: 'zapatos_1.jpg',
      price: 30.00,
      quantity: 1
    },
    {
      name: 'Zapatos cafes',
      category: categories[3]._id,
      description:
        'Comodos y para trabajar.',
      image: 'zapatos_1.jpg',
      price: 30.00,
      quantity: 1
    },
    {
      name: 'Zapatos cafes',
      category: categories[3]._id,
      description:
        'Comodos y para trabajar.',
      image: 'zapatos_1.jpg',
      price: 30.00,
      quantity: 1
    },
    {
      name: 'Zapatos cafes',
      category: categories[3]._id,
      description:
        'Comodos y para trabajar.',
      image: 'zapatos_1.jpg',
      price: 30.00,
      quantity: 1
    },
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
