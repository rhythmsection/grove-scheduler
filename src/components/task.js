import React from 'react'
import PropTypes from 'prop-types'

const Task = ({task, soonestId}) => {
  return (
    <tr>
      <td>{task.name}</td>
      <td>{task.previous.date}</td>
      <td className={task.previous.isRecent ? 'recent' : ''}>{task.previous.time}</td>
      <td>{task.next.date}</td>
      <td className={task.next.isUpcoming ? 'upcoming' : ''}>{task.next.time}</td>
    </tr>
  )
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
