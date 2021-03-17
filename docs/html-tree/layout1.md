---
id: layout-1
slug: /layout-1
title: HTML tree analysis - LiveRecover marketing site
sidebar_label: Bài 1 - LiveRecover marketing site
image: https://images.unsplash.com/photo-1507470855518-469f3b3dad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80
---

Layout URL: <a href="https://screenlane.com/screen/liverecover-marketing-site-fc1/">link to screenlane</a>🚀

## General Layout

![alt](https://screenlane.com/media/screenshots/liverecover-marketing-site-screenshot-e72501fc.jpg)

``` 
body
|__ header
|  |__ nav.top-nav
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
|  |__ section.testimonial
|  |__ section.cta
|
|__ footer

```
## section.top-bar

![alt](../../static/img/layout-1-header.png)

```
nav.top-bar
|__ div.container
|    |__ div.top-bar__row
|       |__ div.top-bar__col
|       |   
|       |__ div.top-bar__col
|       |   |__ ul.menu-list > li*5 > a 
|       |
|       |__ div.top-bar__col
|          

```
## section.banner

![alt](../../static/img/layout-1-main-section-hero.png)

```
section.banner
|__ div.container
|   |__ div.banner__row
|       |__ div.banner__col
|       |   |__ div.banner-main
|       |       |__ h1
|       |       |__ p
|       |       |__ button
|       |   
|       |__ div.banner__col
|           |__ div.banner-thumbnail
|               |__img


```

## section.why-us

![alt](../../static/img/layout-1-main-section-item-list.png)

```
section.why-us
|__ div.container
|   |__ ul.why-us__list          
|       |__ li*3
|           |__div.reason-item
|              |__ div.reason-item__thumbnail > i   // icon
|              |__ h3.reason-item__title
|              |__ p.reason-item__desc


```

## section.clients

![alt](../../static/img/layout-1-main-section-logo-banner.png)

```
section.clients
|__ div.container
|   |__ p.clients__subtitle
|   |
|   |__ ul.clients__list
|       |__ li*5
|           |__ img


```
## section.title-box

![alt](../../static/img/layout-1-main-section-title-box.png)

```
section.title-box
|__ div.container
|   |__ div.title-box__title
|       |__ h2

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
|       |   |__ div.step__content
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
|       |__ h2.feature__title
|       |__ p.feature__subtitle
|       |__ ul > li*6
|           |__ div.feature__item
|               |   |__ img    //icon
|               |
|               |__ div.feature__main
|                       |__p.feature-item__title
|                       |__p.feature-item__desc

```

## section.integration

![alt](../../static/img/layout-1-main-section-integration.png)

```
section.integration
|__ div.container
|   |__ div
|       |__ h3
|       |__ ul > li*6 > a > img

```
## section.testimonial

![alt](../../static/img/layout-1-main-section-testimonions.png)

```
section.testimonial
|__ div.container
|   |__ ul.testimontial-list
|       |__ li*3
|           |__ div.testimontial-item
|               |__ img.testimontial-item__thumbnail
|               |__ p.testimontial-item__desc
|               |__ p.testimontial-item__name
|               |__ p.testimontial-item__subtitle

```

## section.cta

![alt](../../static/img/layout-1-main-section-cta.png)

```
section.cta-box
|__ div.container
|   |__ div.cta-box__main
|       |__ h2.cta-box__title
|       |__ p.cta-box__decs
|       |__ button.cta-box__btn

```

## footer

![alt](../../static/img/layout-1-footer.png)

```
footer
|__ section.footer
    |__ div.container
        |__ div.footer__row
        |   |__ div.footer__col
        |   |          |__ div.footer-logo > img
        |   |          |__ p.footer-subtitle
        |   |          |__ ul.footer-social > li*3 > i // icon
        |   |
        |   |__ div.footer__col
        |       |__ul.footer-menu > li*4 > a
        |
        |__ p.copyright

```



<small>Writing in 2021 by <a href="https://www.linkedin.com/in/hungle-ag/">HungLe </a>with ❤️ Easy Frontend.</small>
