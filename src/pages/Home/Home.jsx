import {
  BenefitsContainer,
  BenefitsItem,
  BenefitsList,
  BenefitsText,
  HomeContainer,
  ImageContainer,
  ImgGirlSvg,
  ImgMacYellSvg,
  InfoContainer,
  Lang,
  LinkStart,
  NewLine,
  Nubers,
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
          <LinkStart to="/teatchers">Get started</LinkStart>
        </StartContainer>
        <ImageContainer>
          <ImgGirlSvg />
          <ImgMacYellSvg />
        </ImageContainer>
      </InfoContainer>
      <BenefitsContainer>
        <BenefitsList>
          <BenefitsItem>
            <Nubers>32,000 +</Nubers>
            <BenefitsText>Experienced <NewLine>tutors</NewLine></BenefitsText>
          </BenefitsItem>
          <BenefitsItem>
            <Nubers>300,000 +</Nubers>
            <BenefitsText>5-star tutor <NewLine>reviews</NewLine></BenefitsText>
          </BenefitsItem>
          <BenefitsItem>
            <Nubers>120 +</Nubers>
            <BenefitsText>Subjects <NewLine>taught</NewLine></BenefitsText>
          </BenefitsItem>
          <BenefitsItem>
            <Nubers>200 +</Nubers>
            <BenefitsText>Tutor <NewLine>nationalities</NewLine></BenefitsText>
          </BenefitsItem>
        </BenefitsList>
      </BenefitsContainer>
    </HomeContainer>
  );
};

export default Home;
