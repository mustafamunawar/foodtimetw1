import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UList from "./UList";

// function SkillCard({ title, imgSource, imgPosition, text, buttonVariant, buttonText }) {
function SkillCard(props) {
  const { title, imgSrc, imgPosition, text, buttonVariant, buttonText } =
    props.skillData;
  return (
    <Card
      className="d-flex justify-content-around align-items-start"
      style={{ width: "20rem", height: "19rem", backgroundColor: "#FFF" }}
    >
      <Card.Img
        variant={imgPosition}
        src={imgSrc}
        style={{ height: "60px", width: "60px", margin: "20px 0px -80px 20px" }}
      />
      <Card.Body className="d-flex flex-column justify-content-around align-items-center">
        <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
        {/* <Card.Text> */}
        <UList itemsArray={text} />
        {/* </Card.Text> */}
        {/* <Button variant={buttonVariant}>{buttonText}</Button> */}
      </Card.Body>
    </Card>
  );
}

export default SkillCard;
