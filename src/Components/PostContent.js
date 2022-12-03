import React from "react";
import Markdown from "markdown-to-jsx";
export default function PostContent({ post }) {

    const content = post.content;
    return (
        <div className="flex justify-center ">

            <div className="shadow-2xl rounded-lg w-5/6 lg:w-3/6 lg:p-24 p-8 bg-white dark:text-white dark:bg-slate-800 h-fit lg:mt-36 mt-20 mb-36 ">
                <article>

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
                                pre:
                                {
                                    props:
                                    {
                                        className: ""
                                    }
                                },
                                code:
                                {
                                    props:
                                    {
                                        className: "block  m-2 bg-zinc-700 rounded-lg min-w-[80%] p-5 md:text-md text-sm font-bold"
                                    }
                                }

                            }
                        }}
                    >
                        {content.markdown}
                    </Markdown>
                </article>
            </div>

        </div>
    );
}