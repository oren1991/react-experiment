import React, { FC, ReactNode } from "react";
import { Card } from "../components/Card";
import { useData } from "../hooks/useData";
type Props = {
    children?: ReactNode | ReactNode[];
};

const Home: FC<Props> = () => {
    const dataArray = useData(null);
    return (
        <>
            {dataArray
                ? dataArray.map((data) => {
                      return <Card data={data}></Card>;
                  })
                : "loading..."}
        </>
    );
};

export default Home;
