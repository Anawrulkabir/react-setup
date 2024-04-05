import { useState } from 'react'
import './App.css'
import { LuFolderOpenDot } from 'react-icons/lu'
import { FaGithub } from 'react-icons/fa'


function App() {
  const [useTailwind, setTailwind] = useState(false)
  const [useRouter, setRouter] = useState(false)
  const [useFirebase, setFirebase] = useState(false)
  const [useDaisy, setDaisy] = useState(false)
  const [useIcons, setIcons] = useState(false)
  const [useToastify, setToastify] = useState(false)

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

  function packageNameCorrector(packageName) {
    packageName = packageName.toLowerCase();
    packageName = packageName.replace(/\s+/g, '-');
    packageName = packageName.replace(/[^a-z0-9-_]/g, '');
    return packageName;
  }

  return (
    <div className='p-4 lg:p-8'>
      <div className=" flex justify-end text-2xl text-green-500">
        <a
          href="https://github.com/Anawrulkabir/react-setup"
          target="_blanck"
          className="hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-4xl lg:text-6xl font-mono text-orange-400 lg:mx-20 my-6 lg:my-12 text-center">
        React Setup Essentials
      </p>

      {/* input box */}
      <p className='mt-10 font-mono font-bold text-orange-400'>Enter Your Project Name</p>
      <div className="lg:mx-[450px] mt-5 flex">
        <form onChange={(e) => setProjectName(packageNameCorrector(e.target.value))} className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:gap-10 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              className="w-full"
              placeholder="Project Name"
              name="name"
            />
            <LuFolderOpenDot />
          </label>
        </form>
      </div>

      {/* command */}
      <div className='my-10'>
        <form>
          <ul className="grid w-full gap-6 md:grid-cols-6">
            <li>
              <input onClick={() => setRouter(!useRouter)} type="checkbox" id="router-option" value="" className="hidden peer" required=""></input>
              <label htmlFor="router-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img className='w-7 h-7' src="react-router-svgrepo-com.svg" alt="router" />
                  <div className="w-full text-lg font-semibold font-mono">React-router</div>
                </div>
              </label>
            </li>
            <li>
              <input onClick={() => setTailwind(!useTailwind)} type="checkbox" id="tailwind-option" value="" className="hidden peer" required=""></input>
              <label htmlFor="tailwind-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img className='w-7 h-7' src="tailwind-css-icon.svg" alt="tailwindcss" />
                  <div className="w-full text-lg font-semibold font-mono">Tailwind</div>
                </div>
              </label>
            </li>
            <li>
              <input onClick={() => setDaisy(!useDaisy)} type="checkbox" id="react-option" value="" className="hidden peer" required=""></input>
              <label htmlFor="react-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img className='w-7 h-7' src="daisyui.png" alt="" />
                  <div className="w-full text-lg font-semibold font-mono">DaisyUi</div>
                </div>
              </label>
            </li>
            <li>
              <input onClick={() => setFirebase(!useFirebase)} type="checkbox" id="flowbite-option" value="" className="hidden peer"></input>
              <label htmlFor="flowbite-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img className='h-7 w-7' src="https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg" alt="firebase" />
                  <div className="w-full text-lg font-semibold font-mono">Firebase</div>
                </div>
              </label>
            </li>
            <li>
              <input onClick={() => setToastify(!useToastify)} type="checkbox" id="angular-option" value="" className="hidden peer"></input>
              <label htmlFor="angular-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img width="28" height="28" src="https://img.icons8.com/arcade/64/toast.png" alt="toast" />
                  <div className="w-full text-lg font-semibold font-mono">Toastify</div>
                </div>
              </label>
            </li>
            <li>
              <input onClick={() => setIcons(!useIcons)} type="checkbox" id="reactIcons-option" value="" className="hidden peer"></input>
              <label htmlFor="reactIcons-option" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="flex flex-col gap-2 items-center justify-center w-full">
                  <img width="28" height="28" src="react-svgrepo-com.svg" alt="react-icons" />
                  <div className="w-full text-lg font-semibold font-mono">React-icon</div>
                </div>
              </label>
            </li>
          </ul>
        </form>
      </div>
      <div className='my-10'>
        <h1 className='font-bold text-2xl text-center w-full font-mono text-orange-400'>NPM Packages</h1>
        <p className='font-mono font-medium mb-10'>Elevate Your React Projects with Essential NPM Packages</p>
        <div className="lg:mx-[300px] border border-zinc-700  bg-slate-800 rounded-xl shadow-lg">

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
              <code className='text-balance'>
                npm create vite@latest {projectName} -- --template react{' '}
              </code>
            </pre>
            <pre data-prefix="2" className="">
              <code className='text-balance'>cd {projectName}</code>
            </pre>
            {
              useTailwind && <><pre data-prefix="3" className="">
                <code className='text-balance'>npm install -D tailwindcss postcss autoprefixer</code>
              </pre>
                <pre data-prefix="4" className="">
                  <code className='text-balance'>npx tailwindcss init -p</code>
                </pre></>
            }
            {
              useDaisy && <pre data-prefix="5" className="">
                <code className='text-balance'>npm i -D daisyui@latest</code>
              </pre>
            }
            {
              useRouter && <pre data-prefix="6" className="">
                <code className='text-balance'>
                  npm install react-router-dom localforage match-sorter sort-by
                </code>
              </pre>
            }
            {
              useFirebase && <pre data-prefix="7" className="">
                <code className='text-balance'>npm install firebase</code>
              </pre>
            }
            {
              useIcons && <pre data-prefix="8" className="">
                <code className='text-balance'>npm install react-icons --save</code>
              </pre>
            }
            {
              useToastify && <pre data-prefix="9" className="">
                <code className='text-balance'>npm i react-toastify</code>
              </pre>
            }
          </div>
        </div>
      </div>

      {/* tailwind.config.js */}
      {
        useTailwind && <><div className="lg:mx-[300px]">
          <h1 className='font-bold text-2xl text-center w-full font-mono text-orange-400'>Tailwind Configuration</h1>
          <p className='font-mono font-medium'>Fine-tune Your Tailwind Setup for React Projects</p>
          <div className="text-left relative my-10 z-10 lg:-ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
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
                    <span className="token doc-comment comment  className-name punctuation">
                      &#123;
                    </span>
                    <span className="token doc-comment comment  className-name keyword">
                      import
                    </span>
                    <span className="token doc-comment comment  className-name punctuation">
                      (
                    </span>
                    <span className="token doc-comment comment  className-name string">
                      &apos;tailwindcss&apos;
                    </span>
                    <span className="token doc-comment comment  className-name punctuation">
                      )
                    </span>
                    <span className="token doc-comment comment  className-name punctuation">
                      .
                    </span>
                    <span className="token doc-comment comment  className-name">
                      Config
                    </span>
                    <span className="token doc-comment comment  className-name punctuation">
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
                      &quot;./src/**/*.&#123;js,ts,jsx,tsx&#125;&quot;
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
                  {
                    useDaisy && <span className="token block -mx-5 pl-4 pr-5 border-l-4 border-sky-400 bg-sky-300/[0.15] text-sky-300">
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
                  }
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
      <div className="lg:mx-[300px] my-10">
        <div className='my-10'>
          <h1 className='font-bold text-2xl text-center w-full font-mono text-orange-400'>Integrate Tailwind Directives</h1>
          <p className='font-mono font-medium'>Add the directives for each of Tailwind’s layers.</p>
        </div>
        <div className="relative z-10 lg:-ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
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
      </>
      }
      {/* main.jsx */}
      {
        useRouter && <>      <div className='my-10'>
          <h1 className='font-bold text-2xl text-center w-full font-mono text-orange-400'>React Router Integration</h1>
          <p className='font-mono font-medium'>Seamlessly Incorporate React Router for Dynamic Page Navigation</p>
        </div>
          <div
            data-code-block=""
            data-filename="src/main.jsx"
            data-line-numbers="true"
            data-lang="jsx"
            className="text-left bg-slate-800 rounded-xl lg:mx-[300px]  text-zinc-300"
          >

            <div className="relative flex text-slate-400 text-xs leading-6 w-full">
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
              <code className='break-words text-balance' id="main-jsx">
                <span className="codeblock-line text-balance" data-line-number="1">
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
                <span className="codeblock-line   " data-line-number="16">
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
          </div></>
      }
    </div>
  )
}

export default App
