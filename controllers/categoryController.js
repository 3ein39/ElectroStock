const Category = require('../models/category');
const Item = require('../models/item');

exports.get_all_categories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.render('categories_list', { categories , title : "All Categories"});
    } catch (err) {
        next(err);
    }
}