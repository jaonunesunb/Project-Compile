import styled from "styled-components";

export const StyleMainPageCompany = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;

  background-color: rgb(var(--color-grey), 1);
  color: rgb(var(--color-black), 1);

  span {
    font-weight: 700;
    color: rgb(var(--color-blue), 1);
  }

  button {
    border-radius: 0px;
  }

  h2 {
    text-align: center;
    margin-top: 15px;
  }

  .divHeader {
    width: 100%;
    min-height: 40px;
    gap: 20px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(var(--color-white), 1);

    padding: 1rem;
  }

  .divSubHeaderTop {
    width: 80%;
    margin-top: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoImg {
      width: 65px;
      height: 29.47px;
    }

    button {
      background-color: transparent;
      border: none;
      color: rgb(var(--color-blue), 1);
    }
  }

  .divTitleForm {
    width: 80%;
    form {
      margin-bottom: 7.5px;
      display: flex;
      justify-content: center;
    }

    h3 {
      text-align: center;
      padding-top: 12px;
      margin-bottom: 12px;
    }
  }

  .divSubHeaderBotton {
    width: 100%;

    padding-bottom: 5px;
    gap: 5px;

    display: flex;
    justify-content: center;

    background-color: rgb(var(--color-white), 1);

    .groupButton {
      width: 80%;
      display: flex;
      justify-content: center;
      gap: 15px;

      button {
        height: 35px;
      }
    }

    .buttonEditProfiline {
      background-color: rgb(var(--color-blue));
    }

    .buttonLogout {
      color: rgb(var(--color-black), 1);
    }

    button {
      color: rgb(var(--color-white), 1);
      background-color: rgb(var(--color-grey), 1);
      border: none;

      width: 100px;
      height: 27px;
    }
  }

  .devList {
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 3px;
    }

    .divTextDev {
      p {
        width: 100%;
      }
      width: 100%;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgCompany {
    background-color: rgb(var(--color-grey-dark), 1);
    border-radius: 100%;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }

  .divMainTop {
    width: 80%;
    margin: 25px 0px 52px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .SubDivMainTop {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7.5px;

      figure {
        img {
          width: 100%;
          max-width: 120px;
        }
      }

      h4 {
        font-weight: 500;
      }

      h3 {
        text-align: center;
      }

      p {
        color: rgb(var(--color-grey-dark));
        font-weight: 500;
        font-size: 14px;
      }

      ul {
        width: 100%;
        max-width: 150px;
      }
    }

    ul {
      background-color: transparent;
      margin: 0;
    }

    button {
      max-width: 153.9px;
      height: 29.9px;
    }

    h3 {
      margin: 5px 0px;
      width: 100%;
    }
  }

  .divCard {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ul {
      width: 80%;
      min-height: 200px;
      display: flex;
      flex-wrap: wrap;
      gap: 11px;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  @media (min-width: 372px) {
    ul {
      justify-content: center;
    }
  }

  @media (min-width: 375px) {
    ul {
      justify-content: center;
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }

  @media (min-width: 728px) {
    .divCard {
      width: 100%;
      display: flex;
    }

    ul {
      width: 80%;
      flex-wrap: wrap;
      background-color: rgb(var(--color-blue), 1);
    }

    .divTitleForm {
      width: 80%;
      form {
        margin-bottom: 7.5px;
        display: flex;
        justify-content: center;
      }

      h3 {
        text-align: center;
        margin: 0;
        padding-top: 12px;
        color: rgb(var(--color-white), 1);
        background-color: rgb(var(--color-blue), 1);
      }
    }
  }

  @media (min-width: 1024px) {
    .divMainTop {
      width: 25%;
    }

    .divSubHeaderTop {
      width: 85%;
    }

    .container {
      width: 100%;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 25px;
    }

    .logoImg {
      width: 35px;
      height: 35px;
      margin-left: 4%;
    }

    .imgCompany {
      display: flex;
    }

    form {
      margin: 0%;
      width: auto;
      height: 34px;

      input {
        height: 34px;
      }
      button {
        height: 34px;
      }
    }

    .divCard {
      margin: 0;
      padding-top: 25px;
      gap: 0;
    }

    .divProfile {
      display: none;
    }

    .divMainTop {
      margin: 25px 0px 0px 6.5%;
    }

    ul {
      margin: 0 15px 15px 15px;
      align-content: flex-start;

      padding: 25px 0;
      gap: 5px;
    }

    li {
      width: 340px;
    }
  }

  @media (min-width: 1290px) {
    img {
      margin-left: 2%;
    }
  }
`;
