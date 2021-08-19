import styled from "styled-components";

export const NewTodo = styled.div`

    display: flex;
    width: 100%;

    padding: .5rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

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
            filter: brightness(.7);
        }
    }
`;
