import {
  BenefitsContainer,
  HomeContainer,
  ImageContainer,
  ImgGirlSvg,
  ImgMacYellSvg,
  InfoContainer,
  StartContainer,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <InfoContainer>
        <StartContainer></StartContainer>
        <ImageContainer>
          <ImgGirlSvg />
          <ImgMacYellSvg/>
        </ImageContainer>
      </InfoContainer>
      <BenefitsContainer></BenefitsContainer>
    </HomeContainer>
  );
};

export default Home;
