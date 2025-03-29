import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Componente App', () => {
    it('debería renderizar correctamente', () => {
        const { container } = render(<App />);
        expect(container).toBeDefined();
    });

    it('debería renderizar el componente Navbar', () => {
        render(<App />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('debería renderizar el componente Hero', () => {
        render(<App />);
        expect(screen.getByText(/hero/i)).toBeInTheDocument(); // Ajusta el texto según el contenido del componente Hero
    });

    it('debería renderizar el componente Footer', () => {
        render(<App />);
        expect(screen.getByText(/footer/i)).toBeInTheDocument(); // Ajusta el texto según el contenido del componente Footer
    });
});