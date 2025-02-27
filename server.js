const http = require('http');

// HTML and CSS for the portfolio
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f9;
            padding: 0;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        header p {
            font-size: 1.2em;
        }

        nav {
            margin-top: 10px;
        }

        nav a {
            text-decoration: none;
            color: #ecf0f1;
            margin: 0 15px;
            font-size: 1.1em;
            font-weight: bold;
        }

        nav a:hover {
            color: #3498db;
        }

        .section {
            margin: 40px 0;
            text-align: center;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .section h2 {
            font-size: 2em;
            color: #2c3e50;
            margin-bottom: 20px;
        }

        .section p {
            color: #666;
            font-size: 1.1em;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .project {
            background: #f4f4f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .project h3 {
            font-size: 1.5em;
            color: #2c3e50;
            margin-bottom: 10px;
        }

        .project p {
            color: #666;
        }

        footer {
            text-align: center;
            padding: 20px 0;
            background: #2c3e50;
            color: #ecf0f1;
            margin-top: 40px;
            box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
        }

        footer p {
            font-size: 1em;
        }

        footer a {
            color: #3498db;
            text-decoration: none;
        }

        footer a:hover {
            color: #1abc9c;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }

            header p {
                font-size: 1em;
            }

            nav a {
                font-size: 0.9em;
                margin: 0 10px;
            }

            .section h2 {
                font-size: 1.8em;
            }

            .section p {
                font-size: 1em;
                padding: 0 10px;
            }

            .projects {
                grid-template-columns: 1fr;
            }

            .project {
                padding: 15px;
            }

            footer p {
                font-size: 0.9em;
            }
        }

        @media (max-width: 480px) {
            header h1 {
                font-size: 1.8em;
            }

            nav a {
                font-size: 0.8em;
                margin: 0 5px;
            }

            .section h2 {
                font-size: 1.6em;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Web Developer | Designer | Creator</p>
        <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <div class="container">
        <section id="about" class="section">
            <h2>About Me</h2>
            <p>I am a passionate web developer with a knack for creating beautiful and functional websites. With a strong focus on simplicity and usability, I aim to bring ideas to life through clean and efficient code.</p>
        </section>

        <section id="projects" class="section">
            <h2>My Projects</h2>
            <div class="projects">
                <div class="project">
                    <h3>Project 1</h3>
                    <p>A responsive e-commerce website built with modern HTML and CSS.</p>
                </div>
                <div class="project">
                    <h3>Project 2</h3>
                    <p>A sleek portfolio site showcasing my work and skills.</p>
                </div>
                <div class="project">
                    <h3>Project 3</h3>
                    <p>A blog platform designed with a focus on user engagement and readability.</p>
                </div>
            </div>
        </section>

        <section id="contact" class="section">
            <h2>Contact Me</h2>
            <p>If you'd like to work together or have any questions, feel free to reach out!</p>
            <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
        </section>
    </div>

    <footer>
        <p>&copy; 2025 John Doe. All rights reserved. <a href="#">Back to top</a></p>
    </footer>
</body>
</html>
`;

// Create an HTTP server to serve the portfolio
const PORT = 5000;
http
    .createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlContent);
    })
    .listen(PORT, () => {
        console.log(`Portfolio is running at http://localhost:${PORT}`);
    });
