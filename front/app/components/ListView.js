/**
 * Created by KwonH on 2017-03-21.
 */
import React from 'react';

import {List, ListItem} from 'material-ui/List';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const todoItems = this.props.items;
        return (
            <div>
                <List>
                    {todoItems.map((todo)=>{
                        return (<ListItem
                            key={todo.id}
                            primaryText={todo.title}
                            secondaryText={todo.description}
                        />)
                    })}
                </List>
            </div>
        )
    }
}

TodoList.propTypes = {
    items: React.PropTypes.object
};

export default TodoList;