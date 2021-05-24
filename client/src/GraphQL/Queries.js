import {gql} from '@apollo/client';

//query time
export const LOAD_USERS = gql`
    query{
        getAllUsers{
            job_title
            job_department
            linkedIn
            city
            country
            timeZone
            meetFrequency
            preferDays1
            preferDays2
            preferDays3
            objList1
            objList2
            objList3
            objQuest1
            objQuest2
            objQuest3
            industries1
            industries2
            industries3
            industries4
            industries5
            themes1
            themes2
            themes3
            themesTopics
            introduction
        }
    }
`;