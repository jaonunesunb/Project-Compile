import styled from "styled-components";

export const ContainerEditCompany = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: antiquewhite;
  background-color: rgb(var(--color-white), 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  padding-bottom: 15px;
  margin: 25vh 0px;
  max-width: 691px;

  .btnClose {
    background-color: transparent;
    color: rgb(var(--color-blue), 1);
    text-align: end;
    width: 95%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      font-size: 16px;
    }
    input {
      margin-bottom: 15px;
      margin-top: 0;
      width: 260px;
      padding: 0;
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
    }

    input {
      margin-top: 5px;
      border: none;
      border-bottom: 2px solid rgb(var(--color-blue), 1);
      background-color: transparent;
      color: rgb(var(--color-black), 1);
      font-size: 16px;
      margin: 0;
      width: 60px;
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
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1020px) {
    width: 40%;
  }
  @media (min-width: 1400px) {
    width: 25%;
  }
`;
