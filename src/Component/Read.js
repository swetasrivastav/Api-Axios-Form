import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <button onClick={toggleReadMore}>Readmore</button>
      {/* <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span> */}
    </p>
  );
};

const Read = () => {
  return (
    <Container maxW="container.lg" m={10} p={5}>
      <h1>
        <strong>Welcome to The Learning Network</strong>
      </h1>
      <br />
      <h2>
        <ReadMore>
          Here’s quick guide on how to use our site. The Learning Corner
          publishes regular resources for aspirants preparing for competitive
          exams - Explainer sections, Op-ed pieces, interactive games for
          improving vocabulary and grammar and daily quiz to test current affair
          knowledge. All of our resources are free. You just have to register to
          use our site. We'd love to hear more about you and how you use our
          site. If you want to join our community of experts and keep up with
          what's new, bookmark our home page, follow us on Facebook or Twitter.
          Any questions, concerns or suggestions....
        </ReadMore>
      </h2>
    </Container>
  );
};

export default Read;
