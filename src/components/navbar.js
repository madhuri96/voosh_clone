import "../styles/navbar.css";


const Navbar = () => {
    return (
      <div className="navbar">
        <div className="nav_box">
            <img id="image" src="data:image/jpeg;base64,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" alt=""></img>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  