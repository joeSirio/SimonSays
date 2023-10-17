

export default function Target(props: any){

    return(
        <div className="target-wrapper">

            {!props.active && <img src={props.targetData.images[0]} /> }
            {props.active && <img src={props.targetData.images[1]} /> }
        </div>
    )
}