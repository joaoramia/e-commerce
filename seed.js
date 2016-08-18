/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

const chalk = require('chalk');
const db = require('./server/db');
const User = db.model('user');
const Inventory = db.model('inventory');
const Address = db.model('address');
const Review = db.model('review');
const Order = db.model('order');
const Promise = require('sequelize').Promise;



var seedUsers = function() {

  var users = [{
    name: 'John Humiston2',
    birth: '1988-12-31',
    email: 'testing@fsa.com',
    password: 'password'
  }, {
    name: 'John2 Hummingstoned',
    birth: '1987-09-01',
    email: 'obama@gmail.com',
    password: 'potus',
    is_admin: true
  }];

  var creatingUsers = users.map(function(userObj) {
    return User.create(userObj);
  });

  return Promise.all(creatingUsers);

};

var seedAddress = function() {

  var addresses = [{
    instructions: "Take the x Road",
    is_primary: true,
    street_1: "First North",
    state: "NY",
    city: "NYC",
    zip: "11211",
    userId: 1
  }, {
    instructions: "Take the y Road",
    is_primary: false,
    street_1: "Second North",
    state: "UT",
    city: "Provo",
    zip: "2435", //testing if min length is working #JP
    userId: 2
  }];

  var creatingAddresses = addresses.map(function(address) {
    return Address.create(address);
  });

  return Promise.all(creatingAddresses);

};

var seedInventory = function() {

  var items = [{
    title: 'The Best Burger',
    quantity: 5,
    type: 'food',
    image_url: "http://bnbjoint.com/wp-content/uploads/2015/04/Thunder_Road_full-300dpi.jpg",
    price: 750,
    description: 'Best combination of the best burger in town, best lettuce, best tomatoes and best special sauce. Comes with best french fries.'
  }, {
    title: 'The Italian Dream',
    quantity: 8,
    type: 'food',
    image_url: "http://cdn2.stylecraze.com/wp-content/uploads/2014/08/Top-25-Splendid-Veg-Pasta-Recipes-2.jpg",
    price: 850,
    description: "Plump frankfurter wrapped in a calzone crust. Very low in gluten and very high in Italian authenticity. Forget pizza and pasta. Make your dream a reality with this Italian sandwich!"
  }, {
    title: 'The Magic Carpet',
    quantity: 8,
    type: 'food',
    image_url: "http://sansretouches.com/wp-content/uploads/2015/03/14-Most-Powerful-Arab-Food-Bloggers-660x400.jpg",
    price: 850,
    description: 'Falafel sandwich with mediterranean sauce and hummus'
  }, {
    title: 'The Mexican Vacation',
    quantity: 9,
    type: 'food',
    image_url: "http://flyinstyleapp.com/wp-content/uploads/2016/03/mexican-food.jpg",
    price: 700,
    description: 'Spicy beef tacos with a normal avocado.'
  }, {
    title: 'The Chicken Wings',
    quantity: 5,
    type: 'food',
    image_url: "http://www.visitbuffaloniagara.com/content/uploads/2014/11/chicken-wings-2-1200x675.jpg",
    price: 650,
    description: 'Fried chicken served on a piece of lettuce served on a plate.'
  }, {
    title: 'The Double Dog',
    quantity: 5,
    type: 'food',
    image_url: "http://bnbjoint.com/wp-content/uploads/2015/04/Thunder_Road_full-300dpi.jpg",
    price: 550,
    description: 'Two for you, none for your friend! (Unless you order more than one order haha!) Hot dog with German sausage and swiss cheese!'
  }, {
    title: 'The French Fries',
    quantity: 5,
    type: 'side',
    image_url: "http://s2.dmcdn.net/IZlI9/1280x720-ts8.jpg",
    price: 500,
    description: 'Our french fries are made with sea salt and the best spices in town!'
  }, {
    title: 'The Tempura Mozzarella',
    quantity: 5,
    type: 'side',
    image_url: "http://www.taste.com.au/images/recipes/nb/2008/08/tempura-15328_l.jpeg",
    price: 500,
    description: 'Japanese Italian fusion at its best'
  }, {
    title: 'The Alloco',
    quantity: 5,
    type: 'side',
    image_url: "http://los-angeles.eat24hours.com/files/cuisines/v4/african-food.jpg",
    price: 500,
    description: 'An African famous fried plantain snack, often served with chili pepper and onions.'
  }, {
    title: 'The Let Me Be',
    quantity: 5,
    type: 'side',
    image_url: "http://www.theurbanlist.com/images/made/content/article/a_list_images/best-mini-burgers-sliders-1_740_486_85_s_c1.jpg",
    price: 500,
    description: 'Mini burgers prepared with our special spices.'
  }, {
    title: 'The Berry Christmas',
    quantity: 100,
    type: 'drink',
    image_url: "http://www.motherearthnews.com/~/media/Images/MEN/Editorial/Blogs/Real%20Food/Make%20Your%20Own%20Fruit%20Juice%20From%20Berries/Berry-Juice.jpg",
    price: 700,
    description: "Santa came early with this perfect combination of watermelon and apple. It's like Christmas for your mouth! Even if you have been a bad homo sapien."
  }, {
    title: 'The Citrus Curprise',
    quantity: 100,
    type: 'drink',
    image_url: "http://webviral.org/wp-content/uploads/2016/06/citrus-juice.jpg",
    price: 700,
    description: "Sweetened lime and orange in one drink. How did we do it? Outstanding! But how did we do it? It's so good!"
  }, {
    title: 'The Mango Mix',
    quantity: 100,
    type: 'drink',
    image_url: "http://www.thealthbenefitsof.com/wp-content/uploads/2016/01/health-benefits-of-mango-juice.jpg",
    price: 700,
    description: "Fresh mangoes and pineapple come together in a single delicious beverage! We now only use the yellow part of the pineapple when making this delicious drink."
  }, {
    title: 'The Cherry Apple Cobbler',
    quantity: 100,
    type: 'drink',
    image_url: "http://erinnudi.com/wp-content/uploads/2014/10/Apple-cider-vinegar.jpg",
    price: 700,
    description: "We threw two pies in a blender and this happened!"
  }, {
    title: 'The Blueberry Bubbly',
    quantity: 100,
    type: 'drink',
    image_url: "http://thejuicechief.com/wp-content/uploads/2015/02/Blueberry-Juice-Main.jpg",
    price: 700,
    description: "A local favorite since 2016."
  }, {
    title: 'The Oranger Creamer',
    quantity: 100,
    type: 'drink',
    image_url: "https://blog.intercom.io/wp-content/uploads/2012/09/OrangeJuiceTest-740.jpg",
    price: 700,
    description: "Amazing Orange and Vanilla.  Very yummy, soon to be in your tummy."
  }];

  var creatingInventory = items.map(function(item) {
    return Inventory.create(item);
  });

  return Promise.all(creatingInventory);

};


var seedReviews = function(){
  var reviews = [
  {
    inventoryId: 1,
    title: "I wish I could give 0 stars",
    review_body: "this product sucks",
    stars: 1
  },
  {
    inventoryId: 1,
    title: "I, too, wish I could give 0 stars",
    review_body: "This isn't a hamburger.",
    stars: 1
  },
  {
    inventoryId: 1,
    title: "DO NOT ORDER",
    review_body: "Crazy products",
    stars: 2
  },
  {
    inventoryId: 1,
    title: "Awesome burger!",
    review_body: "Other commenters are crazy.",
    stars: 5
  },
  {
    inventoryId: 2,
    title: "Not authentic",
    review_body: "I don't really understand how a frankfurter is Italian.",
    stars: 2
  },
  {
    inventoryId: 2,
    title: "Ridiculous",
    review_body: "I literally received an empty calzone crust.",
    stars: 1
  },
  {
    inventoryId: 2,
    title: "Really good",
    review_body: "Awesome.",
    stars: 5
  },
  {
    inventoryId: 3,
    title: "Picture does not deceive",
    review_body: "I thought the trader joes picture was a weird joke but I actually received a box of a premade trader joe's falafel wrap.",
    stars: 3
  },
  {
    inventoryId: 4,
    title: "No",
    review_body: "Perfect",
    stars: 1
  },
  {
    inventoryId: 4,
    title: "Don't understand",
    review_body: "I ordered this burrito last week.",
    stars: 1
  },
  {
    inventoryId: 4,
    title: "Me encanta!",
    review_body: "Yum this burrito is so good!",
    stars: 5
  },
  {
    inventoryId: 5,
    title: "Had to cook them",
    review_body: "The nuggets were not done when they arrived.",
    stars: 2
  },
   {
    inventoryId: 5,
    title: "Terrible",
    review_body: "I love the owners.",
    stars: 2
  },
   {
    inventoryId: 5,
    title: "Yabadabadoo",
    review_body: "I love the owners",
    stars: 5
  },
  {
    inventoryId: 6,
    title: "I don't get it",
    review_body: "I know I already have very little credibility considering the fact that I ordered this double hotdog thing.",
    stars: 2
  },
  {
    inventoryId: 6,
    title: "Ashamed",
    review_body: "I ordered this item and then ate it while watching the West Wing on my computer.",
    stars: 1
  },
  {
    inventoryId: 6,
    title: "What could be better",
    review_body: "Only thing that could be better than a double hotdog would be a TRIPLE hotdog.",
    stars: 5
  },
  {
    inventoryId: 7,
    title: "I cancelled my cart",
    review_body: "best decision ever",
    stars: 5
  },
  {
    inventoryId: 8,
    title: "I cancelled my cart",
    review_body: "best decision ever",
    stars: 5
  },
  {
    inventoryId: 9,
    title: "I cancelled my cart",
    review_body: "best decision ever",
    stars: 5
  },
  {
    inventoryId: 10,
    title: "I cancelled my cart",
    review_body: "best decision ever",
    stars: 5
  },
  {
    inventoryId: 11,
    title: "I cancelled my cart",
    review_body: "best decision ever",
    stars: 5
  },
  {
    inventoryId: 12,
    title: "I cancelled my cart",
    review_body: "best decision ever",
    stars: 5
  }]
  var creatingReviews = reviews.map(function(review) {
    return Review.create(review);
  });

  return Promise.all(creatingReviews);
}


db.sync({ force: true })
  .then(function() {
    return seedUsers();
  })
  .then(function() {
    return seedInventory();
  })
  .then(function(){
    return seedAddress();
  })
  .then(function() {
    return seedReviews();
  })
  .then(function() {
    console.log(chalk.green('Seed successful!'));
    process.kill(0);
  })
  .catch(function(err) {
    console.error(err);
    process.kill(1);
  });
