// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alfaiz Khatib - Portfolio</title>
        <meta
          name="description"
          content="Alfaiz Khatib's personal portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="header-content">
          <h1>Alfaiz Khatib</h1>
          <p>Welcome to my vibrant and attractive personal portfolio!</p>
          <p>Passionate about web development and creating awesome projects.</p>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm Alfaiz Khatib, a passionate web developer with expertise in
          the MERN stack (MongoDB, Express.js, React, Node.js) and NEXT.js. I
          recently completed an intensive web development course and
          successfully concluded a one-month internship as a full-stack web
          developer.
        </p>
        <p>
          I specialize in creating responsive and user-friendly web
          applications. My technical skills include proficiency in HTML, CSS,
          JavaScript, and various web development libraries and frameworks. I am
          always eager to learn and explore new technologies to stay up-to-date
          with the rapidly evolving field of web development.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="grid">
          {/* Project 1 - Stack Overflow Clone */}
          <a
            href="https://stackoverflow-phi-hazel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-item">
              <img src="/stack.png" alt="Stack Overflow Clone Project" />
              <h3>Stack Overflow Clone</h3>
              <p>
                My first project was a Stack Overflow clone, where I implemented
                various features and functionalities to replicate the popular
                Q&A platform. The project is deployed at{" "}
                <span className="project-url">
                  https://stackoverflow-phi-hazel.vercel.app/
                </span>
                .
              </p>
            </div>
          </a>

          {/* Project 2 - MovieFlix */}
          <a
            href="https://movieflix-liart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-item">
              <img src="/movie.png" alt="MovieFlix Project" />
              <h3>MovieFlix</h3>
              <p>
                MovieFlix is my second project, a movie database application
                where users can explore and discover information about movies.
                Check it out at{" "}
                <span className="project-url">
                  https://movieflix-liart.vercel.app/
                </span>
                .
              </p>
            </div>
          </a>

          {/* Project 3 - E-Commerce */}
          <a
            href="https://a-ecommerce.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-item">
              <img src="/ecom.png" alt="E-Commerce Project" />
              <h3>E-Commerce Platform</h3>
              <p>
                My third project is an E-Commerce platform, offering a seamless
                shopping experience with a variety of products. Explore it at{" "}
                <span className="project-url">
                  https://a-ecommerce.vercel.app/
                </span>
                .
              </p>
            </div>
          </a>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Node.js</li>
          {/* Add more skills as needed */}
        </ul>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Web Developer Intern</h3>
          <p>
            One-month internship as a full-stack web developer. Collaborated
            with a dynamic team to deliver high-quality web solutions. Gained
            valuable experience in real-world development scenarios.
          </p>
        </div>
        {/* Add more experience items as needed */}
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: alfaizkhatib8@gmail.com</p>
        <p>Phone: 7030335101</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/alfaiz-khatib-2a2b09219/"
            rel="noopener noreferrer"
          >
            linkedin.com/in/alfaiz-khatib
          </a>
        </p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Alfaiz Khatib. All rights reserved.</p>
      </footer>
    </div>
  );
}
