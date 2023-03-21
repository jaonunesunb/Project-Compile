import styled from "styled-components";

export const ModalJobContainer = styled.div`
  background-color: rgb(var(--color-white), 1);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 25px;
  }

  .containerDescription {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  .techs {
    margin-left: 20px;
    margin-top: 20px;
  }

  .btnClose {
    background-color: transparent;
    color: rgb(var(--color-blue), 1);
    text-align: end;
    width: 95%;
  }

  li {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .divButon {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: rgb(var(--color-blue), 1);
    color: rgb(var(--color-white), 1);
    font-size: 16px;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 30px;
    margin-top: 1%;
    margin-bottom: 1%;
  }
  @media (min-width: 481px) {
    height: 100%;
    width: 80%;
    margin-top: 0px;
    margin-bottom: 0%;
  }
  @media (min-width: 768px) {
    height: 100%;
    width: 70%;
  }
  @media (min-width: 1020px) {
    height: 100%;
    width: 50%;

    button {
      margin-top: 2%;
      margin-bottom: 2%;
    }
  }
`;
