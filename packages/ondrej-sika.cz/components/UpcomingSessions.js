import React from 'react'
import ButtonOutline from '@app/course-landing/components/ButtonOutline';

import StaticDB from '@app/common/staticdb'

import sessions_file from '@app/data/training/sessions.yml'

let db = new StaticDB()
db.add('sessions', sessions_file)
db.setCursor('sessions')
db.filter('country', 'cz')
db.filter('active', true)
let sessions = db.get()



const Translate = (props) => {
  return <>{props[props.lang]}</>
}

class UpcomingSessions extends React.Component {
  render() {
    let course = this.props.course
    let lang = this.props.lang

    return (
      <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th scope="col" className='col-main'>
            <Translate
              lang={this.props.lang}
              cs='NÁZEV ŠKOLENÍ'
            />
          </th>
          <th scope="col" className='col-min'>
            <Translate
              lang={this.props.lang}
              cs='MÍSTO'
            />
          </th>
          <th scope="col" className='col-min'>
            <Translate
              lang={this.props.lang}
              cs='DATUM'
            />
          </th>
          <th scope="col" className='col-min'>
            <Translate
              lang={this.props.lang}
              cs='CENA'
            />
          </th>
          <th scope="col" className='col-min'>
          <Translate
              lang={this.props.lang}
              cs='DÉLKA'
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {
          sessions.map((course, i) => {
              return (
                <tr key={i}>
                  <td scope="row">{course.name}</td>
                  <td>{course.city}</td>
                  <td>{course.date_from}</td>
                  <td>{course.price}</td>
                  <td>{course.length}</td>
                </tr>
            )
          })
        }
      </tbody>
      </table>
    );
  }
}

export default UpcomingSessions
