import styled from "styled-components";

export const Dashboard = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;


    header {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem 1.5rem;

        .logo-container {
            display: flex;
            align-items: center;
            gap: 1.5rem;

            svg {
                font-size: 2rem;
            }

            h1 {
                font-size: 1.75rem;
                font-weight: 300;
            }
        }

        .user-info {
            display: flex;
            align-items: center;
            gap: .5rem;

            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }

            span {
                margin-right: 1.5rem;
            }

            button {
                font-size: .9rem;
                padding: .25em .5em;
                background-color: ${props => props.theme.accent};
                color: ${props => props.theme.light};
                outline: none;
                border: none;
                cursor: pointer;
                transition: filter .2s ease;
                border-radius: 4px;

                &:hover,
                &:focus {
                    filter: brightness(.8);
                }
            }
        }
    }



    main {
        padding: 1.5rem;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            max-width: 500px;
            margin: 0 auto;

            > input {
                padding: .5rem 0;
                font-size: 1.125rem;
                width: 100%;
                outline: none;
                border: none;
                border-bottom: 1px solid black;

                &::placeholder {
                    color: #aaa;
                    transition: opacity .2s;
                }

                &:focus::placeholder {
                    opacity: 0;
                }
            }

            > div {
                display: flex;
                flex-direction: column;
                gap: .5rem;

                label {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: .5rem;
                    cursor: pointer;

                    input {
                        margin: 0;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`