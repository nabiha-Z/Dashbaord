import React from 'react'
import { FaBars } from 'react-icons/fa';

export default function Menu1({ image, collapsed, rtl, toggled, handleToggleSidebar }) {
  return (
    <div className="container">
      <div
        style={{
          width: 35,
          height: 35,
          height: 35,
          color: '#353535',
          textAlign: 'center',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          cursor: 'pointer'
        }}
        onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
