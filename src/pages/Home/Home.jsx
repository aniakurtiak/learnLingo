import { BenefitsContainer, HomeContainer, ImageContainer, InfoContainer, StartContainer } from "./Home.styled";

 const Home = () => {
    return (
        <HomeContainer>
            <InfoContainer>
                <StartContainer></StartContainer>
                <ImageContainer></ImageContainer>
            </InfoContainer>
            <BenefitsContainer></BenefitsContainer>
        </HomeContainer>
    )
}

export default Home;