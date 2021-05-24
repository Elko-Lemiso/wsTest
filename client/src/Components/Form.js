import React, { useState } from "react";
import {CREATE_USER_MUTATION} from '../GraphQL/Mutations'
import { useMutation } from "@apollo/client";


function Form() {
  const [job_title, setJob_title] = useState("");
  const [job_department, setJob_department] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [meetFrequency, setMeetFrequency] = useState("");
  const [preferDays1, setPreferDays1] = useState("");
  const [preferDays2, setPreferDays2] = useState("");
  const [preferDays3, setPreferDays3] = useState("");
  const [objList1, setObjList1] = useState("");
  const [objList2, setObjList2] = useState("");
  const [objList3, setObjList3]= useState("");
  const [objQuest1, setObjQuest1] = useState("");
  const [objQuest2, setObjQuest2] = useState("");
  const [objQuest3, setObjQuest3] = useState("");
  const [industries1, setIndustries1] = useState("");
  const [industries2, setIndustries2] = useState("");
  const [industries3, setIndustries3] = useState("");
  const [industries4, setIndustries4] = useState("");
  const [industries5, setIndustries5] = useState("");
  const [themes1, setThemes1] = useState("");
  const [themes2, setThemes2] = useState("");
  const [themes3, setThemes3] = useState("");
  const [themesTopics, setThemesTopics] = useState("");
  const [introduction, setIntroduction] = useState("");

  const [createUser, {error}] = useMutation(CREATE_USER_MUTATION);

  const addUser = () =>{
      createUser({
          variables:{
            job_title: job_title,
            job_department: job_department,
            linkedIn: linkedIn,
            city:  city,
            country:  country,
            timeZone:  timeZone,
            meetFrequency: parseInt(meetFrequency, 10),
            preferDays1: preferDays1,
            preferDays2: preferDays2,
            preferDays3: preferDays3,
            objList1: objList1,
            objList2: objList2,
            objList3: objList3,
            objQuest1: objQuest1,
            objQuest2: objQuest2,
            objQuest3: objQuest3,
            industries1: industries1,
            industries2: industries2,
            industries3: industries3,
            industries4: industries4,
            industries5: industries5,
            themes1: themes1,
            themes2: themes2,
            themes3: themes3,
            themesTopics: themesTopics,
            introduction: introduction
          }
      })

      if (error) {
          console.log(error);
      }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="job_title"
        onChange={(e) => {
          setJob_title(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="job_department"
        onChange={(e) => {
          setJob_department(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="linkedIn"
        onChange={(e) => {
          setLinkedIn(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="city"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="country"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="timeZone"
        onChange={(e) => {
          setTimeZone(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="meetFrequency"
        onChange={(e) => {
          setMeetFrequency(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="preferDays1"
        onChange={(e) => {
          setPreferDays1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="preferDays2"
        onChange={(e) => {
          setPreferDays2(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="preferDays3"
        onChange={(e) => {
          setPreferDays3(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="objList1"
        onChange={(e) => {
          setObjList1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="objList2"
        onChange={(e) => {
          setObjList2(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="objList3"
        onChange={(e) => {
          setObjList3(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="objQuest1"
        onChange={(e) => {
          setObjQuest1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="objQuest2"
        onChange={(e) => {
          setObjQuest2(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="objQuest3"
        onChange={(e) => {
          setObjQuest3(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="industries1"
        onChange={(e) => {
          setIndustries1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="industries2"
        onChange={(e) => {
          setIndustries2(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="industries3"
        onChange={(e) => {
          setIndustries3(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="industries4"
        onChange={(e) => {
          setIndustries4(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="industries5"
        onChange={(e) => {
          setIndustries5(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="setThemes1"
        onChange={(e) => {
          setThemes1(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="setThemes2"
        onChange={(e) => {
          setThemes2(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="setThemes3"
        onChange={(e) => {
          setThemes3(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="setThemesTopics"
        onChange={(e) => {
          setThemesTopics(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="setIntroduction"
        onChange={(e) => {
          setIntroduction(e.target.value);
        }}
      />
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;