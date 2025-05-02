import { Route, Routes } from "react-router"
import { Header } from "./components/header/Header"
import { Home } from "./pages/Home"
import { PlacePage } from "./pages/PlacePage"
import { CityPage } from "./pages/CityPage"
import { SearchPage } from "./pages/SearchPage"
import { CategoryPage } from "./pages/CategoryPage"
import { ScrollToTop } from "./Hooks/Scroll"

function App() {

  return (
    <>
      <Header/>
      <ScrollToTop/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/:place" element={<PlacePage/>}/>
        <Route path="/city/:city" element={<CityPage/>}/>
        <Route path="/search/:request" element={<SearchPage/>}/>
        <Route path="/category/:category" element={<CategoryPage/>}/>
        
      </Routes>
    </>
  )
}

export default App
