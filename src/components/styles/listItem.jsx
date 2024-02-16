import styled from "styled-components";
const StyledList= styled.div`
display:flex;
justify-content:flex-start;
gap:2vw;
align-items:center;
border-bottom:1px solid black;
font-size:1rem;

.delete{
    font-size:2rem;
  }
  .delete:hover{
    font-weight: bolder;
  }
  .date {
    margin-left:auto;
  }
  .description{
    width:25vw;
    word-wrap:break-word;
    text-wrap:wrap;
  }
`

export default StyledList