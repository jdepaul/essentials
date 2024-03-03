import { EXAMPLES } from "../assets/data.js";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setTopic] = useState();

  let tabContent = "Please select a topic";

  let buttonContent = (
    <>
      <TabButton
        isSelected={selectedTopic === "components"}
        onSelect={() => clickHandler("components")}
      >
        Components
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "jsx"}
        onSelect={() => clickHandler("jsx")}
      >
        JSX
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "props"}
        onSelect={() => clickHandler("props")}
      >
        Props
      </TabButton>
      <TabButton
        isSelected={selectedTopic === "state"}
        onSelect={() => clickHandler("state")}
      >
        State
      </TabButton>
    </>
  );

  function clickHandler(selectedButton) {
    //selected button => components, jsx, props, state
    setTopic(selectedButton);
  }

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title='Examples' id='examples'>
      <Tabs buttonContainer='menu' buttons={buttonContent}>
        {tabContent}
      </Tabs>
    </Section>
  );
}
