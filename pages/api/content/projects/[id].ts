import {
    NextApiRequest,
    NextApiResponse
} from "next"
import { Projects } from "../../../../src/project-data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query
    res.status(200).json({
        method: req.method,
        slug: id,
        project: Projects.find(project => project.id == id)
    });
}