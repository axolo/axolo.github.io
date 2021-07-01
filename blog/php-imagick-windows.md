# php_imagick安装配置

php_imagick是强大的图片处理PHP插件。

- 参见
  - <http://www.cnblogs.com/wangqishu/p/5609950.html>
- 版本对应
  - PHP Version: 7.0.9
  - Compiler: MSVC14 (Visual C++ 2015)
  - Architecture: x86
  - Thread Safety: enabled
  - imagick module version: 3.4.2
  - Imagick compiled with ImageMagick version: ImageMagick 6.9.3-7 Q16 x86
  - Imagick using ImageMagick library version: ImageMagick 6.9.3-7 Q16 x86
  - ImageMagick number of supported formats: 240 (必须有数量)
- 安装文件及设置
  - 安装程序: ImageMagick-6.9.6-8-Q16-x86-dll.exe
  - 环境变量: MAGICK_HOME = C:\Program Files (x86)\ImageMagick-6.9.6-Q16\modules\coders
  - 扩展文件：php_imagick-3.4.2-7.0-ts-vc14-x86.zip (对应x86, vc14, ts)
  - php: CORE_RL_-.dll
  - php/ext: php_imagick.dll
  - php.ini: extension=php_imagick.dll
- 对应插件
  - <https://packagist.org/packages/intervention/image>
  - <http://image.intervention.io>
- 排错
  - `php_imagick.dll - %1 不是有效的 Win32 应用程序`：则说明版本不相符合。需要检查imagick软件本身( 如x86 )、php本身( x86 ts (thread safe) )、php扩展php_imagick.dllts）三方版本 要一致。
  - `php.exe - 系统错误 ，无法启动此程序因为计算机丢失CORE_RL_wand_.dll`：说明你没有将php_imagick-3.4.2-7.0-ts-vc14-x86.zip扩展包中的“CORE_-.dll”放到你的php.exe同级目录下。
  - `ImageMagick number of supported formats: 0`：支持的图片格式数量为0，检查环境变量MAGICK_HOME设置。
  - `NoDecodeDelegateForThisImageFormat`：php_imagick.dll的版本并不支持或并不匹配ImageMagick软件版本，需要更换对应的ImageMagick软件版本。
