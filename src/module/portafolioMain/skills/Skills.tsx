import { useContext } from "react";
import { Avatar, Box, Card, Heading, Stack, Text } from "@chakra-ui/react";
import { PortafolioMainResponse } from "@/domain/models/portafolioMain/portafolioMain";
import { DataContext } from "../PortafolioMain";
import styles from "./styles.module.scss";

const Skills = () => {
  const dataJson: PortafolioMainResponse | null = useContext(DataContext);

  const getSkills = dataJson?.data.find(item => item.key === "skills") || null;

  return (
    <Box className={styles.skillsContainer}>
      <Box className={styles.skillsContainerTitle}>
        <Text fontSize={20} className={styles.sectionTitle}>{getSkills?.section}</Text>
        <Heading as="h2" fontSize={52} mt={6}>{getSkills?.title}</Heading>
      </Box>
      <Stack gap="4" direction="row" wrap="wrap" >
        {
          getSkills?.skills?.map((skill, index) => (
            <Card.Root className={styles.skillsCard} variant="subtle" key={index}>
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded" className={styles.cardImgContainer}>
                  <Avatar.Image
                    style={{
                      objectFit: 'contain',
                      height: '86px'
                    }} 
                    src={skill.icon}  />
                  <Avatar.Fallback name={skill.name} />
                </Avatar.Root>
                <Card.Title mt='7' mb="7" fontSize={'34px'}>{skill.name}</Card.Title>
                <Card.Description>
                  {skill.description}
                </Card.Description>
              </Card.Body>
            </Card.Root>
          ))
        }
      </Stack>
    </Box>
  );
}

export default Skills;

