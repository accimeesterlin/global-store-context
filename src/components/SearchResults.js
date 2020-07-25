import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSearchContext } from "../utils/globalState"

import { isEmpty } from "lodash";

function SearchResults() {
  const [state, dispatch] = useSearchContext();
  const arr = state.users;

  if (isEmpty(arr)) return <p>Array is empty!!</p>;

  // JSX
  return (
    <Row>
      {arr.map((item, index) => (
        <Col md={4} sm={12}>
          <Card bg="light" style={{ width: "18rem" }} className="mb-2">
            <Card.Header>{ item.name }</Card.Header>
            <Card.Body>
              <Card.Title> { item.username } </Card.Title>
              <Card.Text>
                { item.company.bs }
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default SearchResults;
