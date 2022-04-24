import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  category: {
    marginRight: "5px",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontWeight: "600 !important",
    marginTop: "20px !important",
    marginBottom: "20px !important",
  },
  booksAndPaginate: {
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  paginate: {
    display: "flex !important",
    justifyContent: "center !important",
    width: "fit-content",
  },
  books: {
    marginBottom: "30px !important",
  },
  ul: {
    justifyContent: "space-around",
  },
}));
