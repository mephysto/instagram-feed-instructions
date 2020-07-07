const fetch = require("node-fetch");
require("dotenv").config();

const INSTA_ACCESS_TOKEN = process.env.INSTA_ACCESS_TOKEN;
const MEMEDIAURL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,timestamp&access_token=${INSTA_ACCESS_TOKEN}`;

const getInstaFeed = async () => {
  // grab the feed from insta
  const result = await fetch(MEMEDIAURL)
    .then((res) => res.json())
    .then((json) => json.data)
    .catch((reason) => {
      console.log("Error'd:");
      console.log(JSON.stringify(reason, null, "  "));
      return reason;
    });
  // tidy up the the resulting feed
  const feed = result.map((item) => {
    return {
      id: item.id,
      timestamp: item.timestamp,
      caption: item.caption,
      media_url: item.media_url,
      type: item.media_type,
      video_thumbnail_url: item.thumbnail_url,
    };
  });
  return feed;
};

// e.g. usage:
getInstaFeed().then((res) => console.log(res));