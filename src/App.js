import styled from "styled-components";
import {ReactComponent as Logo} from "assets/NaverLogoGreen.svg";
import "./App.css"
import Switch from "react-switch";
import {ReactComponent as CheckCircle} from "assets/CheckCircle.svg";

const AdsBox = styled.div`
  height: 176px;
  width: 551px;
  margin-top: 44px;

  border: 1px solid #DADADA;
  box-sizing: border-box;
  box-shadow: 0px 5px 8px rgba(68, 68, 68, 0.04);
  border-radius: 6px;
`

const NewSwitch = styled(Switch)`

`

function App() {

    return (
        <div className="main-container">
            <div className="main-wrap">
                <header>
                    <div className="sel-lang-wrap">
                        <select className="lang-select">
                            <option>한국어</option>
                            <option>English</option>
                        </select>
                    </div>
                    <div className="logo-wrap">
                        <Logo/>
                    </div>
                </header>
                <section className="login-input-section-wrap">
                    <div className="login-input-wrap">
                        <input placeholder="아이디" type="text"/>
                    </div>
                    <div className="login-input-wrap password-wrap">
                        <input placeholder="비밀번호" type="password"/>
                    </div>
                    <div className="login-stay-sign-in">
                        <span><CheckCircle/>로그인 상태 유지</span>
                        {/*<span>로그인 상태 유지</span>*/}
                        <NewSwitch/>
                    </div>
                    <div className="login-button-wrap">
                        <button>Sign in</button>
                    </div>
                </section>
                <section className="Easy-sgin-in-wrap">
                    <p className="forget-msg">비밀번호 찾기 | 아이디 찾기 | 회원가입</p>
                    {/*<ul className="sign-button-list">*/}
                    {/*    <li>*/}
                    {/*        <button>*/}
                    {/*            <li className="fas fa-qrcode"/>*/}
                    {/*            <span>Sign in with QR code</span></button>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <button>*/}
                    {/*            <li className="fab fa-facebook-square"/>*/}
                    {/*            <span>Facebook</span></button>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <button>*/}
                    {/*            <li className="fab fa-line"/>*/}
                    {/*            <span>line</span></button>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}

                    <AdsBox><img src="assets/AdsBox.png" alt="ads"/></AdsBox>

                    <p className="forget-msg">이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터</p>
                </section>
                <footer>
                    <div className="copyright-wrap">
                        <span><Logo style={{width: "70px", height: "15px"}}/>  Copyright © NAVER Corp. All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
