import './App.css';
import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import BlogePage from './components/BlogPage';
import TagPage from './components/TagPage';
import CategoryPage from './components/CategoryPage';

export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return( 
    <Routes>
      <Route path='/' element = {<Home />}/>
      <Route path='/blog/:blogId' element = {<BlogePage />}/>
      <Route path='/tags/:tag' element = {<TagPage />}/>
      <Route path='/categories/:category' element = {<CategoryPage />}/>
    </Routes>
    
  );
}
<div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
