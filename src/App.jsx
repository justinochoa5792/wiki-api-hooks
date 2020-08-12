import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];
function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
      label='Select a Color'
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> */}
      <Translate />)
    </div>
  );
}
export default App;
