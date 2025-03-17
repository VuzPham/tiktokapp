import PropTypes from "prop-types";


function Menu( {children} ) {
    return ( 
       <nav>
        {children}
       </nav>
     );
}
Menu.propTypes = {
    Children: PropTypes.node.isRequired,
}
export default Menu;