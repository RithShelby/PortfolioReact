import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import mainPro from "../../assets/image/TeamSide1.jpg";
import Profile from "../../assets/image/RithSteav-TK.jpg";
import { dataTeam } from "../helper/dataSkill";
const TeamPhoto = () => {
  const [isLike, setLike] = useState(false);
  const handleLike = () => {
    setLike(!isLike);
  };
  const toast = useToast();
  return (
    <div className="row my-5 justify-content-center d-flex m-auto">
      <div className="col-lg-5 col-md-12 m-auto">
        <Card maxW="lg" className="m-auto rounded-4">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <img
                  style={{ width: "60px" }}
                  src={Profile}
                  className="border border-0 rounded-5 p-2"
                  alt="Avatar"
                />

                <Box>
                  <Heading size="sm">John_Rith</Heading>
                  <Text>Front end, Lover</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              deserunt culpa. Nobis dolor consectetur et accusantium?
              Consequuntur inventore impedit aliquam soluta expedita, est, dolor
              laudantium tempora atque repudiandae vero molestias.
            </Text>
          </CardBody>
          <Image objectFit="cover" src={mainPro} alt="Chakra UI" />
          <div className="d-flex justify-content-evenly align-items-center my-3">
            <div
              onClick={handleLike}
              className={`${
                isLike
                  ? "icon-hover d-flex fs-6 m-auto text-primary rounded-5"
                  : "icon-hover d-flex fs-6 m-auto text-dark rounded-5"
              }`}
            >
              <BiLike className="m-auto me-2 fs-5" />
              <button>Like</button>
            </div>
            <div className="d-flex icon-hover fs-6 m-auto">
              {" "}
              <FaRegComment className="m-auto me-2 fs-5" />
              <button>Comment</button>
            </div>
            <div
              className="d-flex icon-hover fs-6 m-auto"
              onClick={() =>
                toast({
                  title: "Thank you for sharing !",
                  description: "appreciate it 😍",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              <PiShareFat className="m-auto me-2 fs-5" />
              <button>Share</button>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-lg-5 col-md-9 ">
        {dataTeam.map((items) => {
          return (
            <Card
              style={{ width: "100%" }}
              className="col-sm-12 my-3 rounded-4 "
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={items.image}
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{items.title}</Heading>

                  <Text py="2">{items.desc}</Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    {items.detail}
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPhoto;
