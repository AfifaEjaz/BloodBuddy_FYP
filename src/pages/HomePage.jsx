import React from "react";
import ColorModeSwitch from "../components/ColorModeSwitch";
import { Center, Flex, Heading, Text, Image } from "@chakra-ui/react";
import aboutUs from "../assets/aboutUs.svg";

export const HomePage = () => {
  return (
    <>
      <Heading as="h1" size="xl" mt={10} textAlign="center">
        About Us
      </Heading>

      <Flex gap={10} mx={10} display={{base : "block", md: "block", lg : "flex"}}>
        <Text alignSelf='center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed laudantium explicabo veritatis facere libero porro asperiores iusto.
          Sed dolorum excepturi iure amet provident est quia reprehenderit
          officiis hic nostrum. Adipisci corporis magni tempore ipsum ex, aperiam voluptatibus accusamus ratione <br /> amet praesentium
          architecto iste deserunt non, debitis dignissimos aspernatur soluta, quaerat eveniet sit. Ab, voluptates. Repellendus cum vel quas. Sit.
          Repellat officiis tem? Nemo repellat molestias nobis temporibus delectus accusamus placeat eligendi inventore, soluta minima,
          praesentium harum necessitatibus ea itaque quaerat omnis? Numquam
          vitae dignissimos maiores facere quam, incidunt non repudiandae neque. Quisquam. Consectetur <br /> maxime quis eos dignissimos nam
          architecto, numquam sed odit iste eius excepturi harum quod id?
          Accusantium aspernatur quam voluptatibus nesciunt culpa natus
          explicabo, eaque nostrum rem cupiditate asperiores unde! Ratione
          voluptatum fuga blanditiis, Laudantium tempore neque nulla ratione
          suscipit earum ea quisquam quas maxime! Non atque sapiente laboriosam
          minus, sint aspernatur vitae repellat placeat obcaecati. Assumenda ea
          facilis inventore.
        </Text>

        <Image boxSize={{base : "300px", md: "400px", lg : "450px"}} mx="auto" src={aboutUs} alt="about-img" />
      </Flex>
    </>
  );
};
