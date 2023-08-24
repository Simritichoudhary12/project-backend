import {UserModel} from "../db/models/user-schema.js";
import {UserShoe} from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";
export const userController={

    //start
    
    //end 
    login(request,response){
        const body = request.body;
        console.log ('Request Body is', body);    
           response.json({message:'Login'});
    },
     async register(request,response){
        const userInfo =  request.body;
         userInfo.password = hashing.passwordHash(userInfo.password);
        try{
         const doc = await  UserModel.create(userInfo);
        //const body = request.body;
        //console.log( ' request body is ', body);
        if (doc && doc._id){
            response.json({message:'Register successfully'});
        }
        else {
            response.json({message :'problem in regsisteer'});
        }
    }
    catch (err){
        console.log('register err',err);
        response.json({message:'problem in registeration'});
    }
        //response.json({message:'Register successfully'});
    },
    profile(request,response){
        const userName = request.params.username;
        console.log('All Params',userName);
        response.json({message: userName +'Profile'});
    },
    changepassword(request,response){
      const body = request.body;
      console.log('request body is ', body);
        response.json({message:'Change Password'});
    },

    async search (request,response)  {
        const body = request.body;
        console.log ('Request Body is', body);   
        try {
        console.log(request.params.key)
        let data = await UserShoe.find(
        {
            "$or":[
               // {"name":{$regex:request.params.key,$options: "i"}}
                {"shoesname":{$regex:request.params.key,$options: "i"}},
                {"price":{$regex:request.params.key,$options: "i"}}
            ]
        });


    }

    catch (error) {
        console.error('Error searching for users:', error);
        response.status(500).json({ message: 'An error occurred while searching for users' });
       
}
},

//start
   async shoes(request,response){
    const shoeInfo = request.body;
    console.log(shoeInfo);
    
    try{
        const doc = await  UserShoe.create(shoeInfo);
        if (doc && doc._id){
            response.json({message:'sent successfully'});
        }
        else {
            response.json({message :'problem in sending'});
        }
      
    }

    catch (err){
        console.log('shoe err',err);
        response.json({message:'problem in shoe'});
    }

   
},
async getShoes(request,response){
    const info = request.body;
    try{
        const doc = await UserShoe.find();
        response.json({doc : doc})
    }
    catch(err){
        response.json({message:'problem in shoe'});
    }
}
    

    //const body = request.body;
    //console.log('request body is ', body);
      //response.json({message:'shoes success'});


};


//end 


//
//async search(request, response) {
 //   try {
   //     console.log(request.params.key);
     //   let data = await UserModel.find({
       //     "$or": [
         //       { "name": { $regex: request.params.key, $options: "i" } }
           // ]
     //   });

       // response.json(data);
   // } catch (error) {
     //   console.error('Error searching for users:', error);
       // response.status(500).json({ message: 'An error occurred while searching for users' });
   // }
//}

    //search(request,response){
      //  const body = request.body;
       // console.log('request body is',body);
        //response.json({message:'search'});
   // }


   //start

  
    // ... other methods

    
