import "./ContactEditor.css";
import { useState, useRef } from "react";

export default function ContactEditor({ onCreate }) {
  const [form, setForm] = useState({ name: "", contact: "" });
  const nameRef = useRef();
  const contactRef = useRef();

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (form.name === "" || form.contact === "") {
      if (form.name === "") {
        nameRef.current.focus();
      } else {
        contactRef.current.focus();
      }
      return;
    }

    onCreate(form.name, form.contact);
    setForm({ name: "", contact: "" });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameRef}
          className="name"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="이름 ..."
          onKeyDown={onKeydown}
        />
        <input
          ref={contactRef}
          className="contact"
          name="contact"
          value={form.contact}
          onChange={onChange}
          placeholder="연락처(이메일) ..."
          onKeyDown={onKeydown}
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
