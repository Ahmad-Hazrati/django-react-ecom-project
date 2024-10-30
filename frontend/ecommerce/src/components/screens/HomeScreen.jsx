import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container>
      <br />
      <h1>Products</h1>
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Card className="my-3 p-3 rounded">
            <img src={product.image} alt={product.name} />
            </Card>
            
            <h3>{product.name}</h3>
            <h6>{product.category}</h6>
            <p>{product.price}</p>
            <p>{product.info}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
