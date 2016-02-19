## Foo

This is foo

## CSS

As you already know, you can enter bang, square brackets and a title, then parenthesis and a URL to display a picture with markdown. A bit like this, where you text is flush left:

```
![Title](http://foo.com/my-picture.png)
```

The above code yields a picture with a default size:

![Bridge][bridge]

If you want to get more control over the picture, you can use CSS. This usually involves writing real HTML in your markdown, and including a class. Here is my simple CSS class:

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

<img class="twenty-five-percent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Manhattan_Bridge_Construction_1909.jpg/800px-Manhattan_Bridge_Construction_1909.jpg" alt="bridge">

[bridge]: https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Manhattan_Bridge_Construction_1909.jpg/800px-Manhattan_Bridge_Construction_1909.jpg
