import merge from "lodash.merge";
import theme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";

export default merge({}, theme, {
  colors: {
    primary: "#7e003d",
    text: "#fff",
    border: "transparent",
    background: '#232129'
  },

})
