import { render, screen, waitFor } from "@testing-library/react";
import useSWR from "swr";
import PortafolioMain from "./PortafolioMain";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { PortafolioMainResponse } from "@/domain/models/portafolioMain/portafolioMain";


// Mock de useSWR
jest.mock('swr');

// Mock de subcomponentes para no depender de sus implementaciones
// eslint-disable-next-line
jest.mock('../MenuHeader', () => () => <div>MenuHeader</div>);
// eslint-disable-next-line
jest.mock('./Presentation', () => () => <div>Presentation</div>);
// eslint-disable-next-line
jest.mock('./About', () => () => <div>About</div>);
// eslint-disable-next-line
jest.mock('./Skills', () => () => <div>Skills</div>);
// eslint-disable-next-line
jest.mock('./Portfolio', () => () => <div>Portfolio</div>);
// eslint-disable-next-line
jest.mock('./Services', () => () => <div>Services</div>);
// eslint-disable-next-line
jest.mock('./Footer', () => () => <div>Footer</div>);

// Mock de datos de respuesta
const mockData: PortafolioMainResponse = {
  data: [
    {
        id: 0,
        key: "home",
        title: "Hola, Soy Eddie HG! Un web developer",
        description: "Soy un desarrollador web.",
        image: "/dataMock/Portafolio/imgs/eddieHG.jpg",
        url: "://eddiehg.com",
        detail: [
            {
                number: 3,
                sign: "+",
                description: "años de experiencia"
            },
            {
                number: 15,
                sign: "+",
                description: "proyectos avanzados"
            }
        ]
    }
  ]
};

describe('PortafolioMain - flujo asincrónico', () => {
    const renderWithChakra = (ui: React.ReactNode) => {
        return render(<ChakraProvider value={defaultSystem}>{ui}</ChakraProvider>);
      };

    it('muestra contenido después de que useSWR cargue los datos', async () => {
        let callCount = 0;
        (useSWR as jest.Mock)
        .mockImplementation(() => {
            callCount++;
            if (callCount === 1) {
                return { data: undefined, error: undefined, isLoading: true };
            }
            return { data: mockData, error: undefined, isLoading: false };
        });
  
      renderWithChakra(<PortafolioMain />);
  
      // Verificamos que al inicio aún no aparecen datos
      expect(screen.queryByText(/Hola, Soy Eddie HG! Un web developer/i)).not.toBeInTheDocument();
  
      // Esperamos a que el DOM se actualice cuando lleguen los datos
      // await waitFor(() => {
      //   expect(screen.getByText(/Hola, Soy Eddie HG! Un web developer/i)).toBeInTheDocument();
      // });
      await waitFor(() => {
        const heading = screen.getByRole('heading', { level: 1 }); // Asegúrate de que el nivel del encabezado sea correcto
        // console.log('heading --> ',heading);
        expect(heading).toHaveTextContent(/Eddie HG/i);
      });
    });
  });