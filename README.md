# ios-ipa-server

部署到vercel.com实现动态获取plist安装ipa的服务(Deploy to vercel.com to dynamically obtain the plist service that supports apple protocol installation ipa)

## Deploy Your Own

create a vercel acount on [vercel.com](https://vercel.com/)

and click ⬇️ Deploy button

Deploy your own ios-ipa-server project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/itzhangbao/ios-ipa-server)

wait...

Finish!

### Use

- app

open this url 

```json
itms-services://?action=download-manifest&url=https://your-projcet-name.vercel.app/ipa/plist/base64-String(name|bundleid|ipa-url)
```

- web

herf 

```json
itms-services://?action=download-manifest&url=https://your-projcet-name.vercel.app/ipa/plist/base64-String(name|bundleid|ipa-url)
```

If it helps you, please give it to star ⬆️ . ：）
