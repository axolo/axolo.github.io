import{_ as i,o as e,c as a,g as l}from"./app.5dd13a44.js";const d=JSON.parse('{"title":"php_imagick安装配置","description":"php_imagick是强大的图片处理PHP插件，提供了比GD库函数更为方便和强大的图片处理功能。","frontmatter":{"title":"php_imagick安装配置","description":"php_imagick是强大的图片处理PHP插件，提供了比GD库函数更为方便和强大的图片处理功能。","time":"2010-08-02T00:00:00.000Z","category":"后端","tags":["PHP"]},"headers":[],"relativePath":"php-imagick-windows.md"}'),t={name:"php-imagick-windows.md"},p=l('<h1 id="php-imagick安装配置" tabindex="-1">php_imagick安装配置 <a class="header-anchor" href="#php-imagick安装配置" aria-hidden="true">#</a></h1><blockquote><p>方跃明 2010-08-02</p></blockquote><p>php_imagick是强大的图片处理PHP插件，提供了比GD库函数更为方便和强大的图片处理功能。</p><ul><li>参见 <ul><li><a href="http://www.cnblogs.com/wangqishu/p/5609950.html" target="_blank" rel="noreferrer">http://www.cnblogs.com/wangqishu/p/5609950.html</a></li></ul></li><li>版本对应 <ul><li>PHP Version: 7.0.9</li><li>Compiler: MSVC14 (Visual C++ 2015)</li><li>Architecture: x86</li><li>Thread Safety: enabled</li><li>imagick module version: 3.4.2</li><li>Imagick compiled with ImageMagick version: ImageMagick 6.9.3-7 Q16 x86</li><li>Imagick using ImageMagick library version: ImageMagick 6.9.3-7 Q16 x86</li><li>ImageMagick number of supported formats: 240 (必须有数量)</li></ul></li><li>安装文件及设置 <ul><li>安装程序: ImageMagick-6.9.6-8-Q16-x86-dll.exe</li><li>环境变量: MAGICK_HOME = C:\\Program Files (x86)\\ImageMagick-6.9.6-Q16\\modules\\coders</li><li>扩展文件：php_imagick-3.4.2-7.0-ts-vc14-x86.zip (对应x86, vc14, ts)</li><li>php: CORE_RL_-.dll</li><li>php/ext: php_imagick.dll</li><li>php.ini: extension=php_imagick.dll</li></ul></li><li>对应插件 <ul><li><a href="https://packagist.org/packages/intervention/image" target="_blank" rel="noreferrer">https://packagist.org/packages/intervention/image</a></li><li><a href="http://image.intervention.io" target="_blank" rel="noreferrer">http://image.intervention.io</a></li></ul></li><li>排错 <ul><li><code>php_imagick.dll - %1 不是有效的 Win32 应用程序</code>：则说明版本不相符合。需要检查imagick软件本身( 如x86 )、php本身( x86 ts (thread safe) )、php扩展php_imagick.dllts）三方版本 要一致。</li><li><code>php.exe - 系统错误 ，无法启动此程序因为计算机丢失CORE_RL_wand_.dll</code>：说明你没有将php_imagick-3.4.2-7.0-ts-vc14-x86.zip扩展包中的“CORE_-.dll”放到你的php.exe同级目录下。</li><li><code>ImageMagick number of supported formats: 0</code>：支持的图片格式数量为0，检查环境变量MAGICK_HOME设置。</li><li><code>NoDecodeDelegateForThisImageFormat</code>：php_imagick.dll的版本并不支持或并不匹配ImageMagick软件版本，需要更换对应的ImageMagick软件版本。</li></ul></li></ul>',4),c=[p];function o(r,g,m,n,s,h){return e(),a("div",null,c)}const k=i(t,[["render",o]]);export{d as __pageData,k as default};
