import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Card } from "react-bootstrap";

function App() {
  const [display, setDisplay] = useState(false);
  const [user, setUser] = useState({});

  const handleClick = () => {
    setDisplay(!display);
    fetch("https://api.github.com/users/darkcloudb")
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  return (
    <div className="App">
      <button onClick={handleClick} type="button" class="btn btn-primary">
        Toggle User
      </button>
      <p></p>

      {display ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <p>{user.bio}</p>
              <p>Location: {user.location}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        " "
      )}
    </div>
  );
}

export default App;
