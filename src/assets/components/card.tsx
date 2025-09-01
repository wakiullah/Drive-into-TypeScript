export default function InfoCard (props:{
    title:string,
    description:string
}){

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
            }}>{props.title}</h1>
            <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#666',
                marginBottom: '20px'
            }}>{props.description}</p>
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
