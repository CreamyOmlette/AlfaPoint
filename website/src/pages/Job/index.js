import "./style.scss";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Vacancies } from "../../components/vacancies";
import { ContactForm } from "../../components/contact-form";
import { useWidth } from "../../hooks/useWidth";
import { useEffect, useState } from "react";

export function Job() {
  const width = useWidth();
  const [stackVisibility, setStackVisibility] = useState(true);
  useEffect(() => {
    if (width <= 800) {
      setStackVisibility(false);
    } else {
      setStackVisibility(true);
    }
  }, [width]);
  const vacancies = [
    {
      id: 0,
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      stack: "MEAN",
      content: `<p>We welcome DevOps Engineers to join our amazing team. We are as interested in your work experience as we are in the kind of person you are. At Frakton/Melon we believe there are three key qualities to being a good teammate, as well as client: being smart, delivering results and being nice. This is why beyond your skills, we value character, reason, and sense of humor, and we appreciate the potential for growth. Our team is agile, hard-working, supportive, and friendly and we like to keep it this way. If you would like to join Frakton/Melon, here is what you will do most of the time:
      </p><p>Implementing code and container building automation (Continuous Integration)
      Implementing blue-green or rolling deployment automation (Continuous Deployment)
      Keeping healthy communication with your colleagues
      Deploying/configuring cloud services manually or using Infrastructure as a Code (Terraform)
      Troubleshooting availability, performance, or application release problems
      Writing technical documentation
      Learning from your colleagues and teaching them what you know
      Requirements:
      </p><p>Previous work experience as System Administrator or Developer
      Interest and understanding of DevOps principles
      Knowing at least one programming or scripting language
      Web application hosting knowledge (Web servers, SSL certificates, know how HTTP works, etc.)
      Basic understanding of networking (TCP/IP, DNS, Firewalls, etc.)
      Basics of the different Linux flavors (Debian/Ubuntu/RHEL/AWS Linux)
      Basic understanding of Cloud Services offered by AWS/Azure/GCP
      Excellent communication skills
      Advantages:
      </p><p>Previous work experience as a DevOps Engineer
      Practical experience with Public Clouds (AWS/Azure/Google Cloud)
      Experience with databases – MSSQL, MySQL, PostgreSQL
      Knowledgeable in DevOps automation tools (Terraform, Ansible, etc.)
      Experience with web applications and REST APIs – development, deployment or support
      Experience with Docker containers
      To apply, please send your CV with the position reference in the subject. If you have written relevant code, we encourage you to send an example. Your application will be treated with confidentiality. Only shortlisted candidates will be contacted for the next phase.</p>`,
    },
    {
      id: 1,
      title: "Backend Java Developer - Junior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      stack: "MEAN",
      content: `<p>We welcome DevOps Engineers to join our amazing team. We are as interested in your work experience as we are in the kind of person you are. At Frakton/Melon we believe there are three key qualities to being a good teammate, as well as client: being smart, delivering results and being nice. This is why beyond your skills, we value character, reason, and sense of humor, and we appreciate the potential for growth. Our team is agile, hard-working, supportive, and friendly and we like to keep it this way. If you would like to join Frakton/Melon, here is what you will do most of the time:
      </p><p>Implementing code and container building automation (Continuous Integration)
      Implementing blue-green or rolling deployment automation (Continuous Deployment)
      Keeping healthy communication with your colleagues
      Deploying/configuring cloud services manually or using Infrastructure as a Code (Terraform)
      Troubleshooting availability, performance, or application release problems
      Writing technical documentation
      Learning from your colleagues and teaching them what you know
      Requirements:
      </p><p>Previous work experience as System Administrator or Developer
      Interest and understanding of DevOps principles
      Knowing at least one programming or scripting language
      Web application hosting knowledge (Web servers, SSL certificates, know how HTTP works, etc.)
      Basic understanding of networking (TCP/IP, DNS, Firewalls, etc.)
      Basics of the different Linux flavors (Debian/Ubuntu/RHEL/AWS Linux)
      Basic understanding of Cloud Services offered by AWS/Azure/GCP
      Excellent communication skills
      Advantages:
      </p><p>Previous work experience as a DevOps Engineer
      Practical experience with Public Clouds (AWS/Azure/Google Cloud)
      Experience with databases – MSSQL, MySQL, PostgreSQL
      Knowledgeable in DevOps automation tools (Terraform, Ansible, etc.)
      Experience with web applications and REST APIs – development, deployment or support
      Experience with Docker containers
      To apply, please send your CV with the position reference in the subject. If you have written relevant code, we encourage you to send an example. Your application will be treated with confidentiality. Only shortlisted candidates will be contacted for the next phase.</p>`,
    },
    {
      id: 2,
      title: "Backend Java Developer - Middle",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      stack: "MEAN",
      content: `<p>We welcome DevOps Engineers to join our amazing team. We are as interested in your work experience as we are in the kind of person you are. At Frakton/Melon we believe there are three key qualities to being a good teammate, as well as client: being smart, delivering results and being nice. This is why beyond your skills, we value character, reason, and sense of humor, and we appreciate the potential for growth. Our team is agile, hard-working, supportive, and friendly and we like to keep it this way. If you would like to join Frakton/Melon, here is what you will do most of the time:
      </p><p>Implementing code and container building automation (Continuous Integration)
      Implementing blue-green or rolling deployment automation (Continuous Deployment)
      Keeping healthy communication with your colleagues
      Deploying/configuring cloud services manually or using Infrastructure as a Code (Terraform)
      Troubleshooting availability, performance, or application release problems
      Writing technical documentation
      Learning from your colleagues and teaching them what you know
      Requirements:
      </p><p>Previous work experience as System Administrator or Developer
      Interest and understanding of DevOps principles
      Knowing at least one programming or scripting language
      Web application hosting knowledge (Web servers, SSL certificates, know how HTTP works, etc.)
      Basic understanding of networking (TCP/IP, DNS, Firewalls, etc.)
      Basics of the different Linux flavors (Debian/Ubuntu/RHEL/AWS Linux)
      Basic understanding of Cloud Services offered by AWS/Azure/GCP
      Excellent communication skills
      Advantages:
      </p><p>Previous work experience as a DevOps Engineer
      Practical experience with Public Clouds (AWS/Azure/Google Cloud)
      Experience with databases – MSSQL, MySQL, PostgreSQL
      Knowledgeable in DevOps automation tools (Terraform, Ansible, etc.)
      Experience with web applications and REST APIs – development, deployment or support
      Experience with Docker containers
      To apply, please send your CV with the position reference in the subject. If you have written relevant code, we encourage you to send an example. Your application will be treated with confidentiality. Only shortlisted candidates will be contacted for the next phase.</p>`,
    },
    {
      id: 3,
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      stack: "MEAN",
      content: `<p>We welcome DevOps Engineers to join our amazing team. We are as interested in your work experience as we are in the kind of person you are. At Frakton/Melon we believe there are three key qualities to being a good teammate, as well as client: being smart, delivering results and being nice. This is why beyond your skills, we value character, reason, and sense of humor, and we appreciate the potential for growth. Our team is agile, hard-working, supportive, and friendly and we like to keep it this way. If you would like to join Frakton/Melon, here is what you will do most of the time:
      </p><p>Implementing code and container building automation (Continuous Integration)
      Implementing blue-green or rolling deployment automation (Continuous Deployment)
      Keeping healthy communication with your colleagues
      Deploying/configuring cloud services manually or using Infrastructure as a Code (Terraform)
      Troubleshooting availability, performance, or application release problems
      Writing technical documentation
      Learning from your colleagues and teaching them what you know
      Requirements:
      </p><p>Previous work experience as System Administrator or Developer
      Interest and understanding of DevOps principles
      Knowing at least one programming or scripting language
      Web application hosting knowledge (Web servers, SSL certificates, know how HTTP works, etc.)
      Basic understanding of networking (TCP/IP, DNS, Firewalls, etc.)
      Basics of the different Linux flavors (Debian/Ubuntu/RHEL/AWS Linux)
      Basic understanding of Cloud Services offered by AWS/Azure/GCP
      Excellent communication skills
      Advantages:
      </p><p>Previous work experience as a DevOps Engineer
      Practical experience with Public Clouds (AWS/Azure/Google Cloud)
      Experience with databases – MSSQL, MySQL, PostgreSQL
      Knowledgeable in DevOps automation tools (Terraform, Ansible, etc.)
      Experience with web applications and REST APIs – development, deployment or support
      Experience with Docker containers
      To apply, please send your CV with the position reference in the subject. If you have written relevant code, we encourage you to send an example. Your application will be treated with confidentiality. Only shortlisted candidates will be contacted for the next phase.</p>`,
    },
    {
      id: 4,
      title: "Backend Java Developer - Senior",
      location: "Chisinau, Moldova",
      client: "Germany, EU",
      stack: "MEAN",
      content: `<p>We welcome DevOps Engineers to join our amazing team. We are as interested in your work experience as we are in the kind of person you are. At Frakton/Melon we believe there are three key qualities to being a good teammate, as well as client: being smart, delivering results and being nice. This is why beyond your skills, we value character, reason, and sense of humor, and we appreciate the potential for growth. Our team is agile, hard-working, supportive, and friendly and we like to keep it this way. If you would like to join Frakton/Melon, here is what you will do most of the time:
      </p><p>Implementing code and container building automation (Continuous Integration)
      Implementing blue-green or rolling deployment automation (Continuous Deployment)
      Keeping healthy communication with your colleagues
      Deploying/configuring cloud services manually or using Infrastructure as a Code (Terraform)
      Troubleshooting availability, performance, or application release problems
      Writing technical documentation
      Learning from your colleagues and teaching them what you know
      Requirements:
      </p><p>Previous work experience as System Administrator or Developer
      Interest and understanding of DevOps principles
      Knowing at least one programming or scripting language
      Web application hosting knowledge (Web servers, SSL certificates, know how HTTP works, etc.)
      Basic understanding of networking (TCP/IP, DNS, Firewalls, etc.)
      Basics of the different Linux flavors (Debian/Ubuntu/RHEL/AWS Linux)
      Basic understanding of Cloud Services offered by AWS/Azure/GCP
      Excellent communication skills
      Advantages:
      </p><p>Previous work experience as a DevOps Engineer
      Practical experience with Public Clouds (AWS/Azure/Google Cloud)
      Experience with databases – MSSQL, MySQL, PostgreSQL
      Knowledgeable in DevOps automation tools (Terraform, Ansible, etc.)
      Experience with web applications and REST APIs – development, deployment or support
      Experience with Docker containers
      To apply, please send your CV with the position reference in the subject. If you have written relevant code, we encourage you to send an example. Your application will be treated with confidentiality. Only shortlisted candidates will be contacted for the next phase.</p>`,
    },
  ];
  const { id } = useParams();
  const activeJob = vacancies.find((j) => j.id === parseInt(id));
  return (
    <>
      <div className="job-title">
        <div className="container">
          <div className="job-title-content">
            <h2>{activeJob.title}</h2>
            <small>June 22, 2022</small>
          </div>
        </div>
      </div>
      <div className="job">
        <div className="job-description container">
          {parse(activeJob.content)}
        </div>
        <div className="other-vacancies">
          <h2>Vacancies to consider</h2>
          <Vacancies
            vacancies={vacancies}
            hideLocation={true}
            hideStack={!stackVisibility}
          ></Vacancies>
        </div>
      </div>
      <ContactForm></ContactForm>
    </>
  );
}
