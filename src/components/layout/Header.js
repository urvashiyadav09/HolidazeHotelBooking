import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AuthContextProvider } from "../context/AuthContext";
import AdminNav from "./AdminNav";
import Home from "../home/Home";
import Hotels from "../hotels/Hotels";
import HotelDetails from "../hotels/HotelDetails"
import Services from "../services/Services";
import Contact from "../contact/Contact";
import AdminLogin from "../admin/AdminLogin";
import AdminDashboard from "../adminadd/AdminDashboard";
import HotelList from "../adminadd/HotelList";
import EnquiryList from "../adminadd/EnquiryList";
import MessageList from "../adminadd/MessageList";
import ProtectedRoute from "../routes/ProtectedRoute";


function Layout() {
return (
  <AuthContextProvider>
<Router>
<AdminNav />
 
  <Container fluid={true} >
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/hotels" component={Hotels} />
      <Route path="/hotel/:id" exact component={HotelDetails} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={AdminLogin} />
      <ProtectedRoute path="/adminadd" exact component={AdminDashboard} />
      <ProtectedRoute path="/adminadd/HotelList" exact component={HotelList} />
      <ProtectedRoute path="/adminadd/EnquiryList" exact component={EnquiryList} />
      <ProtectedRoute path="/adminadd/MessageList" exact component={MessageList} />

    </Switch>
  </Container>
</Router>
</AuthContextProvider>
);
}

export default Layout