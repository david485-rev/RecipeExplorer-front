import { fireEvent, render, screen, within } from "@testing-library/react";
import RegisterContainer from "./RegisterContainer";
import { BrowserRouter } from 'react-router-dom';

describe('Register Container Tests', ()=> {
    test('We are greeted with Sign up', () => {
        render(
            <BrowserRouter>
                <RegisterContainer/>
            </BrowserRouter>
        );

        const element = screen.getByText('Sign up', {exact: false});

        expect(element).toBeInTheDocument();
    });

    test('There is a link to login', () => {
        render(
            <BrowserRouter>
                <RegisterContainer/>
            </BrowserRouter>
        );

        const element = screen.getByText('Sign in', {exact: false});

        expect(element).toBeInTheDocument();
    });

    test('There is a form with three inputs', () => {
        render(
            <BrowserRouter>
                <RegisterContainer/>
            </BrowserRouter>
        );

        const formElement = screen.getByRole('form');
        const emailInputElement = within(formElement).getByPlaceholderText('email');
        const usernameInputElement = within(formElement).getByPlaceholderText('username');
        const passwordInputElement = within(formElement).getByPlaceholderText('password');

        expect(formElement).toBeInTheDocument();
        expect(emailInputElement).toBeInTheDocument();
        expect(usernameInputElement).toBeInTheDocument();
        expect(passwordInputElement).toBeInTheDocument();
    });
})