import React from "react";

export default function BioSection() {
  return (
    <section id="bio" className="mb-5">
      <h3>A Platform Engineer with a passion for DevOps and Automation</h3>
      <div className="row align-items-center">
        <div className="col-md-8">
          <p>
            DevOps and Automation Specialist with over 15 years of experience in senior infrastructure roles and technical team management within enterprise and managed service provider sectors. Expert in cloud migration and IT systems management, with a strong focus on leveraging Azure and DevOps practices to streamline and automate business IT operations.<br /><br />
            Proven track record in strategic planning, support, and management of technical systems to enhance efficiency and productivity. Skilled in scripting and automation using DevOps and Infrastructure as Code (IaC) tools to deliver turnkey solutions that address complex IT challenges. Adept at developing and implementing collaborative strategies to meet clients' IT project goals and ensure seamless integration and security in cloud environments.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/rsz_img_0069_1b.jpg" alt="Your Photo" className="img-fluid rounded mb-3" style={{ maxWidth: "200px" }} />
        </div>
      </div>
    </section>
  );
}
