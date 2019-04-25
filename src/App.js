import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

render() {
  return (
    <Wrapper>
      <Nav
        title="Simpsons Clicky Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
      />

      <Title>
        Try to click on each character, but don't hit any duplicates, or
        we'll release the hounds!!!
      </Title>

      <Container>
        <Row>
          {this.state.friends.map(friend => (
            <Column size="md-3 sm-6">
              <FriendCard
                key={friend.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
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