const Table = ({ sat }) => {
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
        {sat.map((id, data) => {
          return<>
          <tr key={id}>
          <td>{sat[data].name}</td>
          <td>{sat[data].type}</td>
          <td>{sat[data].launchDate}</td>
          <td>{(sat[data].operational) ? "Active": "Inactive"}</td>
          </tr>
          </>
        })}
      </tbody>
    </table>
  );
};

export default Table;