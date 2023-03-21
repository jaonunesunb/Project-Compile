import styled from "styled-components";

export const ContainerCreateJob = styled.div`
  border-radius: 5px;
  background-color: rgb(var(--color-white), 1);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  margin-top: 10%;

  .btnClose {
    background-color: transparent;
    color: rgb(var(--color-blue), 1);
    text-align: end;
    width: 95%;
    border: none;
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

    p {
      color: rgb(var(--color-black), 1);
      font-size: 16px;
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
      align-items: center;
    }
    select:focus {
      outline: 0;
    }

    .inputTime {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;

      select {
        width: 150px;
        margin-top: 12px;
      }
      input {
        width: 70px;
        margin-left: 8px;
        margin-bottom: 12px;
      }
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
    margin-bottom: 3%;
  }

  .tech-name {
    select {
      margin-bottom: 8px;
    }
  }

  .tech-time {
    p {
      flex-wrap: wrap;
      margin: 0;
      font-size: 14px;
    }

    span {
      padding-bottom: 11px;
      input {
        background-color: azure;
        height: 23px;
        margin-bottom: 10px;
      }
    }
  }

  @media (min-width: 768px) {
    width: 60%;
    position: relative;
    top: -50px;
  }
  @media (min-width: 1020px) {
    height: 100%;
    width: 40%;
  }
`;
