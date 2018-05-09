import axios from 'axios'
import parser from 'cron-parser'
import moment from 'moment'

export const receiveTasks = (tasks) => {
  return {
    type: 'RECEIVE_TASKS',
    tasks
  }
}

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TASKS' })
  const { data: { data } } = await axios.get('https://scheduler-challenge.herokuapp.com/schedule')

  const tasks = data.map((task) => {
    const now = moment()
    const parsedTime = parser.parseExpression(task.attributes.cron)
    const next = parsedTime.next().toString()
    const previous = parsedTime.prev().toString()
    const isRecent = now.diff(previous, 'hours') <= 3
    const isUpcoming = moment(next).diff(now, 'hours') <= 24
    const idByTime = moment(next).format('YYYYMMDD')


    return {
      id: idByTime,
      name: task.attributes.name,
      next: {
        time: moment(next).format('LT'),
        date: moment(next).format('l'),
        isUpcoming
      },
      previous: {
        time: moment(previous).format('LT'),
        date: moment(next).format('l'),
        isRecent
      }
    }
  })

  tasks.sort((a, b) => a.id - b.id)
  dispatch(receiveTasks(tasks))
}
