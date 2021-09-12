export const round = (value: number, precicion: number) =>{
    var multiplier = Math.pow(10 , precicion || 0);
    return Math.round(value * multiplier)/multiplier;
}