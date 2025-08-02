import { fireEvent, render, screen } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import MenuHeader from "./MenuHeader";

// Mockeamos ContactMe para simplificar el test
jest.mock("../portafolioMain/contactMe/ContactMe", () => () => <div>ContactMe Component</div>);

describe("MenuHeader component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithChakra = (ui: React.ReactNode) => {
    return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
  }


  it('muestra el componente "ContactMe" al hacer click en Contactame', () => {
    renderWithChakra(<MenuHeader />);

    const contactButton = screen.getByRole("button", { name: /contactame/i });
    fireEvent.click(contactButton);

    // Como mockeamos ContactMe, basta verificar que aparece
    expect(screen.getByText(/ContactMe Component/i)).toBeInTheDocument();
  });

  it('hace scroll a la sección correcta al hacer click en "Acerca de"', () => {
    const mockScroll = jest.fn();
    const aboutSection = document.createElement("div");
    aboutSection.id = "aboutMe";
    aboutSection.scrollIntoView = mockScroll;
    document.body.appendChild(aboutSection);

    renderWithChakra(<MenuHeader />);

    fireEvent.click(screen.getByRole("button", { name: /acerca de/i }));
    expect(mockScroll).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});