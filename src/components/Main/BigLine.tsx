import styled from "styled-components";



const BigLine = ({ height}: { height: number})=>{
    const Line = styled.div`
    width: 100%;
    height:${height}px;
    
`
    return(
        <Line/>
    )
}

export default BigLine;