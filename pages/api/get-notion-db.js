const { Client } = require("@notionhq/client");
const { NOTION_KEY, NOTION_DB } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});
 
async function getImageUrlFromNotion(blockIds) {
  
  const responsePromises = blockIds.map((blockId) => notion.blocks.retrieve({ block_id: blockId }));
  const responses = await Promise.all(responsePromises);
  const imageUrls = responses
    .map((response) => response.image?.file?.url) // Optional chaining (requires Node.js v14+ or a transpiler)
    .filter((url) => url != null);
    return imageUrls;
}

export default async function handler(req, res) {
  try {
    const db = await notion.databases.query({
      database_id: NOTION_DB,
      filter: {
        property: "publish",
        checkbox: {
          equals: true,
        },
      },
    });


    const blockIds = db.results.map((post) => post.properties.header_image.url);
const imageUrls = await getImageUrlFromNotion(blockIds);
console.log(imageUrls);
  
    const posts = db.results.map((post, index) => {
      
      return {
        id: post.id,
        date: post.properties.date.date.start,
        title: post.properties.title.rich_text[0].plain_text,
        abstract: post.properties.abstract.rich_text[0].plain_text,
        category: post.properties.category.select.name,
        publish: post.properties.publish.checkbox,
        header_image: imageUrls[index],
      };
    });
    posts.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}


