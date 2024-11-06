import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Col,
  Container,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Rating from "../Rating";

function ProductScreen({ params }) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/products/${id}`)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
      setProduct(data);
    }
    fetchProduct();
  }, []);

  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark- my-3">
          Go Back
        </Link>

        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.num_review} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Brand: {product.brand}</ListGroup.Item>
              <ListGroup.Item>Description: {product.info}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.stock > 0 ? "In Stock" : "Out of Stock"}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block btn-success"
                    disabled={product.stock == 0}
                    type="button"
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProductScreen;
