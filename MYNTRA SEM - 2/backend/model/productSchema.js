const mongoose = require('mongoose')

// Create Schema
const ProductSchema = new mongoose.Schema({
  image:{type:String,required:true},
  name:{type:String,required:false},
  hint:{type:String,require:false},
  link:{type:String,require:true}
})

module.exports = Product = mongoose.model('products', ProductSchema)
