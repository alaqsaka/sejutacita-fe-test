import fetch from "node-fetch";

export const getBooks = async (req, res) => {
  const response = await fetch(
    "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
        "x-rapidapi-key": "your_api_key",
      },
    }
  );
  const data = await response.json();

  res.status(200).json(data);
  //   res.status(200).json(books);
};
