import React from 'react'

export default function DanhSachHocSinh(props) {
  let { list } = props;

  const renderList = () => {
    return list.map((person, index) => {
      return (
        <div className="row d-flex">
          <div className="col-6" key={index}>
            <p>Họ tên:{person.userName}</p>
            <p>Email:{person.email}</p>
            <p>Sdt:{person.phone}</p>

          </div>
          <div className="col-6">
            <button onClick={()=>{props.xoaPerson(person.userName)}}>X</button>
          </div>

        </div>
      )
    })
  }

  return (
    <div>
      {renderList()}
    </div>
  )
}
