import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

// Mockeamos ContactMe para simplificar el test
jest.mock("../contactMe/ContactMe", () => () => <div>ContactMe Component</div>);

describe("Footer component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithChakra = (ui: React.ReactNode) => {
    return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
  }

  it("abre redes sociales en una nueva ventana", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);

    renderWithChakra(<Footer />);

    fireEvent.click(screen.getByLabelText(/instagram/i));
    expect(openSpy).toHaveBeenCalledWith(
      "https://www.instagram.com/eddie.hg/",
      "_blank"
    );

    fireEvent.click(screen.getByLabelText(/linkedin/i));
    expect(openSpy).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/eddiehg/",
      "_blank"
    );

    fireEvent.click(screen.getByLabelText(/tiktok/i));
    expect(openSpy).toHaveBeenCalledWith(
      "https://www.tiktok.com/@hugodev11",
      "_blank"
    );
  });

  it('muestra el componente "ContactMe" al hacer click en Contactame', () => {
    renderWithChakra(<Footer />);

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

    renderWithChakra(<Footer />);

    fireEvent.click(screen.getByRole("button", { name: /acerca de/i }));
    expect(mockScroll).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});