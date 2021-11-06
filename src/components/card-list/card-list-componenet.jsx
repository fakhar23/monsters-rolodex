import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.sytle.css";

class CardList extends Component {
  render() {
    console.log("render card list");
    console.log(this.props.monsters);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <Card monster={monster}></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
