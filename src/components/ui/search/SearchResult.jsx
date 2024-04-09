import SingleSearchPost from "../common/SingleSearchPost";
import SearchCardLoader from "../loader/SearchCardLoader";

export default function SearchResult({ searchResult, loading, error }) {
  return (
    <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
      {loading ? (
        <SearchCardLoader />
      ) : error ? (
        <div className="text-red-300">{error}</div>
      ) : (
        searchResult?.data?.map((post) => (
          <SingleSearchPost
            key={post.id}
            post={post}
            searchValue={searchResult?.query}
          />
        ))
      )}
    </div>
  );
}
