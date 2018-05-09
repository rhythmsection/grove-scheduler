import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/tasks';
import TaskList from './taskList';
import Notification from 'react-web-notification'
import './task.css'

class TasksContainer extends Component {

  static propTypes = {
    tasks: PropTypes.object
  }

  componentWillMount () {
    this.props.fetchTasks()
  }

  render() {
    const { tasks } = this.props
    const spanGreen = {color: 'lightgreen'}
    const spanSalmon = {color: 'lightsalmon'}
    return this.props.tasks.loaded
      ? (
        <div className='taskList'>
          <TaskList tasks={tasks} />
          <Notification
            title={`You have ${tasks.list.length} scheduled tasks.`}
          />
          <div>**Your upcoming tasks are listed in <span style={spanGreen}>green</span>, while your recently passed tasks are listed in <span style={spanSalmon}>salmon</span>.**</div>
        </div>
      )
      : null
  }
}


const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer)
