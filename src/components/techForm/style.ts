import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  margin-bottom: 20px;
  h4 {
    margin-bottom: 15px;
  }

  .row {
    height: 60px;
    display: flex;
    margin-bottom: 10px;

    .tech-name {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      select {
        width: 90%;
        border: none;
        border-bottom: 2px solid rgb(var(--color-blue), 1);
        background-color: transparent;
        color: rgb(var(--color-black), 1);
        font-size: 12px;
        height: 25px;
      }
    }

    .tech-time {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      input {
        width: 60px;
        margin-bottom: 0;
        border: none;
        border-bottom: 2px solid rgb(var(--color-blue), 1);
        background-color: transparent;
        color: rgb(var(--color-black), 1);
        font-size: 12px;
        height: 25px;
        text-align: center;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-between;

    .remove-tech-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: white;
      color: rgb(var(--color-grey-dark));
      width: 92px;
      height: 25px;
      margin-top: 10px;

      svg {
        height: 20px;
        min-width: 20px;
      }
      span {
        font-family: "Josephin Sans", sans-serif;
      }
    }

    .add-tech-btn {
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: white;
      color: rgb(var(--color-grey-dark));
      width: 92px;
      height: 25px;
      margin-top: 10px;
      svg {
        height: 20px;
        min-width: 20px;
      }
      span {
        font-family: "Josephin Sans", sans-serif;
      }
    }
  }
`;
