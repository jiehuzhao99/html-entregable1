const RemoveBlue = () => {
    const getColors = () => {
        return ['yellow', 'red', 'blue']
    }

    const removeColorFromArray = (array, color) => {
        return array.filter(element => element !== color)
    }
    
    const result = removeColorFromArray(getColors(), 'blue');
    return result;
}
 
export default RemoveBlue;