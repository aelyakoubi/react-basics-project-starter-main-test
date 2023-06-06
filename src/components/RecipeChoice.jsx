import {
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Center
      gap="1"
      maxW="960px"
      mx="auto"
      sm="30em"
      md="48em"
      lg="62em"
      xl="80em"
      display="flexbox"
      lineHeight={1.9}
      align={"center"}
    >
      <Heading
        fontSize={"1xl"}
        color="gray.600"
        bg={"orange.100"}
        lineHeight={1.3}
      ></Heading>

      <Flex align={"center"}>
        <Button onClick={() => onClick()} variant="ghost">
          Click to Return
        </Button>
      </Flex>

      <Image
        src={recipe.image}
        w={300}
        h={300}
        borderRadius={"2xl"}
        alt={recipe.alt}
      ></Image>

      <Text>
        <Text fontSize="3xl">
          <div>{recipe.mealType} </div>
        </Text>

        <Text fontSize="6xl">
          <div>{recipe.label}</div>
        </Text>

        <div>{recipe.dishType}</div>

        <Text fontSize="3xl">Total cooking time:</Text>
        <div> {recipe.totalTime}</div>

        <div>
          <Text fontSize="3xl">Ingredients:</Text>
        </div>
        <div>{recipe.ingredientLines} </div>

        <Text fontSize="3xl">Health Labels:</Text>
        <Text w={"fit-content"} bg={"green.100"}>
          <div>{recipe.healthLabels}</div>
        </Text>

        <Text fontSize="3xl">Diet:</Text>
        <div> {recipe.dietLabels}</div>
        <Text fontSize="3xl">Cautions:</Text>

        <Text w={"fit-content"} bg={"red.100"}>
          <div> {recipe.cautions}</div>
        </Text>

        <Text fontSize="3xl">Servings:</Text>
        <div>{recipe.yield} </div>
      </Text>
      <Modal>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader> </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Text></Text>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
