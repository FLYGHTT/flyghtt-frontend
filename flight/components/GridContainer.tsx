// "use client";
// import { Column } from "@/types";
// import React, { useState } from "react";
// import { WidthProvider, Responsive } from "react-grid-layout";
// import "react-grid-layout/css/styles.css";
// const ResponsiveGridLayout = WidthProvider(Responsive);
// const GridContainer = ({
//   columns,

//   children,
// }: {
//   columns: Column[];

//   children: React.ReactNode;
// }) => {
//   const [layouts, setLayouts] = useState({
//     lg: columns.map((_, index) => ({
//       i: index.toString(),
//       x: index % 2,
//       y: Math.floor(index / 2),
//       w: 1,
//       h: 2,
//     })),
//   });

//   const layout = { lg: 1, md: 1, sm: 1, xs: 1, xxs: 1 };

//   return (
//     <ResponsiveGridLayout
//       className="layout"
//       layouts={layouts}
//       breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//       cols={layout}
//       rowHeight={100}
//       draggableHandle=".drag-handle"
//       isDraggable={true}
//       isResizable={true}
//       isDroppable={true}
//       // onLayoutChange={onLayoutChange}
//     >
//       {children}
//     </ResponsiveGridLayout>
//   );
// };

// export default GridContainer;
