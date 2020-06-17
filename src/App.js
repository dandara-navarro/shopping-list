import React, {Component} from 'react';
import './App.css';
import Items from './Items/Items';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      newItem: '',
      itemsList: []
    };

    this.itemNameChange = this.itemNameChange.bind(this);
  }

  deleteItemHandler = (itemIndex) => {
    const items = [...this.state.itemsList];
    items.splice(itemIndex, 1);
    this.setState({itemsList: items});
  }

  addItemHandler = (item) => {
    const items = [...this.state.itemsList];
    if(item.length > 0) {
      items.push({name: item, date: new Date()});
    }
    
    this.setState({itemsList: items, newItem: ''});
  }

  itemNameChange(event) {
    this.setState({newItem: event.target.value});
  }
  
  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { 
      this.addItemHandler(event.target.value);
    } 
  }

  toggleSortDate () {
    const items = [...this.state.itemsList];
    let newItemsList = items.reverse();
    this.setState({
      itemsList: newItemsList.sort((a, b) => a.date < b.date)
    })
  }

  render (){
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Shopping List App</h1>
            <div>
              <input placeholder="New item"
                      value={this.state.newItem} 
                      onChange={this.itemNameChange} 
                      onKeyPress={this.enterPressed.bind(this)}></input>
              <button onClick={() => this.addItemHandler(this.state.newItem)}>Add to Shopping list</button>
            </div>
        </div>
        <div className="App-list">
          <h1>Shopping List</h1>
          <p>You added {this.state.itemsList.length} {this.state.itemsList.length > 1 ? 'items' : 'item'}</p>
          <button className={this.state.itemsList.length > 0 ? null : 'hide'} onClick={() => this.toggleSortDate()}>Sort items</button>
          <Items itemsList={this.state.itemsList} delete={this.deleteItemHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
