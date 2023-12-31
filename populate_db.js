// import mongoose models
const Category = require('./models/category');
const Item = require('./models/item');
require('dotenv').config();

const mongoose = require('mongoose');

const databaseURL = `mongodb+srv://3ein39:${process.env.MONGODB_PASSWORD}@cluster0.iobps84.mongodb.net/?retryWrites=true&w=majority`

const categories = [
       {
            name: 'Laptop',
            description: 'Laptop description',
            image: 'https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
        },
        {
            name: 'Phone',
            description: 'Phone description',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
        }
];



async function createCategories() {
    // loop through the array and create each category
    let i = 0;
    for (let category of categories) {
        const newCategory = new Category(category);
        await newCategory.save();
        console.log(`Added ${category.name}`)
        categories[i] = newCategory;
        ++i;
    }
}

async function createItems() {
    // some fake data
    const items = [
        {
            name: 'Macbook Pro',
            description: 'Macbook Pro description',
            image: 'https://plus.unsplash.com/premium_photo-1670274609267-202ec99f8620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
            price: 50,
            category: categories[0],
            manufacturer: 'Apple',
            qty: 8
        },
        {
            name: 'iPhone 12',
            description: 'iPhone 12 description',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
            price: 50,
            category: categories[1],
            manufacturer: 'Apple',
            qty: 8
        }
        ];
    // loop through the array and create each item
    for (let item of items) {
        const newItem = new Item(item);
        await newItem.save();
        console.log(`Added ${item.name}`)
    }
}

async function main() {
    try {
        await mongoose.connect(databaseURL, { useNewUrlParser: true});

        // delete existing data
        await Category.deleteMany({});
        await Item.deleteMany({});

        // Call your data population functions here
        await createCategories();
        await createItems();
        // Add more function calls as needed

        mongoose.connection.close();
        console.log('Database connection closed.');
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

main();

