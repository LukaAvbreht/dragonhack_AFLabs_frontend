import React from "react";

// Bootstrap
import {Container, Row, Col} from "react-bootstrap";

// AF stuff
import AccidentFrequencyGraph from "../../Components/Graphs/AccidentFrequency";

function StatistikaNesrec() {
    return (

    <Container fluid="xl" >
        <Row>
            <Col sm={8}>
                <div>
                    <AccidentFrequencyGraph />
                </div>
            </Col>
            <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
        </Row>
        <Row>
            lots of data
        </Row>

        <Row>
            L
            Pellentesque habitant morbi tristique senectus et netus et. Tristique nulla aliquet enim tortor at auctor urna nunc id. Risus nec feugiat in fermentum posuere urna nec. Risus sed vulputate odio ut enim. Senectus et netus et malesuada fames. Tortor id aliquet lectus proin nibh nisl. Morbi enim nunc faucibus a. Sed risus pretium quam vulputate dignissim suspendisse in est. Sed risus pretium quam vulputate dignissim suspendisse in est. Venenatis lectus magna fringilla urna. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Tristique risus nec feugiat in. Et netus et malesuada fames ac. Erat nam at lectus urna. Maecenas accumsan lacus vel facilisis volutpat est velit.

            Etiam erat velit scelerisque in dictum non. Sit amet est placerat in egestas erat imperdiet. Adipiscing bibendum est ultricies integer quis auctor. So
            t scelerisque in dictum non. Sit amet est placerat in egestas erat imperdiet. Adipiscing bibendum est ultricies integer quis auctor. Sodales ut etiam sit amet nisl. Sed velit dignissim sodales ut eu sem integer. Turpis massa sed elementum tempus egestas sed. Risus at ultrices mi tempus imperdiet nulla. Ultrices mi tempus imperdiet nulla. Diam quis enim lobortis scelerisque fermentum. Enim sit amet venenatis urna cursus. Convallis tellus id interdum velit laoreet id donec. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Enim nec dui nunc mattis enim ut tellus. Erat velit scelerisque in dictum non consectetur a erat.
        </Row>
    </Container>

    );
}

export default StatistikaNesrec;