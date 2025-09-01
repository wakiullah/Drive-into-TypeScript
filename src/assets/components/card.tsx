import type { FC, PropsWithChildren, ReactNode } from "react"

// type propstType ={
//     title:string,
//     children:ReactNode
// }

type propsType = PropsWithChildren<{
    title:string
}>

const InfoCard:FC<propsType> =({title,children})=>{
    return(
        <div style={{
            maxWidth: '700px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor: 'white',
            margin: '20px auto'
        }}>
            <h1 style={{
                fontSize: '24px',
                marginBottom: '16px',
                color: '#333'
            }}>{title}</h1>
            {children}
            <button style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>Read More</button>
        </div>
    )

}

export default InfoCard


// export default function InfoCard ({title,children}:propsType){

//     return(
//         <div style={{
//             maxWidth: '700px',
//             padding: '20px',
//             boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//             borderRadius: '8px',
//             backgroundColor: 'white',
//             margin: '20px auto'
//         }}>
//             <h1 style={{
//                 fontSize: '24px',
//                 marginBottom: '16px',
//                 color: '#333'
//             }}>{title}</h1>
//             {children}
//             <button style={{
//                 padding: '10px 20px',
//                 backgroundColor: '#007bff',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '4px',
//                 cursor: 'pointer'
//             }}>Read More</button>
//         </div>
//     )
// }
