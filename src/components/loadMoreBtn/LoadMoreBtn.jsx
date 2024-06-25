import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button
      className={css.loadMoreButton}
      onClick={() => onLoadMore()}
      title="Load more"
      type="button"
    >
      Load More
    </button>
  );
}