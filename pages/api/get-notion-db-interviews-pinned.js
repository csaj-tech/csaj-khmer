const { Client } = require("@notionhq/client");
const { NOTION_KEY, NOTION_INTERVIEW_DB } = process.env;

// Initializing a client
const notion = new Client({
  auth: NOTION_KEY,
});

async function getImageUrlFromNotion(blockIds, defaultValue) {
  const imageUrls = [];

  const responsePromises = blockIds.map(async (blockId) => {
    try {
      const response = await notion.blocks.retrieve({ block_id: blockId });
      return response.image?.file?.url;
    } catch (error) {
      console.error(
        `An error occurred while retrieving image URL for block ID ${blockId}:`,
        error
      );
      return defaultValue;
    }
  });

  const responses = await Promise.all(responsePromises);

  responses.forEach((url) => {
    if (url != null) {
      imageUrls.push(url);
    }
  });

  return imageUrls;
}

export default async function handler(req, res) {
  try {
    const db = await notion.databases.query({
      database_id: NOTION_INTERVIEW_DB,
      filter: {
        property: "pinned",
        checkbox: {
          equals: true,
        },
      },
      page_size: 6,
    });

    const blockIds = db.results.map((post) => post.properties.header_image.url);
    const imageUrls = await getImageUrlFromNotion(blockIds, "/logo.png");

    const posts = db.results.map((post, index) => {
      return {
        id: post.id,
        date: post.properties.date.date.start,
        title: post.properties.title.rich_text[0].plain_text,
        abstract: post.properties.abstract.rich_text[0].plain_text,
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
