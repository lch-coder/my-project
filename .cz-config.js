module.exports = {
  types: [
    { value: '✨feature', name: 'feature:    增加新功能' },
    { value: '🐛fix', name: 'fix:    修复bug' },
    { value: '💎style', name: 'style:    样式修改不影响逻辑' },
    { value: '💄test', name: 'test:    测试用例新增、修改等' },
    { value: '🚀perf', name: 'perf:     性能优化' },
    { value: '🌠refactor', name: 'refactor: 功能/代码重构' },
    { value: '👷ci', name: 'ci:   项目架构相关部署' },
    { value: '📝docs', name: 'docs:     文档变更' },
    { value: '🔧chore', name: 'chore:    开发工具变动(构建、脚手架工具等)' },
    { value: '⏪revert', name: 'revert:   代码回退' },
    { value: '📦build', name: 'build:    打包' },
    { value: '✅release', name: 'release:  发布' },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择一种你的提交类型: \n',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认以上提交说明？(y/n/e/h)',
  },
  allowCustomScopes: true,
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72,
}
