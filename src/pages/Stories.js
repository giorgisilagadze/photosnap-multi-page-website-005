import React from "react";
import {
  Container,
  Title,
  TextContainer,
  Text,
  Invite,
  IconWrapper,
  Icon,
  ImgWrapper,
  Image
} from "../styled-components/PhotoStoryStyled";

export default function Stories(props) {
  return (
    <>
      <Container bg='./assets/stories/mobile/moon-of-appalacia.jpg' >
        <ImgWrapper >
          <Image src={props.images[3].path} alt={props.images[3].alt } className="noneDiv"/>
        </ImgWrapper>

        <TextContainer bgColor="black" transparentColor='transparent'>
          <Title>{props.images[3].title}</Title>
          <Text>{props.images[3].text}</Text>
          <IconWrapper>
            <Invite>{props.images[3].invite}</Invite>
            <Icon src={props.images[3].icon} style={{filter: 'invert(98%)brightness(118%) contrast(100%)'}} />
          </IconWrapper>
        </TextContainer>
      </Container>
    </>
  );
}
