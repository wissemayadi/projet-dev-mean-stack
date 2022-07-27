const { Schema, model } = require("mongoose");
const centre = new Schema({
    name :{type:String,},
    email: {type:String},
    location:{type:String},
    phone:{type:Number},
    terrain : {type:[]},
});

module.exports =Cente = model('centre',centre);
