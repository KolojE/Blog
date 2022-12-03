import React,{Fragment} from "react";
import {Menu,Transition} from "@headlessui/react"
import GraphqlService from "../Services/GraphqlService";
export default function TabBar()
{
    const [categories,setCategories] = React.useState([]);

    React.useEffect(()=>
    {
      GraphqlService().getCategories()
      .then(
      (res)=>
      {console.log(res)
        setCategories(res.categories);
      }
      )
    },[])

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }




      const elements = categories.map((category)=>
      {
        
          
      return (
      <Menu.Item key={category.id}>
              {({ active }) => (
                <a
                  href={`/posts/${category.categoryName}`}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  {category.categoryName}
                </a>
              )}
            </Menu.Item>
            )
      })



    function MenuItems()
    {

    return(
             <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {elements}
          </div>
        </Menu.Items>
      </Transition>
            
            )
    }



return(
    <div className="sticky top-0 w-full pt-5 pb-5 flex space-x-6 justify-center shadow-lg dark:text-slate-300 bg-slate-50 dark:bg-slate-800 z-10">
    <a href="/"  className=" relative hover:font-bold hover:-mt-1 transition-all duration-100 p-2">Recent Posts</a> 
    <Menu as="div" className="relative inline-block text-left ">
    <Menu.Button id="dropdownDefault" className="p-2 hover:-mt-1 transition-all duration-100 hover:font-bold" data-dropdown-toggle="dropdown">Catogories</Menu.Button> 
    <MenuItems />
    </Menu>
    <a href="/about"  className="hover:font-bold hover:-mt-1 transition-all duration-100 p-2">About Me</a> 
    </div>
)
}