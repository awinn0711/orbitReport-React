import styles from "./styling.css";

const Table = ({ sat }) => {

  const tableBody = sat.map((id, data) => {
    return (
    <tr key={id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      <td>{data.operational ? "Active" : "Inactive"}</td>
    </tr>
    )
  })

  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {tableBody}
      
     </tbody>
   </table>
  );
};

export default Table;