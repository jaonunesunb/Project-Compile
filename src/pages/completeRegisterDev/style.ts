import styled from "styled-components";

export const StyleCompleteRegisterDev = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  header {
    background-color: rgb(var(--color-blue), 1);
    color: rgb(var(--color-white), 1);
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    height: 18%;

    h1 {
      margin-left: 12%;
      font-size: 24px;
    }
    p {
      margin-left: 12%;
      font-size: 14px;
    }
  }

  main {
    background-color: rgb(var(--color-grey), 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-y: auto;

    img {
      display: none;
    }

    .containerRegisterDev {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: rgb(var(--color-white), 1);
      width: 90%;
      margin-top: 0px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
      padding: 15px 0;
      margin-top: 3%;
      margin-bottom: 3%;

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        margin-left: 0px;

        .error {
          color: red;
          font-size: 12px;
          margin-top: -10px;
          margin-bottom: 10px;
        }

        h3 {
          margin: 5px 0 15px;
        }

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
          margin-top: 10px;
          label {
            margin-right: 5px;
          }
          select {
            width: 200px;
            margin: 0;
            margin-bottom: 20px;
          }
          .error {
            font-size: 12px;
            color: red;
            margin-top: -10px;
            text-align: center;
          }
        }

        p {
          color: rgb(var(--color-black), 1);
          font-size: 16px;
          margin-top: 5px;
          margin-bottom: 5px;
        }

        .error {
          font-size: 12px;
          color: red;
          text-align: center;
          margin-top: -10px;
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

        .error {
          font-size: 12px;
          color: red;
          max-width: 260px;
        }

        p {
          font-size: 16px;
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
        margin-top: 5%;
      }
    }
  }

  @media (min-width: 481px) {
    main {
      .containerRegisterDev {
        margin-top: 3%;
        margin-bottom: 3%;
      }
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;

    header {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      width: 50%;
      height: 100%;

      h1 {
        margin-top: 30%;
        margin-left: 8%;
        margin-bottom: 20%;
        font-size: 30px;
      }
      p {
        margin-left: 8%;
        margin-right: 2%;
        font-size: 18px;
      }
    }

    main {
      width: 50%;

      .containerRegisterDev {
        margin-top: 3%;
        margin-bottom: 3%;
      }
    }
  }

  @media (min-width: 768px) {
    main {
      img {
        display: block;
        height: 100px;
        margin-top: 20px;
      }
    }
  }
`;
