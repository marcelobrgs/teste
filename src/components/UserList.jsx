import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const UserList = ({ endPoint }) => {
  const [data, setData] = useState([]);

  let url = `https://jsonplaceholder.typicode.com/${endPoint}`;

  const fetchdata = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(`Hubo este error: ${error}`);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [endPoint]);

  return (
    <>
      <ul>
        {endPoint == "users"
          ? data.map((item, index) => <li key={index}>{item.name}</li>)
          : data.map((item, index) => <li key={index}>{item.body}</li>)}
      </ul>
    </>
  );
};

UserList.propTypes = { endPoint: PropTypes.string };
