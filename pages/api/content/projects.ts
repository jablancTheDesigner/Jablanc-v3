import { NextApiRequest, NextApiResponse } from "next";
import { getProjects } from "../../../src/projectsService";

export default function handler(req:NextApiRequest, res: NextApiResponse){
    res.status(200).json({
        method: req.method,
        projects: getProjects()
    }); 
}