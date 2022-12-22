import { Skill } from "../typings";

export const fetchSkills = async() => {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
const Data = await res.json();
const skills : Skill[] = Data.skills;
console.log("skills: " , skills);
return skills; 
}