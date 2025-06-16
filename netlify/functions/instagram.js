const axios = require("axios");

exports.handler = async function (event, context) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  try {
    const token = process.env.INSTAGRAM_TOKEN;
    if (!token) {
      throw new Error("Token Instagram non configuré");
    }

    const limit = event.queryStringParameters?.limit || 12;
    const fields =
      "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";

    const response = await axios.get(
      `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=${limit}`
    );

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    console.error("Erreur Instagram API:", error);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Erreur lors de la récupération des données Instagram",
        message: error.message,
      }),
    };
  }
};
