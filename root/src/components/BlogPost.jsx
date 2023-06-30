import React, { useEffect, useState } from "react";
import { URI } from "../utils/BlogApi";
import Card from "./Card";
export default function BlogPost() {
  const [data, setData] = useState([]);
  const [Loader, setLoader] = useState(false);
  const fetchInfo = () => {
    return fetch(URI)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
    if (data) {
      setLoader(false);
    }
  }, []);

  const newArray = data?.data?.filter((obj) => obj.image !== null);
  console.log(data);
  return (
    <>
      <h1>BLOG</h1>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-2">
        {Loader ? (
          <h2>Hello</h2>
        ) : (
          newArray?.map((key) => {
            return <Card data={key} key={key.title} />;
          })
        )}
      </div>
    </>
  );
}
