# generator-yaotv [![NPM version][npm-image]][npm-url] 
> 摇电视项目素材包结构

## 安装

需预先安装[node.js](https://nodejs.org/)、[npm](https://www.npmjs.com/)

```bash
npm install -g yo
npm install -g generator-yaotv
```

然后执行项目目录生成命令:

```bash
yo yaotv
```

## Gulp 命令
```bash
cd project-dir

//编译

gulp build

//发布

gulp publish

//一键发布

gulp deploy

//图片压缩

gulp tiny

//打成zip包

gulp zip

```

## 效果预览
![yaotv.png](http://ww3.sinaimg.cn/large/68574fffgw1f1pfry2xi5j20gz0lw43v.jpg)

## TODO LIST
- [x] 前端文件更新后自动打包上传到七牛服务器
- [x] 更新后刷新cdn缓存


## 了解yeoman

[learn more about him](http://yeoman.io/).

## License

Apache-2.0 © [stuart](http://www.shizuwu.cn)

[npm-image]: https://badge.fury.io/js/generator-yaotv.svg
[npm-url]: https://npmjs.org/package/generator-yaotv
