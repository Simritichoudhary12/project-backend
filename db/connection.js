const URL ='mongodb+srv://admin:admin123@mycluster.0x48pvr.mongodb.net/userdb?retryWrites=true&w=majority';
import mongoose from'mongoose';
import { UserShoe } from './connection.js';
export {UserShoe} from '../db/models/user-schema.js';
const promise = mongoose.connect(URL);
 promise . then (data=>{
    console.log ('db connected...');
    //start
 }).catch(err=>{
    console.log(" error in connection",err);
 }) 
 
 export default  mongoose;
