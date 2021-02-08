import styled from "styled-components";
type Props = {
    column?: boolean;
    blur?: boolean;
    onBackdropClick: () => void;
};

const BackDrop = styled.div<{ blur: boolean; onClick: () => void }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.733);
    opacity: ${(props) => (props.blur ? 1 : 0)};
`;

const Wrapper = styled.div<{ column?: boolean }>`
    background-color: #f0f0f0;
    max-width: 640px;
    flex: 0 0 50%;
    display: flex;
    flex-direction: ${(p) => (p.column ? "column" : "row")};
    padding: 1em;
    overflow: scroll;
`;

export const ContentWrapper: React.FC<Props> = ({
    onBackdropClick,
    children,
    column,
    blur,
}) => {
    return (
        <>
            <Wrapper column={column}>
                {children}
                {blur && <BackDrop onClick={onBackdropClick} blur={blur} />}
            </Wrapper>
        </>
    );
};
