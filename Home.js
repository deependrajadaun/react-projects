import React from "react";
import { Jumbotron,Container,Button } from "reactstrap";


const Home = () => {
    return  <div>
        <Jumbotron className="text-center">
            <h1 > Learncodewith durgesh</h1>
            <p>this is develped by learncode durgesh for learning purpose</p>
            <Container >
                <Button color="primary">start using</Button>
            </Container>
        </Jumbotron>
    </div>;
};

export default Home;