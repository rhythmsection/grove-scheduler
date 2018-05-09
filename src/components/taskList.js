import React from 'react'
import Task from './task'
import { Table } from 'react-bootstrap'
import './task.css'

const TaskList = ({tasks}) => {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Task</th>
          <th>Last Scheduled Date</th>
          <th>Last Scheduled Time</th>
          <th>Next Scheduled Date</th>
          <th>Next Scheduled Time</th>
        </tr>
      </thead>
      <tbody>
      {tasks.list.map((task) =>
        <Task task={task}/>
      )}
      </tbody>
    </Table>
  )
}

export default TaskList
