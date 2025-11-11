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


//    return (
// <article className="m-10">
//   <div
//     className="
//       group/card flex flex-col items-center rounded-xl border shadow-sm
//       bg-white/15 backdrop-blur-md border-white/10
//       md:flex-row md:max-w-3xl
//       hover:bg-white/25 transition
//     "
//   >
//     <img
//       src={item?.cover_url}
//       alt={item?.title || "Image de l'événement"}
//       className="
//     object-cover w-full h-72 rounded-t-xl
//     md:h-auto md:w-70 md:rounded-none md:rounded-s-xl

//       "
//       loading="lazy"
//       decoding="async"
//       draggable={false}
//     />

//     <div className="flex flex-col justify-between p-4 leading-normal w-full">
//       <h5 className="mt-0 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         {item?.title}
//       </h5>

//       <p className="mb-3 font-normal text-gray-800/90 dark:text-gray-300">
//         {seeMore ? fullDescription : short}
//       </p>

//       <div className="flex items-center gap-3 self-center">
//         {isLong && (
          
//           <Button
//             type="button"
//             onClick={() => setSeeMore((p) => !p)}
//             className="
//               rounded-lg px-3 py-1.5
//               bg-sky-950 hover:bg-emerald-500
//               text-black
//             "
//           >
//             {seeMore ? "Voir moins" : "Voir plus"}
//           </Button>
//         )}

//         <ButtonSwitch 
//         checked={isFavorite} 
//         onChange={() => onToggleFavorite(item.id)} 
//         unchechedLabel ="Ajouter au Favoris" 
//         checkedlabel="Retirer des favoris">
//         </ButtonSwitch>

//         {item.url && (
//           <a
//             href={item.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-md border border-sky-400 bg-sky-700 px-3 py-1 text-sm font-semibold text-white transition hover:bg-sky-400"
//           >
//             Voir l’événement →
//           </a>
//         )}
//       </div>
//     </div>
//   </div>
// </article>

//   );

  return (
      <div
        className=" bg-white/15 hover:bg-white/25
       mb-4 max-w-md rounded-xl p-4 shadow-2xl  dark:border-zinc-700 dark:bg-black/60 dark:hover:bg-black/80
        "

      >
        <img
          src={item?.cover_url}
          alt={item?.title || "Image de l'événement"}
          className="
          h-48 w-full rounded-lg object-cover
          "
          loading="lazy"
          decoding="async"
          draggable={false}
        />
    
        
          <h2 className="mb-2 text-lg font-semibold text-black dark:text-white">
            {item?.title}
          </h2>
    
          <p className="mb-3 font-normal text-gray-800/90 dark:text-gray-300">
            {seeMore ? fullDescription : short}
          </p>
    
          <div className="mb-3 flex flex-wrap gap-8 items-center justify-center">
            {isLong && (
              
          <Button
            type="button"
            onClick={() => setSeeMore((p) => !p)}
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
    
            {item.url && (
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-sky-400 bg-sky-700 px-3 py-1 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Voir l’événement →
              </a>
            )}
          </div>
        </div>

      );
    
    
    
    
    
    
    
    


};




