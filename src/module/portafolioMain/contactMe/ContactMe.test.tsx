import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { FormContext } from "@/module/menuHeader/MenuHeader";
import ContactMe from "./ContactMe";

const renderWithProviders = (
  ui: React.ReactNode, 
  value: {
    openForm: boolean;
    setOpenForm: (open: boolean) => void;
  }) => {
    return render(
    <ChakraProvider value={defaultSystem}>
      <FormContext.Provider value={value}>{ui}</FormContext.Provider>
    </ChakraProvider>
    );
};

describe('ContactMe component', () => {
    it('renderiza el diálogo con el formulario cuando openForm es true', () => {
      const mockSetOpenForm = jest.fn();
  
      renderWithProviders(<ContactMe />, {
        openForm: true,
        setOpenForm: mockSetOpenForm,
      });
  
      // Título del diálogo
      expect(screen.getByText(/Enviame un Mensaje/i)).toBeInTheDocument();
  
      // Campos del formulario
      expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    //   const form = screen.getByRole('form'); // si agregas role="form" en <form>
      expect(screen.getByLabelText(/^Mensaje$/i)).toBeInTheDocument();
    //   expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Adjuntar Archivo/i)).toBeInTheDocument();
  
      // Botón de enviar
      expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument();
    });
  
    // it('llama a setOpenForm cuando se cierra el diálogo', () => {
    //   const mockSetOpenForm = jest.fn();

    //   renderWithProviders(<ContactMe />, {
    //     openForm: true,
    //     setOpenForm: mockSetOpenForm,
    //   });

    //   // Buscar botón de cierre por aria-label
    //   const closeButton = screen.getByLabelText(/close/i);
    //   fireEvent.click(closeButton);

    //   expect(mockSetOpenForm).toHaveBeenCalledTimes(1);
    //   expect(mockSetOpenForm).toHaveBeenCalledWith(false);

    // });
  });