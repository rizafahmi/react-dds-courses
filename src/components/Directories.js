import React from 'react'
import { Link } from 'react-router-dom'

const Directories = props => (
  <ul>
    {props.directories &&
      props.directories.map(course => {
        return (
          <li key={course.sha}>
            <Link to={'/' + course.name + '/'}>{course.name}</Link>
          </li>
        )
      })}
  </ul>
)

export default Directories
