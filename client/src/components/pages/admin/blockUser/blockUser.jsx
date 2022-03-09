import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { searchEmail } from "../../../../redux/actions";
import BlockCard from "../../../cards/blockCard/blockCard";
import s from "./blockUser.module.css";

function BlockUser() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();
    dispatch(searchEmail(input, token)).then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  };

  return (
    <div className={s.permissionAdmin}>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <h2>Buscar por correo:</h2>
          <input
            type="text"
            name="search_name"
            value={input}
            onChange={handleChange}
          />
          <button className="submit" type="submit">
            Buscar
          </button>
        </div>
      </form>
      <div className={s.containerData}>
        {console.log(data)}
        {data.length > 0 &&
          data.map((item) => (
            <BlockCard
              key={item.id}
              id={item.id}
              name={item.name_client}
              lastname={item.lastname_client}
              disabled={item.disabled}
            />
          ))}
      </div>
    </div>
  );
}

export default BlockUser;
