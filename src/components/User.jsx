
import React from "react";
import { useState,useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";


function User() {

  const [users, setUser] = useState([]);
  const [search, setSearch] = useState('');


  const searchitem = users.filter((item)=> {
    if(search == '') {
      return item;
    }else if (item.name.toLowerCase().includes(search.toLowerCase())){
      
       return item;
       
    }
  })

  const [showPerPage, setShowPerPage] = useState(8);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
  const result = await axios.get("http://localhost:4000/users");
    setUser(result.data);
  };
 

    return (
      <>
      
            
      
      <div className="container">
      <div className="py-4">
      <div className="py-2">
      <input
              type="text"
              className="form-control form-control-lg "
              placeholder="search by name "
               onChange={e => setSearch(e.target.value)}
            />
            </div>
        <table class="table border shadow">
          <thead className="thead-dark" >
          <tr>
              <th scope="col">SN</th>
              <th scope="col">Name</th>
              <th scope="col">Sex</th>
              <th scope="col">Mobile</th>
              <th scope="col">Address</th>
              <th scope="col">GovtID</th>
              <th scope="col">Guardian Details</th>
              <th scope="col">Nationality</th>
            </tr>
          </thead>
          <tbody >
            {searchitem.slice(pagination.start, pagination.end).map((user, index) => (
             <tr>
             <th scope="row">{index + 1}</th>
             <td>{user.name}</td>
             <td>{user.sex}</td>
             <td>{user.mobile}</td>
             <td>{user.address}</td>
             <td>{user.govtid}</td>
             <td>{user.gaurdianname}</td>
             <td>{user.nationality}</td>
             </tr>
            ))}
          </tbody>
        </table>
        <div className="py-2">
        
        </div>
        <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={searchitem.length}
        />
      </div>
    </div>
    </>
    );
  }
  
  export default User;