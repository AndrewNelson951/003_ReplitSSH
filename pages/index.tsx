import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [textAreaContent, setTextAreaContent] = useState("");
  const [submittedContent, setSubmittedContent] = useState("");

  const handleGoClick = () => {
    setSubmittedContent(textAreaContent);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Webpage</title>
      </Head>

      <header style={{ backgroundColor: 'lightblue', padding: '1rem', textAlign: 'center' }}>
        <h1>003_ReplitSSH</h1>
      </header>

      <main className={styles.main}>
        <textarea
          value={textAreaContent}
          onChange={(e) => setTextAreaContent(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Type something here..."
        />
        <button onClick={handleGoClick}>Go</button>
        {submittedContent && (
          <div style={{ marginTop: '1rem' }}>
            <h3>Content Submitted:</h3>
            <p>{submittedContent}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;