import styled from "styled-components";
import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

type MenuProps = {
    children: ReactElement<MenuItemProps>[];
    className?: string;
};

type MenuItemProps = {
    to: string;
    key: string | number;
    className?: string;
    onClick: () => void;
};

export const MenuItemComponent: React.FC<MenuItemProps> = ({
    children,
    to,
    onClick,
    className,
}) => {
    return (
        <div style={{ width: "50%" }}>
            <NavLink
                activeStyle={{ backgroundColor: "#52b1ff" }}
                className={className}
                onClick={onClick}
                to={to}
            >
                {children}
            </NavLink>
        </div>
    );
};

const MenuComponent: React.FC<MenuProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export const MenuItem = styled(MenuItemComponent)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    margin: 10px 5px;
    height: 40px;
`;

export const Menu = styled(MenuComponent)`
    flex: 1;
    z-index: 90;
    background-color: white;
`;
