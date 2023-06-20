import React from "react";

export function CategorySelection({ categories, onSelect }) {
  console.log(categories);
  return (
    <div className="category-card">
      <h1>Select a Category</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <button onClick={() => onSelect(category)}>
              {category[0].category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
// // }
// import React from "react";
// import { useHistory } from "react-router-dom";

// export function CategorySelection({ categories }) {
//   const history = useHistory();

//   const handleSelect = (category) => {
//     history.push({
//       pathname: "/quiz",
//       state: { category },
//     });
//   };

//   return (
//     <div className="category-card">
//       <h1>Select a Category</h1>
//       <ul>
//         {categories.map((category, index) => (
//           <li key={index}>
//             <button onClick={() => handleSelect(category)}>
//               {category[0].category}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
