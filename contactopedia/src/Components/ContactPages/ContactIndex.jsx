import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Erik Mejia",
          phone: "999-999-9999",
          email: "erik@dotmastery.com",
          isFavorite: false,
        },
        {
          id: 1,
          name: "Jair Mejia",
          phone: "888-888-8888",
          email: "jair@dotmastery.com",
          isFavorite: true,
        },
        {
          id: 1,
          name: "Sito Mejia",
          phone: "7777-777-777",
          email: "sito@dotmastery.com",
          isFavorite: true,
        },
      ],
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return {
        status: "failure",
        msg: "Please enter a valid Name",
      };
    } else if (newContact.phone === "") {
      return {
        status: "failure",
        msg: "Please enter a valid Phone Number",
      };
    }

    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name === newContact.name || x.phone === newContact.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return {
        status: "failure",
        msg: "Duplicate Record",
      };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContacts />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact handleAddContact={this.handleAddContact} />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavoriteContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === true
                  )}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  contacts={this.state.contactList.filter(
                    (u) => u.isFavorite === false
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
