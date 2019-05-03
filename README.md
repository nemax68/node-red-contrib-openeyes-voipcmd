Description
===========

![OpenEyes-ClrButton-flow](https://github.com/nemax68/node-red-contrib-open-eyes-voipcmd/blob/master/images/flow.png)

A [node.js](http://nodejs.org/) A node-red library that build JSON message and send it to oesip module to
        establish or close a voip call


Requirements
============

* [node.js](http://nodejs.org/) -- tested against v11+

* [node-red](http://nodered.org/)

* Linux 3.4.104+ kernel with POSIX message queue support compiled in (`CONFIG_POSIX_MQUEUE`)

* Need [OpenEyes](http://open-eyes.it) hardware platform

  ![OpenEyes-voipcmd-flow](https://github.com/nemax68/node-red-contrib-openeyes-voipcmd/blob/master/images/open-eyes.png)

* Depends on [nan](https://www.npmjs.com/package/nan) & [posix-mq](https://www.npmjs.com/package/posix-mq) which will be automatically installed when running `npm install openeyes-voipcmd`.

Install
=======

```shell
$ npm install openeyes-voipcmd
```
Values
========


Examples
========

API
===
