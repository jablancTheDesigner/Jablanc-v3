import { JBProject } from "../../../../src/dataTypes";
import { NextApiRequest, NextApiResponse } from "next";
import { Projects } from "../../../../src/project-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    method: req.method,
    projects: Projects,
  });
}
