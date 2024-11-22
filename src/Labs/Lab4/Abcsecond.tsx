export default function Abcsecond() {
    const a = ["x", "c", "y", "d", "z"];
    const g = a.filter((h) => h === a[1]);
    const f = a.find((h) => h === "c");
    return <div>
        <p>output = {g}</p>
        <p>outputOther = {f}</p>
    </div>;
}

//output = {g} is c so {g} references the second index