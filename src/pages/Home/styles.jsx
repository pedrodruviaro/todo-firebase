import styled from "styled-components";

export const Home = styled.div`
    padding: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;



    img {
        max-width: 300px;
        height: auto;
    }

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3rem;

        > svg {
        font-size: 3.5rem;
    }

        h1 {
            font-size: 2.5rem;
            text-align: center;
            font-weight: 300;
        }

        p {
            font-size: 1.125rem;
            text-align: center;
        }

        button {
            border: none;
            background-color: ${props => props.theme.light};
            color: ${props => props.theme.dark};
            border: 2px solid ${props => props.theme.accent};
            border-radius: 6px;
            padding: .5em;
            font-size: 1.125rem;
            outline: none;
            cursor: pointer;
            transition: all .2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: .5em;

            &:focus, &:hover {
                transform: scale(1.1);
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
        }
    }

    @media (max-width: 900px){
        flex-direction: column;
        justify-content: space-around;

        img:nth-child(1){
            display: none;
        }
    }

`