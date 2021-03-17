---
id: layout-1
slug: /layout-1
title: HTML tree analysis
sidebar_label: Bài 1 - Trang Slack
image: https://images.unsplash.com/photo-1507470855518-469f3b3dad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80
---

Layout URL: <a href="https://screenlane.com/screen/liverecover-marketing-site-fc1/">link to screenlane</a>🚀

## General Layout

![alt](https://screenlane.com/media/screenshots/liverecover-marketing-site-screenshot-e72501fc.jpg)

``` 
body
|__ header
|  |__ section.top-nav
|
|__ main
|  |__ section.banner
|  |__ section.why-us
|  |__ section.clients
|  |__ section.title-box
|  |__ section.step
|  |__ section.step
|  |__ section.step
|  |__ section.step
|  |__ section.feature
|  |__ section.integration
|  |__ section.testimonions
|  |__ section.cta
|
|__ footer

```
## section.top-bar

![alt](../../static/img/layout-1-header.png)

```
section.top-bar
|__ div.container
|    |__ div.top-bar__row
|       |__ div.top-bar__col
|       |   |__ div.top-bar__image
|       |       |__img
|       |   
|       |__ div.top-bar__col
|       |   |__ ul.top-bar__menu > li*5 > a 
|       |
|       |__ div.top-bar__col
|           |__ div.top-bar__btn
|               |__button

```
## section.banner

![alt](../../static/img/layout-1-main-section-hero.png)

```
section.banner
|__ div.container
|   |__ div.banner__row
|       |__ div.banner__col
|       |   |__ div.banner__contents
|       |       |__ h2
|       |       |__ p
|       |       |__ button
|       |   
|       |__ div.banner__col
|           |__ div.banner__image
|               |__img


```

## section.why-us

![alt](../../static/img/layout-1-main-section-item-list.png)

```
section.why-us
|__ div.container
|   |__ ul          
|       |__ li*3
|           |__div.why-us__item
|              |__ i   // icon
|              |__ h3
|              |__ p

Note:  we didn't need to set "class" here, we set class when element needed to style different.

```

## section.clients

![alt](../../static/img/layout-1-main-section-logo-banner.png)

```
section.clients
|__ div.container
|   |__ p
|   |
|   |__ ul
|       |__ li*5
|           |__ div.clients__image
|               |__img 

```
## section.title-box

![alt](../../static/img/layout-1-main-section-title-box.png)

```
section.title-box
|__ div.container
|   |__ div.title-box__title
|       |__ h4

```
## section.step

![alt](../../static/img/layout-1-main-section-step-1.png)
![alt](../../static/img/layout-1-main-section-step-2.png)
![alt](../../static/img/layout-1-main-section-step-3.png)
![alt](../../static/img/layout-1-main-section-step-4.png)

```
section.step
|__ div.container
|   |__ div.step__row
|       |__ div.step__col
|       |   |__ div.step__contents
|       |       |__ h5
|       |       |__ h4
|       |       |__ p
|       |       |__ small // strong
|       |
|       |__ div.step__col    
|           |__ div.step__image
|               |__ img


```

## section.feature

![alt](../../static/img/layout-1-main-section-feature-1.png)

```
section.feature
|__ div.container
|   |__ div.feature__contents
|       |__ h2
|       |__ p
|       |__ ul > li*6
|           |__ div.feature__row
|               |__ div.feature__col
|               |   |__ div > i      //icon
|               |
|               |__ div.feature__col
|                   |__ div
|                       |__p
|                       |__small

```

## section.integration

![alt](../../static/img/layout-1-main-section-integration.png)

```
section.integration
|__ div.container
|   |__ div
|       |__ h3
|       |
|       |__ ul > li*6 > div > a > img

```
## section.testimonions

![alt](../../static/img/layout-1-main-section-testimonions.png)

```
section.testimonions
|__ div.container
|   |__ ul
|       |__ li*3
|           |__ div
|               |__ img
|               |__ p
|               |__ strong
|               |__ small

```

## section.cta

![alt](../../static/img/layout-1-main-section-cta.png)

```
section.cta
|__ div.container
|   |__ div
|       |__ h2
|       |__ p
|       |__ button

```

## footer

![alt](../../static/img/layout-1-footer.png)

```
footer
|__ section.footer
    |__ div.container
        |__ div.footer__row
        |   |__ div.footer__col
        |   |   |__ div.footer__left
        |   |       |__ img
        |   |       |__ p
        |   |       |__ ul > li*3 > i // icon
        |   |
        |   |__ div.footer__col
        |       |__ul > li*4 > a
        |
        |__ small

```