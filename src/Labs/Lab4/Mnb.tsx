export default function Mnb({ d = ["a"] }) {
    const a = ["b", 1];
    const e = [...a, ...d, ...a];
    return (
      <div>
        <p>{e}</p>
      </div>
    );
  }

