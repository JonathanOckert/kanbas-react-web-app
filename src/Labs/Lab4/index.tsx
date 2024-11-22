import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ReduxExamples from "./ReduxExamples";
import Fds from "./Fds";
import Abc from "./Abc";
import Abcsecond from "./Abcsecond";
import Def from "./Def";
import Abcthree from "./Abcthree";
import Rew from "./Rew";
import Mnb from "./Mnb";
import Dsa from "./Dsa";
import Jkl from "./Jkl";

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return (
        <div>
            <h2>Lab 4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
            {/*<Fds />
            <Abc />
            <Abcsecond />
            <Def />
            <Abcthree />
            <Rew />
            <Mnb />
            <Dsa />
             <Jkl />*/}
        </div>
    );
}