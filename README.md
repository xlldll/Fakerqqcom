## Fakerqqcom
- Bootstrap+js+scss+grunt
- 仿腾讯首页

## (Fakerqqcom)[https://xlldll.github.io/Fakerqqcom/]

## 开发目录说明
- index.html
- src
  - bower(含CSS以及JS的完整组件)
  - bowerjs(分离bower组件中的JS置此)
  - css2Min(存储要分别压缩的SCSS以及编译后的CSS文件)
  - css2MinSync(通过SYNC将css2Min中的css文件置此，去除Map文件，后续分别压缩至destCssMin目录)
  - css2Mult(存储要进行多合一压缩的SCSS以及编译后的CSS文件)
  - css2MultSync(通过SYNC将css2Mult中的css文件置此，后续集中压缩)
  - fonts
  - html
  - img
  - js2Min(存储要分别压缩的JS文件)
  - js2MinSync()
  - js2Mult(存储要集中压缩的JS文件)
  - js2MultSync()
  - jsRequire()
  - php()
  - ajax()

## ISSUES
- 读取路径问题
  - index.html 下的图片src路径加载成功
  - img src="images/content/todayMovie1.jpg"
  - http://fakerqqcom/images/content/todayMovie1.jpg
  - 解决：base少打一个斜杠号
- net::ERR_BLOCKED_BY_CLIENT
  - 广告拦截造成的读取失败
- 底部导航路径
  - 要相对于base的路径
- 注意sass grunt编译的文件名不要太多点号
  - 可以用横杠取代 -
  - 增加extdot:last设置
  