import React, { useState } from "react";
import Course from "./Course";

const Allcourses = () => {
    const [ courses, setCourses] = useState([
        { title: "java course", description: "this is demo course"}
    ]);
    return(
        <div>
            <h1>all course</h1>
            <p>list of courses are as follows</p>
            
           {courses.length > 0
           ? courses.map((item) => <Course course={item} />)
            : "No courses"}
            </div>
            );   
        };

        export default Allcourses;


        
    

