const Category = require('../models/category');
const Item = require('../models/item');

exports.get_all_items = async (req, res, next) => {
    try {
        // get the items and populate the category field name and url virtual
        const items = await Item.find().populate('category').exec();
        res.render('items_list', { items , title : "All Items"});
    } catch (err) {
        next(err);
    }
}
