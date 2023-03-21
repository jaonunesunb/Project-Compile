import styled from "styled-components";

export const StyledCardJob = styled.li`
  display: flex;
  flex-direction: column;

  p {
    width: 100%;
  }

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
    width: 100%;
    text-align: left;
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
