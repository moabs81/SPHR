this.a = 'hi!, i\'m global!';

const fullyDeclared = function () {
    console.log(this.a);
};

const arrowDeclared = () => {
    console.log(this.a);
};

fullyDeclared.call(this);

fullyDeclared();
arrowDeclared();