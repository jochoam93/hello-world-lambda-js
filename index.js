const sayHello = () => {
    console.log("hello world");
    return "Hello World";
};
module.exports = {
    sayHello
};

if (require.main === module){
    sayHello();
}