import{_ as s,o as a,c as l,b as n}from"./app.6f0396ad.js";const e="/assets/sql-antipatterns.ddf5868a.jpg",D=JSON.parse('{"title":"读《SQL反模式》","description":"花几个小时刷《SQL反模式：SQL 建模与使用指南》。读到一半的时候，狂妄的认为自己差不多可以写一本《反〈SQL反模式〉》了，一时兴起便有了这篇读书笔记。","frontmatter":{"title":"读《SQL反模式》","description":"花几个小时刷《SQL反模式：SQL 建模与使用指南》。读到一半的时候，狂妄的认为自己差不多可以写一本《反〈SQL反模式〉》了，一时兴起便有了这篇读书笔记。","time":"2018-05-31T00:00:00.000Z","categories":"SQL","tags":["SQL"],"top":1},"headers":[{"level":2,"title":"缘起","slug":"缘起","link":"#缘起","children":[]},{"level":2,"title":"一、原著封面","slug":"一、原著封面","link":"#一、原著封面","children":[]},{"level":2,"title":"二、乱穿马路","slug":"二、乱穿马路","link":"#二、乱穿马路","children":[{"level":3,"title":"目的：存储多值属性（1NF）","slug":"目的-存储多值属性-1nf","link":"#目的-存储多值属性-1nf","children":[]},{"level":3,"title":"反模式：格式化的逗号分隔列表","slug":"反模式-格式化的逗号分隔列表","link":"#反模式-格式化的逗号分隔列表","children":[]},{"level":3,"title":"解决方案：创建一张交叉表","slug":"解决方案-创建一张交叉表","link":"#解决方案-创建一张交叉表","children":[]},{"level":3,"title":"感悟：Oracle实现分隔符转多行","slug":"感悟-oracle实现分隔符转多行","link":"#感悟-oracle实现分隔符转多行","children":[]}]},{"level":2,"title":"三、单纯的树","slug":"三、单纯的树","link":"#三、单纯的树","children":[{"level":3,"title":"目的：分层存储与查询（CTE）","slug":"目的-分层存储与查询-cte","link":"#目的-分层存储与查询-cte","children":[]},{"level":3,"title":"反模式：总是依赖父节点","slug":"反模式-总是依赖父节点","link":"#反模式-总是依赖父节点","children":[]},{"level":3,"title":"解决方案：邻接表 + CTE","slug":"解决方案-邻接表-cte","link":"#解决方案-邻接表-cte","children":[]},{"level":3,"title":"感悟：邻接表实现与转换","slug":"感悟-邻接表实现与转换","link":"#感悟-邻接表实现与转换","children":[]}]},{"level":2,"title":"四、需要ID","slug":"四、需要id","link":"#四、需要id","children":[{"level":3,"title":"目的：建立主键规范（PK）","slug":"目的-建立主键规范-pk","link":"#目的-建立主键规范-pk","children":[]},{"level":3,"title":"反模式：以不变应万变","slug":"反模式-以不变应万变","link":"#反模式-以不变应万变","children":[]},{"level":3,"title":"解决方案：剪裁设计","slug":"解决方案-剪裁设计","link":"#解决方案-剪裁设计","children":[]},{"level":3,"title":"感悟：主键的选择与设计","slug":"感悟-主键的选择与设计","link":"#感悟-主键的选择与设计","children":[]}]},{"level":2,"title":"五、不用钥匙的入口","slug":"五、不用钥匙的入口","link":"#五、不用钥匙的入口","children":[{"level":3,"title":"目的：简化数据库架构（FK）","slug":"目的-简化数据库架构-fk","link":"#目的-简化数据库架构-fk","children":[]},{"level":3,"title":"反模式：无视约束","slug":"反模式-无视约束","link":"#反模式-无视约束","children":[]},{"level":3,"title":"解决方案：声明约束","slug":"解决方案-声明约束","link":"#解决方案-声明约束","children":[]},{"level":3,"title":"感悟：安全 vs 性能","slug":"感悟-安全-vs-性能","link":"#感悟-安全-vs-性能","children":[]}]},{"level":2,"title":"六、实体-属性-值","slug":"六、实体-属性-值","link":"#六、实体-属性-值","children":[{"level":3,"title":"目的：支持可变属性（EAV）","slug":"目的-支持可变属性-eav","link":"#目的-支持可变属性-eav","children":[]},{"level":3,"title":"反模式：使用泛型属性表","slug":"反模式-使用泛型属性表","link":"#反模式-使用泛型属性表","children":[]},{"level":3,"title":"解决方案：模型化子类型","slug":"解决方案-模型化子类型","link":"#解决方案-模型化子类型","children":[]},{"level":3,"title":"感悟：以不变应万变","slug":"感悟-以不变应万变","link":"#感悟-以不变应万变","children":[]}]},{"level":2,"title":"七、多态关联","slug":"七、多态关联","link":"#七、多态关联","children":[{"level":3,"title":"目的：引用多个父表（1NF）","slug":"目的-引用多个父表-1nf","link":"#目的-引用多个父表-1nf","children":[]},{"level":3,"title":"反模式：使用双用途外键","slug":"反模式-使用双用途外键","link":"#反模式-使用双用途外键","children":[]},{"level":3,"title":"解决方案：让关系变得简单","slug":"解决方案-让关系变得简单","link":"#解决方案-让关系变得简单","children":[]},{"level":3,"title":"感悟：投胎很重要，看清楚谁是你爸！","slug":"感悟-投胎很重要-看清楚谁是你爸","link":"#感悟-投胎很重要-看清楚谁是你爸","children":[]}]},{"level":2,"title":"八、多列属性","slug":"八、多列属性","link":"#八、多列属性","children":[{"level":3,"title":"目的：存储多值属性（又是1NF）","slug":"目的-存储多值属性-又是1nf","link":"#目的-存储多值属性-又是1nf","children":[]},{"level":3,"title":"反模式：创建多个列","slug":"反模式-创建多个列","link":"#反模式-创建多个列","children":[]},{"level":3,"title":"解决方案：创建从属表","slug":"解决方案-创建从属表","link":"#解决方案-创建从属表","children":[]},{"level":3,"title":"感悟：如此穷追不舍，1NF表示受够了！","slug":"感悟-如此穷追不舍-1nf表示受够了","link":"#感悟-如此穷追不舍-1nf表示受够了","children":[]}]},{"level":2,"title":"九、元数据分裂","slug":"九、元数据分裂","link":"#九、元数据分裂","children":[{"level":3,"title":"支持可扩展性（PARTITION）","slug":"支持可扩展性-partition","link":"#支持可扩展性-partition","children":[]},{"level":3,"title":"反模式：克隆表与克隆列","slug":"反模式-克隆表与克隆列","link":"#反模式-克隆表与克隆列","children":[]},{"level":3,"title":"解决方案：分区及标准化","slug":"解决方案-分区及标准化","link":"#解决方案-分区及标准化","children":[]},{"level":3,"title":"感悟：前车之鉴，后车之师","slug":"感悟-前车之鉴-后车之师","link":"#感悟-前车之鉴-后车之师","children":[]}]},{"level":2,"title":"十、取整错误","slug":"十、取整错误","link":"#十、取整错误","children":[{"level":3,"title":"目的：使用小数取代整数（DECIMAL)","slug":"目的-使用小数取代整数-decimal","link":"#目的-使用小数取代整数-decimal","children":[]},{"level":3,"title":"反模式：使用FLOAT类型","slug":"反模式-使用float类型","link":"#反模式-使用float类型","children":[]},{"level":3,"title":"解决方案：使用DECIMAL类型","slug":"解决方案-使用decimal类型","link":"#解决方案-使用decimal类型","children":[]},{"level":3,"title":"感悟：FLOAT不可靠，地球人都知道","slug":"感悟-float不可靠-地球人都知道","link":"#感悟-float不可靠-地球人都知道","children":[]}]},{"level":2,"title":"十一、每日新花样","slug":"十一、每日新花样","link":"#十一、每日新花样","children":[{"level":3,"title":"目的：限定列的有效值（ENUM）","slug":"目的-限定列的有效值-enum","link":"#目的-限定列的有效值-enum","children":[]},{"level":3,"title":"反模式：在列定义上指定可选值","slug":"反模式-在列定义上指定可选值","link":"#反模式-在列定义上指定可选值","children":[]},{"level":3,"title":"解决方案：在数据中指定值","slug":"解决方案-在数据中指定值","link":"#解决方案-在数据中指定值","children":[]},{"level":3,"title":"感悟：慎用ENUM（枚举类型）","slug":"感悟-慎用enum-枚举类型","link":"#感悟-慎用enum-枚举类型","children":[]}]},{"level":2,"title":"十二、幽灵文件","slug":"十二、幽灵文件","link":"#十二、幽灵文件","children":[{"level":3,"title":"目标：存储图片或其他多媒体大文件（BLOB）","slug":"目标-存储图片或其他多媒体大文件-blob","link":"#目标-存储图片或其他多媒体大文件-blob","children":[]},{"level":3,"title":"反模式：假设你必须使用文件系统（也就是存储文件路径啦）","slug":"反模式-假设你必须使用文件系统-也就是存储文件路径啦","link":"#反模式-假设你必须使用文件系统-也就是存储文件路径啦","children":[]},{"level":3,"title":"解决方案：在需要时使用BLOB类型","slug":"解决方案-在需要时使用blob类型","link":"#解决方案-在需要时使用blob类型","children":[]},{"level":3,"title":"感悟：我说都错了，你信吗？","slug":"感悟-我说都错了-你信吗","link":"#感悟-我说都错了-你信吗","children":[]}]},{"level":2,"title":"十三、乱用索引","slug":"十三、乱用索引","link":"#十三、乱用索引","children":[{"level":3,"title":"目标：优化性能（INDEX)","slug":"目标-优化性能-index","link":"#目标-优化性能-index","children":[]},{"level":3,"title":"反模式：无规划的使用索引","slug":"反模式-无规划的使用索引","link":"#反模式-无规划的使用索引","children":[]},{"level":3,"title":"解决方案：MENTOR你的索引","slug":"解决方案-mentor你的索引","link":"#解决方案-mentor你的索引","children":[]},{"level":3,"title":"感悟：合理利用数据查询分析工具","slug":"感悟-合理利用数据查询分析工具","link":"#感悟-合理利用数据查询分析工具","children":[]}]},{"level":2,"title":"十四、对未知的恐惧","slug":"十四、对未知的恐惧","link":"#十四、对未知的恐惧","children":[{"level":3,"title":"目标：辨别悬空值（NULL)","slug":"目标-辨别悬空值-null","link":"#目标-辨别悬空值-null","children":[]},{"level":3,"title":"反模式：将NULL作为普通的值，反之亦然","slug":"反模式-将null作为普通的值-反之亦然","link":"#反模式-将null作为普通的值-反之亦然","children":[]},{"level":3,"title":"解决方案：将NULL视为特殊值","slug":"解决方案-将null视为特殊值","link":"#解决方案-将null视为特殊值","children":[]},{"level":3,"title":"感悟：NULL or NOT NULL，that is the question","slug":"感悟-null-or-not-null-that-is-the-question","link":"#感悟-null-or-not-null-that-is-the-question","children":[]}]},{"level":2,"title":"十五、模棱两可的分组","slug":"十五、模棱两可的分组","link":"#十五、模棱两可的分组","children":[{"level":3,"title":"目标：获取每组的最大值（GROUP BY）","slug":"目标-获取每组的最大值-group-by","link":"#目标-获取每组的最大值-group-by","children":[]},{"level":3,"title":"反模式：引用非分组列","slug":"反模式-引用非分组列","link":"#反模式-引用非分组列","children":[]},{"level":3,"title":"解决方法：无歧义的使用列","slug":"解决方法-无歧义的使用列","link":"#解决方法-无歧义的使用列","children":[]},{"level":3,"title":"感悟：思维务必要清晰","slug":"感悟-思维务必要清晰","link":"#感悟-思维务必要清晰","children":[]}]},{"level":2,"title":"十六、随机选择","slug":"十六、随机选择","link":"#十六、随机选择","children":[{"level":3,"title":"目标：获取样本记录（RAND）","slug":"目标-获取样本记录-rand","link":"#目标-获取样本记录-rand","children":[]},{"level":3,"title":"反模式：随机排序","slug":"反模式-随机排序","link":"#反模式-随机排序","children":[]},{"level":3,"title":"解决方案：没有具体的顺序","slug":"解决方案-没有具体的顺序","link":"#解决方案-没有具体的顺序","children":[]},{"level":3,"title":"感悟：简单点不好吗？","slug":"感悟-简单点不好吗","link":"#感悟-简单点不好吗","children":[]}]},{"level":2,"title":"十七、可怜人的搜索引擎","slug":"十七、可怜人的搜索引擎","link":"#十七、可怜人的搜索引擎","children":[{"level":3,"title":"目标：全文搜索（FULLTEXT）","slug":"目标-全文搜索-fulltext","link":"#目标-全文搜索-fulltext","children":[]},{"level":3,"title":"反模式：模式匹配断言","slug":"反模式-模式匹配断言","link":"#反模式-模式匹配断言","children":[]},{"level":3,"title":"解决方案：使用正确的工具","slug":"解决方案-使用正确的工具","link":"#解决方案-使用正确的工具","children":[]},{"level":3,"title":"感悟：中文全文检索","slug":"感悟-中文全文检索","link":"#感悟-中文全文检索","children":[]}]},{"level":2,"title":"十八、意大利面条式查询","slug":"十八、意大利面条式查询","link":"#十八、意大利面条式查询","children":[{"level":3,"title":"目标：减少SQL查询数量（SQL）","slug":"目标-减少sql查询数量-sql","link":"#目标-减少sql查询数量-sql","children":[]},{"level":3,"title":"反模式：使用一步操作解决复杂问题","slug":"反模式-使用一步操作解决复杂问题","link":"#反模式-使用一步操作解决复杂问题","children":[]},{"level":3,"title":"解决方案：分而治之","slug":"解决方案-分而治之","link":"#解决方案-分而治之","children":[]},{"level":3,"title":"感悟：大道至简，把复杂变简单其实没那么简单","slug":"感悟-大道至简-把复杂变简单其实没那么简单","link":"#感悟-大道至简-把复杂变简单其实没那么简单","children":[]}]},{"level":2,"title":"十九、隐式的列","slug":"十九、隐式的列","link":"#十九、隐式的列","children":[{"level":3,"title":"目标：减少输入（*)","slug":"目标-减少输入","link":"#目标-减少输入","children":[]},{"level":3,"title":"反模式：捷径会让你迷失方向","slug":"反模式-捷径会让你迷失方向","link":"#反模式-捷径会让你迷失方向","children":[]},{"level":3,"title":"解决方案：明确列出列名","slug":"解决方案-明确列出列名","link":"#解决方案-明确列出列名","children":[]},{"level":3,"title":"感悟：*是把双刃剑","slug":"感悟-是把双刃剑","link":"#感悟-是把双刃剑","children":[]}]},{"level":2,"title":"二十、明文密码","slug":"二十、明文密码","link":"#二十、明文密码","children":[{"level":3,"title":"目标：恢复或重置密码（HASH）","slug":"目标-恢复或重置密码-hash","link":"#目标-恢复或重置密码-hash","children":[]},{"level":3,"title":"反模式：使用明文存储密码","slug":"反模式-使用明文存储密码","link":"#反模式-使用明文存储密码","children":[]},{"level":3,"title":"解决方案：先哈希，后存储","slug":"解决方案-先哈希-后存储","link":"#解决方案-先哈希-后存储","children":[]},{"level":3,"title":"感悟：天王盖地虎，宝塔镇河妖！","slug":"感悟-天王盖地虎-宝塔镇河妖","link":"#感悟-天王盖地虎-宝塔镇河妖","children":[]}]},{"level":2,"title":"二十一、SQL注入","slug":"二十一、sql注入","link":"#二十一、sql注入","children":[{"level":3,"title":"目标：编写SQL动态查询（Injection）","slug":"目标-编写sql动态查询-injection","link":"#目标-编写sql动态查询-injection","children":[]},{"level":3,"title":"反模式：将未经验证的输入作为代码执行","slug":"反模式-将未经验证的输入作为代码执行","link":"#反模式-将未经验证的输入作为代码执行","children":[]},{"level":3,"title":"解决方案：不信任任何人","slug":"解决方案-不信任任何人","link":"#解决方案-不信任任何人","children":[]},{"level":3,"title":"感悟：道高一尺魔高一丈","slug":"感悟-道高一尺魔高一丈","link":"#感悟-道高一尺魔高一丈","children":[]}]},{"level":2,"title":"二十二、伪键洁癖","slug":"二十二、伪键洁癖","link":"#二十二、伪键洁癖","children":[{"level":3,"title":"目标：整理数据（GUID）","slug":"目标-整理数据-guid","link":"#目标-整理数据-guid","children":[]},{"level":3,"title":"反模式：填充角落","slug":"反模式-填充角落","link":"#反模式-填充角落","children":[]},{"level":3,"title":"解决方案：克服心理障碍","slug":"解决方案-克服心理障碍","link":"#解决方案-克服心理障碍","children":[]},{"level":3,"title":"感悟：我觉得可以抢救一下","slug":"感悟-我觉得可以抢救一下","link":"#感悟-我觉得可以抢救一下","children":[]}]},{"level":2,"title":"二十三、非礼勿视","slug":"二十三、非礼勿视","link":"#二十三、非礼勿视","children":[{"level":3,"title":"目标：写更少的代码（Debug）","slug":"目标-写更少的代码-debug","link":"#目标-写更少的代码-debug","children":[]},{"level":3,"title":"反模式：无米之炊","slug":"反模式-无米之炊","link":"#反模式-无米之炊","children":[]},{"level":3,"title":"解决方案：优雅的从错误中恢复","slug":"解决方案-优雅的从错误中恢复","link":"#解决方案-优雅的从错误中恢复","children":[]},{"level":3,"title":"感悟：排错是基本功","slug":"感悟-排错是基本功","link":"#感悟-排错是基本功","children":[]}]},{"level":2,"title":"二十四、外交豁免权","slug":"二十四、外交豁免权","link":"#二十四、外交豁免权","children":[{"level":3,"title":"目标：采用最佳实践（Project Management）","slug":"目标-采用最佳实践-project-management","link":"#目标-采用最佳实践-project-management","children":[]},{"level":3,"title":"反模式：将SQL视为二等公民","slug":"反模式-将sql视为二等公民","link":"#反模式-将sql视为二等公民","children":[]},{"level":3,"title":"解决方案：建立一个质量至上的文化","slug":"解决方案-建立一个质量至上的文化","link":"#解决方案-建立一个质量至上的文化","children":[]},{"level":3,"title":"感悟：数据为王","slug":"感悟-数据为王","link":"#感悟-数据为王","children":[]}]},{"level":2,"title":"二十五、魔豆","slug":"二十五、魔豆","link":"#二十五、魔豆","children":[{"level":3,"title":"目标：简化MVC模型（Design pattern）","slug":"目标-简化mvc模型-design-pattern","link":"#目标-简化mvc模型-design-pattern","children":[]},{"level":3,"title":"反模式：模型仅仅是活动记录","slug":"反模式-模型仅仅是活动记录","link":"#反模式-模型仅仅是活动记录","children":[]},{"level":3,"title":"解决方案：模型包含活动记录","slug":"解决方案-模型包含活动记录","link":"#解决方案-模型包含活动记录","children":[]},{"level":3,"title":"感悟：运用之道，存乎一心","slug":"感悟-运用之道-存乎一心","link":"#感悟-运用之道-存乎一心","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"声明","slug":"声明","link":"#声明","children":[]}],"relativePath":"sql-antipatterns.md","lastUpdated":1673342895000}'),t={name:"sql-antipatterns.md"},p=n("",288),o=[p];function r(c,i,C,d,A,y){return a(),l("div",null,o)}const u=s(t,[["render",r]]);export{D as __pageData,u as default};
