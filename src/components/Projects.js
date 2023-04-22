import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Web Server": {
        title: "A simple but fuctional web-server",
        desc:
          "This is a simple web-server written in Java that supports GET and HEAD requests.",
        techStack: "Java",
        link: "https://github.com/antonlnz/web-server",
        image: "/assets/web_request.png"
      },
      javascriptcalculator: {
        title: "Javascript Calculator",
        desc:
          "A simple Javascript and HTML Calculator",
        techStack: "JAVASCRIPT",
        link: "https://github.com/antonlnz/javascript-calculator",
        open: "https://antonlnz.github.io/javascript-calculator/",
        image: "/assets/calculator_demo.png"
      },
      "C Shell": {
        title: "C Shell",
        desc:
          "The program consists of a shell similar to what bash and zsh do, with some included functions and also the ability to run any other command on the *nix system.",
        techStack: "C, MAKE",
        link: "https://github.com/antonlnz/SO-shell",
      },
      cproyect: {
        title: "Auction Manager",
        desc:
          "A software to manage poducts and bids.",
        techStack: "C, MAKE",
        link: "https://github.com/antonlnz/PRO2_Pract2",
      }
    };
    const projects = {
      "Web Server": {
        desc:
          "Web server written in Java that supports GET and HEAD requests.",
        techStack: "Java",
        link: "https://github.com/antonlnz/web-server",
      },
      "Javascript Calculator": {
        desc:
          "A basic calculator built with HTML and JavaScript. This was a project to learn a little JavaScript",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/antonlnz/javascript-calculator",
        open: "https://antonlnz.github.io/javascript-calculator/"
      },
      "C Shell": {
        desc:
          "A shell similar to bash and zsh, with predefined file and memory management functions and the ability to execute any other command on the *nix system.",
        techStack: "C, MAKE",
        link: "https://github.com/antonlnz/SO-shell"
      },
      "Auction Manager": {
        desc:
          "A system for product management and bidding. It uses abstract data types: a dynamic list to store the products and a dinamic stack to store the bids for each product.",
        techStack: "C, MAKE",
        link: "https://github.com/antonlnz/PRO2_Pract2",
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
