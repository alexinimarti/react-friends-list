
//api

fetch('api/friends').then(function(response) {
	return response.json();
}).then(function(b) {
	console.log(b);
  JSON.stringify(b);
});


//

function Header(props) {
  return (
    <div className="header">
      { props.title }
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string,
};

function FriendEntry(props) {
  return (
    <div className="friend-list">
      <div className="friend">
        <div className="name">
          { props.name }
        </div>
      </div>


    <div className="instagram">
      <div className="handle">
        @{ props.handle }
      </div>
    </div>
</div>
  );
}

FriendEntry.propTypes = {
  name: React.PropTypes.string.isRequired,
  handle: React.PropTypes.string.isRequired,
}


function Application(props) {


  return (


  <div className="table">
    <Header title={props.title} />
      <div className="friend-list">
				{name}
      </div>
  </div>


  );
}

Application.propTypes = {
  title: React.PropTypes.string.isRequired,
};

ReactDOM.render(<Application title="My Friends"/ >, document.getElementById('container'));
