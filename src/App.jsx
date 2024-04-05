import { useState } from 'react'
import './App.css'
import { LuFolderOpenDot } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa'

function App() {
  function copyToClipboard(id, btnId) {
    const textToCopy = document.getElementById(id).innerText
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard')
      })
      .catch((err) => {
        console.error('Error copying text: ', err)
      })

    document.getElementById(btnId).classList.add('tooltip')
  }
  const [projectName, setProjectName] = useState('my-project')

  const handleForm = (e) => {
    e.preventDefault()
    const project = e.target.name.value
    setProjectName(project)
    console.log(projectName)
  }

  return (
    <>
      <div className=" flex justify-end text-2xl text-green-500">
        <a
          href="https://github.com/Anawrulkabir/react-setup"
          target="_blanck"
          className="hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-6xl  font-mono text-orange-400 mx-20 my-12 text-center">
        React Setup Essentials
      </p>

      {/* input box */}
      <div className="mx-[450px] mt-10 mb-20 flex ">
        <form onSubmit={handleForm} className="flex gap-10">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Project Name"
              name="name"
            />
            <LuFolderOpenDot />
          </label>
          <button className="btn bg-orange-400 text-black text-sm">
            Enter
          </button>
        </form>
      </div>

      {/* command */}
      <div className="mx-[300px] my-10 border border-zinc-700  bg-slate-800 rounded-xl shadow-lg">
        <div className="relative flex text-slate-400 text-xs leading-6 bg-slate-800 rounded-xl shadow-lg ">
          <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
            command
          </div>
          <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
            <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
          </div>
          <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
            <div className="relative flex -mr-2">
              <button
                type="button"
                className="text-slate-500 hover:text-slate-400 "
                data-tip="copied"
                id="command-btn"
                onClick={() => copyToClipboard('command', 'command-btn')}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                  <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" text-left p-5 text-zinc-300" id="command">
          <pre data-prefix="1" className="">
            <code>
              npm create vite@latest {projectName} -- --template react{' '}
            </code>
          </pre>
          <pre data-prefix="2" className="">
            <code>cd {projectName}</code>
          </pre>
          <pre data-prefix="3" className="">
            <code>npm install -D tailwindcss postcss autoprefixer</code>
          </pre>
          <pre data-prefix="4" className="">
            <code>npx tailwindcss init -p</code>
          </pre>
          <pre data-prefix="5" className="">
            <code>npm i -D daisyui@latest</code>
          </pre>
          <pre data-prefix="6" className="">
            <code>
              npm install react-router-dom localforage match-sorter sort-by
            </code>
          </pre>
          <pre data-prefix="7" className="">
            <code>npm install firebase</code>
          </pre>
          <pre data-prefix="8" className="">
            <code>npm install react-icons --save</code>
          </pre>
          <pre data-prefix="9" className="">
            <code>npm i react-toastify</code>
          </pre>
        </div>
      </div>

      {/* tailwind.config.js */}
      <div className="mx-[300px] mb-20">
        <div className=" text-left relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
          <div className="relative flex text-slate-400 text-xs leading-6">
            <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
              tailwind.config.js
            </div>
            <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
              <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
            </div>
            <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
              <div className="relative flex -mr-2">
                <button
                  type="button"
                  className="text-slate-500 hover:text-slate-400 "
                  data-tip="copied"
                  id="tailwind-config-btn"
                  onClick={() =>
                    copyToClipboard('tailwind-config', 'tailwind-config-btn')
                  }
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="w-8 h-8"
                  >
                    <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                    <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
              <code className="flex-none min-w-full p-5" id="tailwind-config">
                <span className="token block">
                  <span className="token doc-comment comment">/** </span>
                  <span className="token doc-comment comment keyword">
                    @type
                  </span>
                  <span className="token doc-comment comment"> </span>
                  <span className="token doc-comment comment class-name punctuation">
                    &#123;
                  </span>
                  <span className="token doc-comment comment class-name keyword">
                    import
                  </span>
                  <span className="token doc-comment comment class-name punctuation">
                    (
                  </span>
                  <span className="token doc-comment comment class-name string">
                    &apos;tailwindcss&apos;
                  </span>
                  <span className="token doc-comment comment class-name punctuation">
                    )
                  </span>
                  <span className="token doc-comment comment class-name punctuation">
                    .
                  </span>
                  <span className="token doc-comment comment class-name">
                    Config
                  </span>
                  <span className="token doc-comment comment class-name punctuation">
                    &#125;
                  </span>
                  <span className="token doc-comment comment"> */</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block">
                  <span className="token plain"></span>
                  <span className="token keyword module">export</span>
                  <span className="token plain"> </span>
                  <span className="token keyword module">default</span>
                  <span className="token plain"> </span>
                  <span className="token punctuation">&#123;</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    content
                  </span>
                  <span className="token operator">:</span>
                  <span className="token plain"> </span>
                  <span className="token punctuation">[</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                  <span className="token plain"> </span>
                  <span className="token plain"> </span>
                  <span className="token plain"> </span>
                  <span className="token string">&quot;./index.html&quot;</span>
                  <span className="token punctuation">,</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                  <span className="token plain"> </span>
                  <span className="token plain"> </span>
                  <span className="token plain"> </span>
                  <span className="token string">
                    &quot;./src/**/*.&#123;(js, ts, jsx, tsx)&#125;&quot;
                  </span>
                  <span className="token punctuation">,</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15]">
                  <span className="token plain"> </span>
                  <span className="token punctuation">]</span>
                  <span className="token punctuation">,</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block">
                  <span className="token plain"> </span>
                  <span className="token literal-property property">theme</span>
                  <span className="token operator">:</span>
                  <span className="token plain"> </span>
                  <span className="token punctuation">&#123;</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block">
                  <span className="token plain"> </span>
                  <span className="token plain"> </span>
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    extend
                  </span>
                  <span className="token operator">:</span>
                  <span className="token plain"> </span>
                  <span className="token punctuation">&#123;</span>
                  <span className="token punctuation">&#125;</span>
                  <span className="token punctuation">,</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block">
                  <span className="token plain"> </span>
                  <span className="token punctuation">&#125;</span>
                  <span className="token punctuation">,</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15] text-sky-300">
                  <span className="token plain"> </span>
                  <span className="token literal-property property">
                    plugins
                  </span>
                  <span className="token operator">:</span>
                  <span className="token plain"> </span>
                  <span className="token punctuation text-slate-500">[</span>
                  <span className="token string text-sky-300">
                    require(&quot;daisyui&quot;)
                  </span>
                  <span className="token punctuation text-slate-500">]</span>
                  <span className="token punctuation">,</span>
                  <span className="token plain"></span>
                </span>
                <span className="token block">
                  <span className="token plain"></span>
                  <span className="token punctuation">&#125;</span>
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* index.css */}
      <div className="mx-[300px] mb-20">
        <div className="relative z-10 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
          <div className="relative flex text-slate-400 text-xs leading-6">
            <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
              src/index.css
            </div>
            <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
              <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
            </div>
            <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
              <div className="relative flex -mr-2">
                <button
                  type="button"
                  id="index-css-btn"
                  data-tip="copied"
                  className="text-slate-500 hover:text-slate-400"
                  onClick={() => copyToClipboard('index-css', 'index-css-btn')}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="w-8 h-8"
                  >
                    <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                    <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <pre className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
              <code
                className="flex-none min-w-full p-5 text-left"
                id="index-css"
              >
                <span className="token atrule">
                  <span className="token rule">@tailwind</span> base
                  <span className="token punctuation">;</span>
                </span>
                <br />
                <span className="token atrule">
                  <span className="token rule">@tailwind</span> components
                  <span className="token punctuation">;</span>
                </span>
                <br />
                <span className="token atrule">
                  <span className="token rule">@tailwind</span> utilities
                  <span className="token punctuation">;</span>
                </span>
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* main.jsx */}
      <div
        data-code-block=""
        data-filename="src/main.jsx"
        data-line-numbers="true"
        data-lang="jsx"
        className="text-left bg-slate-800 rounded-xl mx-[300px]  text-zinc-300"
      >
        <div className="relative flex text-slate-400 text-xs leading-6">
          <div className="mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
            src/main.jsx
          </div>
          <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
            <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
          </div>
          <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
            <div className="relative flex -mr-2">
              <button
                type="button"
                id="main-jsx-btn"
                data-tip="copied"
                className="text-slate-500 hover:text-slate-400"
                onClick={() => copyToClipboard('main-jsx', 'main-jsx-btn')}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="w-8 h-8"
                >
                  <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                  <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <pre
          data-filename="src/main.jsx"
          data-line-numbers="true"
          data-lang="jsx"
          className="p-5"
        >
          <code id="main-jsx">
            <span className="codeblock-line" data-line-number="1">
              <span>import</span> <span>*</span> <span>as</span>{' '}
              <span>React</span> <span>from</span> &quot;<span>react</span>
              &quot;;
            </span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="2">
              <span>import</span> <span>*</span> <span>as</span>{' '}
              <span>ReactDOM</span> <span>from</span> &quot;
              <span>react-dom/client</span>&quot;;
            </span>
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="3"
            >
              <span>import</span> &#123;
            </span>
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="4"
            >
              {' '}
              <span>createBrowserRouter</span>,
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="5"
            >
              {' '}
              <span>RouterProvider</span>,
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="6"
            >
              &#125; <span>from</span> &quot;<span>react-router-dom</span>
              &quot;;
            </span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="7">
              <span>import</span> &quot;<span>./index.css</span>&quot;;
            </span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="8"></span> <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="9"
            >
              <span>const</span> <span>router</span> <span>=</span>{' '}
              <span>createBrowserRouter</span>([
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="10"
            >
              {' '}
              &#123;
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="11"
            >
              {' '}
              path: &quot;<span>/</span>&quot;,
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="12"
            >
              {' '}
              element: &lt;<span>div</span>
              &gt;Hello world!&lt;/<span>div</span>
              &gt;,
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="13"
            >
              {' '}
              &#125;,
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="14"
            >
              ]);
            </span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="15"></span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="16">
              <span>ReactDOM</span>.<span>createRoot</span>(
              <span>document</span>.<span>getElementById</span>(&quot;
              <span>root</span>&quot;)).
              <span>render</span>(
            </span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="17">
              {' '}
              &lt;<span>React.StrictMode</span>&gt;
            </span>{' '}
            <br />
            <span
              className="codeblock-line"
              data-highlight="true"
              data-line-number="18"
            >
              {' '}
              &lt;<span>RouterProvider</span> <span>router</span>
              <span>=</span>
              <span>&#123;</span>
              <span>router</span>
              <span>&#125;</span> /&gt;
            </span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="19">
              {' '}
              &lt;/<span>React.StrictMode</span>
              &gt;
            </span>{' '}
            <br />
            <span className="codeblock-line" data-line-number="20">
              );
            </span>{' '}
            <br />
          </code>
        </pre>
      </div>
    </>
  )
}

export default App
