import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnimationCheckerContext from "./context/AnimationCheckerContext";
import Layout from "./Layout/Layout";
import Homepage from "./screens/Homepage/Homepage";
import Meditation from "./screens/Meditation/Meditation";
import Yogap from "./screens/Yoga/Yogap";
import Chakras from "./screens/Chakras/Chakras";
// import birds from "./animation/birds.json";
// import Lottie from "lottie-react";

function App() {
  return (
    <Router>
     <AnimationCheckerContext>
     <Layout>
        <div className="App">
        {/* <Lottie animationData={birds}

        className='birds'
/> */}
         <Switch>
           <Route exact path='/'>
               <Homepage/>
           </Route>

           <Route path='/Chakras'>
             <Chakras/>
           </Route>

           <Route path='/Meditation'>
             <Meditation/>
           </Route>

           <Route path='/Yoga'>
             <Yogap/>
           </Route>
         </Switch>
        </div>
      </Layout>
     </AnimationCheckerContext>
    </Router>
  );
}

export default App;
