import React from 'react';

const HttpservercBlog = () => <article className="blog-container">
  <h1>http-server-c: a lightweight C HTTP server.</h1>
  <h2>Languages and stack</h2><p className="stack-line"><span className="stack-c">C</span><span className="stack-network">POSIX sockets</span><span className="stack-api">HTTP/1.0</span><span className="stack-api">HTTP/1.1</span></p>
  <h2>Summary</h2>
  <p>http-server-c is a small HTTP server written in C. It demonstrates socket networking, basic HTTP protocol handling, static file serving, and connection management in a compact project intended for learning, experimentation, or embedding in small applications.</p>
  <h2>Features</h2>
  <ul><li>Serves static files over HTTP/1.0 and/or HTTP/1.1.</li><li>Uses standard C libraries and sockets with minimal dependencies.</li><li>Supports the basic <code>GET</code> and <code>HEAD</code> methods.</li><li>Can handle multiple connections with a single-threaded or select-based approach.</li><li>Provides a small base that can be extended with more features.</li></ul>
  <h2>Prerequisites</h2>
  <p>The project requires a C compiler such as gcc or clang. It can run on Unix-like systems including Linux and macOS, or on Windows with Winsock support.</p>
  <h2>Building</h2>
  <p>Clone the repository and compile the main server source file:</p>
  <pre><code>{'git clone https://github.com/yakitoritrash/http-server-c.git\ncd http-server-c\ngcc -o tcpechoserver tcpechoserver.c'}</code></pre>
  <p>If the project is split across multiple source files, the compiler command may need additional files or flags such as <code>-lpthread</code>.</p>
  <h2>Running</h2>
  <p>The server accepts an optional port and document root. The default port is <code>8080</code>, and the default document root is the current directory.</p>
  <pre><code>{'./http-server [PORT] [DOCUMENT_ROOT]\n./http-server 8080 /var/www/html'}</code></pre>
  <p>Once it is running, visit <code>http://localhost:8080</code> in a browser.</p>
  <h2>How it works</h2>
  <ol><li>The server opens a listening socket.</li><li>It accepts incoming client connections.</li><li>It reads and handles basic HTTP requests.</li><li>For supported <code>GET</code> and <code>HEAD</code> requests, it serves files from the document root.</li><li>It continues accepting connections using its single-threaded or select-based connection model.</li></ol>
  <h2>Project structure</h2>
  <p><code>tcpechoserver.c</code> contains the main server implementation.</p>
  <h2>Limitations</h2>
  <ul><li>No HTTPS support.</li><li>Basic HTTP handling without CGI, POST, or PUT.</li><li>No directory listing by default.</li><li>Not intended for production use.</li></ul>
  <h2>What I learned</h2>
  <p>This project provides a focused way to practise sockets, HTTP request handling, static file serving, and the relationship between a network listener and connected clients in C.</p>
  <h2>License</h2>
  <p>http-server-c is released under the MIT License.</p>
</article>;

export default HttpservercBlog;
