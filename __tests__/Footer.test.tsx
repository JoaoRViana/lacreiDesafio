import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer/Footer';


describe('Testando Footer', () => {
    beforeEach(() => {
      render(<Footer />);
    });
  
    it('Verifica About', () => {
      const firstUlElement = screen.getByTestId('footer-firstUl');
      expect(firstUlElement).toBeInTheDocument();
      const secondUlElement = screen.getByTestId('footer-secondUl');
      expect(secondUlElement).toBeInTheDocument();
      const thirdElement = screen.getByTestId('footer-thirdUl');
      expect(thirdElement).toBeInTheDocument();
    });
  
    it('Verifica Disclaimer', () => {
        const firstTextDisclaimerElement = screen.getByTestId('footer-firstTextDisclaimer');
        expect(firstTextDisclaimerElement).toBeInTheDocument();
        const secondTextDisclaimerElement = screen.getByTestId('footer-secondTextDisclaimer');
        expect(secondTextDisclaimerElement).toBeInTheDocument();
        const UpBttnElement = screen.getByTestId('footer-UpBttn');
        expect(UpBttnElement).toBeInTheDocument();
    });
    it('Verifica Social',()=>{
      const facebookElement = screen.getByTestId('footer-facebook');
      expect(facebookElement).toBeInTheDocument();
      const instagramElement = screen.getByTestId('footer-instagram');
      expect(instagramElement).toBeInTheDocument();
      const emailElement = screen.getByTestId('footer-email');
      expect(emailElement).toBeInTheDocument();
      const logoElement = screen.getByTestId('footer-logo');
      expect(logoElement).toBeInTheDocument();
    })
  });