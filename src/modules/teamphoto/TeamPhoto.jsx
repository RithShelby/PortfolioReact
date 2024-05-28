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
import Profile from "../../assets/image/profilePic.jpg";
import { dataPost, dataTeam } from "../helper/dataSkill";
import Currentdate from "../layoutt/CurrentDate/Currentdate";
const TeamPhoto = () => {
  const [isLike, setLike] = useState(false);
  const handleLike = () => {
    setLike(!isLike);
  };
  const toast = useToast();
  return (
    <div className="row m-auto d-flex ">
      <div className="col-lg-8 col-md-12 col-sm-12">
        {dataPost.map((post) => {
          return (
            <div className="">
              <Card maxW="100%" className="m-auto mb-4 rounded-4">
                <div className="d-flex justify-content-between p-3">
                  <div className="d-flex align-items-center ">
                    <img
                      src={Profile}
                      className="rounded-5"
                      style={{ width: "50px", height: "80%" }}
                      alt="Avatar"
                    />
                    <div className="lh-sm d-flex flex-column ms-2 mt-2">
                      <span className="fw-bold">John-Rith</span>
                      <span>
                        {" "}
                        <Currentdate />
                      </span>
                    </div>
                  </div>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BsThreeDotsVertical />}
                  />
                </div>
                <p className="px-2">{post.title}</p>
                <Image objectFit="cover" src={post.img} alt="Chakra UI" />
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
          );
        })}
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column ">
        {dataTeam.map((items) => {
          return (
            <div className="d-flex justify-content-end">
              <Card
                maxW={"100%"}
                style={{ width: "25rem" }}
                className="rounded-4 mb-4"
                direction={{ base: "column", sm: "col" }}
                overflow="hidden"
                variant="outline"
              >
                <img
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={items.image}
                />
                <Stack>
                  <CardBody>
                    <Heading size="md">{items.title}</Heading>
                    <Text py="">{items.desc}</Text>
                    <Button
                      className="text-uppercase  w-100"
                      variant="solid"
                      colorScheme="gray"
                    >
                      {items.detail}
                    </Button>
                  </CardBody>
                </Stack>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamPhoto;
