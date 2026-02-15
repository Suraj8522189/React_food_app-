import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../component/card";
import { Link } from "react-router-dom";

// Mock Data Cards
const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Cheese burst",
    paragraph: "A cheese pizza is a classic, foundational pizza consisting of a crust base, tomato sauce, and mozzarella cheese",
    rating: 5,
    price: 199,
  },
  {
    id: "0002",
    image: Image2,
    title: "Pepperoni Pizza",
    paragraph: "Pepperoni pizza is an American-style pizza topped with tomato sauce, mozzarella cheese",
    rating: 4.5,
    price: 99,
  },
  {
    id: "0003",
    image: Image3,
    title: "Mozzarella Pizza",
    paragraph: "Pizza mozzarella is a low-moisture, firm, and stretchy variety of pasta filata (spun-curd) cheese",
    rating: 4,
    price: 59,
  },
  {
    id: "0004",
    image: Image4,
    title: "Margherita Pizza",
    paragraph: "Margherita pizza is a classic Neapolitan Italian pizza topped with tomato sauce, fresh mozzarella, fresh basil",
    rating: 3.5,
    price: 299,
  },
  {
    id: "0005",
    image: Image5,
    title: "Paneer Pizza",
    paragraph: "It has toppings of Paneer (Indian cottage cheese) and mixed veggies on a pizza",
    rating: 3.0,
    price: 299,
  },
  {
    id: "0006",
    image: Image6,
    title: "Chicken Pizza",
    paragraph: "Chicken pizza is a popular, savory dish featuring a pizza crust topped with tomato or specialized sauces",
    rating: 3,
    price: 179,
  },
  {
    id: "0007",
    image: Image7,
    title: "Veggie Pizza",
    paragraph: "A vegetarian pizza is a pizza that contains no meat, poultry, or fish, but typically includes cheese, tomato sauce",
    rating: 2.5,
    price: 99,
  },
  {
    id: "0008",
    image: Image8,
    title: "Mushroom Pizza",
    paragraph: "A mushroom pizza, or funghi pizza, is a popular vegetarian pizza featuring fresh or sautéed mushrooms",
    rating: 2.0,
    price: 159,
  },
  // Add more mock data objects as needed
];

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY PIZZA</h2>
            <p className="para">
              Pizza a augue flavor, crust neque purus cheese ipsum topping undo, rich sauce libero taste, blandit a fresh ingredients varius magna.
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>Classic Burger</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
