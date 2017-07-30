
//
var FRIENDS = [
  {
    name: "Alex",
    handle: "Alexini",
    id: 1,
  }, {
    name: "Billybob",
    handle: "bill_bob09",
    id: 2,
  }
];

var IDIncrement = 5;

var AddFriend = React.createClass({
  propTypes: {
    onAdd: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {
      name:"",
      handle:"",
    };
  },

  onNameChange: function(e) {
    this.setState({name: e.target.value});
  },

  onHandleChange: function(e) {
    this.setState({handle: e.target.value});
  },



  onSubmit: function(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.handle);
    this.setState({name: "", handle: ""  });
  },

  render: function(){
    return (

      <div className="add-a-friend">
<hr id="four" data-symbol="ADD A FRIEND" />
        <form onSubmit={this.onSubmit}>
        <input className="name-input" required="true" placeholder="Name" type="text" value={this.state.name} onChange={this.onNameChange} />

        <span className="at">@</span> <input placeholder="Instagram Handle" required="true" type="text" value={this.state.handle} onChange={this.onHandleChange} />
        <div className="submit-container"><input className="submit-btn" type="submit" value="submit" /></div>
        </form>
      </div>
    );
  }
})

function Header(props) {
  return (
    <div className="header">
      {props.title}
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string,
  friends: React.PropTypes.array.isRequired,
};

function FriendEntry(props) {
  return (
    <div className="friend-entry">
      <div className="friend">
        <div className="name">
          {props.name}
        </div>

        <a className="delete-cont" onClick={props.onRemove}>
        <div className="delete-icon">x
        <span className="delete-p"> delete contact</span>
        </div></a>

      </div>

      <div className="instagram">
        <div className="handle">
          @{props.handle}
        </div>
      </div>
    </div>
  );
}

FriendEntry.propTypes = {
  name: React.PropTypes.string.isRequired,
  handle: React.PropTypes.string.isRequired,
  onRemove: React.PropTypes.func.isRequired,
}

var Application = React.createClass({


propTypes: {
    title: React.PropTypes.string,
    initialFriends: React.PropTypes.arrayOf(React.PropTypes.shape({name: React.PropTypes.string.isRequired, handle: React.PropTypes.string, id: React.PropTypes.number.isRequired})).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: "My Friends",
    }
  },

  getInitialState: function() {
    return {
      friends: this.props.initialFriends,
    };
  },

  onFriendAdd: function(name, handle) {
   this.state.friends.push({
     name: name,
     handle: handle,
     id: IDIncrement,
   });
   this.setState(this.state);
   IDIncrement +=1;
  },

  onRemoveFriend: function(index) {
    this.state.friends.splice(index, 1);
    this.setState(this.state);
  },

  render: function() {
    return (
      <div className="table">
        <div className="header">
                  <Header title={this.props.title} friends={this.state.friends}/>
        </div>
        <div className="friend-list">
          {this.state.friends.map(function(friend, index) {
            return ( <FriendEntry
              onRemove={function() {this.onRemoveFriend(index)}.bind(this)}
              name={friend.name}
              handle={friend.handle}
              key={friend.id}/>
            );
          }.bind(this))}
        </div>
          <AddFriend onAdd={this.onFriendAdd} />
      </div>

    );
  }
  });

ReactDOM.render(<Application initialFriends={FRIENDS}/>, document.getElementById('root'));
