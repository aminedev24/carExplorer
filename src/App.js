import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import TopBar from './topBar';
import NavigationMenu from './nav';
import ResponsiveModal from './responsiveModal';
import CarBuyingSteps from './howToBuy';
import TestimonialsSection from './testimonials';
import AboutSection from './about';
function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <NavigationMenu />

        {/* Content specific to each route */}
        <Switch>
          <Route path="/how-to-buy" render={() => <CarBuyingSteps key="how-to-buy" />} />
          <Route path="/testimonials" render={() => <TestimonialsSection key="testimonials" />} />
          <Route path="/about" render={() => <AboutSection key="about" />} />
          <Route path="/" exact render={() => <ResponsiveModal key="home" />} />
          {/* Add more routes for other components */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
