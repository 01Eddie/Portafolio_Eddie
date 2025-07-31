import { Box, Button, Flex, Heading, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import styles from "./styles.module.scss";

const Footer = () => {
  const handleClickScrollToSection = (sectionId: string) => () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleClickSocialMedia = (url: string) => () => {
    window.open(url, '_blank');
  }

  return (
    <Flex className={styles.footerContainer}>
      <Box className={styles.box__logo}>
        <Heading as='h2'>Eddie HG</Heading>
        <Text fontSize={18} className={styles.footerSubtitle}>Developer</Text>
        <Box>
          <IconButton
              aria-label="Instagram"
              variant={'ghost'}
              onClick={handleClickSocialMedia('https://www.instagram.com/eddie.hg/')}>
              <SiInstagram />
          </IconButton>
          <IconButton
              aria-label="Linkedin"
              variant={'ghost'}
              onClick={handleClickSocialMedia('https://www.linkedin.com/in/eddiehg/')}>
            <FaLinkedin />
          </IconButton>
          <IconButton
              aria-label="Tiktok"
              variant={'ghost'}
              onClick={handleClickSocialMedia('https://www.tiktok.com/@hugodev11')}>
            <FaTiktok />
          </IconButton>
        </Box>
      </Box>
      <HStack wrap="wrap" gap="6" className={styles.footer__options}>
        <Button color={{ _hover: "blue.700" }} variant="plain" onClick={handleClickScrollToSection('aboutMe')}>Acerca de</Button>
        <Button color={{ _hover: "blue.700" }} variant="plain" onClick={handleClickScrollToSection('portfolio')}>Proyectos</Button>
        <Button color={{ _hover: "blue.700" }} variant="plain">Contactame</Button>
        {/* <IconButton color={{ _hover: "blue.700" }} variant="outline">
          <LuChevronDown />
        </IconButton> */}
      </HStack>
    </Flex>
  );
}

export default Footer;