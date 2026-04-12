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
  ],
  // book_02: [ ... ],
  // book_03: [ ... ],
};

export default vocab;
