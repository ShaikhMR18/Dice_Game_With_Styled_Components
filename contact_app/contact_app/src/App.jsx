import Navigation from "./components/Navigation/Navigation"
import ContactForm from "./components/contact_form/ContactForm"
import ContactHeader from "./components/contact_header/ContactHeader"


function App() {

  return (
    <>
      <div>
      <Navigation />
      <div >
      <ContactHeader/>
      <ContactForm/>
      </div>
      </div>
          </>
  )
}

export default App
