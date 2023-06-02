import styled from 'styled-components'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 6rem;
  background-color: #0f3f4f;
  > div {
    display: flex;
    flex-direction: column;
    &:first-child {
      * {
        margin-bottom: 1.5rem;
      }
    }
    span {
      color: #fffff;
      font-size: 1.9rem;
      letter-spacing: -0.1em;
      font-family: 'Bespoke Stencil', sans-serif;
    }
  }
  .footer-links {
    * {
      margin-bottom: 1rem;
    }
  }
  a > img {
    width: 1rem;
    height: auto;
  }
  .social-links {
    display: flex;
    * {
      margin-right: 1rem;
    }
  }
  @media (40em <= width <= 53em) {
    padding: 4rem;
    .social-links {
      * {
        margin-right: 0.5rem;
      }
    }
    p {
      width: 110px;
    }
  }
  @media (0em <= width <= 40em) {
    padding: 2rem;
    flex-direction: column;
    .social-links {
      * {
        margin-right: 0.5rem;
      }
    }
    p {
      width: 110px;
    }
    .footer-links {
      * {
        font-size: 1.4rem;
      }
    }
  }
`
const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <span>EWP</span>
        <div className="social-links">
          <a href="">
            <img src="src\assets\img\icons8-speed-47.png" alt="" />
          </a>
          <a href="">
            <img src="src\assets\img\icons8-speed-47.png" alt="" />
          </a>
          <a href="">
            <img src="src\assets\img\icons8-speed-47.png" alt="" />
          </a>
          <a href="">
            <img src="src\assets\img\icons8-speed-47.png" alt="" />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <a href="">Home</a>
        <a href="">Pricing</a>
        <a href="">Products</a>
        <a href="">About us</a>
      </div>
      <div className="footer-links">
        <a href="">Career</a>
        <a href="">Community</a>
        <a href="">Privacy Policy</a>
      </div>
      <div>
        <div></div>
        <p>copyright © {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </FooterWrapper>
  )
}

export default Footer
