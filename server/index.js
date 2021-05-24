const express = require("express");
const app = express();
const PORT = 3001;
const schema = require("./Schemas")
const  { graphqlHTTP } = require("express-graphql");
const mongoose = require('mongoose');
const cors = require('cors')


//Fixing cors errors like dis //
app.use(cors())

//connect to mongo => SUPER INSECURE, should use .env but whats the harm on a test, TODO:

mongoose 
    .connect('mongodb+srv://DataBaseUser:BSFzhlCcAocSN98z@graphql-cluster.fye5b.mongodb.net/UserData?retryWrites=true&w=majority')
    .then(()=>{
        console.log('conneted to database, sick!');
    })
    .then(() => {
        app.listen(PORT, ()=>{
            console.log("Server running")
        })

        app.use('/graphql', graphqlHTTP({
            schema,
            graphiql: true
        }));
        
    })
    .catch(err => {
        console.log(err);
    });


