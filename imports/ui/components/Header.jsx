import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionCalendar from 'material-ui/svg-icons/action/today';
import Mail from 'material-ui/svg-icons/communication/mail-outline';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import CallSplit from 'material-ui/svg-icons/communication/call-split';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';


const appBarStyles = {
  backgroundColor:'#1896a8',
  title: {
    cursor: 'pointer',
  },
};

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <header className='Header'>
        <AppBar
            title={<Link to='/' > <span style={appBarStyles.title}>App</span></Link>}
            style={appBarStyles}
            onTitleClick={this.titleClicked}
            onLeftIconButtonClick={this.handleTouchTap}
            onLeftIconButtonClick={(open) => this.setState({open})}/>
        <Drawer 
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
                          
          <List>
            <Link to="/employees"        style={{ textDecoration: 'none' }} onClick={() => this.setState({open: !this.state.open})}><ListItem primaryText="Employees"   leftIcon={<AccountCircle />} />   </Link>
            <Link to="/tasks"            style={{ textDecoration: 'none' }} onClick={() => this.setState({open: !this.state.open})}><ListItem primaryText="Tasks"       leftIcon={<ActionDashboard />} /> </Link>
            <Link to="/assigntasks"      style={{ textDecoration: 'none' }} onClick={() => this.setState({open: !this.state.open})}><ListItem primaryText="Assign"      leftIcon={<CallSplit />} />       </Link>
            <Link to="/performance"      style={{ textDecoration: 'none' }} onClick={() => this.setState({open: !this.state.open})}><ListItem primaryText="Performance" leftIcon={<ActionCalendar />} />  </Link>
            <Link to="/about"            style={{ textDecoration: 'none' }} onClick={() => this.setState({open: !this.state.open})}><ListItem primaryText="About"       leftIcon={<ActionInfo />} />      </Link>
          </List>
        </Drawer>
      </header>
    );
  }
}
