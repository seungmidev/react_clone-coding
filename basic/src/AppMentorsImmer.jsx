import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Whose name do you want to change?`);
    const current = prompt(`What do you want to change your name to?`);
    updatePerson(person => {
      const mentor = person.mentors.find(m => m.name === prev);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`What is the name of the mentor?`);
    const title = prompt(`What is the title of the mentor?`);
    updatePerson(person => person.mentors.push({name, title}));
  };
  const handleDelete = () => {
    const name = prompt(`Who do you want to delete?`);
    updatePerson(person => {
      const index = person.mentors.findIndex(m => m.name === name);
      person.mentors.splice(index, 1);
    })
  };

  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s mentor is:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={handleUpdate}
      >
        Change mentor's name
      </button>
      <button
        onClick={handleAdd}>
        Add mentor
      </button>
      <button onClick={handleDelete}>
        Delete mentor
      </button>
    </div>
  );
}

const initialPerson = {
  name: 'Seungmi',
  title: 'Front End Developer',
  mentors: [
    {
      name: 'Elly',
      title: 'Senior Front End Developer',
    },
    {
      name: 'Nico',
      title: 'Senior Front End Developer',
    },
  ],
}