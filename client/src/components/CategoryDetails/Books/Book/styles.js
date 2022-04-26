import { makeStyles } from "@mui/styles";

export default makeStyles({
  media: {
    alignContent: "center",
    margin: "0 auto",
    marginTop: "30px",
    width: "auto !important",
    boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "16px !important",
    boxShadow: "8px 16px 24px 4px rgb(0 0 0 / 5%) !important",
  },
  bold: {
    fontWeight: "600 !important",
  },
  author: {
    fontWeight: "600 !important",
    marginBottom: "10px !important",
  },
  desc: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    height: "100px",
  },
  divider: {
    marginBottom: "20px !important",
  },
});
//box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
