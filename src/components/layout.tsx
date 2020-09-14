import React, { ReactElement } from "react";

export interface IProps {
  children: React.ReactChild;
}

const Layout = ({ children }: IProps): ReactElement => (
  <div className="layout">
    <header className="header">
      <a className="header_logo" href="">
        <img
          className="header_logo_img"
          src="http://fanserial.net/images/logo.svg"
          alt=""
        />
      </a>
      <div className="menu">
        <a href="">New series</a>
        <a href="">Popular</a>
        <a href="">News</a>
        <a href="">All series</a>
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
