import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgb(var(--color-white), 1);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);

  .btnClose {
    background-color: transparent;
    color: rgb(var(--color-blue), 1);
    text-align: end;
    width: 95%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      font-size: 16px;
    }
    input {
      margin-bottom: 15px;
      margin-top: 0;
      width: 260px;
      padding: 0;
    }

    button {
      margin: 20px 0;
    }
  }

  .select {
    display: flex;
    flex-direction: column;

    .selectAddress {
      margin-bottom: 5px;
      label {
        margin-right: 5px;
      }
      select {
        width: 200px;
        margin: 0;
        margin-bottom: 5px;
      }
    }

    p {
      color: rgb(var(--color-black), 1);
      font-size: 18px;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    select {
      border: none;
      border-bottom: 2px solid rgb(var(--color-blue), 1);
      background-color: transparent;
      color: rgb(var(--color-black), 1);
      font-size: 12px;
      margin-bottom: 12px;
      width: 260px;
      text-align: center;
    }
    select:focus {
      outline: 0;
    }
  }
  .salaryRange {
    display: flex;
    flex-direction: column;

    p {
      font-size: 18px;
      color: rgb(var(--color-black), 1);
      margin-bottom: 10px;
    }

    input {
      margin-top: 5px;
      border: none;
      border-bottom: 2px solid rgb(var(--color-blue), 1);
      background-color: transparent;
      color: rgb(var(--color-black), 1);
      font-size: 16px;
      margin: 0;
      width: 72px;
    }
    input:focus {
      outline: 0;
    }
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
