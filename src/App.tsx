import React, { useState } from "react";
import { Main } from "./layout/Main";
import { Header } from "./layout/Header";
import { HeaderTitle } from "./layout/HeaderTitle";
import { Footer, FooterNav } from "./layout/Footer";
import { Avatar } from "./layout/Avatar";
import { Menu, MenuItem } from "./layout/Menu";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ContentWrapper } from "./layout/ContentWrapper";
import Home from "./pages/Home";

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const routes: {
    path: string;
    component: JSX.Element | string;
    text: string;
}[] = [
    { path: "/1", component: <Home />, text: "Home" },
    { path: "/2", component: "1", text: "1" },
    { path: "/3", component: "2", text: "2" },
];

function App() {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <AppWrapper>
            <Router>
                <Header>
                    <HeaderTitle>New To Art</HeaderTitle>
                    <Avatar onClick={() => setMenuActive((c) => !c)} />
                </Header>
                <Main menuActive={menuActive}>
                    <Switch>
                        <ContentWrapper
                            onBackdropClick={() => setMenuActive(false)}
                            blur={menuActive}
                            column
                        >
                            {routes.map((route) => {
                                return (
                                    <Route path={route.path}>
                                        {route.component}
                                    </Route>
                                );
                            })}
                        </ContentWrapper>
                    </Switch>
                    <Menu>
                        {routes.map((route) => {
                            return (
                                <MenuItem
                                    key={route.path}
                                    to={route.path}
                                    onClick={() => setMenuActive(false)}
                                >
                                    {route.text}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </Main>
                <Footer>
                    <FooterNav>
                        <Link to="/1">1</Link>
                    </FooterNav>
                    <FooterNav>
                        <Link to="/2">2</Link>
                    </FooterNav>
                    <FooterNav>
                        <Link to="/3">3</Link>
                    </FooterNav>
                </Footer>
            </Router>
        </AppWrapper>
    );
}

export default App;
