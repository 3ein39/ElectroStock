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

exports.get_category = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        const items = await Item.find({ category: req.params.id });
        res.render('category_items', { category, items , title : category.name});
    }
    catch (e)
    {
        next(e);
    }
}