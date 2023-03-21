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
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow-y: auto;

    img {
      display: none;
    }

    .containerRegisterDev {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      justify-content: space-around;

      background-color: rgb(var(--color-white), 1);
      width: 90%;
      margin: 70px 0 20px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
      padding: 10px 0;

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        margin-left: 0px;
        display: flex;
        justify-content: space-around;

        p {
          margin-top: -10px;
          margin-bottom: 10px;
          color: red;
          font-size: 12px;
        }

        label {
          font-size: 14px;
        }
        input {
          margin-bottom: 15px;
          margin-top: 0;
          width: 260px;
          padding: 0;
        }
        button {
          background-color: rgb(var(--color-blue), 1);
          color: rgb(var(--color-white), 1);
          font-size: 16px;
          border: none;
          border-radius: 5px;
          width: 200px;
          /* height: 30px; */
          padding: 1rem;
          margin-top: 10px;
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
            width: 100px;
            margin: 0;
            margin-bottom: 20px;
          }
          p {
            font-size: 12px;
            color: red;
            margin-top: -10px;
            text-align: center;
          }
        }

        p {
          color: rgb(var(--color-black), 1);
          font-size: 14px;
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

        .teste {
          display: flex;
        }

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
      }
    }
  }

  @media (min-width: 481px) {
    main {
      /* height: 100%; */
      width: 100%;

      .containerRegisterDev {
        /* height: 95%; */
        margin-top: 70px;
        margin-bottom: 20px;
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
      min-height: 100vh;
      width: 50%;

      .containerRegisterDev {
        min-height: 95%;
        margin-top: 3%;
        margin-bottom: 3%;
      }
    }
  }

  @media (min-width: 768px) {
    main {
      img {
        height: 80px;
        display: block;
        margin-top: 100px;
      }

      .containerRegisterDev {
        form {
          /* min-height: 80%; */
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
`;
