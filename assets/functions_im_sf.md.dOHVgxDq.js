import{_ as i,c as t,a2 as a,o as r}from"./chunks/framework.BQmytedh.js";const o="/assets/im_1.6uFwuplB.png",s="/assets/im_3.B_-3OQo8.png",m=JSON.parse('{"title":"即时聊天应用消息发送和阅读状态","description":"","frontmatter":{},"headers":[],"relativePath":"functions/im/sf.md","filePath":"zh/functions/im/sf.md"}'),n={name:"functions/im/sf.md"};function e(p,l,u,c,d,g){return r(),t("div",null,l[0]||(l[0]=[a('<h1 id="即时聊天应用消息发送和阅读状态" tabindex="-1">即时聊天应用消息发送和阅读状态 <a class="header-anchor" href="#即时聊天应用消息发送和阅读状态" aria-label="Permalink to &quot;即时聊天应用消息发送和阅读状态&quot;">​</a></h1><p>在即时聊天应用中，了解消息的发送和阅读状态是用户体验的重要组成部分。本节将详细描述个人聊天和群聊中消息状态的显示方式及其功能。</p><h2 id="个人聊天消息状态" tabindex="-1">个人聊天消息状态 <a class="header-anchor" href="#个人聊天消息状态" aria-label="Permalink to &quot;个人聊天消息状态&quot;">​</a></h2><p>在个人聊天中，消息的发送和阅读状态通过勾号来表示，以帮助用户了解对方是否接收到并阅读了消息。</p><ul><li><p><strong>单勾：消息已成功发送</strong></p><ul><li>当用户发送消息后，一个单勾将出现在消息旁边，表示消息已成功发送至服务器。</li><li>这表明消息已经到达对方的设备，但对方可能尚未查看。</li></ul></li><li><p><strong>双勾：消息已读</strong></p><ul><li>当对方打开聊天窗口并查看了消息，单勾将变为双勾。</li><li>这表示消息已经被对方阅读，用户可以确认对方已经看到所发送的信息。</li></ul></li></ul><p><img src="'+o+'" alt="placeholder"></p><h2 id="群聊消息状态" tabindex="-1">群聊消息状态 <a class="header-anchor" href="#群聊消息状态" aria-label="Permalink to &quot;群聊消息状态&quot;">​</a></h2><p>在群聊中，消息的阅读状态通过圆环图标来表示，以便用户快速了解消息在群聊中的阅读情况。</p><ul><li><p><strong>灰色圆环：消息全部未读</strong></p><ul><li>当消息发送至群聊后，其右侧会出现一个灰色圆环，表示当前消息尚未被任何群成员读取。</li></ul></li><li><p><strong>部分绿色圆环：消息部分已读</strong></p><ul><li>当部分群成员读取了消息，圆环会部分变为绿色。绿色色块代表已读取该消息的群成员所占的比例。</li><li>这提供了一种视觉化的方式，让用户直观地了解消息的阅读进度。</li></ul></li><li><p><strong>绿色圆环：消息全部已读</strong></p><ul><li>当所有群成员都已读取消息时，圆环会变为绿色。</li><li>这表明消息已被会话中的所有参与者阅读。</li></ul></li><li><p><strong>查看阅读详情</strong></p><ul><li>点击圆环图标，用户可以查看具体的已读和未读用户列表。</li><li><strong>已读列表</strong>：显示已查看该消息的群成员。</li><li><strong>未读列表</strong>：显示尚未查看该消息的群成员。</li></ul></li></ul><p><img src="'+s+'" alt="placeholder"></p><h2 id="状态更新的细节" tabindex="-1">状态更新的细节 <a class="header-anchor" href="#状态更新的细节" aria-label="Permalink to &quot;状态更新的细节&quot;">​</a></h2><ul><li><strong>实时更新</strong>：消息状态会根据接收方的操作实时更新，确保发送方能够尽快了解接收情况。</li><li><strong>通知机制</strong>：用户可以选择开启或关闭关于消息已读状态的通知，以平衡隐私和信息透明度。</li></ul><p>以上即为关于即时聊天应用中消息发送和阅读状态的基本设计和功能描述。根据具体应用的需求和用户反馈，这些状态的显示方式可以进一步优化和调整。</p>',13)]))}const f=i(n,[["render",e]]);export{m as __pageData,f as default};
