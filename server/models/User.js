const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Creating the Mongoose Schema for MongoDB

const JobSchema = new Schema({
    job_title: { required : true, type : String},
    job_department: { required : true, type : String},
    linkedIn: { required : true, type : String},
})

const LocationSchema = new Schema({
    city:{ required : true, type : String},
    country:{ required : true, type : String},
    timeZone:{ required : true, type : String}
})

const AvailabilitySchema = new Schema({
    meetFrequency: { required : true, type : Number},
    preferDays1: { required : true, type : String},
    preferDays2: { required : true, type : String},
    preferDays3: { required : true, type : String}
})

const ObjectiveSchema = new Schema({
    objList1: { required : true, type : String},
    objList2: { required : true, type : String},
    objList3: { required : true, type : String},
    objQuest1:{ required : true, type : String},
    objQuest2:{ required : true, type : String},
    objQuest3:{ required : true, type : String}
})

const IndustriesSchema = new Schema({
    industries1: { required : true, type : String},
    industries2: { required : true, type : String},
    industries3: { required : true, type : String},
    industries4: { required : true, type : String},
    industries5: { required : true, type : String}
})

const ThemesSchema = new Schema({
    themes1 : { required : true, type : String},
    themes2 : { required : true, type : String},
    themes3 : { required : true, type : String},
    themesTopics : { required : true, type : String}
})

// Who doesnt like nested schemas??
const UserSchema = new Schema({
    job: JobSchema,
    location : LocationSchema,
    availability : AvailabilitySchema,
    objectives : ObjectiveSchema,
    industries : IndustriesSchema,
    themes : ThemesSchema,
    introduction: { required : true, type : String}
})

module.exports = mongoose.model('UserData', UserSchema);