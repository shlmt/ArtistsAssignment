import { Navigate, Route, Routes } from "react-router-dom";
import SearchArtistPage from "./pages/SearchArtistPage";
import ArtistPage from "./pages/ArtistPage";

const App = () => {
  return (
    <>
      <div className="static mb-5 bg-rose-700 p-3 text-lg font-bold text-rose-100">
        Enventiva
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/artists" replace />}  />
        <Route path="/artists" element={<SearchArtistPage />} />
        <Route path="artists/:name" element={<ArtistPage />} />
        <Route
          path="*"
          element={
            <div className="p-10 text-center text-2xl">Not Found :(</div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
