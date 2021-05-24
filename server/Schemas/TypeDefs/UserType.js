const graphql = require("graphql");
const {GraphQLObjectType, GraphQLInt, GraphQLInputObjectType, GraphQLString} = graphql

// GraphQL Object Type, 
// TODO : Figure out how to do nested objects .... 

const UserType = new GraphQLObjectType({
    name : 'user',
    fields: () =>({
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
    })
})

module.exports = UserType