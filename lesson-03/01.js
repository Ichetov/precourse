// code

const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    return colors.filter(it=> it === "черный" || it === "красный" || it === "желтый").join('-');
    // ФИЛЬТРУЕМ.ПРЕВРАЩАЕМ В СТРОКУ('-')
}

console.log(createColorString());