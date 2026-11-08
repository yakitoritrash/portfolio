import React from 'react';

const SpotifyvimBlog = () => (
  <article className="blog-container">
    <h1>spotify-vim: a C terminal Spotify controller.</h1>
    <h2>Languages and stack</h2><p className="stack-line"><span className="stack-c">C</span><span className="stack-python">Python</span><span className="stack-network">libcurl</span><span className="stack-spotify">Spotify Web API</span><span className="stack-oauth">OAuth</span></p>
    <h2>Summary</h2>
    <p>spotify-vim is a small terminal utility for controlling Spotify with Vim-inspired keybindings. The controller is written in C and uses the Spotify Web API through libcurl, while a Python helper handles authentication and token refreshes.</p>
    <h2>Goals</h2>
    <ul><li>Control Spotify playback directly from a terminal.</li><li>Use familiar Vim-style keys for common playback actions.</li><li>Keep the interface minimal, fast, and usable with raw terminal input.</li></ul>
    <h2>Tools and technologies</h2>
    <ul><li>C for the playback controller and terminal input handling.</li><li>Python 3 for authentication and access-token management.</li><li>libcurl for HTTP requests to the Spotify Web API.</li><li>Spotify OAuth for authorizing access to a Spotify Premium account.</li></ul>
    <h2>How it works</h2>
    <p>The Python authentication helper manages Spotify credentials and produces an access token. The C controller uses that token to call the Spotify Web API and control playback. Each key maps to a playback action or a terminal hint overlay.</p>
    <ul><li><code>j</code> next track</li><li><code>k</code> previous track</li><li><code>p</code> play or pause</li><li><code>f</code> show keybinding hints</li><li><code>q</code> quit</li></ul>
    <h2>Implementation</h2>
    <p><code>auth.py</code> manages authentication and refreshes the access token. <code>main.c</code> provides the terminal controller, reads raw input, and sends playback requests through libcurl. The compiled binary is called <code>spotify-vim</code>.</p>
    <pre><code>{`git clone https://github.com/yakitoritrash/spotify-vim.git
cd spotify-vim
python3 auth.py
gcc -o spotify-vim main.c -lcurl
./spotify-vim`}</code></pre>
    <h2>Challenges and solutions</h2>
    <p>The project separates OAuth token management from playback control so the C program can stay focused on terminal interaction and Spotify API requests.</p>
    <h2>Testing and results</h2>
    <p>The documented workflow covers generating an access token, compiling the C controller, launching it, and using the playback keybindings from the terminal.</p>
    <h2>What I learned</h2>
    <p>This project brought together C-based terminal input, HTTP requests with libcurl, Python authentication helpers, and OAuth-backed API integration in a compact command-line tool.</p>
    <h2>Security notes</h2>
    <p>Spotify client credentials, refresh tokens, and access tokens must stay private. The README recommends environment variables or a local <code>.env</code> file for sensitive values.</p>
    <h2>License and credits</h2>
    <p>spotify-vim is released under the MIT License. Its keybinding approach is inspired by Vim and Vimium, and it uses the Spotify Web API.</p>
  </article>
);

export default SpotifyvimBlog;
