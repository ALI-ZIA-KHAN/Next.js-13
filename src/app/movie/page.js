import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


   console.log("in")

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '88d9057c3emsh4afcdd662125797p1fd819jsn2025b642d5ab',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    console.log("url",url,options)

    const res = await fetch("https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en", options);
  
    const data = await res.json();
    console.log("🚀 ~ file: page.js:25 ~ Movie ~ data:", data)
  
    const main_data = data.titles;
    console.log("🚀 ~ file: page.js:23 ~ Movie ~ main_data:", main_data)
    console.log("hello",main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data?.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;