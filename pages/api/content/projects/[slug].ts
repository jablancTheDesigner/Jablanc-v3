import { NextApiRequest, NextApiResponse } from "next";
import { Projects } from "../../../../src/project-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  res.status(200).json({
    method: req.method,
    slug: slug,
    project: Projects.find((project) => project.slug == slug),
  });
}
