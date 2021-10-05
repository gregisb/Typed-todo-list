import React, { useState } from 'react';
import {Item} from './types/item'

import * as C from './App.styles'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar pão',
      done: false
    },
    {
      id: 2,
      name: 'Comprar bolo',
      done: false
    },
  ])


  return(
    <C.Container>
      <C.Area>
        <C.Header>
          Todo List
        </C.Header>

        {list.map((item, index) => (
          <div>{item.name}</div>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;