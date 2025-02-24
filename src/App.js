import { Fragment } from "react";
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
              let Layout = Defaultlayout
              if (route.layout) {
                Layout = route.layout
              }
              else if (route.layout === null) {
                Layout = Fragment
              }
              return <Route key={index} path={route.path} element={<Layout> <Page /></Layout>} />
            })}
         </Routes>
      </div>
    </Router>
  );
}
export default App;
