import React, { useState } from 'react'

const App  = () => {

  // useStateの第二引数は関数
  const [initCount, setCount] = useState(0)

  const increment = () => setCount(initCount + 1)
  const decrement = () => setCount(initCount - 1)
  
  // useStateの第二引数の関数は引数を持つことができる
  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  
  const reset = () => setCount(0)
  const double = () => setCount(initCount * 2)

  const devide3 = () => setCount( previousCount => 
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )

  // {}はobjectを表現しているので,返り値にはreturnが必要となる。
  // const devide3 = () => setCount(previousCount => {
  //   return previousCount %3 === 0 ? previousCount / 3 : previousCount
  // })

  return (
    <React.Fragment>
      {/* <React.Fragment> は <> のこと */}
      <div>count:{initCount}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={double}>Double</button>
        <button onClick={devide3}>divide by 3</button>
        <button onClick={reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default App;
