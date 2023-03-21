import styled from "styled-components";

export const StyleLandindPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  header {
    display: flex;
    justify-content: center;
    background-color: #efefef;
    height: 30%;
    img {
      width: 60%;
      max-width: 400px;
    }
  }

  .containerLanding {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #3e4ab8;
    height: 100%;
  }
  .textLanding {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    /* text-align: center; */

    h1 {
      margin-top: 1rem;
      color: #efefef;
      margin-bottom: 20px; // 15%;
    }
    p {
      color: #efefef;
      max-width: 300px;
      margin-bottom: 20px; // 20%;
    }
  }
  .btnLanding {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      color: #3e4ab8;
      background-color: #d9d9d9;
      border: none;
      border-radius: 3px;
      width: 190px;
      min-height: 40px;
      font-size: 16px;
      padding: 1rem;
    }
    p {
      margin-top: 15px;
      margin-bottom: 15px;
      color: #efefef;
      font-size: 16px;
    }
  }

  .loginLanding {
    color: rgb(var(--color-white));
    margin-top: 1rem;
    margin-bottom: 1rem;
    a {
      color: rgb(var(--color-white));
    }
  }

  @media (min-width: 500px) {
    header {
      img {
        width: 40%;
      }
    }

    .textLanding {
      h1 {
        margin-top: 1rem;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    header {
      height: 100%;
      width: 50%;

      img {
        width: 75%;
      }
    }

    .containerLanding {
      height: 100%;
      width: 50%;
    }

    .textLanding {
      align-items: center;
      margin-left: 20px;
      h1 {
        margin-bottom: 20px;
        font-size: 45px;
        width: 100%;
        max-width: 300px;
      }
      p {
        font-size: 18px;
        width: 100%;
        max-width: 300px;
      }
    }

    .btnLanding {
      flex-direction: column;
      align-items: center;

      button {
        color: #3e4ab8;
        background-color: #d9d9d9;
        border: none;
        border-radius: 3px;
        width: 190px;
        min-height: 40px;
        font-size: 16px;
      }
      p {
        margin-top: 15px;
        margin-bottom: 15px;
        color: #efefef;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1020px) {
    .containerLanding {
      gap: 10%;
    }

    .textLanding {
      h1 {
        max-width: 100%;
      }
    }

    .btnLanding {
      /* margin-top: 20%; */
      flex-direction: row;
      align-items: center;

      button {
        color: #3e4ab8;
        background-color: #d9d9d9;
        border: none;
        border-radius: 3px;
        width: 190px;
        height: 70px;
        font-size: 18px;
      }
      p {
        margin-left: 15px;
        margin-right: 15px;
        font-size: 20px;
      }
    }
  }
`;
