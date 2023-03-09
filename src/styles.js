import styled from "@emotion/styled";

export const MainWrapper = styled.div`  
  width: 75%;
  margin: auto;
  height: 80vh;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  
`;

export const SubContainer = styled.div`
  height: 90%;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  padding-bottom: 0px;
  border-radius: 7px;
`;

export const BeforeData = styled.div`
  width: 300px;
  height: 300px;
`;  

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 95%;
  background: white;
  border-radius: 15px 15px 0 0;
  justify-content: space-between;
  align-items: center;
`;



export const HeaderWrapper = styled.div`  
  text-align: center;
  background-color: #00BFFF;
  padding-bottom: 30px;
`;

export const ContainerWrapper = styled.section`  
//   text-align: center;
`;

export const InputWrapper = styled.input`  
  height: 20px;
  border-radius: 10px;
`;

export const TitleWrapper = styled.h1`  
  font-size: 60px;
  text-align: center;
  color: gray;
`;

export const TextWrapper = styled.h2`
  width: 80%;
  height: auto;
  margin: 0 auto;
  font-size: 20px;
  color: #127abb;
  //background-color: black;
  //text-align: left;
  font-family: 'Montserrat';
  // position: relative;
  // top: 30px;
`;

export const ImageWrapper = styled.img`
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 15px 15px 0 0;
`;

export const TempWrapper = styled.div`
  font-size: 20px;
  color: black;
  // position: relative;
  // padding-left: 0px; 
  // left: -40px;
  // top: -20px;
`;
export const CondWrapper = styled.h2`
  font-size: 20px;
  color: gray;
  // position: relative;
  // top: -10px;
  // right: 120px;
  // padding-left: 0px;
`;

export const IconWrapper = styled.img`
  
  width: 5vw;
  height: auto;
  
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  background: #C2C2CB;
`;

export const DescriptionText = styled.p`
  font-size: 18px;
  color: #4B4B4B;
  position: relative;
  top: -60px;
  padding: 10px 30px 0 30px;
  font-family: 'Montserrat';
  font-weight: 300;
`;