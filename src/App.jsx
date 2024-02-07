import { CORE_CONCEPTS } from "./assets/data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  let tabContent = "Please click a button"

  function clickHandler(selectedButton) {
    //selected button => components, jsx, props, state
    tabContent = selectedButton;
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
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
