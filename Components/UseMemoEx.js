import React, { useState, useMemo } from "react";
function UseMemoex() {
  const [count, setcount] = useState(0);

  const MultiCountMemo = useMemo(
    function multiCount() {
      console.warn("multiCount updating");
      return count * 5;
    },
    [count]
  );
  return (
    <div>
      <hr />
      <p>example of PureComponent by funtion component</p>
      <h1>{count}</h1>
      <h2>{MultiCountMemo}</h2>
      <button onClick={() => setcount(count+1)}>Change state</button>
      <button onClick={() => setcount(count)}>Not Change</button>
    </div>
  );
}

export default UseMemoex;
