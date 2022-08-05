import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { v4 } from 'uuid';
import { randomColor } from 'randomcolor';
import './App.css';

const App = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleOnClick = () => {
    if(item.trim() !== '') {
      const newItem = {
        id: v4(),
        item: item,
        color: randomColor({
          luminosity: 'light'
        }),
        defaultPosition: {
          x: 500,
          y: -500
        }
      }
      setItems((items) => [...items, newItem]);
      setItem('');
    } else {
      alert('Enter something')
    }
  };

  const deletOnChange = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const updatePos = (data, index) => {
    let newArray = [...items]
    newArray[index].defaultPosition = {x: data.x, y: data.y}
    setItems(newArray);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <input  value={item} onChange={(event) => setItem(event.target.value)} className="input" placeholder="Enter something..."/>
        <button onClick={handleOnClick} className="btn">ENTER</button>
      </div>
      {
        items.map((item, index) => {
          return (
            <Draggable key={index} defaultPosition={item.defaultPosition} 
            onStop={(event, data) => 
            {updatePos(data, index)
            }}>
              <div className="todo-item" style={{backgroundColor:item.color}}>
                {item.item}
                <button onClick={() => deletOnChange(item.id)} className="delet">x</button>
              </div>
            </Draggable>
          )
        })
      }
    </div>
  );
};

export default App;
