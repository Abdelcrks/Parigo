import { useState,useEffect } from "react";
import { Cards } from "./Cards";
import { SearchBar } from "./SearchBar";
import { useLocalStorage } from "../hooks/useLocalStorage";



export const Events =  () => {
    const [events, setEvents] = useState([])
    const [offset, setOffset] = useState(0)

    const [favorites, setFavorites] = useLocalStorage("favorites", [])
    
    const [query, setQuery] = useState("") // filtre local
    const [queryApi, setQueryApi] = useState("") // filtre api
    const limit = 20
    



    const fetchEvent = async () => {
        // const queryUrl = queryApi ? `&where=${encodeURIComponent(`title like '%${queryApi}%'`)}` : "";
        const queryUrl = queryApi
        ? `&where=${encodeURIComponent(
            `(title like '%${queryApi.replace(/'/g, "''")}%' OR lead_text like '%${queryApi.replace(/'/g, "''")}%' OR address_name like '%${queryApi.replace(/'/g, "''")}%' OR address_city like '%${queryApi.replace(/'/g, "''")}%' OR address_zipcode like '%${queryApi.replace(/'/g, "''")}%')`
          )}`
        : "";      
        const response = await fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=${limit}&offset=${offset}${queryUrl}`)
        const data = await response.json()
        console.log(data.results)
        if(events.length === 0){          
            setEvents(data.results)
        }
        else{
        setEvents((value) => [...value, ...data.results])   // concaténation des résultats d'avant + les nouveaux
        console.log(events)
        }
    }
useEffect(() => {
    fetchEvent()
    
}, [offset, queryApi])

const loadMore = () => {
    setOffset((value)=> value + limit)  // a chaque clique j'augmente la valeur de limit 
}

const searchEvents = queryApi ? events : events.filter(event =>(event.title || "" ).toLowerCase().includes(query.toLowerCase()))
const onChangeQuery = (value) => setQuery(value);
const onSubmitSearch = () => {
    setEvents([]) // reset
    setOffset(0) // repart page 0
    setQueryApi(query) // active recherche api
}

const saveFavorites = (next) => {
    setFavorites(next);
    try {
      localStorage.setItem("paris-events:favorites", JSON.stringify(next));
    } catch (e) {
      console.error("Erreur localStorage favoris :", e);
    }
  };

  const toggleFavorite = (id) => {
    saveFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

return (
  <div className="min-h-screen w-full overflow-x-hidden"> 
    <div className="mx-auto flex min-h-screen w-full max-w-9xl flex-col items-center  px-4 py-6 text-black " >
        <div className=""><h1 className="m-10  dark:text-white" >Parigo</h1></div>
        
        <div className="mb-20">
        <SearchBar
              query={query}
              onChangeQuery={onChangeQuery}
              onSubmit={onSubmitSearch}
        />
        </div>
        <div className="w-full">
        <div className="mt-4 grid w-full grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {searchEvents.length === 0 ?<div>⌛️ Chargement</div> : searchEvents.map((item)=>(
        <Cards 
        key={item.id} 
        item={item} 
        isFavorite={favorites.includes(item.id)}
        onToggleFavorite={toggleFavorite}
        ></Cards>))}
        {/* si la taille = à zero charge sinon boucle(map) condition === 0 if div charg else :  */}
        <div className="col-span-full flex justify-center">
        <button onClick={loadMore}
        >Voir Plus</button>
        </div>
        </div>
        </div>
    </div>
    </div>
)}


// {searchEvents.length === 0 ?<div>⌛️ Chargement</div> : searchEvents.map((item)=>{return(<Cards key={item.id} item={item} isFavorite={favorites.includes(item.id)onToggleFavorite={toggleFavorite}}></Cards>)})}
