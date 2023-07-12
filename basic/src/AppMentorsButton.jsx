import React, { useCallback, useMemo, useReducer, memo } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`Whose name do you want to change?`);
    const current = prompt(`What do you want to change your name to?`);
    dispatch({type: "updated", prev, current});
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt(`What is the name of the mentor?`);
    const title = prompt(`What is the title of the mentor?`);
    dispatch({type: "added", name, title});
  }, []);
  const handleDelete = useCallback(() => {
    const name = prompt(`Who do you want to delete?`);
    dispatch({type: "deleted", name});
  }, []);

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
      <Button text="Change mentor's name" onClick={handleUpdate} />
      <Button text="Add mentor" onClick={handleAdd} />
      <Button text="Delete mentor" onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log("button", text, "re-rendering");
  const result = useMemo(() => calculateSomething(), []);

  return (
    <button 
    onClick={onClick} 
    style={{
      backgroundColor: "black", 
      color: "white", 
      borderRadius: "20px", 
      margin: "0.4rem"
    }}>
      {`${text} ${result}`}
    </button>
  )
})

function calculateSomething() {
  for(let i = 0; i < 10000; i++) {
    console.log('🙉');
  }
  return 10;
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