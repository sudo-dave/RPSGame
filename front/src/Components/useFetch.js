import { useEffect } from "react";
import { useState } from "react";
import BoardTab from "./BoardTab";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, message: "" });

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error fetching data.");
        const json = await response.json();
        const components = [];
        const len = Object.keys(json).length;
        Object.entries(json).forEach((entry, i) => {
          const idx = len - i;
          const [name, score] = entry;
          components.push(
            <BoardTab key={idx} id={idx} name={name} score={score} />
          );
        });
        components.reverse();
        setData(components);
        setLoading(false);
      } catch (error) {
        setError({ status: true, message: error.message });
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}
