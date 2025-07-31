import { Button, Heading, HStack, Separator } from "@chakra-ui/react";
import styles from "./styles.module.scss";


const MenuHeader = () => {
  const handleClickScrollToSection = (sectionId: string) => () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <Heading as='h1' className={styles.header__logo}>Eddie HG</Heading>
            <HStack wrap="wrap" gap="6" className={styles.header__options}>
              <Button color={{ _hover: "blue.700" }} variant="plain" onClick={handleClickScrollToSection("aboutMe")}>Acerca de</Button>
              <Button color={{ _hover: "blue.700" }} variant="plain" onClick={handleClickScrollToSection('portfolio')}>Proyectos</Button>
              <Button color={{ _hover: "blue.700" }} variant="plain">Contactame</Button>
              {/* <IconButton color={{ _hover: "blue.700" }} variant="outline">
                <LuChevronDown />
              </IconButton> */}
            </HStack>
        </div>
      </div>
      <Separator _dark={{ bg: "white", height: 0.5  }} />
    </>
  );
}

export default MenuHeader;