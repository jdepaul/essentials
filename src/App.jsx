import { useState } from "react";

import { CORE_CONCEPTS } from "./assets/data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./assets/data.js";

function App() {
  const [selectedTopic, setTopic] = useState();
  //let tabContent = "Please click a button"

  function clickHandler(selectedButton) {
    //selected button => components, jsx, props, state
    setTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickHandler("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => clickHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => clickHandler("props")}>Props</TabButton>
            <TabButton onSelect={() => clickHandler("state")}>State</TabButton>
          </menu>
          <div id='tab-content'>
            {!selectedTopic ? (
              <p>Please select a topic.</p>
            ) : (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
