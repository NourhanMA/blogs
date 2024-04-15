'use client'
import { useRouter } from 'next/navigation';

const NavbarOtherpages = ({ }) => {
    const router = useRouter();

    const handleCreatePost = () => {
      router.push('/create-post');
    };
  
    return (
      <nav className=" bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Blog Page
            </span>
          </a>
          <ul className="flex items-center justify-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                onClick={() => {
                  router.push(`/`);
                }}
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={handleCreatePost}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 dark:text-blue-200 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
              >
                Create Post
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavbarOtherpages;
