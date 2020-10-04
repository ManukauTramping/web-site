import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register } = useForm();

  const showForm = (
    <form method="post">
      <label htmlFor="name">
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          ref={register}
        />
      </label>
      <label htmlFor="email">
        <h3>Email</h3>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register}
        />
      </label>
      <label htmlFor="question">
        <h3>Question</h3>
        <textarea
          ref={register}
          name="question"
          id="question"
          rows="3"
          placeholder="Say something"
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );

  return (
    <div>
      <h1>Contact form</h1>
      {showForm}
    </div>
  );
};

export default ContactForm

