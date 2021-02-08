import styled from "styled-components";
import React from "react";

export type CardProps = {
    title: string;
    subtitle: string;
    content: string;
    src: string;
};

type Props = {
    data: CardProps;
};

const CardWrapper = styled.div`
    /* border: 5px solid black; */
    background-color: white;
    box-shadow: 1px 1px 5px 1px rgba(20, 20, 20, 0.164);
    margin-bottom: 40px;
`;

const CardContentContainer = styled.div`
    /* border: 5px solid red; */
    padding: 0 10px;
`;

const CardHeader = styled.h3`
    margin: 5px 0px 5px 0px;
`;

const CardSubHeader = styled.h4`
    margin: 5px 0px 5px 0px;
`;

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    ::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export const Card: React.FC<Props> = ({ data }) => {
    return (
        <CardWrapper>
            <ImageContainer>
                <Image src={data.src}></Image>
            </ImageContainer>
            <CardContentContainer>
                <CardHeader>{data.title}</CardHeader>
                <CardSubHeader>{data.subtitle}</CardSubHeader>
                <p>{data.content}</p>
            </CardContentContainer>
        </CardWrapper>
    );
};
