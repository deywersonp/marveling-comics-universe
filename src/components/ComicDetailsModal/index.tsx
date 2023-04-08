import { MarvelComicProps } from "@/types/marvelComic";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import { Thumbnail } from "../Thumbnail";
import { ComicInfo } from "./ComicInfo";

import { HiShoppingBag } from 'react-icons/hi';

interface ComicDetailsModalProps {
  data: MarvelComicProps | null;
  isOpen: boolean;
  onClose: () => void;
};

export const ComicDetailsModal = ({ data, isOpen, onClose }: ComicDetailsModalProps) => {
  const releaseDate = data?.dates?.find(date => date.type === 'onsaleDate');

  return (
    <Modal isOpen={isOpen} size={["xs", "xl"]} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color="gray.400" />
        <ModalBody>
          <Grid
            p={4}
            w="100%"
            gap={4}
            templateColumns={['1fr', null, '1fr 2fr']}
          >
            <GridItem w={['50%', null, '100%']} mx="auto">
              <Thumbnail
                src={`${data?.thumbnail.path}.${data?.thumbnail.extension}`}
                alt={`${data?.title} Thumbnail`}
              />
            </GridItem>

            <GridItem>
              <Box mb={2}>
                <Text as="b" color="gray.800" style={{ marginBottom: 16 }}>
                  Título: {data?.title}
                </Text>
              </Box>

              <Flex gap={1} flexDirection="column">
                <ComicInfo label="Número de Páginas" content={data?.pageCount} />
                {!!data?.description && <ComicInfo label="Descrição" content={data?.description} />}
                {!!releaseDate && (
                  <ComicInfo
                    label="Data de Lançamento"
                    content={new
                      Date(releaseDate.date).toLocaleDateString()}
                  />
                )}

                <Box mt={4} ml="auto" mr={["auto", "auto", "unset"]}>
                  <Button colorScheme="red" rightIcon={<HiShoppingBag />}>
                    Adicionar a Sacola
                  </Button>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
};