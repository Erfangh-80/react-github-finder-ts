import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  forks: string;
  open_issues: string;
  watchers_count: string;
  stargazers_count: string;
}

const RepoItem = ({ repo }: any): JSX.Element => {
  return (
    <div className='mb-2 px-3 py-2 rounded-md card bg-gray-900 hover:bg-gray-800 transition'>
      <div className=''>
        <h3 className='mb-2 text-md font-semibold text-white'>
          <a target="_blank" href={repo.html_url}>
            <FaLink className='inline mr-1' /> {repo.name}
          </a>
        </h3>
        <p className='mb-3 text-white text-xs'>{repo.description}</p>
        <div className="flex flex-wrap mx-2">
          <div className='flex mt-2 mx-2 items-center justify-center w-fit bg-gray-700 text-emerald-500 text-sm font-bold px-2.5 py-0.5 rounded-2xl'>
            <FaEye className='mr-2 text-sm' /> <p>{repo.watchers_count}</p>
          </div>
          <div className='flex mt-2 mx-2 items-center justify-center w-fit bg-gray-700 text-lime-600 text-sm font-bold px-2.5 py-0.5 rounded-2xl'>
            <FaStar className='mr-2  text-sm' /> <p>{repo.stargazers_count}</p>
          </div>
          <div className='flex mt-2 mx-2 items-center justify-center w-fit bg-gray-700 text-pink-500 text-sm font-bold px-2.5 py-0.5 rounded-2xl p-1'>
            <FaInfo className='mr-2 text-sm' /> <p>{repo.open_issues}</p>
          </div>
          <div className='flex mt-2 mx-2 items-center justify-center w-fit bg-gray-700 text-yellow-700 text-sm font-bold px-2.5 py-0.5 rounded-2xl p-1'>
            <FaUtensils className='mr-2 mt-2 text-sm' /> <p>{repo.forks}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
