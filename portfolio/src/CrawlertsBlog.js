import React from 'react';
import './MalwareBlog.css';

const images = require.context('./assets/images/crawlerts', false, /^\.\/2025-06-11-.*\.png$/);

const CrawlertsBlog = () => (
  <article className="blog-container">
    <h1>crawler-ts: a TypeScript web crawler.</h1>
    <h2>Summary</h2>
    <p>crawler-ts is a command-line web crawler that recursively discovers unique internal links. It stays on the supplied domain, processes HTML pages, normalizes URLs to avoid duplicate work, and produces a report showing how often each page was referenced.</p>
    <h2>Languages and stack</h2>
    <div className="stack-tags" aria-label="Languages and technologies">
      <span className="stack-typescript">TypeScript</span><span className="stack-node">Node.js</span><span className="stack-jsdom">jsdom</span><span className="stack-vitest">Vitest</span>
    </div>
    <h2>Features</h2>
    <ul><li>Recursively crawls HTML pages on the same domain.</li><li>Ignores non-HTML responses and external links.</li><li>Normalizes URLs before crawling to prevent duplicates.</li><li>Reports discovered pages and link reference counts.</li><li>Includes tested crawling and reporting logic with Vitest.</li></ul>
    <h2>Usage</h2>
    <pre><code>{'npm install\nnpm run build\nnode dist/index.js <website-url>'}</code></pre>
    <p>For example, the crawler can be started with <code>node dist/index.js https://example.com</code>.</p>
    <h2>How it works</h2>
    <ol><li>The CLI receives a base URL.</li><li>The crawler requests HTML pages within that domain.</li><li>Links are extracted and normalized before they are queued.</li><li>External URLs and non-HTML responses are ignored.</li><li>The report sorts pages by how often they were referenced.</li></ol>
    <h2>Project structure</h2>
    <ul><li><code>src/index.ts</code> starts the crawl and parses CLI arguments.</li><li><code>src/crawl.ts</code> handles crawling, normalization, and link extraction.</li><li><code>src/report.ts</code> generates and sorts the report.</li><li><code>src/crawl.test.ts</code> and <code>src/report.test.ts</code> cover the core logic.</li></ul>
    <h2>Example output</h2>
    <pre><code>{'===================\nREPORT\n===================\nFound 5 links to page: example.com/\nFound 2 links to page: example.com/about\nFound 1 links to page: example.com/contact\n===================\nEND REPORT\n==================='}</code></pre>
    <h2>Testing</h2>
    <p>The project uses Vitest for its test suite. Run the tests with <code>npm install</code> followed by <code>npm test</code>.</p>
    <h2>Screenshots</h2>
    <div className="crawler-screenshots">
      <figure><a className="image-link" href={images('./2025-06-11-180714_hyprshot.png')} target="_blank" rel="noopener noreferrer"><img className="clickable-image" src={images('./2025-06-11-180714_hyprshot.png')} alt="crawler-ts starting in a terminal" /></a><figcaption>Starting the crawler</figcaption></figure>
      <figure><a className="image-link" href={images('./2025-06-11-180331_hyprshot.png')} target="_blank" rel="noopener noreferrer"><img className="clickable-image" src={images('./2025-06-11-180331_hyprshot.png')} alt="crawler-ts report in a terminal" /></a><figcaption>Generated report</figcaption></figure>
    </div>
    <h2>License</h2>
    <p>crawler-ts is released under the MIT License.</p>
  </article>
);

export default CrawlertsBlog;
