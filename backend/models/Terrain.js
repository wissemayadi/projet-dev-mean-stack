const { Schema, model } = require("mongoose");

const terrain = new Schema(
        {
        name:{type:String},
        email :{type: String},
        location :{type:String},
        state : {type:String},
        type :{type:String},
        surface :{type:String},
        capacity :{type:Number},
        phone:{type:Number},
        centre :{
            type:[]
        },
        balances:{type:Number}
        });
    
    module.exports =Terrain= model('terrain',terrain)
 