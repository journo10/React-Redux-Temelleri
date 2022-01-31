import {Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  //console.log(props);
  // setTimeout(() => {
  //   props.history.push('./about')//Hangi routa gidersen 5sn içinde about comp.yönlendiriyor.
    
  // }, 5000);
  return (
    <nav className="ui raised very padded segment">
      <a href="/home" className="ui teal inverted segment">
        Gloria
      </a>
      <div className="ui right floated header">
        <button className="ui button"><Link to="/">Home</Link></button>
        <button className="ui button"><NavLink to="/about">About</NavLink></button>
        <button className="ui button"><NavLink to="/contact">Contact</NavLink></button>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);

//NOT => Link ve NavLink aracsındaki fark NavLink'e active classının eklenmesi.Unutma..