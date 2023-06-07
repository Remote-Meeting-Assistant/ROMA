import { render, screen } from '@testing-library/react';
import StudentInput from '../components/StudentInput';

test('renders the StudentInput component', () => {
  render(<StudentInput />);

  // Assert that the component renders correctly
  const studentInput = screen.getByTestId('student-input');
  expect(studentInput).toBeInTheDocument();

  // Assert that the required form elements are present
  const firstNameInput = screen.getByLabelText('First Name:');
  const lastNameInput = screen.getByLabelText('Last Name:');
  const submitButton = screen.getByText('Submit');

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});