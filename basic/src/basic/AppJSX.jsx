import './App.css';

function AppJSX() {
  const name = "Seungmi";
  const list = ["우유", "딸기", "바나나"];

  return (
    <>
      <h1 className='title'>Hello</h1>
      <h2 style={{color: 'skyblue'}}>I'm {name}</h2>
      <ul>
        {
          list.map(item => (
            <li>{item}</li>
          ))
        }
      </ul>
    </>
  );
}

export default AppJSX;
