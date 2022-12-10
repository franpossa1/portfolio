import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";


const query = groq`
*[_type =="pageInfo"][0]
  
`
type Data = {
    experiences: Experience[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const experiences: Experience[] = await sanityClient.fetch(query);

    res.status(200).json({experiences});
}