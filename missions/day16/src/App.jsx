import "./App.css";
import { useRef, useReducer, useCallback } from "react";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.targetId);
    default:
      return state;
  }
}

export default function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}
