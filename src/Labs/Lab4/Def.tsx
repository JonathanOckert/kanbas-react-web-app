import { Route, Routes, useParams } from "react-router";
import { Link } from "react-router-dom";
import { multiply } from "../Lab3/Math";

function Def() {
    const { v, t } = useParams();
    return (
      <div>
        {v} x {t} {/*= {v * t}*/}
      </div>
    );
  }
  
  export default function Abc() {
    return (
      <div>
        <Link to="a/3/5">Def</Link>
        <Routes>
          <Route path="a/:v/:t" element={<Def />} />
        </Routes>
      </div>
    );
}

// need v to be 3, __10__ is 5
// = {__11__ is either 3 or 5, probably 3... t is the other}
// with to=""... 1 and 3 probably Link
