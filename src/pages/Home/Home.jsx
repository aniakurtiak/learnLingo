import {
  BenefitsContainer,
  HomeContainer,
  ImageContainer,
  ImgGirlSvg,
  ImgMacYellSvg,
  InfoContainer,
  Lang,
  LinkStart,
  StartContainer,
  Text,
  Title,
} from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <InfoContainer>
        <StartContainer>
          <Title>
            Unlock your potential with the best <Lang>language</Lang> tutors
          </Title>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <LinkStart to='/teatchers'>Get started</LinkStart>
        </StartContainer>
        <ImageContainer>
          <ImgGirlSvg />
          <ImgMacYellSvg />
        </ImageContainer>
      </InfoContainer>
      <BenefitsContainer></BenefitsContainer>
    </HomeContainer>
  );
};

export default Home;
