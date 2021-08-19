import styled from "styled-components";

export const NewNote = styled.fieldset`
    width: 100%;

    input {
        padding: 0.15rem;
        background-color: transparent;
        border-radius: 3px;
        cursor: pointer;
        width: 75px;
        margin: 0 auto;
        outline: none;
        border: 1px solid #bbb;
    }
`;

export const Textarea = styled.textarea`
    resize: vertical;
    min-height: 120px;
    padding: 0.5rem;
    font-size: 1rem;
    
    border: none;
    border-radius: 10px;
    border-top: 3px solid;

    outline: none;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;


    &::placeholder {
        color: #aaa;
        transition: opacity 0.2s;
    }

    &:focus::placeholder {
        opacity: 0;
    }
`;
