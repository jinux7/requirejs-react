define(['react','reactdom'],function(React,ReactDOM){
  /*var NotesList = React.createClass({
        render: function() {
          return (
            <ol>
              {
                React.Children.map(this.props.children, (child) => {
                  return <li>{child}</li>;
                })
              }
            </ol>
          );
        }
      });*/
      var HelloMessage = React.createClass({
        render: function() {
          return (
            <div onClick={this.clickFn.bind(this,1,2)}>哈哈哈哈哈a</div>
            );
        },
        clickFn(a,b,ev){
          console.log(ev);
        }
      });
      ReactDOM.render(
          <HelloMessage></HelloMessage>,
        document.getElementById('app')
      );
});