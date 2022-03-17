import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

export default function ExampleWrapper({
  hasNextPage,

  isNextPageLoading,

  items,

  loadNextPage,
}) {
  const itemCount = hasNextPage ? items.length + 8 : items.length;

  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  const Item = ({ index, style }) => {
    let content;
    if (!isItemLoaded(index)) {
      content = "Loading...";
    } else {
      content = items[index].name;
    }

    return <div style={style}>{content}</div>;
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <List
          style={{ border: "1px solid black" }}
          className="List"
          height={250}
          itemCount={itemCount}
          itemSize={30}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={400}
        >
          {Item}
        </List>
      )}
    </InfiniteLoader>
  );
}
