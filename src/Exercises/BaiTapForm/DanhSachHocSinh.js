import React from 'react'

export default function DanhSachHocSinh(props) {
  let { list } = props;

  const renderList = () => {
    return list.map((person, index) => {
      return (
        <div className="row ">
          <div className="col-6 d-flex justify-content-between " key={index}>
            <div className="infor-person  border border-primary mb-4 p-3">
              <p>Họ tên:{person.userName}</p>
              <p>Email:{person.email}</p>
              <p>Sdt:{person.phone}</p>
            </div>
            <div className="delete-button">
              <button className="btn btn-danger" onClick={() => { props.xoaPerson(person.userName) }}>X</button>
            </div>

          </div>
          {/* <div className="col-6">
     
          </div> */}

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
