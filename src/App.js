import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <Wrapper>
      <div>Test</div>
      <div id="mint-counter"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
