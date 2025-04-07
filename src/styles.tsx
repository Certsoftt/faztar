import styled from "styled-components";
import {Stack} from "@mui/material"

export const Container = styled(Stack)`
    display: block;
`;

export const Card = styled(Container)`
    padding: 2em;
`;

export const ViteLogo = styled("img")`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    &:hover{
        filter: drop-shadow(0 0 2em #646cffaa);
    }
`;

export const ReactLogo = styled(ViteLogo)`
    filter: drop-shadow(0 0 2em #61dafbaa);
    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @media (prefers-reduced-motion: no-preference) {
        img {
            animation: logo-spin infinite 20s linear;
        }
    }
`;