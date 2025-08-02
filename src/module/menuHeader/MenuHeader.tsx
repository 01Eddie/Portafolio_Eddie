import { createContext, useState } from "react";
import { Button, Heading, HStack, Separator } from "@chakra-ui/react";
import ContactMe from "../portafolioMain/contactMe";
import styles from "./styles.module.scss";

export const FormContext = createContext<{
  openForm: boolean;
  setOpenForm: (open: boolean) => void;
}>({
  openForm: false,
  setOpenForm: (open: boolean) => {}
});

const MenuHeader = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleClickScrollToSection = (sectionId: string) => () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const handleClickContactMe = () => {
    setOpenForm(true);
  }

  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <Heading as='h1' className={styles.header__logo}>Eddie HG</Heading>
            <HStack wrap="wrap" gap="6" className={styles.header__options}>
              <Button color={{ _hover: "blue.700" }} variant="plain" onClick={handleClickScrollToSection("aboutMe")}>Acerca de</Button>
              <Button color={{ _hover: "blue.700" }} variant="plain" onClick={handleClickScrollToSection('portfolio')}>Proyectos</Button>
              <Button color={{ _hover: "blue.700" }} variant="plain" onClick={handleClickContactMe}>Contactame</Button>
              {/* <IconButton color={{ _hover: "blue.700" }} variant="outline">
                <LuChevronDown />
              </IconButton> */}
            </HStack>
        </div>
      </div>
      <Separator _dark={{ bg: "white", height: 0.5  }} />
      <FormContext 
        value={{
          openForm,
          setOpenForm
        }}
      >
        <ContactMe />
      </FormContext>
    </>
  );
}

export default MenuHeader;