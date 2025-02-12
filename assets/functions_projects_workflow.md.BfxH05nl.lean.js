import{_ as r,c as o,a2 as t,o as l}from"./chunks/framework.BQmytedh.js";const i="/assets/pro_workflow_pic_1.B1QXxl7n.png",s="/assets/pro_workflow_pic_2.DRX36S_z.png",n="/assets/pro_workflow_pic_3.Cb4Vq-3G.png",e="/assets/pro_workflow_pic_4.Be7TrJTp.png",h="/assets/pro_workflow_pic_5.4fMAhhBg.png",m=JSON.parse('{"title":"工作流设置","description":"","frontmatter":{},"headers":[],"relativePath":"functions/projects/workflow.md","filePath":"zh/functions/projects/workflow.md"}'),g={name:"functions/projects/workflow.md"};function p(c,a,u,d,_,b){return l(),o("div",null,a[0]||(a[0]=[t('<h1 id="工作流设置" tabindex="-1">工作流设置 <a class="header-anchor" href="#工作流设置" aria-label="Permalink to &quot;工作流设置&quot;">​</a></h1><p>工作流设置为团队提供了一种灵活的任务管理方式，支持自定义任务处理流程，从而显著提升工作效率。</p><p><img src="'+i+'" alt="工作流"></p><p>在创建项目时，您可以直接选择 <strong>开启工作流</strong>，也可以在项目创建后根据需求配置自定义工作流。</p><p><img src="'+s+'" alt="创建工作流"></p><h2 id="一、工作流状态类型" tabindex="-1">一、工作流状态类型 <a class="header-anchor" href="#一、工作流状态类型" aria-label="Permalink to &quot;一、工作流状态类型&quot;">​</a></h2><p>工作流由 <strong>四种任务状态类型</strong> 组成，每种状态类型均有明确的功能和规则：</p><h3 id="_1-开始状态" tabindex="-1">1. 开始状态 <a class="header-anchor" href="#_1-开始状态" aria-label="Permalink to &quot;1. 开始状态&quot;">​</a></h3><ul><li><strong>描述</strong>：新建任务的默认状态，所有任务在创建时会自动标记为此状态。</li><li><strong>特点</strong>：作为任务的起始状态，无需额外配置。</li></ul><h3 id="_2-进行中" tabindex="-1">2. 进行中 <a class="header-anchor" href="#_2-进行中" aria-label="Permalink to &quot;2. 进行中&quot;">​</a></h3><ul><li><strong>描述</strong>：任务进入执行阶段，可支持多个状态同时标记为“进行中”。</li><li><strong>特点</strong>：支持并行处理，适用于任务的细化分工或多阶段管理。</li></ul><h3 id="_3-验收-测试" tabindex="-1">3. 验收/测试 <a class="header-anchor" href="#_3-验收-测试" aria-label="Permalink to &quot;3. 验收/测试&quot;">​</a></h3><ul><li><strong>描述</strong>：任务完成后需进入验收或测试阶段。</li><li><strong>特点</strong>：整个工作流中只能设置 <strong>一个</strong> 状态为“验收/测试”，确保任务验收过程具有唯一性。</li></ul><h3 id="_4-结束状态" tabindex="-1">4. 结束状态 <a class="header-anchor" href="#_4-结束状态" aria-label="Permalink to &quot;4. 结束状态&quot;">​</a></h3><ul><li><strong>描述</strong>：任务完成后的最终状态，表示流程的终点。</li><li><strong>特点</strong>：当任务进入此状态时，系统会自动标记任务为“已完成”。</li></ul><p><img src="'+n+'" alt="添加状态"></p><h2 id="二、状态设置功能" tabindex="-1">二、状态设置功能 <a class="header-anchor" href="#二、状态设置功能" aria-label="Permalink to &quot;二、状态设置功能&quot;">​</a></h2><p>每个状态均支持个性化配置和流转规则设置，以满足团队的管理需求。主要功能如下：</p><h3 id="_1-状态负责人" tabindex="-1">1. 状态负责人 <a class="header-anchor" href="#_1-状态负责人" aria-label="Permalink to &quot;1. 状态负责人&quot;">​</a></h3><ul><li><strong>描述</strong>：状态负责人是任务处于该状态时的主要负责人或协作人员。</li><li><strong>配置</strong>：每个状态可添加多个负责人，帮助明确责任分工，提升协作效率。</li></ul><h3 id="_2-流转模式" tabindex="-1">2. 流转模式 <a class="header-anchor" href="#_2-流转模式" aria-label="Permalink to &quot;2. 流转模式&quot;">​</a></h3><p>流转模式决定了任务从当前状态流转到目标状态时，任务负责人如何分配。可选模式如下：</p><h4 id="_1-添加模式" tabindex="-1">（1）添加模式 <a class="header-anchor" href="#_1-添加模式" aria-label="Permalink to &quot;（1）添加模式&quot;">​</a></h4><ul><li><strong>描述</strong>：任务流转到目标状态时，系统将目标状态的负责人添加为任务负责人，保留原负责人不变。</li><li><strong>适用场景</strong>：适用于需要多负责人协作的任务，确保团队共同推进任务。</li></ul><h4 id="_2-流转模式-1" tabindex="-1">（2）流转模式 <a class="header-anchor" href="#_2-流转模式-1" aria-label="Permalink to &quot;（2）流转模式&quot;">​</a></h4><ul><li><strong>描述</strong>：任务流转到目标状态时，系统将目标状态的负责人替换为当前任务负责人，原负责人则自动转为协作人员。</li><li><strong>适用场景</strong>：适合负责人变更较频繁的工作流。</li></ul><h4 id="_3-剔除模式" tabindex="-1">（3）剔除模式 <a class="header-anchor" href="#_3-剔除模式" aria-label="Permalink to &quot;（3）剔除模式&quot;">​</a></h4><ul><li><strong>描述</strong>：任务流转到目标状态时，系统将目标状态的负责人替换为当前任务负责人，同时保留变更记录，原负责人转为协作人员。</li><li><strong>适用场景</strong>：适合需要严谨变更记录的任务管理场景。</li></ul><h3 id="_3-限制负责人选项" tabindex="-1">3. 限制负责人选项 <a class="header-anchor" href="#_3-限制负责人选项" aria-label="Permalink to &quot;3. 限制负责人选项&quot;">​</a></h3><ul><li><strong>描述</strong>：启用此选项后，任务进入该状态时，仅任务负责人和项目管理员可以修改状态。</li><li><strong>适用场景</strong>：适合需要严格权限控制的任务管理流程。</li></ul><h3 id="_4-关联列表" tabindex="-1">4. 关联列表 <a class="header-anchor" href="#_4-关联列表" aria-label="Permalink to &quot;4. 关联列表&quot;">​</a></h3><ul><li><strong>描述</strong>：为状态设置关联任务列表。当任务流转到该状态时，系统会自动将其移动到对应列表中。</li><li><strong>适用场景</strong>：有助于任务按阶段或优先级进行分类管理，例如创建“待验收”或“进行中”任务列表。</li></ul><p><img src="'+e+'" alt="状态设置"></p><h2 id="三、状态流转规则" tabindex="-1">三、状态流转规则 <a class="header-anchor" href="#三、状态流转规则" aria-label="Permalink to &quot;三、状态流转规则&quot;">​</a></h2><p>工作流允许自定义配置 <strong>状态间的流转规则</strong>，团队可定义每个状态允许流转至的目标状态，从而确保任务处理符合既定逻辑要求。</p><p><img src="'+h+'" alt="状态流转规则"></p><h2 id="四、注意事项" tabindex="-1">四、注意事项 <a class="header-anchor" href="#四、注意事项" aria-label="Permalink to &quot;四、注意事项&quot;">​</a></h2><ol><li><p><strong>验收/测试状态</strong><br> 在工作流中，仅能设置一个“验收/测试”状态，以避免多状态验收带来的管理混乱。</p></li><li><p><strong>结束状态</strong><br> 当任务进入“结束状态”后，无法再修改其状态。</p></li><li><p><strong>流转模式</strong><br> 建议根据团队的协作方式和权限需求合理选择流转模式，以确保任务管理清晰高效。</p></li><li><p><strong>关联列表</strong><br> 合理使用关联列表，可优化任务分类管理和视图展示，方便任务追踪和进度查看。</p></li></ol><p>通过合理配置工作流，团队可以轻松实现高效的任务管理和流畅的协作流程。</p>',39)]))}const q=r(g,[["render",p]]);export{m as __pageData,q as default};
