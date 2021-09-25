import styled from "styled-components";
import { ReactComponent as Logo } from "assets/NaverLogoGreen.svg";
import Button from "./components/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 107px 0 20px 0;
`;

const HeaderContainer = styled.header`
  width: 743px;
  height: 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Select = styled.select`
  font-size: 12px;
  background-color: white;
  border-color: #cccccc;
  color: #333333;
  width: 95px;
  height: 30px;
  padding: 4px 10px 6px 8px;

  option {
    background: white;
    display: flex;
    padding: 0 2px 1px 2px;
  }
`;

function App() {
  return (
    <Container>
      <HeaderContainer className="header" role="banner">
        <div className="header_inner">
          <a href="https://www.naver.com" className="logo">
            <Logo />
          </a>

          <Select>
            <option value="ko_KR">한국어</option>
            <option value="ko_KR">English</option>
            <option value="ko_KR">中文(简体)</option>
            <option value="ko_KR">中文(台灣)</option>
          </Select>
        </div>

        <Button>로그인</Button>
      </HeaderContainer>
    </Container>
  );
}

export default App;
