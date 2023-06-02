import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap');
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html{
  overflow-x: hidden;
}
body{
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Poppins', sans-serif;
}
h1,h2,h3 {
  color: #3d454b;
}
p{
  color: #98a6b3;
  font-size: 0.8rem;
  line-height: 1.5;
}
a {
  text-decoration: none;
  color: inherit;
}
.hero-text {
  max-width: 30rem;
  h1 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
}
@media (53em <= width <= 62.5em) {
.hero-text {
  max-width: 23rem;
  h1 {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }
}
}
@media (40em <= width <= 53em) {
  .hero-text {
    max-width: 80%;
    margin-bottom: 2rem;
    text-align: center;
    h1 {
      font-size: 2.6rem;
      width: 20rem;
      margin: 0 auto 1.3rem;
    }
  }
  }
  @media (00em <= width <= 40em) {
    .hero-text {
      max-width: 80%;
      margin-bottom: 2rem;
      text-align: center;
      h1 {
        font-size: 2.2rem;
        width: 16rem;
        margin: 0 auto 1.3rem;
      }
    }
    }
`

export default GlobalStyles
