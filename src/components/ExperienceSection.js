import React from "react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-5">
      <h2>Relevant Experience and Skills</h2>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light border-0">PowerShell</li>
            <li className="list-group-item bg-dark text-light border-0">Terraform</li>
            <li className="list-group-item bg-dark text-light border-0">Azure DevOps</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark text-light border-0">Azure</li>
            <li className="list-group-item bg-dark text-light border-0">GitHub</li>
            <li className="list-group-item bg-dark text-light border-0">CI/CD Pipelines</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
