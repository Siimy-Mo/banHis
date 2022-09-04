// hooks/useFetchData.ts
import { useEffect, useState } from 'react';
import axios from 'axios';

// 没有后台所以不用axios
// const useFetchData = () => {
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const { data: response } = await axios.get('/stuff/to/fetch');
//                 setData(response);
//             } catch (error) {
//                 console.error(error);
//             }
//             setLoading(false);
//         };
//         fetchData();
//     }, []);

//     return {
//         data,
//         loading
//     };
// };

// export default useFetchData;

// export const useInputValue = (initialValue) => {
//     const [value, setValue] = useState(initialValue !== undefined ? initialValue : null);
    
//     const onChange = (val) => {
//       if (val.target !== null && val.target !== undefined) {
//         setValue(val.target.value);
//       } else {
//         setValue(val);
//       }
//     };
    
//     return { value, onChange };
//   };
