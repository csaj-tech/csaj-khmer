import { getPage } from "../../lib/notion";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const post = await getPage(id);
    const page = {
      id: post.id,
      date: post.properties.date.date.start,
      title: post.properties.title.rich_text[0].plain_text,
      abstract: post.properties.abstract.rich_text[0].plain_text,
      category: post.properties.category.select.name,
      publish: post.properties.publish.checkbox,
      header_image: post.properties.header_image.url,
    };
    res.status(200).json(page);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}
