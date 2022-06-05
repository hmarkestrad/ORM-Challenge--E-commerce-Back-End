const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products 
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories 
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belong To Many 
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belong T oMany Products 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};