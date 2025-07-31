import { Avatar, Box, Card, Heading, Stack, Text } from "@chakra-ui/react";
import styles from './styles.module.scss';
import { DataContext } from "../PortafolioMain";
import { useContext } from "react";
import { PortafolioMainResponse } from "@/domain/models/portafolioMain/portafolioMain";

const Services = () => {
  const dataJson: PortafolioMainResponse | null = useContext(DataContext);

  const getServices = dataJson?.data.find(item => item.key === "services") || null;

  return (
    <Box className={styles.servicesContainer}>
      <Box className={styles.servicesContainerTitle}>
        <Box className={styles.servicesTitleBox}>
        <Text fontSize={20} color={'blue.800'} mr={2} className={styles.servicesTitle}>/ </Text>
        <Text fontSize={20} className={styles.servicesTitle}>{getServices?.section}</Text>
        </Box>
        <Heading as="h2" fontSize={52} mt={6}>{getServices?.title}</Heading>
      </Box>
      <Stack gap="4" direction="row" wrap="wrap">
        {
          getServices?.services?.map((service, index) => (
            <Card.Root className={styles.skillsCard} variant="subtle" key={index}>
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded" className={styles.cardImgContainer}>
                  <Avatar.Image
                    style={{
                      objectFit: 'contain',
                      // width: '86px',
                      height: '86px'
                    }} 
                    src={service.icon} />
                  <Avatar.Fallback name={service.name} />
                </Avatar.Root>
                <Card.Title mt='7' mb="7" fontSize={'34px'}>{service.name}</Card.Title>
                <Card.Description>
                  {service.description}
                </Card.Description>
              </Card.Body>
            </Card.Root>
          ))
        }
      </Stack>
    </Box>
  );
}

export default Services;