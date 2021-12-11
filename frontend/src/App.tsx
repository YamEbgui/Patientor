import { CoursePart } from "./Types";
import { courseParts } from "./Database";
import React from "react";

const Header = ({ courseName }: { courseName: string }): JSX.Element => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  );
};

const Content = ({ courses }: { courses: CoursePart[] }): JSX.Element => {
  return (
    <div>
      {courses.map((course: CoursePart) => {
        return <Part key={course.name} coursePart={course} />;
      })}
    </div>
  );
};

const Part = ({
  coursePart,
}: {
  key: string;
  coursePart: CoursePart;
}): JSX.Element => {
  let elementsToShow: JSX.Element;
  switch (coursePart.type) {
    case "normal":
      elementsToShow = (
        <div>
          <p>
            <b>
              {coursePart.name + " "}
              {coursePart.exerciseCount}
            </b>
            <br />
            <em>{coursePart.description}</em>
          </p>
        </div>
      );
      break;
    case "groupProject":
      elementsToShow = (
        <div>
          <p>
            <b>
              {coursePart.name + " "}
              {coursePart.exerciseCount}
            </b>
            <br />
            {"project exercises " + coursePart.groupProjectCount}
          </p>
        </div>
      );
      break;
    case "submission":
      elementsToShow = (
        <div>
          <p>
            <b>
              {coursePart.name + " "}
              {coursePart.exerciseCount}
            </b>
            <br />
            <em>{coursePart.description}</em>
            <br />
            <a href={coursePart.exerciseSubmissionLink}>
              {coursePart.exerciseSubmissionLink}
            </a>
          </p>
        </div>
      );
      break;
    case "special":
      elementsToShow = (
        <div>
          <p>
            <b>
              {coursePart.name + " "}
              {coursePart.exerciseCount}
            </b>
            <br />
            <em>{coursePart.description}</em>
            <br />
            {"required skils: " + coursePart.requirements}
          </p>
        </div>
      );
      break;
    default:
      throw "There is a problem with course type!";
  }
  return elementsToShow;
};

const Total = ({ courses }: { courses: CoursePart[] }): JSX.Element => {
  return (
    <p>
      Number of exercises{" "}
      {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

const App = () => {
  const courseName = "Half Stack application development";

  return (
    <div>
      <Header courseName={courseName} />
      <Content courses={courseParts} />
      <Total courses={courseParts} />
    </div>
  );
};

export default App;
