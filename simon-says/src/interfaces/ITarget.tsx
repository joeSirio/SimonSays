import TargetType from "../enums/shapeType";


interface ITarget {
    targetId: number,
    shape: TargetType,
    color: string,
}

export default ITarget;