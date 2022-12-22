import { Experience } from "../typings";

export const fetchExperiences = async() => {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
const Data = await res.json();
const Experiences : Experience[] = Data.experiences;
console.log("Experiences: " , Experiences);
return Experiences; 
}