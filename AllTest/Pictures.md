## My First Picture

Here is a normal picture of a bridge with no CSS attached to it:

![Bridge](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Manhattan_Bridge_Construction_1909.jpg/800px-Manhattan_Bridge_Construction_1909.jpg)

If you want to get more control over the picture, you can use CSS. For instance, you can use the picture, and the same file, but have the image appear to be smaller. This usually involves writing real HTML in your markdown, and including a class. Here is my simple CSS class:

```css
img.twenty-five-percent {
   width: 25%;
}
```

This code says that if there is a class of an image tag named **twenty-five-percent** then set its width to 25% of the entire page. Put this CSS in a file called **/var/www/html/css/style.css**. If you have the most recent version of MakeHtml, then the code you put in this file should be reflected in your web pages.

And here is code for using this CSS class:

```html
<img class="twenty-five-percent" src="https://foo.com/my-picture.jpg" alt="bridge">
```

Note the word **class** and the specific use of our **twenty-five-percent** code from the CSS file.

Here is the same image, and the same file, as the one shown above, but here we use CSS to make the image smaller:

<img class="twenty-five-percent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Manhattan_Bridge_Construction_1909.jpg/800px-Manhattan_Bridge_Construction_1909.jpg" alt="bridge">


