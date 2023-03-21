import styled from "styled-components";

export const StyleManageJob = styled.li`
  width: 340px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  h3 {
    text-align: start;
    width: 100%;
  }

  .divButtonCardDev {
    display: flex;
    justify-content: center;
  }

  padding: 0.5rem;
  background-color: rgb(var(--color-white), 1);

  .divTextDev {
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    li {
      display: block;

      p {
        font-weight: 700;
      }
    }
  }

  .divButtonCardDev {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    button {
      width: 154px;
      height: 29px;
    }

    .buttonNointerest {
      border: none;
      text-align: center;
    }
  }

  @media (max-width: 439px) {
    .divButtonCardDev {
      display: flex;
      justify-content: center;
    }
  }
`;
