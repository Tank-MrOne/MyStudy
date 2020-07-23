import React, { useState, useRef } from 'react'
import PubSub from 'pubsub-js'

export default function Search () {
  const [searchName, setSearchName] = useState('')
  const snRef = useRef(null)

  const handleChange = (e) => {
    setSearchName(e.target.value.trim())
  }

  const search = () => {
    if (searchName) {
      // 通知Main去搜索
      PubSub.publish('SEARCH', searchName)
      // 清除输入
      setSearchName('')
    } else {
      alert('请先输入关键字')
      snRef.current.focus()
    }
  }

  return (
    <section className="jumbotron">
      <h3 className="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" 
          value={searchName} onChange={handleChange} ref={snRef}/> &nbsp;
        <button onClick={search}>Search</button>
      </div>
    </section>
  )
}
