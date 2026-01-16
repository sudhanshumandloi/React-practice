import Blogs from "./Blogs";
import Header from "./Header";
import Pagination from "./Pagination";

export default function Home(){
    return(
        <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
    )
}