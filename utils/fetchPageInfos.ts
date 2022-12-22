import { PageInfo } from "../typings";

export const fetchPageInfos = async() => {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
const Data = await res.json();
const PageInfos : PageInfo = Data.pageInfo;
console.log("PageInfos: " , PageInfos);
return PageInfos; 
}