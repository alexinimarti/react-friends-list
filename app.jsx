// var App = React.createClass({
//
//   getInitialState: function() {
//     return {
//       data: []
//     }
//   },
//
//   componentDidMount: function() {
//     var th = this;
//     this.serverRequest =
//       axios.get(this.props.source)
//         .then(function(result) {
//           th.setState({
//             data: result.data
//           });
//         })
//   },
//
//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },
//
//   render: function() {
//     console.log(this.state.data);
//     return (
//       <div>
//
//         {this.state.data.map(function(data) {
//           return (
//             <div key={data.id} className="job">
//                 <h3>{data.name}</h3>
//                     {data.igHandle}
//             </div>
//           );
//         })}
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(<App source="http://rest.learncode.academy/api/alexine/friends" />, document.querySelector("#root"));

//TRY

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
      <div className="igHandle">
        @{ props.igHandle }
      </div>
    </div>
</div>
  );
}

FriendEntry.propTypes = {
  name: React.PropTypes.string.isRequired,
  igHandle: React.PropTypes.string.isRequired,
}


function Application(props) {


  return (


    <div className="table">
    <Header title={props.title} />
      <div className="friend-list">

        { name[1]}
        { igHandle[1] };

      </div>

  </div>

  );
}

Application.propTypes = {
  title: React.PropTypes.string.isRequired,
};

ReactDOM.render(<Application title="My Friends"/ >, document.getElementById('container'));
