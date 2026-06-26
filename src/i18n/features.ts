export const defaultLocale = 'en';

export const featuresUi = {
  en: {
    // Task Management
    'tm-title': 'Task Management',
    'tm-sub': 'Simple, powerful task organisation built for the way ADHD minds work.',
    'tm-f1-badge': 'Quick & Simple',
    'tm-f1-title': 'Easy Create & Edit',
    'tm-f1-desc': 'Adding a task takes seconds. Tap, type, done. Edit anything on the fly — no required fields or confusing menus in the way.',
    'tm-f2-badge': 'Stay on Track',
    'tm-f2-title': 'Deadline Tracker',
    'tm-f2-desc': 'Set a deadline once and always see exactly how many days are left. A clear countdown keeps you focused without the panic of surprise due dates.',
    // AI Features
    'ai-title': 'AI Features',
    'ai-sub': 'Let AI do the heavy lifting — from capturing ideas to breaking them down and celebrating what you\'ve achieved.',
    'ai-f1-badge': 'Think out loud',
    'ai-f1-title': 'AI Voice Input',
    'ai-f1-desc': 'Just talk — or type what\'s on your mind into our AI chat. BlotzTask turns your stream of thought into organised, actionable tasks in seconds.',
    'ai-f2-badge': 'Start smaller',
    'ai-f2-title': 'AI Task Breakdown',
    'ai-f2-desc': 'Staring at a big task and can\'t get started? AI breaks it down into the easiest possible first step — something you can finish in under five minutes.',
    'ai-f3-badge': 'Celebrate wins',
    'ai-f3-title': 'AI Weekly & Monthly Review',
    'ai-f3-desc': 'Let AI summarise everything you\'ve accomplished this week or month. Get a clean progress report — and share it with friends to celebrate how much you\'ve done.',
    // Gamified
    'game-title': 'Gamified Features',
    'game-sub': 'Task management that feels like play — because motivation shouldn\'t always have to come from willpower alone.',
    'game-f1-badge': 'Break the freeze',
    'game-f1-title': 'Gachapon Machine',
    'game-f1-desc': 'Paralysed by choice? Spin the Gachapon machine and let it randomly pick one of your saved notes for you to tackle next. Sometimes the best way to start is to let go of the decision.',
    'game-f2-badge': 'Discover & collect',
    'game-f2-title': 'Secret Badges',
    'game-f2-desc': 'BlotzTask hides special badges throughout the app, waiting to be discovered. Download the app and see how many you can unlock.',
    // Shared CTA
    'feat-cta-title': 'Ready to get started?',
    'feat-cta-sub': 'Download BlotzTask and experience these features for yourself.',
  },
  zh: {
    // Task Management
    'tm-title': '任务管理',
    'tm-sub': '简单而强大的任务组织，专为 ADHD 大脑的工作方式打造。',
    'tm-f1-badge': '快速简单',
    'tm-f1-title': '轻松创建与编辑',
    'tm-f1-desc': '添加一个任务只需几秒钟。点击、输入、完成。随时随地编辑——没有必填字段，没有复杂菜单来阻碍你。',
    'tm-f2-badge': '掌控时间',
    'tm-f2-title': '截止日期追踪',
    'tm-f2-desc': '设置一次截止日期，随时清楚还剩多少天。直观的倒计时让你保持专注，再也不会被突如其来的截止日期打个措手不及。',
    // AI Features
    'ai-title': 'AI 功能',
    'ai-sub': '让 AI 承担繁重工作——从捕捉想法、拆解任务，到回顾和庆祝你的每一份成就。',
    'ai-f1-badge': '大声说出来',
    'ai-f1-title': 'AI 语音输入',
    'ai-f1-desc': '直接说出来——或者把脑海中的想法打进 AI 对话框。BlotzTask 会把你零散的思路，在几秒内整理成清晰、可执行的任务。',
    'ai-f2-badge': '从最小一步开始',
    'ai-f2-title': 'AI 任务拆解',
    'ai-f2-desc': '盯着一个大任务不知道如何开始？AI 会把它拆解成最简单的第一步——一件五分钟以内就能完成的事情。',
    'ai-f3-badge': '庆祝每个成就',
    'ai-f3-title': 'AI 周报与月报',
    'ai-f3-desc': '让 AI 总结你这周或这个月完成的所有事情。查看简洁的进度报告——还可以分享给朋友，一起庆祝你取得的成就。',
    // Gamified
    'game-title': '游戏化功能',
    'game-sub': '让任务管理变得像游戏一样——因为动力不应该总是靠意志力来支撑。',
    'game-f1-badge': '打破僵局',
    'game-f1-title': '扭蛋机',
    'game-f1-desc': '被选择麻痹了？转动扭蛋机，让它从你保存的笔记中随机挑出一件事来做。有时候，最好的开始方式，就是把选择权交出去。',
    'game-f2-badge': '探索与收集',
    'game-f2-title': '隐藏徽章',
    'game-f2-desc': '在 BlotzTask 的角落里藏着一些特别的徽章，等待你去发现。下载应用，看看你能解锁多少个。',
    // Shared CTA
    'feat-cta-title': '准备好开始了吗？',
    'feat-cta-sub': '立即下载 BlotzTask，亲身体验这些功能。',
  },
} as const;

export type FeaturesLang = keyof typeof featuresUi;
export type FeaturesKey = keyof typeof featuresUi[typeof defaultLocale];
