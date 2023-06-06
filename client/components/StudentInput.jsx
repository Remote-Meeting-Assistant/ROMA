import React from 'react'

const StudentInput = () => {
  // On form submit, send POST request to /student
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
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