import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const mockLogin = jest.fn();
  
  beforeEach(() => {
    render(<LoginForm onLogin={mockLogin} />);
  });

  afterEach(() => {
    mockLogin.mockClear();
  });

  test('1. Verificar que el botón está deshabilitado al iniciar', () => {
    const loginButton = screen.getByText('Iniciar sesión');
    expect(loginButton).toBeDisabled();
  });

  test('2. Verificar que el botón se habilita solo cuando los tres campos están completos', () => {
    const loginButton = screen.getByText('Iniciar sesión');
    const clientCodeInput = screen.getByLabelText('Código de Cliente');
    const usernameInput = screen.getByLabelText('Usuario');
    const passwordInput = screen.getByLabelText('Contraseña');

    expect(loginButton).toBeDisabled();

    fireEvent.change(clientCodeInput, { target: { value: 'CLIENT123' } });
    expect(loginButton).toBeDisabled();

    fireEvent.change(usernameInput, { target: { value: 'user1' } });
    expect(loginButton).toBeDisabled();
    
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(loginButton).not.toBeDisabled();
  });

  test('3. Verificar que al hacer clic en el botón habilitado se llama a la función "Login" con los valores correctos', () => {
    const clientCodeInput = screen.getByLabelText('Código de Cliente');
    const usernameInput = screen.getByLabelText('Usuario');
    const passwordInput = screen.getByLabelText('Contraseña');
    const loginButton = screen.getByText('Iniciar sesión');

    // Llenar todos los campos
    fireEvent.change(clientCodeInput, { target: { value: 'CLIENT123' } });
    fireEvent.change(usernameInput, { target: { value: 'user1' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith({
      clientCode: 'CLIENT123',
      username: 'user1',
      password: 'password123'
    });
  });
});