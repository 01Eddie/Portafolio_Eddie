import { useContext } from "react";
import { Box, Flex, Heading, Image, Separator, Text } from "@chakra-ui/react";
import styles from './styles.module.scss';
import { DataContext } from "../PortafolioMain";
import { PortafolioMainResponse } from "@/domain/models/portafolioMain/portafolioMain";

const Presentation = () => {
  const dataJson: PortafolioMainResponse | null = useContext(DataContext);

  return (
    <Flex gapX={8} wrap={{ base: "wrap", md: "nowrap" }} className={styles.presentationContainer}>
    <div>
      <Heading as="h2" fontSize={75}>{dataJson?.data[0].title || `Hola,<br /> Soy Eddie HG!<br /> Un web developer`}</Heading>
      <Text className={styles.detailsMe}>{dataJson?.data[0].description || 'Desarrollador web apasionado por crear interfaces intuitivas y atractivas. Me destaco por mi enfoque colaborativo, comunicación efectiva y capacidad proactiva para resolver problemas. Disfruto enfrentar desafíos tecnológicos con soluciones creativas y contribuir a proyectos que generen un impacto positivo en los usuarios. Estoy abierto a nuevas oportunidades e interesado en seguir creciendo en el dinámico mundo del desarrollo web.'}</Text>
      <Separator _dark={{ bg: "white", height: 0.5  }} />
      <Flex gapX={5}>
        {
          dataJson?.data[0].detail?.map((item, index) => (
            <Box key={index} className={styles.boxPresentation}>
              <Heading as="h2" fontSize={72}>{item.number}</Heading>
              <Heading as="h2" fontSize={72} color='blue.800' _dark={{ color: 'purple.700' }} m={1}>{item.sign}</Heading>
              <Text fontSize={20} className={styles.textParagraph}>{item.description}</Text>
            </Box>
          ))
        }
      </Flex>
    </div>
    <Image
      className={styles.imgPresentation}
      src={dataJson?.data[0].image}
      alt="Eddie HG"
    />
  </Flex>
  );
}

export default Presentation;