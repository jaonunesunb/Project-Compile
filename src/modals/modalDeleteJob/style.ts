import styled from "styled-components";

export const ContainerDeleteJob = styled.div`

background-color: rgb(var(--color-white), 1);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90% ;
height: 100%;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
margin-top: 60%;

.text{
    margin: 15px;
    
    h1{
        text-align: start;
        color: rgb(var(--color-blue), 1);
        font-size: 20px;
        margin-bottom: 10px;
    }
    p{
        font-size: 15px;
    }
}
.btn{
    margin-bottom: 15px;
    display: flex;

    button{
    border: none;
    border-radius: 5px;
    width: 120px;
    height: 20px;
    
    }
    .yes{
        color: rgb(var(--color-white), 1);
        background-color: rgb(var(--color-blue), 1);
        margin-right: 18px;
    }
    .cancel{
        color: rgb(var(--color-blue), 1);
    }
}

@media (min-width: 400px) {
    margin-top: 30%;
    width: 80%;

    p{
        text-align: center;
    }
    .btn{
        button{
    width: 145px;
    }
    }
  }
  @media (min-width: 765px) {
    margin-top: 30%;
    width: 60%;
  }
  @media (min-width: 765px) {
    margin-top: 20%;
    width: 50%;
  }
  @media (min-width: 1020px) {
    margin-top: 15%;
    width: 40%;
  }
  @media (min-width: 1500px) {
    margin-top: 10%;
    width: 30%;
  }

`;
