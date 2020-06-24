import React, { ReactElement } from "react";

export interface IProps {
  children: React.ReactChild;
}

const Layout = ({ children }: IProps): ReactElement => (
  <div className="layout">
    <header className="header">
      <div className="header-container"></div>
      <a className="header_logo" href="">
        {" "}
        <img src="http://fanserial.net/images/logo.svg" alt="" />
      </a>
      <ul className="menu">
        <a href="">
          {" "}
          <li>New series</li>
        </a>
        <a href="">
          {" "}
          <li>Popular</li>
        </a>
        <a href="">
          {" "}
          <li>News</li>
        </a>
        <a href="">
          {" "}
          <li>All series</li>
        </a>
      </ul>
      <div className="block_header">
        <div className="search">
          <a href="">Search</a>{" "}
        </div>
        <div className="sign">
          {" "}
          <a href="">Sign in</a>{" "}
        </div>
      </div>
    </header>
    {children}
    <footer className="footer">
      <p>Receive notifications of new series</p>
      <a href="">VK</a>
      <a href="">Telegram</a>
      <a href="">Site</a>
      <a href="">Android app</a>
    </footer>
  </div>
);

export default Layout;
