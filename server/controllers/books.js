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

export const getBooksByCategoryId = async (req, res) => {
  const { id } = req.params;
  const categoryList = await fetch(
    "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
        "x-rapidapi-key": "your_api_key",
      },
    }
  );

  let categories = await categoryList.json();
  console.log(categories);
  let category = await categories;
  console.log(category);
  const response = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}&size=10`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
        "x-rapidapi-key": "your_api_key",
      },
    }
  );

  let listOfBooks = await response.json();
  const data = {
    category: category,
    books: listOfBooks,
  };

  res.status(200).json(data);
  //   res.status(200).json(books);
};
