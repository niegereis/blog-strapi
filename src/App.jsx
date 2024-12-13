import { HomePage, BlogContentPage } from './pages';
import { Routes, Route } from 'react-router-dom';
import useFetch from './hooks/useFetch';

function App() {
  let { loading, data, error } = useFetch(
    // 'http://localhost:1337/api/blogs?populate=*',
    // 'http://localhost:1337/api/article-contents?populate=*',
    'http://localhost:1337/api/article-contents?populate[author][populate]=authorImg&populate=coverImage',
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage blogs={data ? data : ''} />}></Route>
        <Route
          path="/blog/:id"
          element={<BlogContentPage blogs={data ? data : ''} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
