import styled from "styled-components";

export const StyledCardDev = styled.li`
  /* width: 95%; */

  border-radius: 8px;

  @media (min-width: 440px) {
    width: 340px;

    .divButtonCardDev {
      display: flex;
      justify-content: center;
    }
  }

  padding: 0.5rem;
  background-color: rgb(var(--color-white), 1);

  .divTextDev {
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
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
