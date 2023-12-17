import { Header, WhyUs, Projects, Production, Works, Contacts } from "./components";

function App() {
  return (
    <>
      <section>
        <Header />
      </section>
      <hr />
      <section className="main__content">
        <WhyUs />
        <Projects />
      </section>
      <hr />
      <main className="main__content">
        <Production />
        <Works />
      </main>
      <hr />
      <footer className="footer">
        <main className="main__content">
          <Contacts />
        </main>
      </footer>
    </>
  );
}

export default App;
