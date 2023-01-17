import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;

  if (req.method === "DELETE") {
    const note = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json(note);
  } else {
    console.log("Post not deleted");
  }
}
