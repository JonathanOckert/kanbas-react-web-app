import { useState } from "react";

export default function Abc() {
    const [x, h] = useState(true);
    return (
      <div>
        <button onClick={() => {h(false); }}>R</button>
        <input type="checkbox" checked={x} onChange={() => h(!x)} id="checkbox" />
        <label htmlFor="s">Q</label>
        {x && <h1>P</h1>}
        {!x && <h1>K</h1>}
      </div>
    );
  }