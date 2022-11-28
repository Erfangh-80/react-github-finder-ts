import RepoItem from "./RepoItem";

interface ReposState {
  loading: boolean;
  repos: [];
  error: string;
}

const RepoList = (reposState: ReposState): JSX.Element => {
  return (
    
    <div>
      <div className="rounded-lg shadow-lg card-bg-base-100">
        <div className="p-3">
          <>
            <h2 className="text-lg my-4 font-bold card-title">Repositores</h2>
            {reposState.repos?.map((repo: any) => <RepoItem key={repo.id} repo={repo}/>)}
          </>
        </div>
      </div>
    </div>
  );
};

export default RepoList;
