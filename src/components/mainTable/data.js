

import { useQuery,useMutation } from '@tanstack/react-query'

export const rows = [
    {
        id: "#876362",
        domainPrice: "$15",
        status: "Running",
        action: "Show Details",
        createdAt: "12 Dec,2023",
    },
    {
        id: "#876365",
        domainPrice: "$16",
        status: "Will Expire",
        action: "Show Details",
        createdAt: "13 Dec,2023",
    },
    {
        id: "#876366",
        domainPrice: "$28",
        status: "Expired",
        action: "Show Details",
        createdAt: "13 Dec,2023",
    },
    {
        id: "#876367",
        domainPrice: "$18",
        status: "Running",
        action: "Show Details",
        createdAt: "14 Dec,2023",
    },
    {
        id: "#876368",
        domainPrice: "$36",
        status: "Will Expire",
        action: "Show Details",
        createdAt: "15 Dec,2023",
    },
    {
        id: "#876364",
        domainPrice: "$19",
        status: "Expire",
        action: "Show Details",
        createdAt: "16 Dec,2023",
    },
    {
        id: "#876369",
        domainPrice: "$22",
        status: "Running",
        action: "Show Details",
        createdAt: "17 Dec,2023",
    },
    {
        id: "#876370",
        domainPrice: "$24",
        status: "Will Expire",
        action: "Show Details",
        createdAt: "18 Dec,2023",
    },
    {
        id: "#876371",
        domainPrice: "$30",
        status: "Expired",
        action: "Show Details",
        createdAt: "19 Dec,2023",
    },
    {
        id: "#876372",
        domainPrice: "$32",
        status: "Running",
        action: "Show Details",
        createdAt: "20 Dec,2023",
    },
];

// const [ROWS,setROWS] = useState([
//     {
//         id: "#876362",
//         domainPrice: "$15",
//         status: "Running",
//         action: "Show Details",
//         createdAt: "12 Dec,2023",
//     },
//     {
//         id: "#876365",
//         domainPrice: "$16",
//         status: "Will Expire",
//         action: "Show Details",
//         createdAt: "13 Dec,2023",
//     },
//     {
//         id: "#876366",
//         domainPrice: "$28",
//         status: "Expired",
//         action: "Show Details",
//         createdAt: "13 Dec,2023",
//     },
//     // {
//     //     id: "#876367",
//     //     domainPrice: "$18",
//     //     status: "Running",
//     //     action: "Show Details",
//     //     createdAt: "14 Dec,2023",
//     // },
//     // {
//     //     id: "#876368",
//     //     domainPrice: "$36",
//     //     status: "Will Expire",
//     //     action: "Show Details",
//     //     createdAt: "15 Dec,2023",
//     // },
//     // {
//     //     id: "#876364",
//     //     domainPrice: "$19",
//     //     status: "Expire",
//     //     action: "Show Details",
//     //     createdAt: "16 Dec,2023",
//     // },
//     // {
//     //     id: "#876369",
//     //     domainPrice: "$22",
//     //     status: "Running",
//     //     action: "Show Details",
//     //     createdAt: "17 Dec,2023",
//     // },
//     // {
//     //     id: "#876370",
//     //     domainPrice: "$24",
//     //     status: "Will Expire",
//     //     action: "Show Details",
//     //     createdAt: "18 Dec,2023",
//     // },
//     // {
//     //     id: "#876371",
//     //     domainPrice: "$30",
//     //     status: "Expired",
//     //     action: "Show Details",
//     //     createdAt: "19 Dec,2023",
//     // },
//     // {
//     //     id: "#876372",
//     //     domainPrice: "$32",
//     //     status: "Running",
//     //     action: "Show Details",
//     //     createdAt: "20 Dec,2023",
//     // },
// ])

// export const addData= (data)=>{

// // const mutation =useMutation({
// //     mutationFn: (data)=>{
// //         ROWS.push({id: `#${math.random}`,domainPrice:`$15`
// //         ,
// //         status: "Running",
// //         action: "Show Details",
// //         createdAt: "12 Dec,2023",...data})
// //     }, onSuccess: () => {
// //       // Invalidate and refetch
// //       queryClient.invalidateQueries({ queryKey: ['ROWS'] })
// //     },
// // })
// // return mutation;
// // // useChangeMutation.mutate(data);
//     setROWS([...ROWS,{id: `#${Math.random}`,domainPrice:`$15`,status: "Running",
//     action: "Show Details",
//     createdAt: "12 Dec,2023",}])
// }
 





const getRows=()=>ROWS;
export const getData =  () => {
    const useDataQuery =useQuery({queryKey:['ROWS'], 
 queryFn:async()=>{
    const data = await getRows();
    return data;
  
 }})
    return useDataQuery;
}
