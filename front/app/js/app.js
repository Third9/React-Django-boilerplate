import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import TodoList from '../components/ListView';

import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
            title: "",
            description: ""
        };

        this.refreshContents = this.refreshContents.bind(this);
        this.callPost = this.callPost.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    componentDidMount() {
        this.refreshContents()
    }

    refreshContents() {
        console.log('refreshContents');
        const self = this;
        axios.get('api/todo')
          .then(function (response) {
              console.log(response);
              self.setState({contents: response.data})
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    callPost() {
        const self = this;
        axios.post('api/todo', {
            title: this.state.title,
            description: this.state.description
        })
        .then(function (response) {
            console.log(response);
            self.refreshContents()
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onChangeInput(event) {
        let _name = event.target.name;
        let _value = event.target.value;
        this.setState({[_name]: _value})
    }

    render(){
        const todoItems = this.state.contents;

        return (
            <div>
                <h1>React with Django - Todo</h1>
                <TextField
                  hintText=""
                  floatingLabelText="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChangeInput}
                />
                <TextField
                  hintText=""
                  floatingLabelText="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChangeInput}
                />
                <RaisedButton label="Get" onClick={this.refreshContents} />
                <RaisedButton label="Post" onClick={this.callPost} />
                <TodoList items={todoItems} />
            </div>
        );
    }
}

export default App;