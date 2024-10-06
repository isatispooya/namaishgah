import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./modules/admin/pages/Login.page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddClient from "./modules/admin/featuers/AddClient";
import Home from "./pages/home";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />

            <Route path="/admin" element={<LoginPage />} />
            <Route path="/admin/addclient" element={<AddClient />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
