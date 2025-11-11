import { useState } from "react";
import React from "react";
import ButtonSwitch from "./ButtonSwitch";
import { Button } from "./Button";


export const Cards = ({ item, isFavorite, onToggleFavorite }) => {
    const [seeMore, setSeeMore] = useState(false)

    const fullDescription = (item.description)?.replace(/<[^>]*>/g, '') || "" // texte complet sans balise sémantique , ou fallback vide

    const isLong = fullDescription?.length > 100 // vérifie si le carac depasse 100
    const short = isLong ? fullDescription.slice(0, 100) + "..." : fullDescription
    // si is long === true on coupe a 100 caractere + les trois points sinon on garde le texte slice 0 et 100 crée une chaine qui contient 0 à 100 caracs


   return (
<article className="m-10">
  <div
    className="
      group flex flex-col items-center rounded-xl border shadow-sm
      bg-white/15 backdrop-blur-md border-white/10
      md:flex-row md:max-w-3xl
      hover:bg-white/25 transition
    "
  >
    <img
      src={item?.cover_url}
      alt={item?.title || "Image de l'événement"}
      className="
    object-cover w-full h-72 rounded-t-xl
    md:h-auto md:w-70 md:rounded-none md:rounded-s-xl

      "
      loading="lazy"
      decoding="async"
      draggable={false}
    />

    <div className="flex flex-col justify-between p-4 leading-normal w-full">
      <h5 className="mt-0 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item?.title}
      </h5>

      <p className="mb-3 font-normal text-gray-800/90 dark:text-gray-300">
        {seeMore ? fullDescription : short}
      </p>

      <div className="flex items-center gap-3 self-center">
        {isLong && (
          
          <Button
            type="button"
            onClick={() => setSeeMore((p) => !p)}
            className="
              rounded-lg px-3 py-1.5
              bg-sky-950 hover:bg-emerald-500
              text-black
            "
          >
            {seeMore ? "Voir moins" : "Voir plus"}
          </Button>
        )}
        
        <ButtonSwitch 
        checked={isFavorite} 
        onChange={() => onToggleFavorite(item.id)} 
        unchechedLabel ="Ajouter au Favoris" 
        checkedlabel="Retirer des favoris">
        </ButtonSwitch>
      </div>
    </div>
  </div>
</article>

  );
};




