# ios-ipa-server
部署到vercel.com实现动态获取plist安装ipa的服务(Deploy to vercel.com to dynamically obtain the plist service that supports apple protocol installation ipa)


## Deploy Your Own

Deploy your own Vue.js project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/itzhangbao/ios-ipa/server)

_Live Example: https://ios-ipa-server.vercel.com/

### How We Created This Example

1. fork or clone this repository to your github.

2. create a project on your Vercel.

3. and add this repository.

config git

```shell
$ npm gp
```

### Use

1. app

open this url 

```json
itms-services://?action=download-manifest&url=https://your-projcet-name.vercel.app/ipa/plist/base64-String(name|bundleid|ipa-url)
```

2. web

herf 

```json
itms-services://?action=download-manifest&url=https://your-projcet-name.vercel.app/ipa/plist/base64-String(name|bundleid|ipa-url)
```
