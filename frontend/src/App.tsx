import React from 'react';
import { JsxEmit } from 'typescript';

interface CourseParts{
  name: string,
  exerciseCount:number
}

const Header = ({ courseName }: { courseName:string }):JSX.Element => {
  return (
    <div><h1>{courseName}</h1></div>
  )
}

const Content = ({ courses }: { courses: CourseParts[]}): JSX.Element => {
  return (<div>{courses.map((course:CourseParts) => { return <p key={course.name}>{course.name}{course.exerciseCount}</p>}) }</div>)
}

const Total = ({ courses }: { courses: CourseParts[] }): JSX.Element => {
  return( <p>
    Number of exercises{" "}
    {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
  </p>)
}

const App = () => {
  const courseName = "Half Stack application development";
  const data : CourseParts[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseName={"Half Stack application development"} />
      <Content courses={data} />
      <Total courses={data}/>
    </div>
  );
};

export default App;

