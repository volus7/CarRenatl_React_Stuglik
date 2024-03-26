// import React, { useEffect, useState } from 'react';

// export const Test = () => {
//     const [car_names, set_car_names] = useState([]);

//     const get_data = async() => {
//         const req = await fetch('../../API/fetch.php');
//         const res = await req.json();
//         console.log(res);
//     }

//     useEffect(() => {
//         set_car_names(['auto 1', 'auto 2']);
//         get_data();
//     }, []);

   

//     return (
//         <div className='cars'>
//             {
//                 car_names.map(car_name => {
//                     return <div>
//                         {car_name}
//                     </div>
//                 })
//             }
//         </div>
//     );
// }
// export default Test;

import React, { useState, useEffect } from 'react';

export const Test = () => {
 const [brands, setBrands] = useState([]);
 
 useEffect(() => {
     const fetchData = async () => {
       const response = await fetch('../../API/fetch.php');
       const data = await response.json();
    //    console.log(data);
       setBrands(data);
     };
     fetchData();
 }, []);

 return (
    <div className='test'>
        <p>jestem w comps</p>
      {brands.map((brand, index) => (
        <div key={index}>
          <p>Brand ID: {brand.brand_id}</p>
          <p>Brand Name: {brand.brand_name}</p>
        </div>
      ))}
    </div>
 );
};

export default Test;


// import React, { useState, useEffect } from 'react';

// export const Test = () => {
//  const [brands, setBrands] = useState([]);
//  const [isLoading, setIsLoading] = useState(true);
//  const [error, setError] = useState(null);

//  const fetchData = async () => {
//     try {
//     fetch('../../API/fetch.php')
//         .then(response => response.text())
//         .then(text => console.log(text))
//         .catch(error => console.error('Error:', error));

//       const response = await fetch('../../API/fetch.php');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setBrands(data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setIsLoading(false);
//     }
//  };

//  useEffect(() => {
//     fetchData();
//  }, []);

//  if (isLoading) {
//     return <div>Loading...</div>;
//  }

//  if (error) {
//     return <div>Error: {error}</div>;
//  }

//  return (
//     <div>
//       {brands.map((brand) => (
//         <div key={brand.brand_id}>
//           <p>Brand ID: {brand.brand_id}</p>
//           <p>Brand Name: {brand.brand_name}</p>
//         </div>
//       ))}
//     </div>
//  );
// };

// export default Test;
