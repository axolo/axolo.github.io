# jQuery常用表格操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>常用表格操作</title>
  <link rel="stylesheet" href="http://cdn.bootcss.com/qtip2/3.0.3/jquery.qtip.min.css">
  <style>
  div {
    margin-bottom: 10px;
  }
  th span, td span {
    padding: 3px;
  }
  .zebra-false {
    background-color: #ccc;
  }
  .error {
    background-color: #f99;
  }
  </style>
</head>
<body>
  <div id="title">
    <button role="delete">删</button>
    <button role="insert">增</button>
  </div>
  <div id="data"><script id="tmpl" type="text/x-dot-template">
    <table border="1">
      <thead>
        <tr>
          <th role="check"><span><input type="checkbox"></span></th>
          <th><span>序号</span></th>
          <th><span>网址</span></th>
          <th><span>邮箱</span></th>
          <th><span>时间</span></th>
        </tr>
      </thead>
      <tbody>{{~it:v:k}}
        <tr>
          <td role="check"><span><input type="checkbox" value="{{=v.id}}"></span></td>
          <td role="index"><span></span></td>
          <td role="url"><span>{{=v.url}}</span></td>
          <td role="email"><span>{{=v.email}}</span></td>
          <td role="date"><span>{{=v.date}}</span></td>
        </tr>{{~}}
      </tbody>
    </table></script>
  </div>
  <script src="http://cdn.bootcss.com/jquery/3.2.0/jquery.min.js"></script>
  <script src="http://cdn.bootcss.com/validator/7.0.0/validator.min.js"></script>
  <script src="http://cdn.bootcss.com/qtip2/3.0.3/jquery.qtip.min.js"></script>
  <script src="http://cdn.bootcss.com/dot/2.0.0-beta.0/doT.min.js"></script>
  <script>
  $(document).ready(function() {
    // 数据
    var data = [
      {"id": "1",  "url": "163.com",     "email": "admin@163.com",    "date": "2016-09-01"},
      {"id": "5",  "url": "163.com",     "email": "test@163.com",     "date": "2016-09-05"},
      {"id": "6",  "url": "163.com",     "email": "user@163.com",     "date": "2016-09-10"},
      {"id": "7",  "url": "google.com",  "email": "google@gmail.com", "date": "2004-06-06"},
      {"id": "8",  "url": "google.com",  "email": "admin@gmail.com",  "date": "2004-01-01"},
      {"id": "9",  "url": "google.com",  "email": "test@gmail.com",   "date": "2006-10-10"},
      {"id": "11", "url": "qq.com",      "email": "admin@qq.com",     "date": "2005-12-23"},
      {"id": "14", "url": "qq.com",      "email": "test@qq.com",      "date": "2008-09-01"},
      {"id": "15", "url": "baidu.com",   "email": "admin@baidu.com",  "date": "2003-02-01"},
      {"id": "16", "url": "baidu.com",   "email": "test@baidu.com",   "date": "2006-12-31"}
    ]
    // 模版
    var tmpl = doT.template($('#tmpl').text())
    // 编译模版
    $('#data').html(tmpl(data))
    // 斑马纹
    var zebra = true
    $('table tbody tr').each(function(e){
      $(this).addClass('zebra-' + zebra)
      if($(this).children('td[role="url"]').find('span').text() !=
         $(this).next().children('td[role="url"]').find('span').text()){
        zebra = !zebra
      }
    })
    // 序号
    var index = 0
    $('table tbody tr').each(function(){
      $(this).children('td[role="index"]').children('span').text(++index)
    })
    // 表格编辑
    var typing = false                                                 // 变量：可编辑
    var pretyping = ''                                                 // 变量：保存编辑前内容
    // 进入编辑
    $('table').on('dblclick', 'tbody tr', function(e){                 // 响应编辑事件
      if(typing) {                                                     // 有编辑未完成
        alert("输入进行中")
      } else {
        var el = $(this)
        pretyping = el.html()                                    // 保存编辑前内容
        el.children('td[role="check"]').find('span').html([      // 构建操作按钮
          '<button role="cancel">弃</button>',
          '<button role="save">存</button>'
        ].join('\n'))
        // 构建行内表单
        el.children('td:not([role="check"],[role="index"])').each(function(){
          $(this).html('<input type="text" value="' + $(this).text() + '">')
        })
        typing = true      // 正在编辑
      }
    })
    // 取消编辑
    $('table').on('click', 'td[role="check"] button[role="cancel"]', function(e){
      var el = $(this).parent().parent().parent()      // 定位到tr
      el.html(pretyping)                               // 恢复行原始数据
      typing = false                                   // 可编辑
    })
    // 保存编辑
    // TODO select, textarea, ...
    $('table').on('click', 'td[role="check"] button[role="save"]', function(e){
      var data = []                                    // 预定义数据（名称、验证、类型）
      var eq = 0                                       // 目前使用eq，考虑统一进预定义数据
      var el = $(this).parent().parent().parent()              // 元素定位
      var isValid = false                                      // 客户端验证
      el.children('td').each(function(){                      // 遍历单元格
        var val = $(this).find('input').val()                 // 取输入值
        undefined != val && data.push({ eq: eq, val: val })   // 按需保存
        eq++                                                  // 递增索引
      })
      isValid =                                              // 统一验证
        validator.isURL(data[0].val) &&
        validator.isEmail(data[1].val) &&
        validator.isISO8601(data[2].val)
      if(isValid) {                                         // 验证通过
        // TODO 新增、更新分支
        // TODO 服务端保存（AJAX回调）
        el.html(pretyping)                                  // 复原原始内容
        for(k in data) {                                    // 遍历数据
          el.children('td').eq(data[k].eq).find('span').html(data[k].val) // 按需填充
        }
        typing = false                                      // 恢复可编辑
      } else {
        // 验证失败
        alert('验证失败')
      }
    })
    // 数据格式提醒
    $('table').on('blur', 'input', function(e){
      var el = $(this).parent()
      var role = el.attr('role')
      var val = $(this).val()
      switch(role) {
        case 'url':
          validator.isURL(val) || tip(el, '网址格式错误')
        break
        case 'email':
          validator.isEmail(val) || tip(el, '邮箱格式错误')
        break
        case 'date':
          validator.isISO8601(val) || tip(el, '日期格式错误')
        break
        default:
        break
      }
    })
    // 消除错误提示
    $('table').on('focus', 'input', function(e){
      var el = $(this).parent()
      el.qtip('destroy')
      el.children().removeClass('error')
    })
    // 出错提醒函数
    var tip = function(el, text) {
      el.children().addClass('error')
      el.qtip({
        content: { text: text },
        position: { at: 'bottom center' },
        show: { ready: true, solo: true }
      })
    }
    // 全选、不选
    $('table').on('click', 'th[role="check"] input[type="checkbox"]', function(e){
      $('td input:nth-child(1)').prop('checked', $(this).is(':checked'))
    })
    // 删除选中
    $('#title').on('click', 'button[role="delete"]', function(e){
      var checked = []
      $('#data tbody tr').each(function(){
        var tr = $(this)
        var checkbox = tr.children('td[role="check"]').find('input[type="checkbox"]')
        checkbox.is(':checked') && checked.push(checkbox.val())
      })
      alert(JSON.stringify(checked))
    })
  })
</script>
</body>
</html>
```