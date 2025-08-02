import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages";

// Mock de PortafolioMain para aislar el test
// eslint-disable-next-line
jest.mock('../module/portafolioMain', () => jest.fn(() => <div>Mock PortafolioMain</div>));
// mockear next/head para que su contenido se renderice directamente en el body y así Jest lo vea inmediatamente:
// eslint-disable-next-line
jest.mock('next/head', () => ({ children }: any) => <>{children}</>);
// Mock de ErrorBoundary si quieres evitar su lógica interna
// jest.mock('@/components/ErrorBoundary', () => ({ errorComponent, children }: any) => <div>Mock ErrorBoundary{children}</div>);

describe('Home page', () => {
  it('debe renderizar el título, metas y PortafolioMain', async () => {
    render(<Home />);

    // // Verificar título en el <head>
    // expect(document.title).toBe('Eddie Jesus Huaripayta Gonzales');
    // Esperar a que el title se actualice
    await waitFor(() => {
        expect(document.title).toBe('Eddie Jesus Huaripayta Gonzales');
      });
  

    // Verificar meta description
    // const metaDescription = document.querySelector('meta[name="description"]');
    const metaDescription = await waitFor(() =>
        document.querySelector('meta[name="description"]')
      );

    expect(metaDescription).toHaveAttribute(
      'content',
      'Bienvenidos a mi Portafolio: Eddie Jesus Huaripayta Gonzales'
    );

    // Verificar que PortafolioMain esté presente
    expect(screen.getByText('Mock PortafolioMain')).toBeInTheDocument();
  });

//   it('debe renderizar ErrorBoundary', () => {
//     render(<Home />);
//     expect(screen.getByText(/Mock ErrorBoundary/)).toBeInTheDocument();
//   });
});