import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    friends,
    count: 0,
    topscore: 0,
    rightwrong: ""
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
    console.log(this.state.friends);
  };
  handleReset = () => {
    this.setState({ 
      count: 0,
      topscore: this.state.topscore,
      rightwrong: "Nope!"
     });
     this.handleShuffle();
  };

  handleIncrement = () => {
    this.setState({
    count: this.state.count + 1,
    topscore: this.state.topscore +1,
    rightwrong: "That's right!"
    })

    this.handleShuffle();
  };

render() {
  return (
    <Wrapper>
      <Nav
      title='Clicky Game'
      score={this.state.count}
      topscore={this.state.topscore}
      rightwrong={this.state.rightwrong}
    />
    <Title>Click on a card</Title>
      <Container>
        <Row>
          {this.state.friends.map(friend => (
            <Column size="md-3 sm-6">
              <FriendCard
                key={friend.id}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                id={friend.id}
                image={friend.image}
                handleShuffle={this.handleShuffle}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}
}

export default App;