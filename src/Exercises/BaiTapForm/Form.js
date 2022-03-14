import React, { useState } from 'react'
import DanhSachHocSinh from './DanhSachHocSinh';

export default function Form() {
  const [info, setInfo] = useState({
    values: {
      'userName': '',
      'email': '',
      'phone': ''
    }
  });
  const [danhSach, setDanhSach] = useState({
    list: []
  });
  const handleChangeValue = (event) => {
    let { name, value } = event.target;
    let newValue = { ...info.values, [name]: value };
    setInfo({
      values: newValue
    })
  }
  const handleSaveDanhSach = (event) => {
    event.preventDefault();
    let danhSachNhapVao = { ...info.values };
    danhSach.list.push(danhSachNhapVao);
    let danhSachCapNhat = [...danhSach.list];

    setDanhSach({
      list: danhSachCapNhat
    })

  }

  const xoaPerson = (userName)=> {
    let index = danhSach.list.findIndex(ds => ds.userName === userName);
    if (index !== -1) {
      danhSach.list.splice(index, 1);
  }
    let danhSachCapNhat = [...danhSach.list];
    setDanhSach({
      list:danhSachCapNhat
    })
  }

  return (
    <div className="container pt-5">
      <form onSubmit={handleSaveDanhSach}>
        <div className="row">
          <div className="col-12">
            <div className="group">
              <input value={info.values.userName} name="userName" required type="text" onChange={handleChangeValue} />
              <span className="highlight" />
              <span className="bar" />
              <label>Họ tên</label>
            </div>
          </div>
          <div className="col-12">
            <div className="group">
              <input value={info.values.email} name="email" type="email" required onChange={handleChangeValue} />
              <span className="highlight" />
              <span className="bar" />
              <label>Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="group">
              <input value={info.values.phone} name="phone" type="text" required onChange={handleChangeValue} />
              <span className="highlight" />
              <span className="bar" />
              <label>Số điện thoại</label>
            </div>
          </div>
        </div>
        <div>


        </div>
        <div className="row">
          <button className="btn text-white bg-dark " style={{ fontSize: 25 }}>Lưu</button>
        </div>
      </form>
        <DanhSachHocSinh list={danhSach.list} xoaPerson={xoaPerson}/>
    </div>
  )
}
