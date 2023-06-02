import styled from 'styled-components'
const FirstLand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 6rem 6%;
  &::before {
    content: '';
    background-image: linear-gradient(to left, #e1f1fe 60%, #fff);
    width: 80%;
    height: 90%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-bottom-right-radius: 2rem;
  }
  @media (0em <= width <= 53em) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 5%;

    &::before {
      background-image: linear-gradient(to top left, #e1f1fe 60%, #fff);
      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;
      width: 100%;
      height: 70%;
    }
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: white;
  border-radius: 1.2rem;
  justify-content: space-between;
  width: 40%;
  box-shadow: 0px 12px 20px 3px #e6e6e6;
  p {
    color: white;
    white-space: nowrap;
  }
  .card-message {
    background-image: linear-gradient(to right, #466dfa 70%, #7699fa);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 1rem 2rem;
    p {
      font-size: 12px;
    }
  }
  .fake-radio {
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0;
    span {
      color: #3d454b;
    }
    > div:first-child {
      margin-right: 2rem;
    }
    > div {
      display: flex;
      align-items: center;
      > div:first-child {
        margin-right: 0.8rem;
      }
    }
  }
  .active-radio {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #466dfa;
    border: 5px solid #e1f1fe;
  }
  .inactive-radio {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid #98a6b3;
  }
  .card-field {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
  .fake-input {
    p {
      color: #98a6b3;
      font-size: 12px;
    }
  }
  .fake-input-box {
    width: 100%;
    padding: 1rem 1rem;
    border: 1px solid #98a6b3;
    border-radius: 7px;
    margin-top: 0.7rem;
  }
  @media (40em <= width <= 53em) {
    width: 90%;
    .card-message {
      background-image: linear-gradient(to right, #2f55dc 80%, #7699fa);
    }
    .fake-input-box {
      width: 100%;
      height: 3rem;
    }
  }
  @media (0em <= width <= 40em) {
    width: 95%;
    .card-message {
      background-image: linear-gradient(to right, #466dfa 90%, #7699fa);
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
      border-radius: 1rem;
      height: auto;
    }
    p {
      white-space: normal;
    }
  }
`
const SecondLand = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15rem 6.5%;
  p {
    color: #98a6b3;
    font-size: 0.8rem;
    line-height: 1.5;
  }
  > div {
    max-width: 30rem;
    h1 {
      font-size: 2.6rem;
      margin-bottom: 1rem;
    }
  }
  img {
    width: 25vw;
    height: auto;
    box-shadow: 12px 12px 2px 20px #e1f1fe;
    border-radius: 5px;
  }
  @media (53em <= width <= 62.5em) {
    img {
      width: 35vw;
    }
  }
  @media (40em <= width <= 53em) {
    padding: 8rem 4.5% 8rem 0;
    > div {
      max-width: 20rem;
      h1 {
        font-size: 2.6rem;
        margin-bottom: 1rem;
      }
    }
    img {
      height: 35vw;
      width: auto;
    }
  }
  @media (0em <= width <= 40em) {
    padding: 6rem 0;
    flex-direction: column;
    img {
      height: auto;
      width: 100vw;
      box-shadow: none;
      border: 2rem solid #e1f1fe;
      margin-bottom: 4rem;
    }
    > div {
      max-width: 20rem;
      padding-left: 1rem;
    }
  }
`
const ThirdLand = styled.div`
  padding: 0 6.5%;
  display: grid;
  gap: 2rem 4rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .benefit-grid-item {
    display: flex;
    flex-direction: column;
  }
  p {
    margin-top: 0.7rem;
    color: #626f7a;
    font-size: 14px;
  }
  .icon {
    width: 2.2rem;
    height: 2.2rem;
    background-color: #badaf4;
    border-radius: 50%;
    padding: 5px;
    margin-bottom: 1.1rem;
  }
  @media (40em <= width <= 53em) {
    .benefit-grid-item {
      flex-direction: row;
      align-items: center;
    }
    .icon {
      margin-right: 1rem;
    }
  }
`
const FourthLand = styled.div`
  padding: 15rem 6.5vw;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: repeat(4, min-content);
  h2 {
    font-size: 2.6rem;
    margin-bottom: 0.7rem;
  }
  .grid-item:not(:first-child) {
    padding: 1rem 1.5rem;
    box-shadow: 5px 8px 20px 3px #e6e6e6;
    border-radius: 1rem;
    > div {
      display: flex;
      align-items: center;
    }
  }
  .grid-item--1 {
    grid-area: 1/1/2/3;
  }
  .grid-item--2 {
    grid-area: 1/3/2/5;
    max-width: 22vw;
    justify-self: center;
  }
  .grid-item--3 {
    grid-area: 2/1/3/4;
    max-width: 22vw;
    justify-self: end;
  }
  .grid-item--5 {
    grid-area: 3/1/4/3;
    max-width: 22vw;
    justify-self: end;
  }
  .grid-item--6 {
    grid-area: 3/3/4/5;
    max-width: 22vw;
    justify-self: start;
  }
  @media (53em <= width <= 62.5em) {
    .grid-item--1 {
      grid-area: 1/1/2/3;
    }
    .grid-item--2 {
      grid-area: 1/3/2/5;
      justify-self: center;
    }
    .grid-item--3 {
      grid-area: 2/1/3/3;
      justify-self: start;
    }
    .grid-item--4 {
      grid-area: 2/2/3/4;
      justify-self: start;
    }
    .grid-item--5 {
      grid-area: 3/1/4/2;
      justify-self: start;
    }
    .grid-item--6 {
      grid-area: 3/2/4/4;
      justify-self: center;
      max-width: none;
    }
  }
  @media (40em <= width <= 53em) {
    padding: 8rem 6.5vw;
    grid-template-columns: repeat(2, minmax(200px, 1fr));

    .grid-item--1 {
      grid-area: 1/1/2/3;
    }
    .grid-item--2 {
      grid-area: auto;
      max-width: none;
      justify-self: start;
    }
    .grid-item--3 {
      grid-area: auto;
      max-width: none;
      justify-self: start;
    }
    .grid-item--4 {
      grid-area: auto;
      max-width: none;
      justify-self: start;
    }
    .grid-item--5 {
      grid-area: auto;
      justify-self: start;
      max-width: none;
    }
    .grid-item--6 {
      grid-area: 4/1/5/3;
      max-width: none;
    }
  }
  @media (0em <= width <= 40em) {
    padding: 8rem 6.5vw;
    grid-template-columns: repeat(1, minmax(200px, 1fr));

    .grid-item--1 {
      grid-area: auto;
    }
    .grid-item--2 {
      grid-area: auto;
      max-width: none;
      justify-self: start;
    }
    .grid-item--3 {
      grid-area: auto;
      max-width: none;
      justify-self: start;
    }
    .grid-item--4 {
      grid-area: auto;
      max-width: none;
      justify-self: start;
    }
    .grid-item--5 {
      grid-area: auto;
      justify-self: start;
      max-width: none;
    }
    .grid-item--6 {
      grid-area: auto;
      max-width: none;
    }
  }
`
const LandingPage = () => {
  return (
    <div>
      <FirstLand>
        <div className="hero-text">
          <h1>Everyone can become a Programmer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            officia odit nam qui neque? Rem aliquid odio modi voluptates,
            voluptatum quis reiciendis eligendi nesciunt eaque voluptatem ut
            quas, nobis distinctio?
          </p>
        </div>
        <Card>
          <h3>Enter your details below</h3>
          <div className="fake-radio">
            <div>
              <div className="active-radio"></div>
              <span>child</span>
            </div>
            {/* second option */}
            <div>
              <div className="inactive-radio"></div>
              <span>Adult</span>
            </div>
          </div>
          <div className="card-field">
            <div className="fake-input">
              <div className="fake-input-box">
                <p>Full Name</p>
              </div>
            </div>
            <div className="fake-input">
              <div className="fake-input-box">
                <p>Age</p>
              </div>
            </div>
            <div className="fake-input">
              <div className="fake-input-box">
                <p>Gender</p>
              </div>
            </div>
          </div>
          <div className="card-message">
            <h4>Welcome!</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate labore voluptatem, voluptas aperiam laboriosam atque,
              neque amet distinctio architecto
            </p>
          </div>
        </Card>
      </FirstLand>
      <SecondLand>
        <img src="src\assets\img\programming-and-we-design.jpg" alt="course" />
        <div>
          <h1>Let your Kids Explore Tech</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            officia odit nam qui neque? Rem aliquid odio modi voluptates,
            voluptatum quis reiciendis eligendi nesciunt eaque voluptatem ut
            quas, nobis distinctio?
          </p>
        </div>
      </SecondLand>
      <ThirdLand>
        <div className="benefit-grid-item">
          <img
            src="src\assets\img\icons8-ecommerce-64.png"
            alt=""
            className="icon"
          />
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              vero reiciendis id! Voluptatibus eaque autem cumque
            </p>
          </div>
        </div>
        <div className="benefit-grid-item">
          <img
            src="src\assets\img\icons8-speed-47.png"
            alt=""
            className="icon"
          />
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              vero reiciendis id! Voluptatibus eaque autem cumque
            </p>
          </div>
        </div>
        <div className="benefit-grid-item">
          <img
            src="src\assets\img\icons8-ecommerce-64.png"
            alt=""
            className="icon"
          />
          <div>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              vero reiciendis id! Voluptatibus eaque autem cumque
            </p>
          </div>
        </div>
      </ThirdLand>
      <FourthLand>
        <div className=" grid-item grid-item--1">
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente
            ratione eligendi magnam aperiam porro iusto modi exercitationem
            officia. Quibusdam deserunt, perspiciatis voluptas ipsa quod nulla
            repellendus excepturi! Mollitia, cumque!
          </p>
        </div>
        <div className="grid-item grid-item--2">
          <div>
            <img
              src="src\assets\img\icons8-ecommerce-64.png"
              alt=""
              className="grid-icon"
            />
            <h3>lorem</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            maxime, rerum aliquam magnam nesciunt tempore sit quam consequuntur
          </p>
        </div>
        <div className="grid-item grid-item--3">
          <div>
            <img
              src="src\assets\img\icons8-ecommerce-64.png"
              alt=""
              className="grid-icon"
            />
            <h3>lorem</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            maxime, rerum aliquam magnam nesciunt tempore sit quam consequuntur
          </p>
        </div>
        <div className="grid-item grid-item--4">
          <div>
            <img
              src="src\assets\img\icons8-ecommerce-64.png"
              alt=""
              className="grid-icon"
            />
            <h3>lorem</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            maxime, rerum aliquam magnam nesciunt tempore sit quam consequuntur
          </p>
        </div>
        <div className="grid-item grid-item--5">
          <div>
            <img
              src="src\assets\img\icons8-ecommerce-64.png"
              alt=""
              className="grid-icon"
            />
            <h3>lorem</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            maxime, rerum aliquam magnam nesciunt tempore sit quam consequuntur
          </p>
        </div>
        <div className="grid-item grid-item--6">
          <div>
            <img
              src="src\assets\img\icons8-ecommerce-64.png"
              alt=""
              className="grid-icon"
            />
            <h3>lorem</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            maxime, rerum aliquam magnam nesciunt tempore sit quam consequuntur
          </p>
        </div>
      </FourthLand>
    </div>
  )
}

export default LandingPage
