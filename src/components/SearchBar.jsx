import { useState } from "react";
import React from "react";
import ButtonSearch from "./ButtonSearch.jsx";

export const SearchBar = ({ query, onChangeQuery, onSubmit}) => {
    return (


        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmit() // dit au parent lance la recherche api
        }}>
            <div className="
                mx-auto w-full max-w-2xl
                flex items-center gap-2
                rounded-full px-3 py-2
                bg-white/80 dark:bg-zinc-900/60
                ring-1 ring-zinc-300 dark:ring-zinc-700
                focus-within:ring-2 focus-within:ring-indigo-500
                shadow-sm backdrop-blur dark:border-gray-50
                ">

                <svg
                    viewBox="0 0 24 24" aria-hidden="true"
                    className="h-5 w-5 text-zinc-400 shrink-0"
                >
                    <path
                        d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                        stroke="currentColor" strokeWidth="1.5" fill="none"
                    />
                </svg>
                <input
                    value={query}
                    onChange={(e) => onChangeQuery(e.target.value)} // filtre local
                    placeholder="Rechercher (ex : tennis , 75010..)"
                    className="w-full pl-12 pr-32 
                     outline-none focus:ring-2  focus:ring-primary focus:border-primary transition duration-200 
                     text-zinc-900 dark:text-zinc-100
                     placeholder:text-zinc-500
                     dark:placeholder:text-white"
                    // className="w-full pl-12 pr-32 py-4 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white"
                />
                <ButtonSearch />
            </div>
        </form>

    )
}








{/* <input
value={query}
onChange={(e) => onChangeQuery(e.target.value)} // filtre local
placeholder="Rechercher (ex : tennis , 75010..)"
className="



w-full bg-transparent outline-none
text-zinc-900 dark:text-zinc-100
placeholder:text-zinc-500
dark:placeholder:text-white"
/> */}