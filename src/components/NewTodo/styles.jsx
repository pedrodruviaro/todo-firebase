import styled from "styled-components";

export const NewTodo = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    form {
        display: flex;
        width: 100%;

        padding: 0.5rem;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;

        input {
            font-size: 1rem;
            outline: none;
            border: none;
            width: 100%;

            &::placeholder {
                color: #aaa;
                transition: opacity 0.2s;
            }

            &:focus::placeholder {
                opacity: 0;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            outline: none;
            font-size: 1.75rem;
            cursor: pointer;
            transition: filter 0.2s;

            svg {
                pointer-events: none;
            }

            &:focus,
            &:hover {
                filter: brightness(0.7);
            }
        }
    }

    h2 {
        font-size: 1.25rem;
        text-align: center;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;

        &::after {
            content: "";
            display: block;
            width: 75px;
            height: 1px;
            margin: 0 auto;
            margin-top: 1rem;
            background-color: ${props => props.theme.accent};

        }
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        width: 100%;

        li {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            padding: .25rem;
            width: 100%;

            p {
                flex: 1;
                padding-left: .5rem;
            }

            > div {
                display: flex;
                align-items: center;
                gap: .25rem;
            }

            button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            outline: none;
            font-size: 1.75rem;
            cursor: pointer;
            transition: filter 0.2s;

            svg {
                pointer-events: none;
            }

            &:focus,
            &:hover {
                filter: brightness(0.7);
            }
        }
        }
    }

    
    > button {
                font-size: 1rem;
                padding: .25em 1em;
                background-color: transparent;
                color: ${props => props.theme.dark};
                outline: none;
                border: 1px solid ${props => props.theme.accent};
                cursor: pointer;
                transition: all .2s ease;
                border-radius: 4px;

                &:hover,
                &:focus {
                    background-color: ${props => props.theme.accent};
                    color: ${props => props.theme.light};
                }
            }
`;
