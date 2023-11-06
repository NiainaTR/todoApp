/**
 * 
 * @param {string} id 
 * @param {string} item 
 * @param {Array} list 
 */
export function removeItemFromList(id , item , list){
    list = list.filter((item) => {
        item.id !== id
    })
}