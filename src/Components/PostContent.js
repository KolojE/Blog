import React from "react";
import Markdown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/light-async";
import { androidstudio} from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function PostContent({ post }) {

    const content = post.content;

    const CodeBlock = ({className, children}) => {
        let lang = 'text'; // default monospaced text
        console.log(className)
        if (className && className.match(/lang-(\w+)/)) {
            lang = className.match(/lang-(\w+)/)
        }
        return (
          <SyntaxHighlighter language={lang[1]} style={{...androidstudio}} customStyle={{padding:30}} className={"rounded-lg"} >
            {children}
          </SyntaxHighlighter>
        );
      }
      
      // markdown-to-jsx uses <pre><code/></pre> for code blocks.
      const PreBlock = ({children, ...rest}) => {
        console.log(rest)
        if ('type' in children && children ['type'] === 'code') {
          return CodeBlock(children['props']);
        }
        return {children};
      };


    return (
        <div className="flex justify-center ">
            <div className="shadow-2xl rounded-lg w-5/6 lg:w-3/6 lg:p-24 p-8 bg-white dark:text-white dark:bg-slate-800 h-fit lg:mt-36 mt-20 mb-36 ">
                    <Markdown
                        options={{
                            overrides:
                            {
                                h1: {
                                    props:
                                    {
                                        className: 'text-2xl font-bold lg:text-4xl mt-10 mb-10 '
                                    }
                                },
                                h2:
                                {
                                    props:
                                    {
                                        className: 'text-xl font-bold lg:text-4xl '
                                    }
                                },
                                p:
                                {
                                    props:
                                    {
                                        className: 'text-base lg:text-xl flex dark:text-slate-300'
                                    }
                                },
                                img:
                                {
                                    props:
                                    {
                                        className: "max-h-[300px] lg:max-h-[500px] mt-10 mb-10 lg:justify-self-center"
                                    }
                                },
                                pre:{
                                    component:PreBlock,
                                    props:{
                                        className:"rounded-md",
                                    }
                                },
                                code:
                                {
                                    props:
                                    {
                                        className: "block m-2 bg-zinc-700 rounded-lg min-w-[80%] p-5 md:text-md text-sm font-bold"
                                    }
                                }

                            }
                        }}
                        >
                        {content}
                    </Markdown>
            </div>

        </div>
    );
}