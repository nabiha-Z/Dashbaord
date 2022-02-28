import React, { useState } from 'react';
import Topbar from "./components/topbar/Topbar";
import { IntlProvider } from 'react-intl';
import Sidebar from "./components/sidebar/Sidebar";
import messages from './messages';
import "./App.css";
import Menu1 from "./pages/menu1";
import SubMenu1 from "./pages/submenu1";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './styles/app.scss';

function App() {
  const [locale, setLocale] = useState('en');

  const [rtl, setRtl] = useState(false);
  const [show, setShow] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    console.log("val:", value)
    setToggled(value);
  };

  return (
    <Router>
      {/* <Topbar /> */}
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className='container' style={{margin:0, marginLeft:-20}}>
          <Sidebar
            image={image}
            collapsed={collapsed}
            rtl={rtl}
            toggled={toggled}
            setCollapsed={setCollapsed}
            handleToggleSidebar={handleToggleSidebar}
            handleCollapsedChange={handleCollapsedChange} />

        
        <Switch>

          <Route exact path="/menu1">
            <Menu1
              toggled={toggled}
              collapsed={collapsed}
              rtl={rtl}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
              handleRtlChange={handleRtlChange}
              handleImageChange={handleImageChange} />
          </Route>

          <Route exact path="/submenu1">
            <SubMenu1
              toggled={toggled}
              collapsed={collapsed}
              rtl={rtl}
              handleToggleSidebar={handleToggleSidebar}
              handleCollapsedChange={handleCollapsedChange}
              handleRtlChange={handleRtlChange}
              handleImageChange={handleImageChange} />
          </Route>

        </Switch>
        </div>
      </IntlProvider>
    </Router>
  );

}

export default App;
