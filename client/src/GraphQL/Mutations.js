import {gql} from '@apollo/client'

//massive graphql mutation
export const CREATE_USER_MUTATION = gql`
    mutation createUser( 
        $job_title: String!
        $job_department: String!
        $linkedIn: String!
        $city: String!
        $country: String!
        $timeZone: String!
        $meetFrequency: Int!
        $preferDays1: String!
        $preferDays2: String!
        $preferDays3: String!
        $objList1: String!
        $objList2: String!
        $objList3: String!
        $objQuest1: String!
        $objQuest2: String!
        $objQuest3: String!
        $industries1: String!
        $industries2: String!
        $industries3: String!
        $industries4: String!
        $industries5: String!
        $themes1: String!
        $themes2: String!
        $themes3: String!
        $themesTopics: String!
        $introduction: String!
        ) {
        createUser(
            job_title: $job_title
            job_department: $job_department
            linkedIn: $linkedIn
            city: $city
            country: $country
            timeZone: $timeZone
            meetFrequency: $meetFrequency
            preferDays1: $preferDays1
            preferDays2: $preferDays2
            preferDays3: $preferDays3
            objList1: $objList1
            objList2: $objList2
            objList3: $objList3
            objQuest1: $objQuest1
            objQuest2: $objQuest2
            objQuest3: $objQuest3
            industries1: $industries1
            industries2: $industries2
            industries3: $industries3
            industries4: $industries4
            industries5: $industries5
            themes1: $themes1
            themes2: $themes2
            themes3: $themes3
            themesTopics: $themesTopics
            introduction: $introduction
        ){
            job_title
        }
    }
`