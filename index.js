const sayHello = () => {
    console.log("Hello World");
    return "Hello World";
};
module.exports = {
    sayHello
};

if (require.main === module){
    sayHello();
}