

export default function Target(props: any){

    return(
        <div className="target-wrapper">
            <div className={`shape ${props.targetData.shape}`} 
                data-id={props.targetData.targetId} 
                // style={{background: props.targetData.color}}
                >

            </div>
        </div>
    )
}