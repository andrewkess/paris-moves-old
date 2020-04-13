import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"

//const typography = new Typography(noriegaTheme)


const typography = new Typography({
    //baseFontSize: "17.25px",
    //baseLineHeight: 1.57,
  }, noriegaTheme)




export const { scale, rhythm, options } = typography
export default typography