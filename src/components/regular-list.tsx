import React from "react";

interface RegularListProps<T> {
  items: T[];
  itemComponent: (props: any) => React.ReactNode;
  resourceName: string;
}

function RegularList<T>({
  items,
  itemComponent: ItemComponent,
  resourceName,
}: RegularListProps<T>) {
  return items.map((item, index) => (
    <ItemComponent key={index} {...{ [resourceName]: item }} />
  ));
}

export default RegularList;
