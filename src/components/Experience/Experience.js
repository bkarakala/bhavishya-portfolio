import React from "react";

const Experience = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    backgroundColor: "#F8F9FA",
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    position: "relative",
  };

  const underlineStyle = {
    content: '""',
    display: "block",
    width: "60px",
    height: "4px",
    backgroundColor: "#FF4500",
    margin: "8px auto 20px auto",
    borderRadius: "2px",
  };

  const experienceWrapperStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1100px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    minWidth: "400px",
    textAlign: "left",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const dateStyle = {
    color: "#FF4500",
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "4px",
  };

  const bulletPointStyle = {
    marginBottom: "8px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        MY EXPERIENCE
        <span style={underlineStyle}></span>
      </h2>

      <div style={experienceWrapperStyle}>
        {/* Experience 1 */}
        <div style={cardStyle}>
          <p style={dateStyle}>Oct 2023 - Present</p>
          <p style={headerStyle}>.NET Developer – State Street, USA</p>
          <hr />
          <ul>
            <li style={bulletPointStyle}>
              Migrated legacy systems to <strong>.NET Core</strong>, optimizing
              performance & database efficiency.
            </li>
            <li style={bulletPointStyle}>
              Developed scalable applications using{" "}
              <strong>C#, ASP.NET MVC/Web API</strong>.
            </li>
            <li style={bulletPointStyle}>
              Integrated <strong>OAuth 2.0 & JWT authentication</strong> into
              RESTful APIs.
            </li>
            <li style={bulletPointStyle}>
              Implemented <strong>microservices architecture</strong> and
              deployed using <strong>Docker & Kubernetes</strong>.
            </li>
            <li style={bulletPointStyle}>
              Enhanced backend performance using{" "}
              <strong>asynchronous programming & caching mechanisms</strong>.
            </li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div style={cardStyle}>
          <p style={dateStyle}>Feb 2020 - Aug 2022</p>
          <p style={headerStyle}>.NET Developer – GlobalTech, India</p>
          <hr />
          <ul>
            <li style={bulletPointStyle}>
              Developed full-stack enterprise applications using{" "}
              <strong>.NET Core, React.js, SQL Server</strong>.
            </li>
            <li style={bulletPointStyle}>
              Implemented <strong>scalable APIs</strong> integrating with
              third-party services.
            </li>
            <li style={bulletPointStyle}>
              Optimized <strong>SQL queries, stored procedures, and indexing</strong>{" "}
              for better performance.
            </li>
            <li style={bulletPointStyle}>
              Developed automated <strong>unit & UI tests using Selenium and C#</strong>.
            </li>
            <li style={bulletPointStyle}>
              Managed cloud deployments on <strong>AWS (EC2, S3, RDS, Lambda)</strong>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
