import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { publicRoute} from '~/routes/index'
import { Defaultlayout } from "~/components/layout";
function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
            {publicRoute.map((route,index) => {
              const Page = route.component;
              const Layout = route.layout || Defaultlayout
              return <Route key={index} path={route.path} element={<Layout> <Page /></Layout>} />
            })}
         </Routes>
      </div>
    </Router>
  );
}
export default App;
