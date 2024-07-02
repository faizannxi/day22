function fn() {
    console.log('hello');
    const main = document.createElement('div');

    const image = document.createElement('img');

    const height = document.createElement('h1');

    const title = document.createElement('p');
    image.src = ("C:\Users\Hi\Desktop\day22\bg7.jpg");
    const height1 = document.createTextNode('Hello World');
    const titla = document.createTextNode('Hi I am here for you');


    height.appendChild(height1);
    title.appendChild(titla);

    main.appendChild(image);
    main.appendChild(height);
    main.appendChild(title);

    document.getElementById('cart').appendChild(main);

}