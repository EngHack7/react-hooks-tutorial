import React, { useState } from "react";

function SetStateWithArray(params) {
  const [ItemObj, setItemObj] = useState({ name: "", age: 0 });
  const [items, setItems] = useState([]);
  var idNum = 0;

  var listItems = items.map((item) => <li key={item.id}>{item.name}</li>);

  const addItem = () => {
    let rand = Math.floor(Math.random() * 10) + 1;
    setItems([
      ...items,
      {
        id: items.length,
        name: rand,
      },
    ]);
  };

  return (
    <div>
      <center>Append to Array in useState</center>
      <hr />
      <button onClick={addItem}>addItem</button>
      {listItems}
      <form
        onSubmit={(e) => {
            e.preventDefault();
          setItems([
            ...items,
            { name: ItemObj.name, age: Math.floor(Math.random() * 10) + 1 },
          ]);
        }}
      >
        <input
        type="text"
        value={ItemObj.name}
        placeholder="name"
        onChange={(e) => setItemObj({ ...ItemObj, name: e.target.value })}
         />
         <button type='submit' >addItem</button>
        {/* {" "} */}
      </form>
     
    </div>
  );
}

export default SetStateWithArray;
