const graphql = require("graphql");
const {GraphQLObjectType,GraphQLSchema ,GraphQLInt, GraphQLString, GraphQLList} = graphql
const UserType = require('./TypeDefs/UserType')
const UserModel = require('../models/User')

const RootQuery  = new GraphQLObjectType({
    name : 'RootQueryType', 
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id : { type : GraphQLString }},
            resolve(parents, args){
                let userData = UserModel
                    .find({}, function(err, users) {
                        return users
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                return userData
            }
        }
    }
})


const Mutation = new GraphQLObjectType({
    name : "Mutation",
    fields:{
        createUser:{
            type: UserType,
            args : {
                firstName: { type : GraphQLString},
                lastName:  { type : GraphQLString},
                email:  { type : GraphQLString},
                password:  { type : GraphQLString}
            },
            resolve(parents, args){
                const newUserData = new UserModel({
                    firstName : args.firstName,
                    lastName : args.lastName,
                    email : args.email,
                    password : args.password
                })
                newUserData
                    .save()
                    .then(result=>{
                        console.log(result)
                    })
                    .catch(err=>{
                        console.error(error);
                    })
                 return args
            }
        }
    }
})



module.exports = new GraphQLSchema({query: RootQuery , mutation: Mutation })