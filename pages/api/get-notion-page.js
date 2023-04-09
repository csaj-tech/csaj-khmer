import { getBlocks, getDatabase } from "../../lib/notion";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const blocks = await getBlocks(id);
    res.status(200).json(blocks);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}
