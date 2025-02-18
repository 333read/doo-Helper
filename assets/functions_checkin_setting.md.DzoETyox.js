import{_ as a,c as t,a2 as l,o as r}from"./chunks/framework.De1yK2Gx.js";const o="/help/assets/cin_set_1.vod0DsEz.png",e="/help/assets/cin_set_2.D1ovJqfI.png",n="/help/assets/cin_set_3.BYrS95uz.png",s="/help/assets/cin_set_4.tOcmTzQP.png",h="/help/assets/cin_set_5.BDzrwj2E.png",f=JSON.parse('{"title":"签到设置（管理员）","description":"","frontmatter":{},"headers":[],"relativePath":"functions/checkin/setting.md","filePath":"zh/functions/checkin/setting.md"}'),c={name:"functions/checkin/setting.md"};function g(u,i,d,p,_,m){return r(),t("div",null,i[0]||(i[0]=[l('<h1 id="签到设置-管理员" tabindex="-1">签到设置（管理员） <a class="header-anchor" href="#签到设置-管理员" aria-label="Permalink to &quot;签到设置（管理员）&quot;">​</a></h1><p>签到功能是用于管理成员考勤的便捷工具，管理员可以根据需要开启或关闭签到功能，并灵活配置签到方式和规则。以下是具体操作步骤和说明。</p><h2 id="一、功能启用" tabindex="-1">一、功能启用 <a class="header-anchor" href="#一、功能启用" aria-label="Permalink to &quot;一、功能启用&quot;">​</a></h2><h3 id="_1-打开签到功能" tabindex="-1">1. 打开签到功能 <a class="header-anchor" href="#_1-打开签到功能" aria-label="Permalink to &quot;1. 打开签到功能&quot;">​</a></h3><ul><li>进入 <strong>签到管理</strong> 页面。</li><li>在 <strong>功能开启</strong> 处选择 <strong>开启</strong>。</li></ul><h3 id="_2-签到设置" tabindex="-1">2. 签到设置 <a class="header-anchor" href="#_2-签到设置" aria-label="Permalink to &quot;2. 签到设置&quot;">​</a></h3><ul><li>点击 <strong>会员签到设置</strong> 或 <strong>导出签到数据</strong> 进行进一步管理。</li></ul><h2 id="二、签到规则配置" tabindex="-1">二、签到规则配置 <a class="header-anchor" href="#二、签到规则配置" aria-label="Permalink to &quot;二、签到规则配置&quot;">​</a></h2><h3 id="_1-签到时间" tabindex="-1">1. 签到时间 <a class="header-anchor" href="#_1-签到时间" aria-label="Permalink to &quot;1. 签到时间&quot;">​</a></h3><ul><li><strong>签到时间范围</strong>：设置签到的时间段，例如 09:00 至 18:00。</li><li><strong>最早/最晚签到时间</strong>：可调整允许签到的提前或延后分钟数（默认为 120 分钟）。</li><li><strong>签到前后提醒时间</strong>： <ul><li><strong>签到时间提醒</strong>：提前或延后几分钟发送签到通知。</li><li><strong>重复打卡提醒</strong>：配置是否开启及间隔时间。</li></ul></li></ul><h3 id="_2-特殊权限" tabindex="-1">2. 特殊权限 <a class="header-anchor" href="#_2-特殊权限" aria-label="Permalink to &quot;2. 特殊权限&quot;">​</a></h3><ul><li><strong>允许成员上传头像</strong>：可以选择 <strong>允许</strong> 或 <strong>禁止</strong>。</li><li><strong>允许成员自修改 MAC 地址</strong>（适用于 WiFi 签到）：可以选择 <strong>允许</strong> 或 <strong>禁止</strong>。</li></ul><h2 id="三、签到方式" tabindex="-1">三、签到方式 <a class="header-anchor" href="#三、签到方式" aria-label="Permalink to &quot;三、签到方式&quot;">​</a></h2><ul><li><strong>人脸签到</strong>：通过人脸识别完成签到</li><li><strong>WiFi 签到</strong>：通过连接指定的 WiFi 网络自动完成签到</li><li><strong>定位签到</strong>：通过地理位置完成签到（需要在移动端操作）</li><li><strong>手动签到</strong>：用户可以通过手动点击签到按钮进行签到</li></ul><p><img src="'+o+'" alt="签到设置"></p><h2 id="四、各签到方式说明" tabindex="-1">四、各签到方式说明 <a class="header-anchor" href="#四、各签到方式说明" aria-label="Permalink to &quot;四、各签到方式说明&quot;">​</a></h2><h3 id="_1-人脸签到" tabindex="-1">1. 人脸签到 <a class="header-anchor" href="#_1-人脸签到" aria-label="Permalink to &quot;1. 人脸签到&quot;">​</a></h3><ul><li>确保设备正常工作</li><li>配置 <strong>签到设备</strong></li><li>可根据需要设置是否允许重复打卡</li></ul><p><img src="'+e+'" alt="人脸签到设置"></p><h3 id="_2-wifi-签到" tabindex="-1">2. WiFi 签到 <a class="header-anchor" href="#_2-wifi-签到" aria-label="Permalink to &quot;2. WiFi 签到&quot;">​</a></h3><ol><li>WiFi 签到通常延迟不超过 1 分钟。</li><li>成员需连接指定的无线网络（WiFi）后自动签到。</li><li>设备支持 OpenWrt 系统的路由器。</li><li>如需关闭签到功能，请务必重新安装服务。</li><li>执行命令完成安装：</li></ol><p><img src="'+n+'" alt="WiFi 签到安装指令"></p><h3 id="_3-定位签到" tabindex="-1">3. 定位签到 <a class="header-anchor" href="#_3-定位签到" aria-label="Permalink to &quot;3. 定位签到&quot;">​</a></h3><ul><li>设置 <strong>签到名称</strong>，例如“定位签到”。</li><li>配置 <strong>百度地图 AK</strong>，可通过 <a href="https://lbs.baidu.com/" target="_blank" rel="noreferrer">百度地图开发者平台</a> 获取。</li></ul><p><img src="'+s+'" alt="定位签到设置"></p><h3 id="_4-手动签到" tabindex="-1">4. 手动签到 <a class="header-anchor" href="#_4-手动签到" aria-label="Permalink to &quot;4. 手动签到&quot;">​</a></h3><ul><li>用户可直接点击签到按钮进行签到。</li></ul><p><img src="'+h+'" alt="手动签到设置"></p><h2 id="五、常见问题" tabindex="-1">五、常见问题 <a class="header-anchor" href="#五、常见问题" aria-label="Permalink to &quot;五、常见问题&quot;">​</a></h2><ol><li><p><strong>如何解决 WiFi 签到失败？</strong></p><ul><li>确保设备连接的 WiFi 网络为管理员指定的网络。</li><li>检查路由器是否支持 OpenWrt 系统。</li></ul></li><li><p><strong>定位签到权限问题？</strong></p><ul><li>确保成员移动设备已开启定位权限。</li><li>设置百度地图 AK 时，请使用有效的开发者密钥。</li></ul></li></ol><p>通过以上步骤，管理员可以快速设置和管理签到功能，为成员提供灵活的考勤管理服务。如需进一步帮助，请联系技术支持。</p>',31)]))}const q=a(c,[["render",g]]);export{f as __pageData,q as default};
