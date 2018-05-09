import assert from 'assert'
import reducer from '../../reducers/tasks'

describe('Task Reducers', () => {
  const initialState = {
    list: [],
    loaded: false
  }

  const tasks = [
    {
      id: 1,
      name: 'Solve A Puzzle',
      next: {
        time: '7:00 AM',
        date: '5/10/2018',
        isUpcoming: true
      },
      previous: {
        time: '7:00 AM',
        date: '5/10/2017',
        isRecent: false
      }
    },
    {
      id: 2,
      name: 'Eat Cake',
      next: {
        time: '10:00 AM',
        date: '5/14/2018',
        isUpcoming: false
      },
      previous: {
        time: '10:00 AM',
        date: '5/14/2017',
        isRecent: false
      }
    },
    {
      id: 3,
      name: 'Dance In Place',
      next: {
        time: '7:00 AM',
        date: '5/12/2018',
        isUpcoming: false
      },
      previous: {
        time: '7:00 AM',
        date: '5/9/2018',
        isRecent: true
      }
    }
  ]

  it('should return the initial state on @@INIT', () => {
    assert.deepEqual(
      reducer(undefined, { type: '@@INIT' }),
      initialState
    )
  })

  it('should receive tasks, change loaded to true', () => {
    const action = {
      type: 'RECEIVE_TASKS',
      tasks
    }

    assert.deepEqual(
      reducer(initialState, action),
      {loaded: true, list: tasks}
    )
  })
})
