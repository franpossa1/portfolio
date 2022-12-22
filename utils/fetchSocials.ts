import { Social } from "../typings";

export const fetchSocials = async() => {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
const Data = await res.json();
const Socials : Social[] = Data.socials;
console.log("Socials: " , Socials);
return Socials; 
}