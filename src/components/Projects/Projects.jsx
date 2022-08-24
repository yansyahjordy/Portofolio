import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Projects() {
  const { ref, inView: visible } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (visible) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!visible) {
      animation.start({ x: "100vw" });
    }
  }, [visible]);

  return (
    <section ref={ref}>
      <motion.div
        className="container py-5 my-5 text-center projects"
        animate={animation}
      >
        <h1>Projects</h1>
        <Carousel className="mt-5">
          <Carousel.Item>
            <div className="row gy-5">
              <div className="col-12 col-lg-4">
                <Card style={{ backgoundColor: "black" }}>
                  <Card.Img variant="top" src="./img/projectNews.png" />
                  <Card.Body>
                    <Card.Text>Portal News</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-lg-4">
                <Card>
                  <Card.Img variant="top" src="./img/projectFood.jpg" />
                  <Card.Body>
                    <Card.Text>Food App</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-lg-4">
                <Card>
                  <Card.Img variant="top" src="./img/projectPokemon.jpg" />
                  <Card.Body>
                    <Card.Text>Pokedex App</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row gy-5">
              <div className="col-12 col-lg-4">
                <Card>
                  <Card.Img variant="top" src="./img/projectCrypto.jpg" />
                  <Card.Body>
                    <Card.Text>Crypto App</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-lg-4">
                <Card>
                  <Card.Img variant="top" src="./img/projectMetamask.png" />
                  <Card.Body>
                    <Card.Text>Metamask App</Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-12 col-lg-4">
                <a
                  href="https://codepen.io/yansyahjordy/pen/YzeWwLQ"
                  target="_blank"
                >
                  <Card>
                    <Card.Img variant="top" src="./img/projectPomodoro.png" />
                    <Card.Body>
                      <Card.Text>Pomodoro App</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </motion.div>
    </section>
  );
}
