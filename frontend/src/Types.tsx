interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }
  interface CourseBaseAndDescription extends CoursePartBase{
    description: string;
  }
  interface CourseNormalPart extends CourseBaseAndDescription {
    type: "normal";
  }
  interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
  }
  interface CourseSubmissionPart extends CourseBaseAndDescription {
    type: "submission";
    exerciseSubmissionLink: string;
}
interface CourseSpecialPart extends CourseBaseAndDescription{
    type: "special";
    requirements: string[]
  }
  
export type CoursePart = CourseProjectPart | CourseNormalPart | CourseSubmissionPart | CourseSpecialPart;
