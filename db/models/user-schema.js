//import mongoose from'mongoose';
import { SchemaTypes} from 'mongoose';
import mongoose from '../connection.js';
 const Schema = mongoose.Schema;
    const userSchema = new Schema({
      //constraints - validations 
    'email':{type:SchemaTypes.String,required:true,unique:true},
    'password' :{type:SchemaTypes.String, requires:true, minLength:2,},
    'name': {type:SchemaTypes.String,requires:true},
    'phone': {type:Schema.Types.String}
 })
 export const UserModel = mongoose.model('users',userSchema);
//start.... shoe scehma 
const shoeSchema = new mongoose.Schema({
   "shoesname": {type:SchemaTypes.String,required:true},
   "url": {type:SchemaTypes.String,required:true},
   "price": {type:SchemaTypes.String}
 });
 
  export const UserShoe = mongoose.model('Shoes', shoeSchema); 
//end 
  
   