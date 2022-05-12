import React, { useState } from "react";
import axios from "axios";

const styles = {
  hero: "flex flex-col items-center justify-start text-white bg-[#2A2550] h-full",
  inputContainer:
    "flex w-2/3 h-20 bg-[#4D4C7D] justify-center items-center rounded-lg m-5",
  resultContainer:
    "flex flex-col w-2/3 h-96 bg-[#4D4C7D] items-center rounded-lg m-5 text-center p-10",
  input:
    "appearance-none block w-5/6 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
  resultWord: "text-3xl font-bold",
  resultDefinition: "font-semibold",
};

const Hero = () => {
  const [isDone, setIsDone] = useState(false);
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setInput("");
    setError("");
    setIsDone(false);
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(async () => {
        try {
          const query = e.target.value;
          setInput(query);
          const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
          );
          setData(response.data[0]);
          console.log(response.data[0]);
          console.log(response.data[0].word);
          console.log(response.data[0].meanings[0].definitions[0].definition);
          setIsDone(true);
        } catch (e) {
          setError(e.response.data);
          console.log(e.response.data);
        }
      }, 1500)
    );
  };

  return (
    <div className={styles.hero}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="type a word"
          onChange={handleInput}
        />
      </div>
      <div className={styles.resultContainer}>
        {isDone && (
          <>
            <h2 className={styles.resultWord}>{data.word}</h2>
            <p className={styles.resultDefinition}>
              {data.meanings[0].definitions[0].definition}
            </p>
          </>
        )}
        {error && (
          <>
            <h2 className={styles.resultWord}>{error.title}</h2>
            <p className={styles.resultDefinition}>
              {error.message}
            </p>
            <p className={styles.resultDefinition}>
              {error.resolution}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
