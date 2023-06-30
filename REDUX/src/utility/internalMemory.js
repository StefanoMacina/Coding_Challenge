const internalMemory = {
    save : (name, value) => {
        localStorage.setItem(name , JSON.stringify(value))
    },
    get : (name) => JSON.parse(localStorage.getItem(name)),
    remove : (name) => {
        localStorage.removeItem(name)
    }
}

export default internalMemory