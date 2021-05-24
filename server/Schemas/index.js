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
                let allUserData = UserModel
                    .find({}, function(err, users) {
                        return users
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                return allUserData
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
                job_title: { type: GraphQLString },
                job_department: { type: GraphQLString },
                linkedIn: { type: GraphQLString },
                city:  { type : GraphQLString},
                country:  { type : GraphQLString},
                timeZone:  { type : GraphQLString},
                meetFrequency:  { type : GraphQLInt},
                preferDays1: { type : GraphQLString},
                preferDays2: { type : GraphQLString},
                preferDays3: { type : GraphQLString},
                objList1: { type : GraphQLString},
                objList2: { type : GraphQLString},
                objList3: { type : GraphQLString},
                objQuest1: { type : GraphQLString},
                objQuest2: { type : GraphQLString},
                objQuest3: { type : GraphQLString},
                industries1: { type : GraphQLString},
                industries2: { type : GraphQLString},
                industries3: { type : GraphQLString},
                industries4: { type : GraphQLString},
                industries5: { type : GraphQLString},
                themes1: { type : GraphQLString},
                themes2: { type : GraphQLString},
                themes3: { type : GraphQLString},
                themesTopics: { type : GraphQLString},
                introduction: { type : GraphQLString},
            },
            resolve(parents, args){
                const newUserData = new UserModel({
                    job: {
                        job_title: args.job_title,
                        job_department: args.job_department,
                        linkedIn: args.linkedIn,
                    },
                    location: {
                        city:args.city,
                        country:args.country,
                        timeZone:args.timeZone
                    },
                    availability: {
                        meetFrequency: args.meetFrequency,
                        preferDays1: args.preferDays1,
                        preferDays2: args.preferDays2,
                        preferDays3: args.preferDays3
                    },
                    objectives:{
                        objList1: args.objList1,
                        objList2: args.objList2,
                        objList3: args.objList3,
                        objQuest1: args.objQuest1,
                        objQuest2: args.objQuest2,
                        objQuest3: args.objQuest3
                    },
                    industries:{
                        industries1:args.industries1, 
                        industries2:args.industries2, 
                        industries3:args.industries3, 
                        industries4:args.industries4, 
                        industries5:args.industries5
                    },
                    themes: {
                        themes1 : args.themes1,
                        themes2 : args.themes2,
                        themes3 : args.themes3,
                        themesTopics : args.themesTopics
                    },
                    introduction: args.introduction
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