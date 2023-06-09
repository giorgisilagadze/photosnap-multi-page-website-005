import styled from "styled-components";

export const ImagesWrapper = styled.div`
    width: 375px;
    margin: auto;

    @media(min-width: 768px) {
        width: 768px;
        display: flex;
        flex-wrap: wrap;
    }

    @media(min-width: 1440px) {
        width: 1440px;
        display: flex;
        flex-wrap: wrap;
    }
`