import { useContext } from "react";
import { Box, Card, Flex, Heading, Image, Tag, Text } from "@chakra-ui/react";
import { PortafolioMainResponse } from "@/domain/models/portafolioMain/portafolioMain";
import { DataContext } from "../PortafolioMain";
import styles from "./styles.module.scss";

const Portfolio = () => {
  const dataJson: PortafolioMainResponse | null = useContext(DataContext);

  const getPortafolio = dataJson?.data.find(item => item.key === "portfolio") || null;

  const limitArrProjects = getPortafolio?.projects?.slice(0, 2) || [];
  const limitArrProjects2 = getPortafolio?.projects?.slice(2, 4) || [];

  return (
    <Flex gapX={8} className={styles.portfolioContainer} id="portfolio">
      <Box className={styles.boxItem}>
        <Box className={styles.boxHeader}>
            <Text fontSize={20} fontWeight="bold">{getPortafolio?.section}</Text>
            <Heading as="h2" fontSize={52} mt={6}>{getPortafolio?.title}</Heading>
        </Box>
        <Flex flexDirection={'column'} gapY={8}>
          {
            limitArrProjects.map((item, index) => (
              <Card.Root key={index} maxW="lg" overflow="hidden" variant={'subtle'}>
                <Card.Body gap="2" className={styles.cardHeader}>
                  <Flex gapX={4}>
                  <Tag.Root size={'xl'} rounded="xl" variant="solid" p={'4'}>
                    <Tag.Label className={styles.tooltipCardHeader}>React JS</Tag.Label>
                  </Tag.Root>
                  <Tag.Root size={'xl'} rounded="xl" variant="solid" p={'4'}>
                    <Tag.Label className={styles.tooltipCardHeader}>{item.name}</Tag.Label>
                  </Tag.Root>
                </Flex>

                  <Text textStyle="2xl" fontWeight="bold" letterSpacing="tight" mt="2">
                    {item.description}
                  </Text>
                </Card.Body>
                <Image
                  src={item.image}
                  alt={item.name}
                />
              </Card.Root>
            ))
          }
        </Flex>
      </Box>

      <Box className={styles.boxItem}>
      <Flex flexDirection={'column'} gapY={8}>
        {
          limitArrProjects2.map((item, index) => (
            <Card.Root key={index} maxW="lg" overflow="hidden" variant={'subtle'}>
              <Card.Body gap="2" className={styles.cardHeader}>
                <Flex gapX={4}>
                <Tag.Root size={'xl'} rounded="xl" variant="solid" p={'4'}>
                  <Tag.Label className={styles.tooltipCardHeader}>React JS</Tag.Label>
                </Tag.Root>
                <Tag.Root size={'xl'} rounded="xl" variant="solid" p={'4'}>
                  <Tag.Label className={styles.tooltipCardHeader}>{item.name}</Tag.Label>
                </Tag.Root>
              </Flex>

                <Text textStyle="2xl" fontWeight="bold" letterSpacing="tight" mt="2">
                  {item.description}
                </Text>
              </Card.Body>
              <Image
                src={item.image}
                alt={item.name}
              />
            </Card.Root>
          ))
          }
        </Flex>
      </Box>
    </Flex>
  );
}

export default Portfolio;