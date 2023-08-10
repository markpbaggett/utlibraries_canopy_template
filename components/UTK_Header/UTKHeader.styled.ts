import { styled } from "@/stitches";

const UTKUniversalHeader = styled('div',
  {
    borderTop: "6px solid #ff8200",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Gotham,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    top: "0",
    width: "100%",
  }
)

const UTKHeaderTop = styled('div',
  {
    display: "flex",
    flexDirection: "row",

    a: {
      color: "$smokey",
      fontFamily: "Gotham SSm\ 2r,Gotham SSm A,Gotham SSm B,Helvetica Neue,Helvetica,Arial,sans-serif",
      fontSize: "1.2777rem",
      fontWeight: "700",
      letterSpacing: "-.03rem",
      margin: "5px 3rem",
      padding: "0",
      textDecoration: "none",
      transition: "all .29s ease-in-out",
      whiteSpace: "nowrap",
      alignItems: "center",
      marginLeft: "0",
    }
  }
)

const UTKLogoWrapper = styled('div',
  {
  }
)

const UTKLogo = styled('div',
  {
    svg: {
      color: "#313e48",
      "font-family": "Gotham,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
      "font-kerning": "normal",
      "font-weight": "400",
      height: "47px",
      margin: "10px 2rem",

      polygon: {
        fill: "#ff8200",
      },

      ".utk-logo--white": {
        fill: "#fff",
      },

      ".utk-logo--smokey": {
        fill: "$smokey"
      }
    }
  }
)

const UTKHeaderLinks = styled('div',
  {
    "align-items": "center",
    display: "flex",
    margin: "5px 3rem 10px",
    width: "100%",
    "justify-content": "flex-end",

    a: {
      "font-kerning": "normal",
      color: "$smokey",
      "font-weight": "400",
      "text-decoration": "none",
      "margin-right": "1rem",
    }
  }
)

export { UTKUniversalHeader, UTKHeaderTop, UTKLogoWrapper, UTKLogo, UTKHeaderLinks };