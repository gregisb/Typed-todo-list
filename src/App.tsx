import React, { useState } from 'react';
import {Item} from './types/item'

import * as C from './App.styles'

import { AddArea } from './components/AddArea'
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar pão',
      done: true
    },
    {
      id: 2,
      name: 'Comprar bolo',
      done: false
    },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList)
  }


  return(
    <C.Container>
      <C.Area>
        <C.Header>
          Todo List
        </C.Header>

          <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem item={item} key={index}/>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;