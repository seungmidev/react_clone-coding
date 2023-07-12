import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: 'Seungmi',
    title: 'Front End Developer',
    mentor: {
      name: 'Bob',
      title: 'Senior Front End Developer',
    },
  });
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson(person => ({...person, mentor: {...person.mentor, name}}));
        }}
      >
        Change mentor's name
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson(person => ({...person, mentor: {...person.mentor, title}}));
        }}
      >
        Change mentor's title
      </button>
    </div>
  );
}
