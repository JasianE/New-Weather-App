//Finds appropriate code and returns it
import codes from './codes'

function findCode(type){
    const ref = codes()
    if(type in ref){
        return ref[type]
    }
    return '50d'
}

export default findCode