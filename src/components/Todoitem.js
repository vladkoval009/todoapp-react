import React, { Component } from 'react';
import propTypes from 'prop-types';


class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through'
            }
            } else {
            return {
                textDecoration: 'none'
            }

            }
        }


    markComplete = (e) => {
        console.log(this.props)



    }
    



    render() {
        
        const {id, title} = this.props.todo; //Pulling out the values from props. Desconstructed and used after the input {title}.
        return (
            <div style={this.getStyle()}>
            <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this.props.todo.id)} />
            { title }
            <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>X</button>
            </p>
            </div>
        )
    }
}

const btnStyle = {
    background: 'green',
    padding: '10px',
    float: 'right'
}

//PropTypes with whatever the name of the class.
// PropTypes
TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    };
export default TodoItem
 