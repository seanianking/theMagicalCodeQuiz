import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

function App() {
  const cards = friends.map(friend => <FriendCard name = {friend.name} occupation = {friend.occupation} location = {friend.location} image = {friend.image} />)
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {cards}
    </Wrapper>
  );
}

export default App;
