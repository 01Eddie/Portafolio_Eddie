import { useContext } from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { DataContext } from "../PortafolioMain";
import { PortafolioMainResponse } from "@/domain/models/portafolioMain/portafolioMain";
import styles from './styles.module.scss';

const About = () => {
  const dataJson: PortafolioMainResponse | null = useContext(DataContext);

  const getAboutMe = dataJson?.data.find(item => item.key === "about") || null;
  const getMyStory = dataJson?.data.find(item => item.key === "myStory") || null;

    return (
        <>
        <Flex gapX={8} className={styles.aboutContainer} id="aboutMe">
            <Image
                className={styles.imgAboutMe}
                src={getAboutMe?.image}
            />
            <Box className={styles.aboutMeContainer}>
                <Text fontSize={20} className={styles.aboutMeSection}>{getAboutMe?.section}</Text>
                <Heading as="h2" fontSize={52} mt={6}>{getAboutMe?.title}</Heading>
                <Text fontSize={18} className={styles.aboutMeText}>{getAboutMe?.description}</Text>
            </Box>
        </Flex>
        <Flex gapX={8} className={styles.storyContainer}>
            <Box className={styles.myStoryContainer}>
                <Text fontSize={20} className={styles.myStorySection}>{getMyStory?.section}</Text>
                <Heading as="h2" fontSize={52} mt={6}>{getMyStory?.title}</Heading>
                <Text fontSize={18} className={styles.myStoryText}>{getMyStory?.description}</Text>
            </Box>
            <Image
                className={styles.imgMyStory}
                src={getMyStory?.image}
            />
        </Flex>
        </>
    );
}

export default About;