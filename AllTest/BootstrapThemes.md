# Bootstrap Themes

Working with bootstrap and bootswatch themes.

## Buttons

<div class="padded">
  <button>Foo</button>
</div>

<div class="padded">
  <button type="button" class="btn btn-lg btn-default">Default</button>
  <button type="button" class="btn btn-lg btn-primary">Default</button>
  <button type="button" class="btn btn-lg btn-success">Default</button>
  <button type="button" class="btn btn-lg btn-info">Default</button>
  <button type="button" class="btn btn-lg btn-warning">Default</button>
  <button type="button" class="btn btn-lg btn-danger">Default</button>
</div>

<div class="padded">
  <button type="button" class="btn btn-xs btn-default">Default</button>
  <button type="button" class="btn btn-xs btn-primary">Default</button>
  <button type="button" class="btn btn-xs btn-success">Default</button>
  <button type="button" class="btn btn-xs btn-info">Default</button>
  <button type="button" class="btn btn-xs btn-warning">Default</button>
  <button type="button" class="btn btn-xs btn-danger">Default</button>
</div>

## Alerts

<div class="padded">
  <div class="alert alert-success" role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
  </div>

  <div class="alert alert-danger" role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
  </div>

</div>

## Labels

<span class="label label-default">Default</span>
<span class="label label-primary">Primary</span>
<span class="label label-info">Info</span>
<span class="label label-danger">Danger</span>

## Panels

<div class="panel panel-default">
  <div class="panel-body">
    Basic panel example
  </div>
</div>

<div class="panel panel-warning">
  <div class="panel-body">
    Basic panel example
  </div>
</div>

## Images

![Blue](/images/carousel01.png)

## Carousel

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="/images/canada/2016-02-27_10.09.03.jpg" alt="First slide">
    </div>
    <div class="item">
      <img src="/images/canada/2016-02-27_10.30.58.jpg" alt="Second slide">
    </div>
    <div class="item">
      <img src="/images/canada/2016-02-27_09.08.04.jpg" alt="Third slide">
    </div>
  </div>
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
