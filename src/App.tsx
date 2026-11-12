import {type FunctionComponent} from 'react'
import PokemonList from "./pages/pokemon-list.tsx";
import {
    Link,
    Route,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import PokemonsDetail from "./pages/pokemon-details.tsx";
import PageNotFound from "./pages/page-not-found.tsx";
import PokemonEdit from "./pages/pokemon-edit.tsx";
import PokemonAdd from "./pages/pokemon-add.tsx";
import Login from "./pages/login.tsx";
import PrivateRoute from "./PrivateRoute.tsx";

const App: FunctionComponent = () => {

  return(
     <Router>
       <div>
         <nav>
           <div className="nav-wrapper teal">
             <Link to="/" className="brand-logo center">PokeChatong</Link>
           </div>
         </nav>

           <Routes>
               <Route path="/login" element={<Login />} />
               <Route element={<PrivateRoute/>}>
                   <Route path="/" element={<PokemonList />} />
                   <Route path="/pokemons" element={<PokemonList />} />
                   <Route path="/pokemons/:id" element={<PokemonsDetail />} />
                   <Route path="/pokemons/edit/:id" element={<PokemonEdit />} />
                   <Route path="/pokemons/add" element={<PokemonAdd />} />
               </Route>

               <Route path="*" element={<PageNotFound />} />
           </Routes>
       </div>
     </Router>
      // <PokemonList />
  )
}

export default App
