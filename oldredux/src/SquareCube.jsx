let initialstate=5
let SquareCube = (state = initialstate, Action) => {
    switch (Action.type) {
        case 'SQUARE':
            return state**2;
        case 'CUBE':
            return state**3;
        default:
            return state
    }
}
export { SquareCube }