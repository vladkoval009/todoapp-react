import React, {Component} from 'react'
import PropTypes from 'prop-types';


class AddTodo extends Component {

    state = {
        title: ' '
    }

    // Creating the method with the arrow func. targeting the value in the state to whatever I type into the input.
    // CHANGING THE STATE DYNAMICALY 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value} );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: '' });
    }
    

    render() {
        return (
          <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input 
              type="text" 
              name="title" 
              style={{ flex: '10', padding: '5px' }}
              placeholder="Add Todo ..."
              value={this.state.value}
              onChange={this.onChange}
            />
            <input 
              type="submit" 
              value="Submit" 
              className="btn"
              style={{flex: '1'}}
            />
          </form>
        )
      }
    
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  
export default AddTodo;