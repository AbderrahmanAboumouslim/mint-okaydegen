import styled from 'styled-components';
import './App.css';

function App() {
  const position = document.documentElement;
  position.addEventListener('mousemove', e => {
    position.style.setProperty('--x', e.clientX + 'px');
  });

  return (
    <Wrapper>
      <div id="main-container">
        <div id="mint-button-container" />
      </div>
      <OkayDegen>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
        <h3>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
          <span>Okay Degen</span>
        </h3>
      </OkayDegen>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: #111; */

  /* display: flex;
  justify-content: center;
  align-items: center; */

  position: relative;
  overflow: hidden;
`;

const OkayDegen = styled.div`
  z-index: -1;
  background-color: black;
  position: relative;
  transform: skewY(345deg) translateY(-200px);
  animation: myanime 5s linear infinite;

  @keyframes myanime {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  h3 {
    position: relative;
    width: 100%;
    font-size: 8em;
    color: #fff;
    pointer-events: none;
    line-height: 1em;
    white-space: nowrap;
    transform: translateX(calc(0% - var(--x) * 2));

    text-shadow: calc(var(--x)) 100px 0 rgba(255, 255, 255, 0.1);
  }

  span {
    color: #0f0;
    margin: 0 10px;

    &:nth-child(even) {
      color: transparent;
      -webkit-text-stroke: 2px #fff;
    }
  }
`;

export default App;
