import Header from "src/components/Navbar/Header";
import Content from "src/components/LandingPage/contentR";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "src/components/SearchPage/search";
import { useState } from "react";
import NotFound from "src/components/Notfound";
import Author from "src/components/AuthorPage/author";
import WallpaperGenerator from "src/components/DetailsPage/Details";

import LoginForm from "src/Components/auth-folder/LoginForm";
import RegisterForm from "src/Components/auth-folder/RegisterForm";
import Home from "src/Components/Home";

import PropTypes from "prop-types";

function HeaderWrapper({ children }) {
  // You can add any logic here related to the header
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
}

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const [userQuery, setuserQuery] = useState("");
  const [randomImages, setRandomImages] = useState([]);
  const [url, setUrl] = useState("");

  const userSearch = (query) => {
    setuserQuery(query);
  };

  const urlSearch = (query) => {
    setUrl(query);
    console.log(query);
  };

  console.log(url);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard"
          element={
            <HeaderWrapper>
              <Content
                authorSearch={userSearch}
                random={setRandomImages}
                randomImages={randomImages}
                urlSearch={urlSearch}
              />
            </HeaderWrapper>
          }
        />
        <Route
          path="/author"
          element={
            <HeaderWrapper>
              <Author authorSearch={userQuery} urlSearch={urlSearch} />
            </HeaderWrapper>
          }
        />
        <Route
          path="/search"
          element={
            <HeaderWrapper>
              <Search
                authorSearch={userSearch}
                urlSearch={urlSearch}
              />
            </HeaderWrapper>
          }
        />
        <Route
          path="/moreDetails"
          element={
            <HeaderWrapper>
              <WallpaperGenerator url={url} />
            </HeaderWrapper>
          }
        />

        {/* Not Found route without the header */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
