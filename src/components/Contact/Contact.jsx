import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.item}>
      <div>
        <p className={css.text}>
          <IoMdContact className={css.icon} size="24px" />
          {name}
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} size="20px" />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
