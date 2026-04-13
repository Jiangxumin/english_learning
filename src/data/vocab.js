/**
 * Centralized vocabulary annotations.
 * Each key = book slug, value = array of word entries.
 *
 * In MDX just write: <Vocab word="below" />
 * The component looks up data from this file automatically.
 */
const vocab = {
  book_01: [
    {
      word: 'below',
      phonetic: '/bɪˈloʊ/',
      brief: '在下方，在底下',
      pos: 'adverb',
      detail:
        '此处 below 修饰 "on Earth"，表示从天庭（高处）俯瞰人间（低处）的空间关系。天在南门之上，地在南门之下，below 强调了"向下看"的视角。',
      examples: [
        'The valley below was covered in mist.（下面的山谷笼罩在薄雾中。）',
        'From the top of the tower, we could see the whole city below.（从塔顶我们可以看到下方整座城市。）',
      ],
      synonyms: [
        { word: 'below', note: '泛指"在较低位置"，不一定正下方，范围广' },
        { word: 'under', note: '强调"正下方"，被覆盖' },
        { word: 'beneath', note: '较正式/文学用法，可兼指具体和抽象位置' },
      ],
    },
    {
      word: 'shrugged',
      phonetic: '/ʃrʌɡd/',
      brief: '耸肩（表示不在乎、不知道或无奈）',
      pos: 'verb (past tense of shrug)',
      detail:
        'shrug 指上下耸动肩膀，在英语中是一个常见肢体语言，表示"我不在乎""我不知道""随便"等态度。本书中出现两次：第一次是玉皇大帝听说光来自一块石头，耸肩表示不以为然；第二次是悟空被问想学什么，耸肩表示无所谓。',
      examples: [
        '"I don\'t know," she shrugged.（"我不知道，"她耸了耸肩。）',
        'He shrugged off the criticism.（他对批评满不在乎。）',
      ],
      synonyms: [
        { word: 'shrug off', note: '对…满不在乎，一笑了之' },
        { word: 'dismiss', note: '不予理会，打发掉（更正式）' },
      ],
    },
    {
      word: 'all the way',
      phonetic: '/ɔːl ðə weɪ/',
      brief: '一路上，一直（到某处）',
      pos: 'phrase',
      detail:
        'all the way 是一个固定搭配，表示"从起点到终点的全程、一路不停"。原文中猴子说溪水"flows all the way to the ocean"，意思是溪流从山上一路流淌直到汇入大海，强调距离之远、路径之完整。',
      examples: [
        'We drove all the way from Beijing to Shanghai.（我们从北京一路开到了上海。）',
        'He followed her all the way home.（他一路跟着她回到了家。）',
        'The trail goes all the way to the top of the mountain.（这条小路一直通到山顶。）',
      ],
      synonyms: [
        { word: 'the whole way', note: '全程，语气相似，更强调"整段路程"' },
        { word: 'straight', note: '径直地，强调方向而非距离' },
      ],
    },
    {
      word: 'neither',
      phonetic: '/ˈniːðər/',
      brief: '也不（用于附和否定句）',
      pos: 'adverb',
      detail:
        'neither 在此处是副词用法，用于口语中附和前一个人的否定说法。原文中一只高猴子说"I\'m not going to try"（我不去试），矮猴子接着说"Me neither"（我也不去），用 neither 简洁地表达"我也是"。注意：neither 还常用于 neither...nor...（既不…也不…）的搭配中。',
      examples: [
        '"I can\'t swim." — "Me neither."（"我不会游泳。" — "我也不会。"）',
        'Neither John nor Mary could attend the meeting.（约翰和玛丽都没能参加会议。）',
        'He neither smiled nor spoke.（他既没笑也没说话。）',
      ],
      synonyms: [
        { word: 'nor', note: '与 neither 搭配，构成 neither...nor... 双重否定句式' },
        { word: 'either', note: '否定句中也可用，如 "I don\'t either"，但 "me neither" 更口语化' },
      ],
    },
  ],
  // book_02: [ ... ],
  // book_03: [ ... ],
};

export default vocab;
