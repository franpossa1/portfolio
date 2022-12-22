import { Project } from "../typings";

export const fetchProjects = async() => {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
const Data = await res.json();
const Projects : Project[] = Data.projects;
console.log("Projects: " , Projects);
return Projects; 
}