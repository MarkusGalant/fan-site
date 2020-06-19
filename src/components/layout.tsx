import React, { ReactElement } from "react";

export interface IProps {
  children: React.ReactChild;
}

const Layout = ({ children }: IProps): ReactElement => (
  <div className="layout">
    <header className="header"></header>
    {children}
    <footer className="footer"></footer>
  </div>
);

export default Layout;
