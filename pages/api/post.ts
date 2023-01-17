import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, content } = req.body;
  const author = { connect: { id: 1 } };
  try {
    await prisma.post.create({
      data: {
        title,
        content,
        author,
      },
    });
    res.status(200).json({ message: "Post created successfully" });
  } catch (err) {
    console.log(err);
  }
}
