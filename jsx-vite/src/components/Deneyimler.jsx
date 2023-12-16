export default function Deneyimler() {
  const styles = {
    h2Style: { textAlign: "center", fontSize: "25px", color: "#ad1457" },
    h4Style: { color: "#6a1b9a", fontSize: "20px" },
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2 style={styles.h2Style}>Kodar Bilişim</h2>
          <h4 style={styles.h4Style}>Junior Flutter Developer</h4>
          <ul>
            <li>Working together with the team, 2 projects were completed.</li>
            <li>
              UI codes of the designs created by the designer were written.
            </li>
            <li>
              Using RESTful API, a request was sent to the server with dart
              language and data was retrieved.
            </li>
            <li>
              Bloc (Cubit) package was used as the state management structure in
              the projects.
            </li>
            <li>Responsiveness has been provided in applications.</li>
            <li>Fixed bug issues within the application</li>
            <li>
              The application was developed using GeoLocator and flutter_map
              libraries.
            </li>
            <li>Projects were saved with Fork</li>
            <li>
              Working closely with the team leader, new information was gained
              about mobile applications.
            </li>
          </ul>
        </div>
        <div>
          <h2 style={styles.h2Style}>Aydem Enerji</h2>
          <h4 style={styles.h4Style}>.Net Developer Intern</h4>
          <ul>
            <li>View and Controller Concepts with Asp.Net Mvc5</li>
            <li>Create classes using Code First</li>
            <li>Performing database operations using MsSql</li>
            <li>
              A reporting application was developed with C# for use in the
              finance department.
            </li>
            <li>Our own CV site was created with C#</li>
            <li>
              Creating a database, saving data to the table, deleting data from
              the table and searching
            </li>
            <li>SAP MM PM QM module screen usage information</li>
            <li>Revisions in output forms using SAP ABAP language.</li>
            <li>Research on the ABAP language.</li>
            <li>Database work in company’s in-house .Net programs(MsSql).</li>
            <li>Examination of data flow between SAP and non-SAP systems</li>
            <li>
              Fullstack application was made. The database was created, the
              database connection was made, the API was created, and the front
              was merged with this API.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
