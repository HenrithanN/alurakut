import styled from "styled-components";

const Box = styled.div`
    background: ${({ theme }) => theme.body ? theme.body.bgColor : 'none'};
    border-radius: 8px;

    padding: 16px;
  /* CSS Pré-Pronto */
    margin-bottom: 10px;
    .boxLink {
        font-size: 14px;
        color: #2E7BB4;
        text-decoration: none;
        font-weight: 800;
    }
    .title {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.body ? theme.body.primary : 'none'};
    }
    .subTitle {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.body ? theme.body.primary : 'none'};
    }
    .smallTitle {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
        color: ${({ theme }) => theme.body ? theme.body.primary : 'none'};
        margin-bottom: 20px;
    }
    hr {
        margin-top: 12px;
        margin-bottom: 8px;
        border-color: transparent;
        border-bottom-color: #ECF2FA;
    }
    input {
        width: 100%;
        background-color: #F4F4F4;
        color: #333333;
        border: 0;
        padding: 14px 16px;
        margin-bottom: 14px;
        border-radius: 10000px;
        ::placeholder {
        color: #333333;
        opacity: 1;
        }
    }
    button {
        border: 0;
        padding: 8px 12px;
        color: ${({ theme }) => theme.body ? theme.body.bgColor : 'none'};
        border-radius: 10000px;
        background-color: #9999BBAA;
        cursor:pointer
    }
`;

export default Box;