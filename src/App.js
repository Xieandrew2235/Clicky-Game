import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    count: 0,
    topscore: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1});
    this.setState({ topscore: this.state.count + 1})
  };
  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  handleCardClick = () => {
    const shuffleArray = friend => friends.sort(() => Math.random() - 0.5);
    this.setState({ friends })
  }

render() {
  return (
    <Wrapper>
      <Nav
      title='Clicky Game'
      score={this.state.count}
      topscore={this.state.topscore}
    />
    <Title>Click on a card</Title>
      <Container>
        <Row>
          {this.state.friends.map(friend => (
            <Column size="md-3 sm-6">
              <FriendCard
                key={friend.id}
                removeFriend={this.handleIncrement}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                shuffleArray={this.shuffleArray}
                id={friend.id}
                image={friend.image}
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