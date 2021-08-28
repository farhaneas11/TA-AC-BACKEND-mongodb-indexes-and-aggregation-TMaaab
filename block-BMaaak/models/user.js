var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    username:{type:String,unique:true},
    email:{type:String,unique:true},
    address:{
        city:String,
        state:{type:String,unique:true},
        country:String,
        pin:Number
    }
},{timestamp:true});

module.exports = mongoose.model('User',userSchema);




var articleSchema = new Schema({
    title:String,
    description:String,
    tags:[String]
},{timestamp:true});

module.exports = mongoose.model('Article',articleSchema);

db.Article.createIndex({tags:1});

db.Article.createIndex({title:"text"});

db.Article.createIndex({description:"text"});

