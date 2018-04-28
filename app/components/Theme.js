import {createMuiTheme} from "material-ui/styles";

const Theme = createMuiTheme({
    palette: {
      primary: {
          light: "#53acaf",
          main: "#167c80",
          dark: "004f54",
          contrastText: "#fff"
      }
    },
})

module.exports.Theme = Theme;