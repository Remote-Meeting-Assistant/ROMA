import React, { FormEvent } from 'react'

const StudentInput: React.FC = () => {
  // On form submit, send POST request to /student
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch('/student', {
      method: 'POST',
      body: data,
    });
  }

  return (
    <div>
      Enter new student:
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label><br />
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default StudentInput;