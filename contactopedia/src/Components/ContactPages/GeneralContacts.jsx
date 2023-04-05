import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div>
      <div>
        {props.contacts.map((contact, index) => (
          <Contact contact={contact} key={index}></Contact>
        ))}
      </div>
    </div>
  );
};

export default GeneralContacts;
