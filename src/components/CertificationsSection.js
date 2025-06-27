import React from "react";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="mb-5">
      <h2>Certifications</h2>
      <div className="d-flex flex-wrap gap-3">
        <img src="/azure_sa_expert.png" alt="Azure solutions Architect Expert" className="img-fluid" style={{ maxWidth: "150px" }} />
        <img src="/azure_devops_expert.png" alt="Azure DevOps Engineer Expert" className="img-fluid" style={{ maxWidth: "150px" }} />
        <img src="/azure_admin.png" alt="Azure Administrator" className="img-fluid" style={{ maxWidth: "150px" }} />
      </div>
    </section>
  );
}
