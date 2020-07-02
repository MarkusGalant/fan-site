import React, { ReactElement } from "react";

export interface IProps {
  children: React.ReactChild;
}

const Layout = ({ children }: IProps): ReactElement => (
  <div className="layout">
    <header className="header">
      <div className="header-container"></div>
      <a className="header_logo" href="">
        <img
          className="header-logo-img"
          src="http://fanserial.net/images/logo.svg"
          alt=""
        />
      </a>
      <ul className="menu">
        <a href="">
          <li>New series</li>
        </a>
        <a href="">
          <li>Popular</li>
        </a>
        <a href="">
          <li>News</li>
        </a>
        <a href="">
          <li>All series</li>
        </a>
      </ul>
      <div className="block_header">
        <div className="search">
          <a href="">Search</a>{" "}
        </div>
        <div className="sign">
          <a href="">Sign in</a>{" "}
        </div>
      </div>
    </header>
    <div className="Container"></div>

    <footer className="footer">
      <div className="footer_roof">
        <img
          className="footer_roof_img"
          src="http://fanserial.net/images/logo-grey.svg"
          alt=""
        />
        <div className="footer_roof_text">© 2015-2020 FanSerials</div>
        <div className="footer_roof_border">
          <div className="footer_roof_border_text">18+</div>
        </div>

        <div className="footer_roof_link">
          <a href="https://fanserials-zerkalo.site/">Mirror</a>
          <a href="http://fanserial.net/licenzionnoe-soglashenie.html">
            Agrement
          </a>
          <a href="http://fanserial.net/abuse.html">Copyright holder</a>
        </div>
      </div>

      <div className="footer_floor">
        <p className="footer_floor_title">
          Receive notifications of new series:
        </p>
        <div className="footer_floor_link">
          <a href="http://fanserial.net/vkpush.html">VK</a>
          <a href="http://fanserial.net/telegram.html">Telegram</a>
          <a href="http://fanserial.net/instruction_lk.html">Site</a>
          <a href="http://fanserial.net/instruction_android.html">
            Android app
          </a>
        </div>
        <div className="footer_floor_telegram_border">
          <div className="footer_floor_telegram">
            <a href="https://intg.me/FanSerialsBot">
              <img
                className="telegram_plane"
                src="https://www.pngjoy.com/pngm/207/4059198_telegram-telegram-plane-png-icon-transparent-png.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Layout;
