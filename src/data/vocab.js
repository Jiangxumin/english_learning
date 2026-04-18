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
    {
      word: 'Eventually',
      phonetic: '/ɪˈventʃuəli/',
      brief: '最终，终于',
      pos: 'adverb',
      detail:
        'eventually 表示经过一段较长时间或过程后，某事终于发生。原文中悟空花了多年走访城镇、寻找仙人却一无所获，"Eventually he came to mountains" 表示"终于他来到了群山之中"，暗示漫长寻找后的转折。注意它强调的是"过程漫长但最终到达"，而非"突然"。',
      examples: [
        'Eventually he found the answer.（他终于找到了答案。）',
        'She kept trying and eventually succeeded.（她不断尝试，最终成功了。）',
        'The rain eventually stopped.（雨终于停了。）',
      ],
      synonyms: [
        { word: 'finally', note: '也表示"最终"，但更强调等待后的结果，常带感情色彩' },
        { word: 'at last', note: '语气更强烈，表示期盼已久终于实现' },
        { word: 'in the end', note: '口语化，强调经过一系列事件后的结果' },
      ],
    },
    {
      word: 'ax',
      phonetic: '/æks/',
      brief: '斧头',
      pos: 'noun',
      detail:
        'ax（也写作 axe）是砍伐树木用的工具。原文中樵夫正在砍柴（chopping firewood），看到会说话的猴子惊得"dropped his ax"（掉落了斧头），用这个动作生动地表现出他的震惊。注意美式英语用 ax，英式英语用 axe。',
      examples: [
        'He chopped the wood with an ax.（他用斧头砍木头。）',
        'The lumberjack sharpened his ax.（伐木工磨快了他的斧头。）',
        'She dropped her ax in surprise.（她惊讶得掉落了斧头。）',
      ],
      synonyms: [
        { word: 'axe', note: '同一词的英式拼写，美式英语常用 ax' },
        { word: 'hatchet', note: '小斧头，单手使用，比 ax 更短小' },
      ],
    },
    {
      word: 'temple',
      phonetic: '/ˈtempəl/',
      brief: '寺庙，神殿',
      pos: 'noun',
      detail:
        'temple 指供奉神灵或用于宗教修行活动的建筑。原文中须菩提（Subodhi）居住的山中 temple 既是他的住所也是传道授业的地方。在中国文化语境中，temple 可对应"寺庙""道观""庙宇"等不同宗教场所。',
      examples: [
        'They visited an ancient temple on the mountain.（他们参观了山上的古寺。）',
        'The temple was built hundreds of years ago.（这座寺庙建于数百年前。）',
        'Monks meditate in the temple every morning.（僧人们每天早晨在寺庙里打坐冥想。）',
      ],
      synonyms: [
        { word: 'shrine', note: '神龛、圣地，规模通常比 temple 小' },
        { word: 'monastery', note: '修道院，强调僧侣居住和修行的场所' },
      ],
    },
    {
      word: 'chores',
      phonetic: '/tʃɔːrz/',
      brief: '杂务，日常琐事',
      pos: 'noun (plural of chore)',
      detail:
        'chore 指日常生活中必须做但通常不太令人愉快的工作，如打扫、洗碗等。原文中悟空在须菩提门下的七年里，除了打坐（meditating）和听课（listening to lessons），还要"doing chores"——做杂活，体现了学徒生活中朴实辛劳的一面。',
      examples: [
        'He has to do his chores before playing.（他必须在玩耍前做完家务。）',
        'Household chores include cooking and cleaning.（家务包括做饭和打扫卫生。）',
        'The students took turns doing chores.（学生们轮流做杂务。）',
      ],
      synonyms: [
        { word: 'tasks', note: '泛指"任务"，不一定是日常重复性的' },
        { word: 'housework', note: '特指家务劳动，如打扫、做饭等' },
        { word: 'duties', note: '职责、义务，语气更正式' },
      ],
    },
    {
      word: 'How dare',
      phonetic: '/haʊ dɛr/',
      brief: '你怎么敢……！竟敢……！',
      pos: 'phrase',
      detail:
        'How dare (you) 是一个强烈的愤慨表达，用于质问对方怎么胆敢做某事。原文中须菩提正在讲课，悟空却在旁边跳舞，须菩提大怒："How dare you dance while I\'m teaching?"——你怎么敢在我讲课时跳舞！这个句式语气严厉，带有权威被冒犯的意味。',
      examples: [
        'How dare you talk to me like that!（你怎么敢这样跟我说话！）',
        'How dare he lie to the teacher!（他竟敢对老师撒谎！）',
        'How dare she walk out in the middle of the meeting!（她竟敢在会议中途离场！）',
      ],
      synonyms: [
        { word: 'how could you', note: '语气稍弱，偏向失望而非愤怒' },
        { word: 'the nerve of you', note: '口语化，"你竟然有脸……"' },
      ],
    },
    {
      word: 'tell the future',
      phonetic: '/tɛl ðə ˈfjuːtʃər/',
      brief: '预言未来，算命',
      pos: 'phrase',
      detail:
        'tell the future 指预测将要发生的事情，即"算命""预知未来"。注意这里 tell 不是"告诉"的意思，而是"辨认、判断"的用法，类似于 tell the truth（辨别真假）。原文中须菩提问悟空要不要学算命，悟空只关心能不能长生不老，对预知未来不感兴趣。',
      examples: [
        'She claims she can tell the future.（她声称自己能预知未来。）',
        'Can anyone really tell the future?（真的有人能预言未来吗？）',
        'He tried to tell the future by reading the stars.（他试图通过星象来预知未来。）',
      ],
      synonyms: [
        { word: 'predict the future', note: '更正式的说法，"预测未来"' },
        { word: 'foretell', note: '文学/正式用法，"预言"' },
        { word: 'fortune-telling', note: '名词形式，指"算命"这种行为' },
      ],
    },
    {
      word: 'forget it',
      phonetic: '/fərˈɡɛt ɪt/',
      brief: '算了，不必了，别提了',
      pos: 'phrase',
      detail:
        'forget it 是口语中非常常见的短语，表示"算了""不用了""别放在心上"。语气多样：可以轻松拒绝，也可以不耐烦地打断。原文中悟空得知算命不能长生不老，立刻说"Then forget it"——那就算了吧，干脆利落地拒绝了这门课业，体现出他只关心长生不老的执念。',
      examples: [
        '"Can I help you?" — "Forget it, I can do it myself."（"要我帮忙吗？" — "算了，我自己能行。"）',
        'Forget it! It doesn\'t matter anymore.（别提了！已经不重要了。）',
        '"Sorry I\'m late." — "Forget it."（"抱歉我迟到了。" — "没事，别放在心上。"）',
      ],
      synonyms: [
        { word: 'never mind', note: '算了、别管了，语气更温和' },
        { word: 'drop it', note: '别再提了，带有命令口吻' },
        { word: 'skip it', note: '跳过吧、算了，比较随意' },
      ],
    },
    {
      word: 'magic breathing exercises',
      phonetic: '/ˈmædʒɪk ˈbriːðɪŋ ˈɛksərsaɪzɪz/',
      brief: '吐纳修炼，气功呼吸法',
      pos: 'phrase',
      detail:
        'breathing exercises 指"呼吸练习"，加上 magic（神奇的）修饰，对应中国文化中的"吐纳之术"——一种通过调控呼吸来修炼身心的道家功法。原文中须菩提用它作为第二种教学方案试探悟空，但悟空只关心能否长生不老，再次拒绝。',
      examples: [
        'She does breathing exercises every morning to relax.（她每天早上做呼吸练习来放松。）',
        'Yoga involves deep breathing exercises.（瑜伽包含深呼吸练习。）',
        'The monk taught him special breathing techniques.（僧人教了他特殊的呼吸法。）',
      ],
      synonyms: [
        { word: 'meditation', note: '冥想，强调精神层面的静修' },
        { word: 'breathing techniques', note: '呼吸技巧，不带神秘色彩的说法' },
      ],
    },
    {
      word: 'however',
      phonetic: '/haʊˈɛvər/',
      brief: '然而，不过（表示转折）',
      pos: 'adverb',
      detail:
        'however 是常用的转折副词，相当于"but"，但语气更正式、更灵活。它可出现在句首、句中或句末，用逗号隔开。原文中其他学生都认为悟空冒犯了师父，"Wukong, however, smiled"——然而悟空却笑了，用 however 制造反差：别人生气，他却暗自得意，因为他读懂了师父的暗号。',
      examples: [
        'It was raining. However, we still went out.（天下着雨。不过我们还是出门了。）',
        'She was tired. She kept working, however.（她很累。然而她继续工作。）',
        'The test was hard. He, however, got a perfect score.（考试很难。然而他拿了满分。）',
      ],
      synonyms: [
        { word: 'but', note: '最常用的转折词，口语化，通常不可用逗号单独成句' },
        { word: 'nevertheless', note: '更正式，"尽管如此"，语气比 however 更强' },
        { word: 'on the other hand', note: '引出另一面，"另一方面"' },
      ],
    },
    {
      word: 'crept',
      phonetic: '/krɛpt/',
      brief: '蹑手蹑脚地走，悄悄移动',
      pos: 'verb (past tense of creep)',
      detail:
        'creep 指缓慢、安静地移动，尽量不发出声响，常带有偷偷摸摸或小心翼翼的意味。过去式为 crept。原文中悟空在三更半夜"crept quietly through the dark temple"——蹑手蹑脚穿过黑暗的庙宇，生动描绘了他偷偷去见须菩提的场景，与师父此前敲头三下的暗号相呼应。',
      examples: [
        'She crept into the room so as not to wake the baby.（她蹑手蹑脚走进房间，以免吵醒婴儿。）',
        'The cat crept toward the mouse.（猫悄悄向老鼠逼近。）',
        'He crept downstairs in the middle of the night.（他半夜蹑手蹑脚地下了楼。）',
      ],
      synonyms: [
        { word: 'tiptoe', note: '踮着脚走，强调"踮脚"的动作' },
        { word: 'sneak', note: '偷偷溜走/潜入，带有"偷偷摸摸"的贬义色彩' },
        { word: 'crawl', note: '爬行，强调四肢着地的移动方式' },
      ],
    },
    {
      word: 'worthy',
      phonetic: '/ˈwɜːrði/',
      brief: '值得的，配得上的',
      pos: 'adjective',
      detail:
        'worthy 表示"值得的""配得上的"，常用于 be worthy of（值得……）或 a worthy + 名词 的结构。原文中须菩提说"I knew you were a worthy student"——我就知道你是个值得传授的学生，意思是悟空读懂了暗号，证明他悟性够高，配得上学习长生不老的秘法。',
      examples: [
        'She proved to be a worthy opponent.（她证明了自己是一个值得尊敬的对手。）',
        'This cause is worthy of our support.（这项事业值得我们支持。）',
        'He is worthy of the title "champion."（他配得上"冠军"这个称号。）',
      ],
      synonyms: [
        { word: 'deserving', note: '应得的，强调"理应得到"' },
        { word: 'qualified', note: '合格的、有资格的，侧重能力资质' },
        { word: 'commendable', note: '值得赞许的，侧重品德方面' },
      ],
    },
    {
      word: 'formulas',
      phonetic: '/ˈfɔːrmjələz/',
      brief: '秘方，口诀（formula 的复数）',
      pos: 'noun (plural of formula)',
      detail:
        'formula 本义是"公式""配方"，复数形式为 formulas。原文中的 secret formulas 指须菩提传授给悟空的"秘诀""法术口诀"——关于宇宙和自然法则的神秘知识，让悟空获得长生不老的能力。这里 formulas 不等同于数学公式，更接近"法术口诀"或"修炼秘法"。',
      examples: [
        'The scientist discovered a new formula.（科学家发现了一个新公式。）',
        'She knows the secret formula for the medicine.（她知道这种药的秘方。）',
        'The magician whispered magic formulas.（魔法师低声念着咒语。）',
      ],
      synonyms: [
        { word: 'recipes', note: '配方、食谱，多用于烹饪或制药' },
        { word: 'spells', note: '咒语，特指魔法/巫术中的口诀' },
        { word: 'incantations', note: '咒文，更正式/文学化的说法' },
      ],
    },
    {
      word: 'leaned',
      phonetic: '/liːnd/',
      brief: '倾身，探过身子',
      pos: 'verb (past tense of lean)',
      detail:
        'lean 作动词指"倾斜身体、倚靠"，过去式为 leaned（也可写作 leant /lent/，英式用法）。原文中 "They leaned in closer to Wukong"——众弟子纷纷向悟空探过身去，用身体动作表现出他们的好奇和迫切。lean in 是常见搭配，表示"凑近、靠近"以听清或看清某事。',
      examples: [
        'She leaned in to hear the secret.（她探过身子去听那个秘密。）',
        'He leaned against the wall.（他靠在墙上。）',
        'They leaned forward in their seats.（他们从座位上探出身来。）',
      ],
      synonyms: [
        { word: 'bend', note: '弯腰，强调身体弯曲的动作' },
        { word: 'inclined', note: '倾斜的，更正式，也可表示"倾向于"' },
      ],
    },
    {
      word: 'muttered',
      phonetic: '/ˈmʌtərd/',
      brief: '低声嘟囔，含糊地念',
      pos: 'verb (past tense of mutter)',
      detail:
        'mutter 指低声、含糊地说话，嘴动但不完全张开，常用于自言自语或不愿让人听清的场合。原文中悟空"muttered a quick spell"——低声快速念了一段咒语，配合手势施法，生动还原了施展法术时的经典画面：嘴里念念有词。',
      examples: [
        'He muttered something under his breath.（他低声嘟囔了什么。）',
        'She muttered a few words and walked away.（她含糊地说了几个字就走了。）',
        'The wizard muttered a spell.（巫师低声念了一段咒语。）',
      ],
      synonyms: [
        { word: 'murmur', note: '低语，语气更柔和，不像 mutter 带有不满或含糊感' },
        { word: 'whisper', note: '耳语、悄悄话，有意让对方听到但不想让旁人听到' },
        { word: 'grunt', note: '嘟哝、哼了一声，更粗犷' },
      ],
    },
    {
      word: 'show off',
      phonetic: '/ʃoʊ ɔːf/',
      brief: '炫耀，卖弄',
      pos: 'phrasal verb',
      detail:
        'show off 是常见的短语动词，意为"炫耀、卖弄"，指故意在人前展示自己的才能或 possessions 以博取注意。也可作名词 a show-off（爱炫耀的人）。原文中须菩提斥责悟空："Not so you could show off!"——我教你秘法不是为了让你到处显摆！体现了悟空天性张扬与师父要求低调修炼之间的冲突。',
      examples: [
        'He always shows off his new phone.（他总爱炫耀新手机。）',
        'Don\'t show off in front of your classmates.（别在同学面前卖弄。）',
        'She is such a show-off.（她真是个爱出风头的人。）',
      ],
      synonyms: [
        { word: 'flaunt', note: '招摇地展示，语气更强烈，带贬义' },
        { word: 'boast', note: '自吹自擂，侧重口头夸耀' },
        { word: 'brag', note: '吹牛，口语化，强调言辞上的自夸' },
      ],
    },
    {
      word: 'attacked',
      phonetic: '/əˈtækt/',
      brief: '攻击，袭击',
      pos: 'verb (past tense of attack)',
      detail:
        'attack 指主动对他人发起武力进攻或伤害行为。原文中狒狒报告" A demon attacked us"——一个妖怪袭击了我们，交代了悟空外出学艺期间花果山遭遇的危机，也是悟空学成归来后的第一场战斗。',
      examples: [
        'The village was attacked by wolves.（村庄遭到狼群袭击。）',
        'She was attacked on her way home.（她在回家路上遭到了袭击。）',
        'The army attacked at dawn.（军队在黎明时分发起了进攻。）',
      ],
      synonyms: [
        { word: 'assault', note: '猛烈攻击，语气更重，常用于法律语境' },
        { word: 'strike', note: '打击、突袭，动作更快更突然' },
        { word: 'invade', note: '入侵，强调进入他人领地' },
      ],
    },
    {
      word: 'gloomy',
      phonetic: '/ˈɡluːmi/',
      brief: '阴暗的，阴沉的',
      pos: 'adjective',
      detail:
        'gloomy 形容光线暗淡、气氛压抑的地方，也可形容人的心情忧郁。原文中悟空远远望见"a gloomy mountain"，乌云笼罩——阴沉的山，暗示这是妖怪的巢穴。作者用 gloomy + dark clouds 营造出不祥的氛围，与花果山的明亮欢快形成对比。',
      examples: [
        'It was a gloomy day with heavy clouds.（那是一个乌云密布的阴沉日子。）',
        'The old house looked gloomy and abandoned.（那座老房子看起来阴暗荒凉。）',
        'She felt gloomy after hearing the bad news.（听到坏消息后她心情低落。）',
      ],
      synonyms: [
        { word: 'dreary', note: '沉闷的、乏味的，侧重单调无聊' },
        { word: 'somber', note: '昏暗的、严肃的，语气更正式' },
        { word: 'dark', note: '黑暗的，最基础的说法，不如 gloomy 有情绪色彩' },
      ],
    },
    {
      word: 'shrieked',
      phonetic: '/ʃriːkt/',
      brief: '尖叫，发出刺耳的叫声',
      pos: 'verb (past tense of shriek)',
      detail:
        'shriek 指因恐惧、愤怒或激动而发出尖锐刺耳的叫声，比 scream 更强调声音的高频和刺耳。原文中两个守卫看到悟空霸气登场后"Ahh!" the guards shrieked——吓得尖叫着逃进洞穴，用 shrieked 突出了他们的恐惧和慌张。',
      examples: [
        'She shrieked when she saw the spider.（她看到蜘蛛时尖叫起来。）',
        'The fans shrieked with excitement.（粉丝们激动得尖叫。）',
        'He shrieked in pain.（他痛得尖叫。）',
      ],
      synonyms: [
        { word: 'screamed', note: '尖叫，更通用，不一定那么尖锐刺耳' },
        { word: 'screeched', note: '发出刺耳叫声，也可形容刹车等机械声' },
        { word: 'yelled', note: '大喊，不一定是高音，侧重音量大' },
      ],
    },
    {
      word: 'Disaster',
      phonetic: '/dɪˈzæstər/',
      brief: '灾难，大祸',
      pos: 'noun',
      detail:
        'disaster 指突发的严重灾难或不幸事件，如地震、洪水等天灾，也可泛指任何糟糕的变故。原文中守卫跑进洞穴大喊"Disaster!"——大祸临头了！作为独立感叹词使用，简短有力，营造出紧急慌乱的气氛。随后妖怪问"what sort of disaster"，形成紧张中的黑色幽默。',
      examples: [
        'The earthquake was a terrible disaster.（那场地震是一场可怕的灾难。）',
        '"Disaster!" she cried when she saw the broken vase.（"糟了！"她看到碎花瓶时叫道。）',
        'The party was a complete disaster.（那次聚会简直是一场灾难。）',
      ],
      synonyms: [
        { word: 'catastrophe', note: '大灾难，语气更重、更正式' },
        { word: 'calamity', note: '灾祸，文学化用词' },
        { word: 'emergency', note: '紧急情况，侧重需要立即应对' },
      ],
    },
    {
      word: 'armor',
      phonetic: '/ˈɑːrmər/',
      brief: '盔甲，铠甲',
      pos: 'noun',
      detail:
        'armor 指战士在战斗中穿戴的防护装备（铠甲），美式拼写为 armor，英式拼写为 armour。原文中混世魔王听说来者没有武器，仍要求"get me my armor and my sword"——把我的盔甲和刀拿来，说明他虽轻敌但仍按正规战事对待，体现妖怪的一丝老练。',
      examples: [
        'The knight wore shining armor.（骑士穿着闪亮的盔甲。）',
        'The soldier put on his armor before battle.（士兵在开战前穿上铠甲。）',
        'A suit of armor stood in the corner.（角落里立着一副盔甲。）',
      ],
      synonyms: [
        { word: 'shield', note: '盾牌，手持的防护器具，不是穿戴式' },
        { word: 'helmet', note: '头盔，只保护头部的护具' },
      ],
    },
    {
      word: 'a handful of',
      phonetic: '/ə ˈhændfʊl əv/',
      brief: '一把，少量',
      pos: 'phrase',
      detail:
        'a handful of 字面意思是"一只手能握住的量"，即"一把"，引申为"少量、少数"。原文中悟空"pulled out a handful of his own hair"——拔了一把自己的毫毛，随后吹气变出无数分身攻击妖怪，这是《西游记》中经典的"身外身法"。',
      examples: [
        'She picked up a handful of sand.（她抓起一把沙子。）',
        'Only a handful of people came to the meeting.（只有少数几个人来开会。）',
        'He ate a handful of nuts.（他吃了一把坚果。）',
      ],
      synonyms: [
        { word: 'a bunch of', note: '一串、一群，更口语化，量可大可小' },
        { word: 'a small number of', note: '少数的，更正式的说法' },
        { word: 'a pinch of', note: '一撮，量更少，仅用指尖捏起' },
      ],
    },
    {
      word: 'Before long',
      phonetic: '/bɪˈfɔːr lɔːŋ/',
      brief: '不久，很快',
      pos: 'phrase',
      detail:
        'before long 是一个固定搭配，意为"不久以后、很快"，相当于 soon。注意不要和 long before（很久以前）混淆——两者词序相反，含义完全不同。原文中悟空教众猴练武，"Before long, the monkeys and apes were a fierce army"——不久之后，猴群就成了一支猛军，表达训练见效很快。',
      examples: [
        'Before long, it started to rain.（没过多久就开始下雨了。）',
        'You will feel better before long.（你很快就会感觉好起来的。）',
        'Before long, they became good friends.（不久他们就成为了好朋友。）',
      ],
      synonyms: [
        { word: 'soon', note: '不久，最常用的说法' },
        { word: 'shortly', note: '不久，更正式' },
        { word: 'in no time', note: '很快、马上，口语化，强调速度快' },
      ],
    },
    {
      word: 'fierce',
      phonetic: '/fɪrs/',
      brief: '凶猛的，强悍的',
      pos: 'adjective',
      detail:
        'fierce 形容人或动物凶猛、强悍、充满攻击性，也可形容竞争、风力等非常激烈。原文中"the monkeys and apes were a fierce army"——猴群成了一支猛军，用 fierce 强调经过训练后众猴从温顺的动物变成了气势凶猛的战士。',
      examples: [
        'A fierce dog guarded the gate.（一条凶猛的狗守着大门。）',
        'The competition was fierce.（竞争非常激烈。）',
        'A fierce wind blew through the valley.（一阵狂风吹过山谷。）',
      ],
      synonyms: [
        { word: 'ferocious', note: '极其凶残的，程度比 fierce 更强' },
        { word: 'savage', note: '野蛮的、凶暴的，带有暴力色彩' },
        { word: 'intense', note: '激烈的，不用于形容凶猛，侧重程度之深' },
      ],
    },
    {
      word: 'suppose',
      phonetic: '/səˈpoʊz/',
      brief: '我想，大概（表委婉猜测或让步）',
      pos: 'verb',
      detail:
        'suppose 在口语中常用来委婉地表示"我想……""大概可以……"，语气比直接说"我能"更弱、更客气。原文中龙王被悟空的蛮横吓到，说"I suppose I could find a weapon for you"——我想我大概能给你找件兵器。用 suppose 体现了他不情愿但又不好拒绝的态度。',
      examples: [
        '"Can you help me?" — "I suppose so."（"你能帮我吗？" — "我想可以吧。"）',
        'I suppose it will rain tomorrow.（我猜明天会下雨。）',
        'I don\'t suppose you have any change?（你不会有零钱吧？——委婉请求）',
      ],
      synonyms: [
        { word: 'guess', note: '猜测，更随意，不带有让步意味' },
        { word: 'assume', note: '假定，侧重未经证实地认为' },
        { word: 'presume', note: '推测，比 assume 更有依据' },
      ],
    },
    {
      word: 'dragging',
      phonetic: '/ˈdræɡɪŋ/',
      brief: '拖拽，费力地拉',
      pos: 'verb (present participle of drag)',
      detail:
        'drag 指在地面上费力地拖动沉重的东西，强调物体的沉重和移动的艰难。原文中乌龟士兵"slowly dragging a huge sword"——慢慢拖来一把巨剑，拖完就累倒在地。dragging 生动展现了兵器之重与乌龟之弱，与后文悟空轻松单手拿起形成鲜明对比。',
      examples: [
        'He was dragging a heavy suitcase.（他拖着沉重的行李箱。）',
        'The dog dragged its bed across the room.（狗把窝拖到了房间另一头。）',
        'She dragged herself out of bed.（她硬撑着从床上爬起来。）',
      ],
      synonyms: [
        { word: 'pulling', note: '拉，通用词，不一定费力' },
        { word: 'hauling', note: '费力搬运，侧重用力的过程' },
        { word: 'towing', note: '牵引、拖车，通常用车辆或绳索' },
      ],
    },
    {
      word: 'several',
      phonetic: '/ˈsɛvrəl/',
      brief: '几个，数个（约3-7个）',
      pos: 'determiner / pronoun',
      detail:
        'several 表示"几个、数个"，数量比 a couple of（两个）多，比 many（许多）少，大致在 3 到 7 之间。原文中"several turtles and octopuses dragged an enormous spear"——好几只乌龟和章鱼合力才把巨型长矛拖进来，用 several 强调需要多个生物协力才能搬动。',
      examples: [
        'Several students raised their hands.（几个学生举起了手。）',
        'I\'ve read the book several times.（这本书我读了好几遍。）',
        'There are several ways to solve this problem.（解决这个问题有好几种方法。）',
      ],
      synonyms: [
        { word: 'a few', note: '少数几个，数量与 several 相近，但语气稍弱' },
        { word: 'various', note: '各种各样的，强调多样性而非数量' },
        { word: 'numerous', note: '许多的，数量明显比 several 大' },
      ],
    },
    {
      word: 'stabbing',
      phonetic: '/ˈstæbɪŋ/',
      brief: '刺，戳',
      pos: 'verb (present participle of stab)',
      detail:
        'stab 指用尖锐器具用力刺入，是比 poke（轻戳）更具攻击性的动作。原文中悟空举起长矛"began stabbing at the air"——对着空气连刺，这是试兵器时的常见动作。stabbing at 加 at 表示朝某个方向刺，不一定刺中目标。',
      examples: [
        'He was stabbed in the arm.（他的手臂被刺伤了。）',
        'She kept stabbing at the food with her fork.（她一直用叉子戳食物。）',
        'The thief stabbed at the guard with a knife.（小偷拿刀朝守卫刺去。）',
      ],
      synonyms: [
        { word: 'pierce', note: '刺穿、穿透，强调穿透的结果' },
        { word: 'thrust', note: '猛刺、猛推，强调发力的动作' },
        { word: 'poke', note: '轻戳，力度远小于 stab' },
      ],
    },
    {
      word: 'snorted',
      phonetic: '/snɔːrtɪd/',
      brief: '哼了一声（表示不满或不信）',
      pos: 'verb (past tense of snort)',
      detail:
        'snort 本义是通过鼻子用力呼气发出声音（哼鼻），在对话中表示不屑、不满或不相信。原文中龙王听到悟空嫌长矛太轻，"The Dragon King snorted"——龙王哼了一声，表示他的不满和难以置信：那么重的兵器你居然嫌轻？',
      examples: [
        '"Yeah, right," he snorted.（"得了吧，"他哼了一声。）',
        'She snorted with laughter.（她扑哧一声笑了出来。）',
        'The horse snorted and stamped its hoof.（马打了个响鼻，跺了跺蹄子。）',
      ],
      synonyms: [
        { word: 'scoffed', note: '嘲笑、嗤之以鼻，更侧重言语上的不屑' },
        { word: 'sneered', note: '冷笑，表情上的轻蔑' },
        { word: 'grunted', note: '咕哝、哼了一声，可表示不悦也可表示回应' },
      ],
    },
    {
      word: 'outrage',
      phonetic: '/ˈaʊtreɪdʒ/',
      brief: '愤慨，暴行',
      pos: 'noun',
      detail:
        'outrage 作名词有两个常见含义：一是"强烈的愤怒、愤慨"，二是"令人发指的暴行"。原文中龙王说"This is an outrage!"——这简直是岂有此理！用作感叹句，表达对悟空蛮横行为的强烈不满和义愤。',
      examples: [
        '"This is an outrage!" she shouted.（"这简直岂有此理！"她喊道。）',
        'The public expressed outrage at the decision.（公众对这个决定表示愤慨。）',
        'The invasion was condemned as an outrage.（这次入侵被谴责为暴行。）',
      ],
      synonyms: [
        { word: 'scandal', note: '丑闻、丑事，侧重道德层面的不齿' },
        { word: 'disgrace', note: '耻辱、丢脸的事' },
        { word: 'atrocity', note: '暴行、残暴行为，语气极重' },
      ],
    },
    {
      word: 'treasury',
      phonetic: '/ˈtrɛʒəri/',
      brief: '宝库，金库',
      pos: 'noun',
      detail:
        'treasury 指存放珍贵财物或金钱的地方，即"宝库""金库"。也可指国家的财政部（the Treasury）。原文中龙王后提到的"the magical iron bar in the treasury"——宝库里的那根神奇铁柱，即后来的如意金箍棒。宝库中的镇海之宝最终成了悟空的标志性武器。',
      examples: [
        'The king kept his crown in the treasury.（国王把王冠存放在宝库里。）',
        'The treasury was filled with gold and jewels.（宝库里堆满了金银珠宝。）',
        'The Treasury Department manages government funds.（财政部管理政府资金。）',
      ],
      synonyms: [
        { word: 'vault', note: '保险库，强调安全防护的密室' },
        { word: 'storehouse', note: '仓库、储藏室，泛指存放物品的地方' },
        { word: 'strongroom', note: '保险室，银行等场所的坚固储藏室' },
      ],
    },
    {
      word: 'sighed',
      phonetic: '/saɪd/',
      brief: '叹气，叹息',
      pos: 'verb (past tense of sigh)',
      detail:
        'sigh 指深深地呼出一口气，通常表示无奈、疲惫、失望或解脱。原文中龙王"sighed"——叹了口气，表现出他对悟空蛮横行为的无可奈何：不想给但又不得不妥协，只能叹口气认命。',
      examples: [
        'She sighed deeply.（她深深地叹了口气。）',
        '"Oh well," he sighed.（"算了吧，"他叹了口气说。）',
        'He sighed with relief when the exam was over.（考试结束后他如释重负地叹了口气。）',
      ],
      synonyms: [
        { word: 'groaned', note: '呻吟、发出痛苦或不满的声音，语气更重' },
        { word: 'breathed', note: '呼吸，中性词，不带情感色彩' },
      ],
    },
    {
      word: 'pillar',
      phonetic: '/ˈpɪlər/',
      brief: '柱子，支柱',
      pos: 'noun',
      detail:
        'pillar 指建筑的圆形立柱，也可比喻"支柱、核心人物"。原文中宝库中央立着"an enormous iron pillar"——一根巨大的铁柱，即定海神针（如意金箍棒的原形），曾用来测量江海的深浅。pillar 在此既是实物描写，也暗示它是龙宫的镇海之柱。',
      examples: [
        'The temple was supported by stone pillars.（寺庙由石柱支撑。）',
        'A huge pillar stood in the center of the hall.（大厅中央立着一根巨大的柱子。）',
        'She is a pillar of the community.（她是社区的栋梁。）',
      ],
      synonyms: [
        { word: 'column', note: '圆柱，更正式的建筑术语' },
        { word: 'post', note: '柱、桩，通常较细，如 fence post' },
        { word: 'beam', note: '横梁，水平方向的结构' },
      ],
    },
  ],
  book_02: [
    {
      word: 'piece',
      phonetic: '/piːs/',
      brief: '块，件，片',
      pos: 'noun',
      detail:
        'piece 是非常常用的量词/名词，表示"一块、一件、一片"，可搭配几乎所有不可数名词。原文中悟空摸到铁柱后想"This piece of iron really is magical"——这块铁真是神奇啊。用 piece of iron 而不说 pillar，视角从"建筑构件"变成"一块材料"，暗示悟空开始把它当作自己的东西。',
      examples: [
        'She tore off a piece of paper.（她撕下一小片纸。）',
        'This is a beautiful piece of music.（这是一首优美的乐曲。）',
        'He picked up a piece of wood.（他捡起一块木头。）',
      ],
      synonyms: [
        { word: 'chunk', note: '厚块，通常指不规则的大块' },
        { word: 'fragment', note: '碎片，断裂下来的小部分' },
        { word: 'slice', note: '薄片，切下来的扁平一片' },
      ],
    },
    {
      word: 'shrank',
      phonetic: '/ʃræŋk/',
      brief: '缩小，收缩',
      pos: 'verb (past tense of shrink)',
      detail:
        'shrink 指尺寸或数量变小，过去式为 shrank，过去分词为 shrunk。原文中悟空对铁柱喊"Smaller!"后"The pillar shrank"——铁柱缩小了，这是如意金箍棒"如意"二字的核心能力：能大能小，随心意变化。',
      examples: [
        'The sweater shrank in the wash.（毛衣洗缩水了。）',
        'The population shrank over the years.（人口这些年减少了。）',
        'His confidence shrank after the failure.（失败后他的信心缩了。）',
      ],
      synonyms: [
        { word: 'contracted', note: '收缩，更正式，常用于经济或物理变化' },
        { word: 'dwindled', note: '逐渐减少、缩小，强调渐进过程' },
        { word: 'expanded', note: '反义词：膨胀、扩大' },
      ],
    },
    {
      word: 'clenched',
      phonetic: '/klentʃt/',
      brief: '紧握，攥紧（拳头/牙关）',
      pos: 'verb (past tense of clench)',
      detail:
        'clench 指用力收紧、攥紧，最常见的搭配是 clench one\'s fists（攥紧拳头）和 clench one\'s teeth（咬紧牙关），都是愤怒、紧张或忍耐时常见的身体反应。原文中龙王"clenched his fists"——攥紧双拳，准备上天庭告状，动作直接传达了他的愤怒。',
      examples: [
        'He clenched his fists in anger.（他愤怒地攥紧了拳头。）',
        'She clenched her teeth to stop herself from crying.（她咬紧牙关忍住不哭。）',
        'He clenched the railing tightly.（他紧紧抓住栏杆。）',
      ],
      synonyms: [
        { word: 'gripped', note: '紧握，侧重手部抓住某物' },
        { word: 'gritted', note: '咬紧（牙关），grit one\'s teeth' },
        { word: 'squeezed', note: '挤压，通用词，不一定带情绪' },
      ],
    },
    {
      word: 'lasted',
      phonetic: '/ˈlæstɪd/',
      brief: '持续，延续',
      pos: 'verb (past tense of last)',
      detail:
        'last 作动词表示"持续、延续"，指某事维持了多长时间。原文中"They held a big feast that lasted until late at night"——他们举办了一场持续到深夜的大宴会，用 lasted 强调庆祝活动的时间之长。',
      examples: [
        'The meeting lasted two hours.（会议持续了两个小时。）',
        'The storm lasted all night.（暴风雨持续了一整夜。）',
        'Their friendship has lasted for many years.（他们的友谊持续了很多年。）',
      ],
      synonyms: [
        { word: 'continued', note: '继续，强调不间断地延续' },
        { word: 'endured', note: '忍受、持久，带有"经得起"的意味' },
        { word: 'went on', note: '口语化，"进行、持续"' },
      ],
    },
    {
      word: 'Let go of me',
      phonetic: '/lɛt ɡoʊ əv miː/',
      brief: '放开我！松手！',
      pos: 'phrase',
      detail:
        'let go of 表示"松开、放开"，后面接被放开的对象。let go 单独用表示"放手"，加上 of somebody/something 表示"放开某人/某物"。原文中悟空被两个鬼使抓住，大喊"Let go of me!"——放开我！这是被抓住时最本能的英语反应。',
      examples: [
        'Let go of my arm!（放开我的胳膊！）',
        'Don\'t let go of the rope.（别松开绳子。）',
        'She couldn\'t let go of the past.（她无法放下过去。——比喻用法）',
      ],
      synonyms: [
        { word: 'release me', note: '释放我、放开我，更正式' },
        { word: 'get off me', note: '从我身上下去，更口语化、更粗鲁' },
        { word: 'unhand me', note: '放开我，古式/文学用法' },
      ],
    },
    {
      word: 'struggled',
      phonetic: '/ˈstrʌɡəld/',
      brief: '挣扎，奋力反抗',
      pos: 'verb (past tense of struggle)',
      detail:
        'struggle 指为了摆脱困境或控制而奋力抵抗、挣扎，既可以是身体的扭动反抗，也可以是精神上的艰难奋斗。原文中悟空被鬼使拖走时"kicked and struggled"——又踢又挣扎，用 struggled 描绘他拼命想要挣脱的场面。',
      examples: [
        'The fish struggled to get free.（鱼拼命挣扎想要逃脱。）',
        'She struggled against the strong wind.（她在狂风中艰难前行。）',
        'He has always struggled with math.（他一直在数学上很吃力。）',
      ],
      synonyms: [
        { word: 'fought', note: '战斗、对抗，更主动，不一定是被动的挣扎' },
        { word: 'wrestled', note: '扭打、摔跤，强调肢体上的搏斗' },
        { word: 'resisted', note: '抵抗，侧重意志上的不屈服' },
      ],
    },
    {
      word: 'creepy',
      phonetic: '/ˈkriːpi/',
      brief: '令人毛骨悚然的，阴森的',
      pos: 'adjective',
      detail:
        'creepy 形容某事物让人感到不安、害怕或起鸡皮疙瘩，常用来形容阴森的地方、怪异的人或恐怖的氛围。原文中鬼使拖着悟空走向"a dark and creepy city"——一座黑暗阴森的城市，即阴曹地府。creepy 比 scary 语气轻一些，更多是"毛骨悚然"而非"惊恐万分"。',
      examples: [
        'That old house is really creepy at night.（那座老房子晚上真的很阴森。）',
        'He gives me a creepy feeling.（他让我感到毛骨悚然。）',
        'There was a creepy sound coming from the basement.（地下室传来一阵令人不安的声音。）',
      ],
      synonyms: [
        { word: 'scary', note: '吓人的，程度更强，直接引发恐惧' },
        { word: 'eerie', note: '怪异而令人不安的，更文学化' },
        { word: 'spooky', note: '幽灵般的、诡异的，常与鬼怪相关' },
      ],
    },
    {
      word: "I'm supposed to",
      phonetic: '/aɪm səˈpoʊzd tuː/',
      brief: '我应该……，按理说会……',
      pos: 'phrase',
      detail:
        'be supposed to 表示"应该、被期望做某事"，暗含"按理说应该如此"的意味，与 should 相比多了一层"别人认为/本来安排"的含义。原文中悟空喊"I\'m supposed to live forever!"——我按理说是应该长生不老的！暗示他学过长生术，不该被鬼使拘到地府来，语气中有强烈的不可置信。',
      examples: [
        'You\'re supposed to take off your shoes indoors.（你应该在室内脱鞋。）',
        'The train is supposed to arrive at 3 PM.（火车按理说下午三点到。）',
        'I was supposed to call her, but I forgot.（我本该打电话给她，但忘了。）',
      ],
      synonyms: [
        { word: 'should', note: '应该，更通用，不强调"别人期望"的语气' },
        { word: 'ought to', note: '应当，更正式，与 supposed to 语义接近' },
        { word: 'meant to', note: '本意是、注定要，强调原定计划' },
      ],
    },
    {
      word: 'yanked',
      phonetic: '/jæŋkt/',
      brief: '猛拉，使劲拽',
      pos: 'verb (past tense of yank)',
      detail:
        'yank 指突然、用力地拉扯某物，动作快速而粗暴。原文中悟空"yanked his arms free"——猛地挣脱双臂，用力之大连鬼使都抓不住。yanked 强调瞬间爆发的力量，比 pulled 更迅猛。',
      examples: [
        'She yanked the door open.（她猛地拉开了门。）',
        'He yanked his hand away.（他猛地抽回了手。）',
        'Someone yanked the bag from her grasp.（有人一把夺走了她手里的包。）',
      ],
      synonyms: [
        { word: 'pulled', note: '拉，通用词，力度可大可小' },
        { word: 'jerked', note: '猛扯，突然而急促的动作' },
        { word: 'tugged', note: '用力拉，持续使劲而非瞬间爆发' },
      ],
    },
    {
      word: 'fled',
      phonetic: '/flɛd/',
      brief: '逃跑了，溃散',
      pos: 'verb (past tense of flee)',
      detail:
        'flee 指因恐惧或危险而迅速逃跑，过去式为 fled，过去分词也是 fled。比 run away 更正式、更紧迫。原文中悟空挥舞铁棒闯入地府，"Demons and ghosts fled"——大小鬼魂纷纷逃散，一个 fled 字就勾勒出悟空的威势和鬼魂的胆怯。',
      examples: [
        'The villagers fled from the flood.（村民们逃离了洪水。）',
        'The thief fled the scene.（小偷逃离了现场。）',
        'Thousands fled the war-torn city.（数千人逃离了那座饱受战火的城市。）',
      ],
      synonyms: [
        { word: 'escaped', note: '逃脱，强调成功摆脱困境' },
        { word: 'ran away', note: '跑开、逃跑，更口语化' },
        { word: 'retreated', note: '撤退，有组织的后退，而非慌乱逃跑' },
      ],
    },
    {
      word: 'contains',
      phonetic: '/kənˈteɪnz/',
      brief: '包含，含有',
      pos: 'verb',
      detail:
        'contain 指某物内部"包含、装有"其他东西，强调内部的构成内容。原文中判官说"The Directory contains the name and age of every creature"——生死簿包含了每一种生灵的名字和寿数。第三人称单数形式 contains 说明主语是 Directory。',
      examples: [
        'The box contains old letters.（盒子里装着旧信件。）',
        'This book contains 200 pages.（这本书有 200 页。）',
        'Water contains hydrogen and oxygen.（水含有氢和氧。）',
      ],
      synonyms: [
        { word: 'includes', note: '包括，强调其中一部分，不一定是全部内容' },
        { word: 'holds', note: '容纳、装着，侧重容量' },
        { word: 'consists of', note: '由……组成，强调整体与部分的关系' },
      ],
    },
    {
      word: 'flipped',
      phonetic: '/flɪpt/',
      brief: '快速翻阅，翻动（书页）',
      pos: 'verb (past tense of flip)',
      detail:
        'flip 指用手指快速翻动，常用于翻书页、翻卡片。flip through the pages 表示"快速翻阅书页"，带有查找或浏览的意味。原文中判官在生死簿里找悟空的名字，"the judge flipped through the pages"——翻动书页查找，动作简洁利落。',
      examples: [
        'She flipped through the magazine.（她快速翻阅了那本杂志。）',
        'He flipped the coin.（他抛了硬币。）',
        'She flipped the page and kept reading.（她翻了一页继续读。）',
      ],
      synonyms: [
        { word: 'turned', note: '翻（页），更通用的说法，不强调速度' },
        { word: 'browsed', note: '浏览，侧重阅读行为而非翻页动作' },
        { word: 'rifled', note: '快速翻找，更急促，带有翻箱倒柜的感觉' },
      ],
    },
    {
      word: 'glared',
      phonetic: '/ɡlɛrd/',
      brief: '怒目而视，瞪眼',
      pos: 'verb (past tense of glare)',
      detail:
        'glare 指愤怒地、长时间地盯着某人，目光凶狠。常搭配 glare at somebody。原文中悟空举起铁棒"glared at the judge"——怒视判官，一个 glare 配合铁棒，威胁之意不言自明。',
      examples: [
        'She glared at him in anger.（她愤怒地瞪着他。）',
        'The teacher glared at the noisy students.（老师怒视着吵闹的学生。）',
        'He didn\'t say a word, just glared.（他一言不发，只是怒目而视。）',
      ],
      synonyms: [
        { word: 'stared', note: '盯着看，中性词，不一定带怒意' },
        { word: 'scowled', note: '皱眉怒视，侧重面部表情的凶狠' },
        { word: 'gaped', note: '目瞪口呆地看，因惊讶而非愤怒' },
      ],
    },
    {
      word: 'Shaking',
      phonetic: '/ˈʃeɪkɪŋ/',
      brief: '发抖，颤抖（因恐惧或紧张）',
      pos: 'verb (present participle of shake)',
      detail:
        'shake 作动词指"摇动、发抖"，此处用现在分词 Shaking 放在句首作状语，描述判官交书时的身体状态——吓得发抖。原文"Shaking, the judge handed the book to Wukong"——判官哆哆嗦嗦地把书递给了悟空，分词短语比说"the judge was shaking"更简洁有力。',
      examples: [
        'Shaking with fear, she opened the door.（她吓得发抖，打开了门。）',
        'He was shaking from the cold.（他冷得发抖。）',
        'Trembling, she picked up the phone.（颤抖着，她拿起了电话。）',
      ],
      synonyms: [
        { word: 'trembling', note: '颤抖，与 shaking 接近但更多指细微的抖动' },
        { word: 'shivering', note: '打寒颤，通常因寒冷引起' },
        { word: 'quivering', note: '微微发抖，更细微、更持久' },
      ],
    },
    {
      word: 'court',
      phonetic: '/kɔːrt/',
      brief: '朝廷，宫廷；法庭',
      pos: 'noun',
      detail:
        'court 有多个含义：此处指"朝廷、宫廷"——帝王处理政务和接见臣民的场所。也可指"法庭""球场"。原文中信使跑进朝廷"ran into the court"汇报龙王求见，court 在此对应天庭的朝堂。',
      examples: [
        'The king held court every morning.（国王每天早晨上朝。）',
        'She took her case to court.（她把案子告上了法庭。）',
        'They played tennis on the court.（他们在球场上打网球。）',
      ],
      synonyms: [
        { word: 'palace', note: '宫殿，侧重建筑本身而非政治功能' },
        { word: 'throne room', note: '王座大厅，更具体地指君主接见的房间' },
        { word: 'tribunal', note: '法庭、裁判所，仅限司法含义' },
      ],
    },
    {
      word: 'make a complaint',
      phonetic: '/meɪk ə kəmˈpleɪnt/',
      brief: '投诉，控告',
      pos: 'phrase',
      detail:
        'make a complaint 是固定搭配，表示"提出投诉、控告"。complaint 是名词（投诉），动词形式为 complain。原文中龙王上告天庭"I want to make a complaint"——我要投诉，正式地控告悟空强抢兵器的蛮横行为。注意 complaint 也可用于日常抱怨，如 noise complaints（噪音投诉）。',
      examples: [
        'I\'d like to make a complaint about the service.（我要投诉你们的服务。）',
        'She made a formal complaint to the manager.（她向经理提出了正式投诉。）',
        'He made a complaint against his neighbor.（他投诉了他的邻居。）',
      ],
      synonyms: [
        { word: 'file a complaint', note: '正式提交投诉，更行政化、法律化' },
        { word: 'protest', note: '抗议，更公开、更激烈的表达方式' },
        { word: 'object', note: '反对，侧重表达不赞同' },
      ],
    },
    {
      word: 'punish',
      phonetic: '/ˈpʌnɪʃ/',
      brief: '惩罚，处罚',
      pos: 'verb',
      detail:
        'punish 指因某人做错事而给予惩罚，名词形式为 punishment。原文中判官请求玉帝"I beg you to punish him!"——求您惩罚他！用 beg（恳求）+ punish 的组合，表现判官对悟空大闹地府的愤恨和对天庭权威的依赖。',
      examples: [
        'The teacher punished the students for cheating.（老师惩罚了作弊的学生。）',
        'He was punished for breaking the rules.（他因违反规定而受到处罚。）',
        'The crime should be severely punished.（这项罪行应该受到严惩。）',
      ],
      synonyms: [
        { word: 'discipline', note: '管教、惩戒，侧重教育目的' },
        { word: 'penalize', note: '处罚，多用于比赛或制度中的制裁' },
        { word: 'reward', note: '反义词：奖赏' },
      ],
    },
    {
      word: 'troops',
      phonetic: '/truːps/',
      brief: '军队，部队',
      pos: 'noun (plural)',
      detail:
        'troops 指军队、部队，通常用复数形式。单数 troop 指一个士兵或一群人，但日常中几乎都用复数 troops 表示"军队"。原文中玉帝下令"Gather some troops"——调集军队，准备下界捉拿悟空，这是天庭的武力回应。',
      examples: [
        'The troops marched into the city.（军队开进了城市。）',
        'Thousands of troops were sent to the border.（数千名士兵被派往边境。）',
        'The general led his troops into battle.（将军率领部队投入战斗。）',
      ],
      synonyms: [
        { word: 'soldiers', note: '士兵们，侧重个人，troops 侧重整体编制' },
        { word: 'forces', note: '武装力量，范围更广，含海空军等' },
        { word: 'army', note: '陆军，更具体的军种名称' },
      ],
    },
    {
      word: 'arrested',
      phonetic: '/əˈrɛstɪd/',
      brief: '逮捕，拘捕',
      pos: 'verb (past participle of arrest)',
      detail:
        'arrest 指官方机构依法拘捕某人，名词形式也是 arrest。原文中玉帝下令"I want Sun Wukong arrested!"——我要孙悟空被逮捕！这里用了 want somebody done 结构，表示"要某人被……"，arrested 是被动用法。对比 catch（抓住），arrest 更正式，强调法律或官方行为。',
      examples: [
        'The police arrested the thief.（警察逮捕了小偷。）',
        'He was arrested for stealing.（他因盗窃被捕。）',
        'She wanted the criminal arrested immediately.（她要求立即逮捕罪犯。）',
      ],
      synonyms: [
        { word: 'captured', note: '抓获，不一定是官方行为' },
        { word: 'caught', note: '抓住，更口语化、更通用' },
        { word: 'detained', note: '拘留、扣押，可能是暂时性的' },
      ],
    },
    {
      word: 'in charge of',
      phonetic: '/ɪn tʃɑːrdʒ əv/',
      brief: '负责管理，掌管',
      pos: 'phrase',
      detail:
        'in charge of 表示"负责管理、掌管某事"，主语是管理者。对比 in the charge of（被……管理），注意有没有 the 含义完全相反。原文中玉帝安排悟空"He will be in charge of the Royal Peach Garden"——让他负责管理蟠桃园，表面是给官做，实则是想把他留在天庭便于监视。',
      examples: [
        'She is in charge of the project.（她负责这个项目。）',
        'Who is in charge of this department?（谁负责这个部门？）',
        'He left me in charge of the store.（他让我照看店铺。）',
      ],
      synonyms: [
        { word: 'responsible for', note: '对……负责，侧重责任归属' },
        { word: 'in control of', note: '控制、掌管，侧重权力' },
        { word: 'running', note: '运营、管理，更口语化' },
      ],
    },
    {
      word: 'inspected',
      phonetic: '/ɪnˈspɛktɪd/',
      brief: '检查，视察',
      pos: 'verb (past tense of inspect)',
      detail:
        'inspect 指仔细查看、检查，比 look 更正式、更系统，带有官方或专业的意味。名词形式为 inspection（检查、视察）。原文中悟空每天早晨"inspected the trees"——巡查桃树，说明他起初对待这份工作很认真。inspect 强调逐个仔细查看，而非随意浏览。',
      examples: [
        'The teacher inspected each student\'s work.（老师检查了每个学生的作业。）',
        'The health inspector inspected the restaurant.（卫生检查员视察了那家餐厅。）',
        'He inspected the car before buying it.（他在买车前仔细检查了车况。）',
      ],
      synonyms: [
        { word: 'examined', note: '检查、审查，侧重深入了解细节' },
        { word: 'checked', note: '核对、查看，更日常通用' },
        { word: 'surveyed', note: '纵览、审视，侧重从全局角度看' },
      ],
    },
    {
      word: 'seriously',
      phonetic: '/ˈsɪriəsli/',
      brief: '认真地，严肃地',
      pos: 'adverb',
      detail:
        'seriously 是 serious（认真的、严肃的）的副词形式。take something seriously 是常见搭配，表示"认真对待某事"。原文中悟空起初对看管蟠桃园的差事很上心"He took his job very seriously"——他非常认真地对待这份工作，但这和他后来偷吃蟠桃形成有趣的反差。',
      examples: [
        'He takes his studies very seriously.（他非常认真地对待学业。）',
        'You should take this warning seriously.（你应该认真对待这个警告。）',
        'Are you joking, or are you seriously proposing this?（你在开玩笑，还是认真的？）',
      ],
      synonyms: [
        { word: 'earnestly', note: '认真地、诚挚地，语气更正式' },
        { word: 'strictly', note: '严格地，侧重规则和纪律' },
        { word: 'casually', note: '反义词：随意地、漫不经心地' },
      ],
    },
    {
      word: 'in sight',
      phonetic: '/ɪn saɪt/',
      brief: '在视野内，看得见',
      pos: 'phrase',
      detail:
        'in sight 表示"在视野范围内、看得见"，反义词为 out of sight（看不见了）。原文中悟空四下张望"None of the gardeners were in sight"——没有任何园丁在视线内，确认四下无人后才敢偷吃蟠桃。',
      examples: [
        'There was no one in sight.（周围一个人影都看不见。）',
        'Land was finally in sight.（终于看到陆地了。）',
        'Help is nowhere in sight.（援助遥遥无期。）',
      ],
      synonyms: [
        { word: 'visible', note: '可见的，形容词形式' },
        { word: 'around', note: '在附近，不强调是否看得到' },
        { word: 'out of sight', note: '反义词：看不见了、消失在视野外' },
      ],
    },
    {
      word: 'bit into',
      phonetic: '/bɪt ˈɪntuː/',
      brief: '咬了一口',
      pos: 'phrase (past tense of bite into)',
      detail:
        'bite into 指"咬进去、咬一口"，过去式为 bit into。bite 的变化形式为 bite → bit → bitten。原文中悟空摘下蟠桃"and bit into it"——咬了一口，简洁地描写了他偷吃仙桃的动作。bite into 强调牙齿切入食物的过程。',
      examples: [
        'She bit into the apple.（她咬了一口苹果。）',
        'He bit into the sandwich hungrily.（他饿狠狠地咬了一口三明治。）',
        'I bit into the cookie and found a nut.（我咬了一口饼干，发现里面有坚果。）',
      ],
      synonyms: [
        { word: 'took a bite of', note: '咬了一口……，更完整的表达' },
        { word: 'nibbled', note: '小口咬、轻咬，动作更轻微' },
        { word: 'chewed', note: '咀嚼，强调咬之后的嚼动作' },
      ],
    },
    {
      word: 'annual',
      phonetic: '/ˈænjuəl/',
      brief: '每年的，年度的',
      pos: 'adjective',
      detail:
        'annual 表示"每年的、一年一次的"，名词形式可指"年报、年刊"。原文中"the annual Peach Festival"——一年一度的蟠桃会，是天庭最重要的盛会。注意 annual 强调周期性，annually 是其副词形式（每年地）。',
      examples: [
        'The company holds an annual meeting.（公司每年召开年会。）',
        'The annual rainfall is about 1000 mm.（年降雨量约为 1000 毫米。）',
        'We celebrate our annual holiday in July.（我们每年七月庆祝年度假期。）',
      ],
      synonyms: [
        { word: 'yearly', note: '每年的，与 annual 几乎同义，更口语化' },
        { word: 'regular', note: '定期的，不一定是每年' },
        { word: 'monthly', note: '每月的，频率更高' },
      ],
    },
    {
      word: 'maidens',
      phonetic: '/ˈmeɪdənz/',
      brief: '少女，侍女',
      pos: 'noun (plural of maiden)',
      detail:
        'maiden 指"年轻未婚女子、少女"，在古代语境中也可指"侍女、宫女"。原文中王母娘娘召集侍女"her maidens, Red Gown and Blue Gown"——她的侍女红衣和蓝衣，对应神话中的仙女。maiden 比 girl 更正式、更文学化。',
      examples: [
        'The maiden served the queen faithfully.（这位侍女忠心耿耿地服侍女王。）',
        'In old tales, a brave knight rescues a maiden.（在古老的故事中，勇敢的骑士拯救少女。）',
        'The ship\'s maiden voyage was a success.（这艘船的首航很成功。——maiden 作形容词表示"首次的"）',
      ],
      synonyms: [
        { word: 'maids', note: '女仆、侍女，更日常的说法' },
        { word: 'fairies', note: '仙女，带魔法色彩' },
        { word: 'ladies', note: '女士们，更通用，不一定年轻' },
      ],
    },
    {
      word: 'How may',
      phonetic: '/haʊ meɪ/',
      brief: '请问可以……吗？（礼貌提供帮助）',
      pos: 'phrase',
      detail:
        'How may I/we help you? 是服务场景中最常见的礼貌用语，比 How can I help you? 更正式、更客气。may 是 may 的原形，比 can 更委婉。原文中侍女问王母"How may we help you?"——我们怎样才能帮到您？体现下对上的恭敬语气。',
      examples: [
        'How may I help you today?（请问今天有什么可以帮您的？）',
        'How may we be of service?（请问我们能为您做些什么？）',
        'How may I assist you?（请问需要什么帮助？）',
      ],
      synonyms: [
        { word: 'How can I help', note: '我能怎么帮忙，比 may 稍欠正式' },
        { word: 'What can I do for you', note: '有什么我能为您做的' },
        { word: 'How may I serve you', note: '我该如何为您效劳，极正式' },
      ],
    },
    {
      word: 'gasped',
      phonetic: '/ɡæspt/',
      brief: '倒吸一口凉气，惊喘',
      pos: 'verb (past tense of gasp)',
      detail:
        'gasp 指因惊讶、恐惧或疼痛而猛吸一口气，发出喘息声。常搭配 gasp in surprise / horror。原文中两位仙女看到蟠桃被吃光，"both maidens gasped"——两人都倒吸一口凉气，生动表现了她们看到空荡荡桃树时的震惊。',
      examples: [
        'She gasped when she saw the price.（她看到价格时倒吸了一口凉气。）',
        'He gasped in pain as the doctor touched his wound.（医生碰到伤口时他痛得倒吸一口气。）',
        'The audience gasped at the magician\'s trick.（观众对魔术师的戏法发出惊叹。）',
      ],
      synonyms: [
        { word: 'panted', note: '喘气，通常因运动或缺氧' },
        { word: 'exclaimed', note: '惊呼，侧重发声而非吸气动作' },
        { word: 'choked', note: '呛到、噎住，带窒息感' },
      ],
    },
    {
      word: 'startled',
      phonetic: '/ˈstɑːrtəld/',
      brief: '吓了一跳，受到惊吓',
      pos: 'adjective / verb (past participle of startle)',
      detail:
        'startle 指突然被吓到，通常是短暂的、瞬间的惊吓，比 scared 更强调"突然性"。be startled 表示"被吓了一跳"。原文中仙女们被悟空突然跳下来吓到"The maidens were startled"——两位侍女吓了一跳，毕竟她们没想到桃树间会有人。',
      examples: [
        'She was startled by the loud noise.（她被巨响吓了一跳。）',
        'The sudden knock startled him.（突然的敲门声吓了他一跳。）',
        'I was startled to see him there.（看到他在那里我吃了一惊。）',
      ],
      synonyms: [
        { word: 'scared', note: '害怕的，持续时间更长，程度可更深' },
        { word: 'alarmed', note: '警觉的、不安的，侧重意识到危险' },
        { word: 'surprised', note: '惊讶的，不一定是害怕' },
      ],
    },
    {
      word: 'lit up',
      phonetic: '/lɪt ʌp/',
      brief: '亮了起来，（眼睛）放光',
      pos: 'phrase (past tense of light up)',
      detail:
        'light up 表示"点亮、照亮"，过去式为 lit up。形容眼睛时"His eyes lit up"表示他的眼睛因兴奋或期待而闪闪发亮，是非常生动的表情描写。原文中悟空听说蟠桃会"His eyes lit up"——眼睛一亮，立刻打起了如意算盘，表现了他贪吃爱热闹的天性。',
      examples: [
        'Her face lit up with a smile.（她脸上绽放出笑容。）',
        'His eyes lit up when he saw the gift.（他看到礼物时眼睛一亮。）',
        'The fireworks lit up the night sky.（烟火照亮了夜空。）',
      ],
      synonyms: [
        { word: 'brightened', note: '变亮、开朗起来，更通用' },
        { word: 'beamed', note: '满脸笑容、喜形于色，侧重表情' },
        { word: 'glowed', note: '发光、泛红，侧重柔和的光芒' },
      ],
    },
    {
      word: 'Instantly',
      phonetic: '/ˈɪnstəntli/',
      brief: '立刻，马上',
      pos: 'adverb',
      detail:
        'instantly 表示"立刻、瞬间"，强调某事在极短时间内发生，几乎没有延迟。形容词形式为 instant（即时的、速食的）。原文中悟空念咒后"Instantly Red Gown and Blue Gown fell asleep"——两位仙女瞬间就睡着了，instantly 突出法术生效的神速。',
      examples: [
        'She instantly recognized the song.（她立刻认出了那首歌。）',
        'The medicine worked instantly.（药立刻起效了。）',
        'He replied almost instantly.（他几乎是立刻回复的。）',
      ],
      synonyms: [
        { word: 'immediately', note: '立即，最常用，语气和 instantly 接近' },
        { word: 'at once', note: '马上、立刻，口语化' },
        { word: 'gradually', note: '反义词：渐渐地' },
      ],
    },
    {
      word: 'moaned',
      phonetic: '/moʊnd/',
      brief: '呻吟着说，哀叹',
      pos: 'verb (past tense of moan)',
      detail:
        'moan 作动词指"呻吟、发出低沉的哀声"，常因痛苦、悲伤或绝望而发出。此处用于引述动词 "moaned the Jade Emperor"——玉帝哀叹道，描写他在天兵天将全部败退后的无力与绝望。moan 作引述动词比 said 更具情感色彩，传递出说话者内心的沮丧。',
      examples: [
        'The patient moaned in pain.（病人痛苦地呻吟着。）',
        '"What are we going to do?" she moaned.（"我们该怎么办？"她哀叹道。）',
        'He moaned about his bad luck all day.（他整天抱怨自己运气不好。）',
      ],
      synonyms: [
        { word: 'groaned', note: '呻吟、发出沉闷的声音，比 moan 更粗重' },
        { word: 'sighed', note: '叹气，语气更轻，更偏向无奈而非痛苦' },
        { word: 'complained', note: '抱怨，侧重言语上的不满，而非声音上的哀叹' },
      ],
    },
    {
      word: 'cast a spell',
      phonetic: '/kæst ə spɛl/',
      brief: '施咒，施法',
      pos: 'phrase',
      detail:
        'cast a spell (on somebody) 表示"对某人施咒、施法术"。cast 的过去式仍是 cast。spell 指咒语、法术。原文中蓝衣说悟空"cast a spell on us"——对我们施了法术（让我们睡着了）。这个短语在奇幻文学中极为常见，也可用于比喻"被迷住了"，如 She cast a spell on him（她把他迷住了）。',
      examples: [
        'The witch cast a spell on the princess.（女巫对公主施了咒语。）',
        'He cast a spell to make himself invisible.（他施了隐身术。）',
        'The beautiful music cast a spell over the audience.（美妙的音乐让观众如痴如醉。）',
      ],
      synonyms: [
        { word: 'put a curse on', note: '下诅咒，语气更重、更邪恶' },
        { word: 'use magic on', note: '对……使用魔法，更直白的说法' },
        { word: 'hex', note: '施巫术，口语化' },
      ],
    },
    {
      word: 'hurled',
      phonetic: '/hɜːrld/',
      brief: '猛投，用力掷出',
      pos: 'verb (past tense of hurl)',
      detail:
        'hurl 指用全力投掷某物，力度和速度都远超 throw。原文中太上老君取下臂上的金刚圈，瞄准后"hurled it down to Earth"——猛地掷向地面，砸中悟空。hurl 比 throw 更暴力、更急促，常带有愤怒或决绝的意味。太上老君从天庭高处向下猛掷金刚圈，hurl 完美传达了这一击的力道和下坠的速度。',
      examples: [
        'He hurled the ball as far as he could.（他尽全力把球扔了出去。）',
        'The protesters hurled stones at the police.（抗议者向警察投掷石块。）',
        'She hurled insults at him.（她对他破口大骂。——比喻用法）',
      ],
      synonyms: [
        { word: 'threw', note: '扔，最通用，力度可大可小' },
        { word: 'flung', note: '猛甩、用力抛，强调动作的突然性和随意性' },
        { word: 'tossed', note: '轻轻抛、随意扔，力度远不及 hurl' },
      ],
    },
    {
      word: 'right',
      phonetic: '/raɪt/',
      brief: '紧紧地，就在（强调位置或时间）',
      pos: 'adverb',
      detail:
        'right 此处不是形容词"正确的"，而是副词，表示"就在、紧紧地"，用于强调位置或时间的精确性。原文中"Erlang was right behind him"——二郎神就在他身后紧追不舍。right behind 表示"紧贴在后面、几乎追上"，比单纯的 behind him 紧迫感强得多。类似的用法还有 right here（就在这里）、right now（就在此刻）。',
      examples: [
        'She lives right next door.（她就住在隔壁。）',
        'I\'ll be there right after dinner.（我吃完饭马上就到。）',
        'He stood right in front of me.（他就站在我正前方。）',
      ],
      synonyms: [
        { word: 'directly', note: '直接地、正好，强调位置的精确' },
        { word: 'exactly', note: '确切地，侧重准确无误' },
        { word: 'just', note: '就、正好，口语化程度相当，但语气稍轻' },
      ],
    },
    {
      word: 'temple',
      phonetic: '/ˈtɛmpəl/',
      brief: '庙宇，寺院',
      pos: 'noun',
      detail:
        'temple 指宗教祭祀场所，在中文语境中通常对应"庙、寺、神殿"。原文中悟空灵机一动"I\'ll turn myself into a temple"——我把自己变成一座庙！这是七十二变中最幽默的一段：悟空眼睛变窗户，嘴巴变大门，尾巴变旗杆。但尾巴没处放只能竖在庙后——正是这个破绽被二郎神识破。注意 temple 还有另一个常见含义——"太阳穴"（头两侧），如 He was hit on the temple。',
      examples: [
        'They visited an ancient temple in the mountains.（他们参观了山中的一座古庙。）',
        'The temple was built hundreds of years ago.（这座庙是几百年前建的。）',
        'She rubbed her temples to ease the headache.（她揉了揉太阳穴缓解头疼。——"太阳穴"含义）',
      ],
      synonyms: [
        { word: 'shrine', note: '神龛、圣地，规模通常较小，供奉特定神灵' },
        { word: 'monastery', note: '修道院、僧院，侧重僧侣居住的场所' },
        { word: 'sanctuary', note: '圣所、庇护所，更强调神圣或安全的空间' },
      ],
    },
    {
      word: 'crane',
      phonetic: '/kreɪn/',
      brief: '鹤',
      pos: 'noun',
      detail:
        'crane 是一种长腿长颈的大型水鸟——鹤，常在溪流、沼泽边捕鱼。原文中悟空变成鱼藏入溪流，但二郎神又变成一只 crane 来捕他——鹤以鱼为食，是鱼的天然天敌。这是七十二变斗法中"一物降一物"的第三轮：麻雀→鹰→鱼→鹤，每次变化都形成食物链上的压制关系。注意 crane 还有另一个常见含义——"起重机"（同形同音异义词）。',
      examples: [
        'A crane stood gracefully in the shallow water.（一只鹤优雅地站在浅水中。）',
        'Cranes migrate south for the winter.（鹤群冬季南迁。）',
        'A crane lifted the steel beams.（一台起重机吊起了钢梁。——"起重机"含义）',
      ],
      synonyms: [
        { word: 'heron', note: '鹭，外形与鹤相似，但脖子弯曲方式不同，常在淡水边捕鱼' },
        { word: 'stork', note: '鹳，西方传说中送子的鸟' },
      ],
    },
    {
      word: 'swooped',
      phonetic: '/swuːpt/',
      brief: '俯冲，猛扑下来',
      pos: 'verb (past tense of swoop)',
      detail:
        'swoop 指从高处猛然向下俯冲，常用于猛禽捕食时的动作，也可用于警察突击等比喻场景。原文中"The hawk swooped toward him"——鹰朝他俯冲过来，swooped 完美捕捉了猛禽收翅加速、从空中直扑猎物的那一瞬间，速度感和威胁感十足。',
      examples: [
        'The eagle swooped down and grabbed the rabbit.（鹰俯冲下来抓住了兔子。）',
        'The police swooped on the hideout.（警察突袭了藏身点。）',
        'The owl swooped silently through the night.（猫头鹰在夜空中无声地俯冲。）',
      ],
      synonyms: [
        { word: 'dived', note: '俯冲、潜水，通用词，不限于从空中向下' },
        { word: 'plunged', note: '急速坠落、猛冲，更强调垂直向下的速度' },
        { word: 'pounced', note: '猛扑，强调着陆瞬间的扑击，常用于猫科动物' },
      ],
    },
    {
      word: 'hawk',
      phonetic: '/hɔːk/',
      brief: '鹰，隼',
      pos: 'noun',
      detail:
        'hawk 是一种猛禽，捕食小型鸟类、老鼠等，视力锐利、飞行迅猛。原文中悟空变成麻雀躲藏，抬头却看到一只 hawk 俯冲而来——那是二郎神变的！hawk 是 sparrow 的天敌，这一变化对决完美体现了"一物降一物"：你变小躲藏，我就变成捕食你的猛禽来追踪。',
      examples: [
        'A hawk circled high above the field.（一只鹰在田野上空盘旋。）',
        'Hawks hunt small birds and mice.（鹰捕食小鸟和老鼠。）',
        'He watched like a hawk.（他像鹰一样密切注视着。——比喻锐利的监视）',
      ],
      synonyms: [
        { word: 'eagle', note: '鹰、雕，体型比 hawk 更大，象征力量' },
        { word: 'falcon', note: '隼，飞行速度极快的猛禽' },
        { word: 'vulture', note: '秃鹫，食腐猛禽，不捕猎活物' },
      ],
    },
    {
      word: 'perched',
      phonetic: '/pɜːrtʃt/',
      brief: '栖息，停落（在树枝上）',
      pos: 'verb (past tense of perch)',
      detail:
        'perch 指鸟儿停在树枝、电线等高处休息或观察，也可指人坐在边缘位置。原文中悟空变成麻雀后"perched on a branch"——栖息在一根树枝上，perch 是描写鸟类动作最地道的动词，比 sat 或 stood 更精准，自带"小巧的脚爪稳稳扣住细枝"的画面。',
      examples: [
        'A bird perched on the windowsill.（一只鸟停在窗台上。）',
        'The eagle perched at the top of the tree.（老鹰栖息在树顶。）',
        'She perched on the edge of the chair.（她坐在椅子边上。）',
      ],
      synonyms: [
        { word: 'roosted', note: '栖息、歇息，特指鸟类夜间回巢休息' },
        { word: 'alighted', note: '飞落、降落，强调从飞行中落下的动作' },
        { word: 'settled', note: '落下、安顿，通用词，不限于鸟类' },
      ],
    },
    {
      word: 'sparrow',
      phonetic: '/ˈspæroʊ/',
      brief: '麻雀',
      pos: 'noun',
      detail:
        'sparrow 是一种小型常见的鸟类——麻雀。在《西游记》七十二变的斗法情节中，悟空变成一只麻雀想躲过二郎神，但二郎神有第三只眼（天眼），立刻识破并变成一只鹰（hawk）来扑他。sparrow 体型小巧、不起眼，悟空选它正是为了隐蔽；而 hawk 是猛禽，以小型鸟类为食，形成天然的食物链压制——这一鸟一鹰的变化对决是全书最精彩的斗法段落之一。',
      examples: [
        'A sparrow was singing on the roof.（一只麻雀在屋顶上歌唱。）',
        'Sparrows are common city birds.（麻雀是常见的城市鸟类。）',
        'The sparrow pecked at the crumbs.（麻雀啄食面包屑。）',
      ],
      synonyms: [
        { word: 'finch', note: '雀类，体型相近但颜色通常更鲜艳' },
        { word: 'wren', note: '鹪鹩，体型更小的鸣禽' },
      ],
    },
    {
      word: 'banged',
      phonetic: '/bæŋd/',
      brief: '猛撞，砰砰作响',
      pos: 'verb (past tense of bang)',
      detail:
        'bang 指发出巨大的撞击声，既可作动词也可作名词。原文中"Their weapons banged together all through the night"——他们的兵器彻夜相撞，砰砰作响。banged 是拟声词，读起来就有"砰"的声响感，比 hit 或 struck 更强调碰撞时的巨大噪音和力量感。',
      examples: [
        'He banged the door shut.（他砰的一声关上了门。）',
        'The two cars banged into each other.（两辆车猛地撞在了一起。）',
        'She banged her head on the shelf.（她的头撞到了架子上。）',
      ],
      synonyms: [
        { word: 'crashed', note: '猛烈碰撞、坠毁，破坏性更强' },
        { word: 'clashed', note: '交锋、撞击，常用于刀剑相碰的清脆声响' },
        { word: 'thudded', note: '沉闷地撞击，发出"咚"的低沉声响' },
      ],
    },
    {
      word: 'swirled',
      phonetic: '/swɜːrld/',
      brief: '旋转，翻涌',
      pos: 'verb (past tense of swirl)',
      detail:
        'swirl 指水流、气流或烟雾等呈螺旋状旋转、翻涌。原文中"Clouds swirled and wind blew as the two giants fought in the sky"——两位巨人在天空激战时云层翻涌、狂风呼啸。swirled 比 moved 或 blew 更有画面感，描绘出云团在巨大力量搅动下螺旋翻滚的动态景象，烘托战斗的激烈与壮观。',
      examples: [
        'Dust swirled in the wind.（尘土在风中旋转飞扬。）',
        'The river swirled around the rocks.（河水在岩石周围打着旋儿。）',
        'Smoke swirled up from the chimney.（烟雾从烟囱里袅袅盘旋而上。）',
      ],
      synonyms: [
        { word: 'whirled', note: '飞速旋转，强调速度，可指物体或人' },
        { word: 'eddie', note: '打旋、形成漩涡，专指水流' },
        { word: 'churned', note: '剧烈翻搅，强调内部搅动而非旋转' },
      ],
    },
    {
      word: 'struck',
      phonetic: '/strʌk/',
      brief: '击打，攻击',
      pos: 'verb (past tense of strike)',
      detail:
        'strike 指用力击打、攻击，过去式和过去分词均为 struck。原文中"Erlang blocked the bar with his sword and then struck back"——二郎神用剑挡住铁棒，随即反击。struck back 表示"反击、回击"，strike 在战斗场景中比 hit 更正式、更有力度感，常用于剑击、雷击等有力量的打击。',
      examples: [
        'He struck the table with his fist.（他用拳头猛击桌面。）',
        'Lightning struck the tree.（闪电击中了那棵树。）',
        'She struck back at her attacker.（她向袭击者反击。）',
      ],
      synonyms: [
        { word: 'hit', note: '打、击，最通用的词，力度可大可小' },
        { word: 'slashed', note: '猛砍、劈，强调用刀剑横向挥击' },
        { word: 'smashed', note: '猛砸、粉碎，强调破坏性力量' },
      ],
    },
    {
      word: 'punished',
      phonetic: '/ˈpʌnɪʃt/',
      brief: '被惩罚，受到处罚',
      pos: 'verb (past participle of punish)',
      detail:
        'punish 指因某人的过错或罪行而施加惩罚。被动形式 be punished 表示"被惩罚、受到处罚"。原文中二郎神警告悟空"And you will be punished!"——你将会受到惩罚！这是天庭对叛逆者的官方威胁语气，you will be punished 用被动语态显得冷酷而正式，好像惩罚是不可避免的命运。',
      examples: [
        'The criminal was punished severely.（罪犯受到了严厉的惩罚。）',
        'If you break the rules, you will be punished.（如果你违反规则，将会受到处罚。）',
        'She punished her son for lying.（她因儿子撒谎而惩罚了他。）',
      ],
      synonyms: [
        { word: 'penalized', note: '被处罚，更正式，常用于体育或制度上的处罚' },
        { word: 'disciplined', note: '被管教、处分，语气较轻，侧重教育目的' },
        { word: 'rewarded', note: '反义词：被奖赏' },
      ],
    },
    {
      word: 'no match for',
      phonetic: '/noʊ mætʃ fɔːr/',
      brief: '不是……的对手，比不上',
      pos: 'phrase',
      detail:
        'no match for somebody 表示"完全不是某人的对手、远远比不上"，强调双方实力悬殊，一方毫无胜算。原文中悟空得意地说"He and his army are no match for---"——他和他的军队根本不是……的对手，话还没说完就被打断，自信满满的语气通过 no match for 一览无余。',
      examples: [
        'She is no match for him in chess.（她下棋根本不是他的对手。）',
        'Our team was no match for the champions.（我们队完全不是冠军队的对手。）',
        'This old car is no match for a sports car.（这辆旧车比不上跑车。）',
      ],
      synonyms: [
        { word: "can't hold a candle to", note: '远远比不上，更口语化、更形象的比喻' },
        { word: 'outclassed by', note: '被……完全碾压，强调实力差距' },
        { word: 'inferior to', note: '不如、次于，更正式，语气较平' },
      ],
    },
    {
      word: 'just',
      phonetic: '/dʒʌst/',
      brief: '刚刚，刚才',
      pos: 'adverb',
      detail:
        'just 在此处表示"刚刚、刚才"，用于完成时态中强调动作在极短时间之前发生。原文中长臂猿欢呼"Our king has just defeated an entire army from Heaven!"——咱们大王刚刚打败了天庭的一整支大军！just 让胜利听起来还热乎着，烘托出猴子们兴奋自豪的情绪。just 在英语中用法极多，此处是时间副词用法。',
      examples: [
        'I have just finished my homework.（我刚做完作业。）',
        'She just left the office.（她刚离开办公室。）',
        'They\'ve just arrived at the airport.（他们刚到机场。）',
      ],
      synonyms: [
        { word: 'recently', note: '最近，时间范围比 just 更宽，不强调"刚刚"' },
        { word: 'a moment ago', note: '刚才，短语形式，更口语化' },
        { word: 'already', note: '已经，强调动作已完成，但不强调"才刚发生"' },
      ],
    },
    {
      word: 'shattered',
      phonetic: '/ˈʃætərd/',
      brief: '粉碎，碎裂',
      pos: 'verb (past tense of shatter)',
      detail:
        'shatter 指物体猛烈地碎裂成很多碎片，比 break 更强调"突然炸开、四散飞溅"的画面感。动词变化为 shatter → shattered → shattered。原文中天兵用剑砍悟空，"The swords shattered"——剑碎了，反衬悟空刀枪不入的金刚之躯。shatter 常用于玻璃、瓷器等脆性材质，用在剑上更突出了撞击之猛烈。',
      examples: [
        'The glass shattered into a thousand pieces.（玻璃碎成了无数片。）',
        'The vase shattered when it hit the floor.（花瓶摔到地上碎了。）',
        'Her hopes were shattered by the bad news.（坏消息让她的希望破灭了。——比喻用法）',
      ],
      synonyms: [
        { word: 'broke', note: '弄坏、断裂，通用词，不一定碎成片' },
        { word: 'smashed', note: '砸碎，强调外力撞击导致的破碎' },
        { word: 'cracked', note: '裂开，可能只是出现裂缝而非完全碎裂' },
      ],
    },
    {
      word: 'Several',
      phonetic: '/ˈsɛvərəl/',
      brief: '几个，数个',
      pos: 'determiner / pronoun',
      detail:
        'several 表示"几个、数个"，指数量在三个以上但又不太多，比 a few 多，比 many 少。在英语中 several 属于"模糊量词"，不给出精确数字但暗示"不止一两个"。原文中玉帝调来"Several fire gods"——好几位火神，several 暗示人数不少，烘托天庭动用了相当规模的火力来对付悟空，却依然无功而返。',
      examples: [
        'Several students raised their hands.（几个学生举起了手。）',
        'I have read several books this month.（我这个月读了好几本书。）',
        'Several people were injured in the accident.（好几个人在事故中受伤。）',
      ],
      synonyms: [
        { word: 'a few', note: '几个，数量比 several 少，通常指三两个' },
        { word: 'various', note: '各种各样的，侧重多样性而非数量' },
        { word: 'numerous', note: '许多的，数量比 several 多得多，更正式' },
      ],
    },
    {
      word: 'get rid of',
      phonetic: '/ɡɛt rɪd əv/',
      brief: '摆脱，除掉，赶走',
      pos: 'phrase',
      detail:
        'get rid of 是极常用的短语，表示"摆脱、除掉、处理掉"某人或某物，语气口语化。rid 本身是形容词（摆脱了的），只用在 be rid of / get rid of 中。原文中玉帝问"how will we get rid of him?"——我们怎么才能除掉他？get rid of 在此意为"消灭、解决掉"，因为前面刀劈火烧都不管用，玉帝的焦虑溢于言表。',
      examples: [
        'We need to get rid of these old newspapers.（我们需要把这些旧报纸处理掉。）',
        'I can\'t get rid of this cold.（我这感冒怎么也好不了。）',
        'She wanted to get rid of the annoying salesman.（她想打发掉那个烦人的推销员。）',
      ],
      synonyms: [
        { word: 'eliminate', note: '消除、消灭，更正式，常用于书面语' },
        { word: 'dispose of', note: '处理掉、处置，侧重处理废弃物的动作' },
        { word: 'be rid of', note: '摆脱，表示状态而非动作' },
      ],
    },
    {
      word: 'coal',
      phonetic: '/koʊl/',
      brief: '煤，煤炭',
      pos: 'noun',
      detail:
        'coal 指煤炭——一种可燃烧的黑色矿物燃料。此处"Burning pieces of coal flew everywhere"——燃烧的煤块四处飞溅，描写太上老君炼丹炉被打翻时的混乱场面。英语中 coal 可作可数名词（一块煤 = a piece of coal / a coal），也可作不可数名词（煤炭这种物质）。搭配 charcoal 指木炭，不是 coal。',
      examples: [
        'The factory burns coal to generate electricity.（这家工厂烧煤发电。）',
        'He put another piece of coal on the fire.（他往火里又添了一块煤。）',
        'Coal mining used to be a major industry here.（采煤曾是这里的主要产业。）',
      ],
      synonyms: [
        { word: 'charcoal', note: '木炭，由木材烧制而成，不是煤' },
        { word: 'ember', note: '余烬、暗火，指快熄灭的燃烧物碎片' },
        { word: 'ash', note: '灰烬，燃烧后的残余物' },
      ],
    },
    {
      word: 'smashed',
      phonetic: '/smæʃt/',
      brief: '砸碎，猛击',
      pos: 'verb (past tense of smash)',
      detail:
        'smash 指用力猛击使物体破碎或毁坏，强调外力的猛烈程度。变化形式为 smash → smashed → smashed。原文中悟空冲出炼丹炉后"smashed everything in the room"——把房间里的一切都砸了个粉碎。与 shatter 不同，smash 侧重"猛砸"的动作和力度，而 shatter 侧重"碎裂四散"的结果。smash 还可作名词，如 a smash hit（大热门）。',
      examples: [
        'He smashed the window with a rock.（他用石头砸碎了窗户。）',
        'The car smashed into a wall.（汽车猛撞到墙上。）',
        'She smashed the record and won the race.（她打破了纪录并赢得了比赛。——比喻用法）',
      ],
      synonyms: [
        { word: 'shattered', note: '粉碎，侧重碎裂飞溅的结果而非砸击动作' },
        { word: 'crushed', note: '压碎、碾碎，侧重从上方施压' },
        { word: 'broke', note: '弄坏，通用词，力度和画面感都不如 smash 强' },
      ],
    },
    {
      word: 'burned up',
      phonetic: '/bɜːrnd ʌp/',
      brief: '烧毁，烧成灰烬',
      pos: 'phrase (past tense of burn up)',
      detail:
        'burn up 指完全烧毁、烧光，强调火势之猛以至于把东西彻底烧掉。与 burn down（烧塌，指建筑物）不同，burn up 侧重物体被火焰吞噬殆尽。原文中太上老君说"I thought he was burned up"——我以为他被烧成了灰。burned up 在此是被动语态，暗示预期悟空会被大火彻底毁掉，结果却毫发无损。',
      examples: [
        'The meteor burned up as it entered the atmosphere.（陨石进入大气层时烧毁了。）',
        'The papers were burned up in the fire.（那些文件在大火中烧成了灰。）',
        'He was burned up with fever.（他烧得厉害。——burn up 也可比喻发高烧）',
      ],
      synonyms: [
        { word: 'burned down', note: '烧塌，专指建筑物被烧毁倒塌' },
        { word: 'incinerated', note: '焚化、化为灰烬，更正式，常用于专业语境' },
        { word: 'burned out', note: '烧空、烧尽，指内部被烧光但外壳可能还在' },
      ],
    },
    {
      word: 'outrage',
      phonetic: '/ˈaʊtreɪdʒ/',
      brief: '暴行；震怒，愤慨',
      pos: 'noun',
      detail:
        'outrage 作名词指"令人震惊的暴行、不公正行为"，也可指人们因此产生的"震怒、愤慨"情绪。原文中玉帝怒吼"This is an outrage!"——这简直是无法无天！outrage 比 anger 更强烈，不仅愤怒，还包含"不可置信、不可容忍"的意味，是天庭最高统治者对悟空公然挑衅的极度愤慨。',
      examples: [
        'The public expressed outrage at the decision.（公众对这个决定表示愤慨。）',
        'The scandal caused national outrage.（丑闻引发了全国性的愤怒。）',
        'What an outrage! How could they do that?（简直无法无天！他们怎么能这样做？）',
      ],
      synonyms: [
        { word: 'scandal', note: '丑闻、丑事，侧重道德层面引发公愤的事件' },
        { word: 'atrocity', note: '暴行、残暴行为，程度更重，多指战争或暴力罪行' },
        { word: 'indignation', note: '义愤，因不公正而愤怒，更正式' },
      ],
    },
    {
      word: 'figure',
      phonetic: '/ˈfɪɡjər/',
      brief: '身影，人影，轮廓',
      pos: 'noun',
      detail:
        'figure 在此处指"人影、身影"，强调看到一个模糊或远处的身影轮廓，而不具体描写面部细节。原文中悟空突然停下，"Before him was a huge figure, glowing with golden light"——面前出现一个巨大的身影，浑身散发着金光。figure 暗示这人威严而神秘，制造悬念——直到下文才揭示是如来佛祖。figure 还有"数字""人物""体形"等多个常用含义。',
      examples: [
        'A tall figure appeared in the doorway.（一个高大的身影出现在门口。）',
        'I saw a dark figure standing by the tree.（我看到一个黑影站在树旁。）',
        'She is an important figure in Chinese history.（她是中国历史上的重要人物。——"人物"含义）',
      ],
      synonyms: [
        { word: 'shape', note: '形状、轮廓，更模糊，不一定是人' },
        { word: 'silhouette', note: '剪影，侧影，强调逆光下的黑色轮廓' },
        { word: 'person', note: '人，直接指明是人，缺少 figure 的模糊和悬念感' },
      ],
    },
    {
      word: 'formulas',
      phonetic: '/ˈfɔːrmjələz/',
      brief: '公式，秘诀，口诀',
      pos: 'noun (plural of formula)',
      detail:
        'formula 本义是"公式、方程式"（数学/化学），此处引申为"秘诀、法术口诀"。悟空说"A sage taught me secret formulas"——一位仙人教了我秘传口诀，对应西游记中菩提祖师传授的七十二变和筋斗云等法术。复数 formulas（也可写作 formulae /ˈfɔːrmjəliː/）暗示不止一种法术。',
      examples: [
        'There is no magic formula for success.（成功没有神奇的秘诀。）',
        'The scientist developed a new formula for the medicine.（科学家研发了新药配方。）',
        'H₂O is the formula for water.（H₂O 是水的化学式。）',
      ],
      synonyms: [
        { word: 'spells', note: '咒语，魔法用语，更偏向奇幻文学' },
        { word: 'recipes', note: '配方、秘诀，侧重材料组合的方法' },
        { word: 'incantations', note: '咒文、念诵，更正式，多用于宗教或仪式语境' },
      ],
    },
    {
      word: 'severely',
      phonetic: '/səˈvɪrli/',
      brief: '严厉地，严重地',
      pos: 'adverb',
      detail:
        'severely 是 severe（严厉的、严重的）的副词形式，表示"严厉地、严重地"。修饰惩罚时表示惩罚极其严酷，修饰伤势时表示伤情很重。原文中佛祖对悟空说"you will be punished severely"——你将受到严厉的惩罚。severely 修饰 punished，强调输了赌注的后果绝非轻微的教训，暗示被压五行山的命运。注意 severe 的名词形式为 severity。',
      examples: [
        'He was severely punished for his mistake.（他因错误受到了严厉的惩罚。）',
        'She was severely injured in the accident.（她在事故中受了重伤。）',
        'The teacher severely criticized the student.（老师严厉地批评了那个学生。）',
      ],
      synonyms: [
        { word: 'harshly', note: '严酷地、粗暴地，侧重方式的无情' },
        { word: 'strictly', note: '严格地，侧重规则执行的一丝不苟' },
        { word: 'lightly', note: '反义词：轻轻地、轻微地' },
      ],
    },
    {
      word: 'palm',
      phonetic: '/pɑːm/',
      brief: '手掌，手心',
      pos: 'noun',
      detail:
        'palm 指"手掌、手心"，即手的内侧从手腕到手指根部的部分。也可指棕榈树（palm tree）。原文中悟空"Wukong stepped up onto Buddha\'s palm"——悟空跳上了佛祖的手掌，这是西游记最经典的场景之一：如来佛祖掌中天地，悟空自以为跳到天边，实际从未离开佛祖的手心。palm 在此构成绝妙的隐喻——无论悟空多么强大，都逃不出佛祖的掌心。',
      examples: [
        'She held the tiny bird in the palm of her hand.（她把小鸟捧在手心里。）',
        'He read his fortune from the lines on his palm.（他看手相算命。）',
        'Coconuts grow on palm trees.（椰子长在棕榈树上。——palm 的另一含义）',
      ],
      synonyms: [
        { word: 'hand', note: '手，通用词，palm 特指手掌那一面' },
        { word: 'grasp', note: '抓握、掌控，侧重握住的动作或控制的权力' },
        { word: 'fist', note: '拳头，手握紧的状态，与 palm（手掌张开）相反' },
      ],
    },
    {
      word: 'grunted',
      phonetic: '/ɡrʌntɪd/',
      brief: '咕哝，发出低沉的哼声',
      pos: 'verb (past tense of grunt)',
      detail:
        'grunt 指从喉咙深处发出的低沉短促声音，人在用力、不满或猪叫时都会 grunt。原文中悟空被大山压住，"Grr!" Wukong grunted, and pushed with all his strength——悟空低吼一声，拼尽全力去推。grunted 配合"Grr!"的拟声词，生动再现了他咬牙用力的画面。grunt 也可作名词，如 a grunt of effort（一声用力的闷哼）。',
      examples: [
        'He grunted as he lifted the heavy box.（他搬重箱子时闷哼了一声。）',
        'She grunted in reply, not bothering to look up.（她咕哝了一声算作回答，头都没抬。）',
        'The pig grunted happily while eating.（猪吃东西时发出满足的哼哼声。）',
      ],
      synonyms: [
        { word: 'groaned', note: '呻吟，声音更长、更低沉，多因痛苦或疲惫' },
        { word: 'growled', note: '低吼，更凶狠，带有威胁意味' },
        { word: 'muttered', note: '嘀咕、含糊地说，侧重说出口的话而非发声' },
      ],
    },
    {
      word: 'trapped',
      phonetic: '/træpt/',
      brief: '被困住，被束缚',
      pos: 'verb (past participle of trap) / adjective',
      detail:
        'trap 作动词指"困住、使落入陷阱"，此处 trapped 是被动语态"will be trapped"——将被困住。也可作形容词表示"被困的、受困的"。原文中佛祖说"He will be trapped until his punishment is over"——他将被困在这里直到惩罚结束。trapped 在此意味着悟空完全失去了自由行动的能力，被压在五行山下无法逃脱，对应中文"镇压"之意。',
      examples: [
        'The hikers were trapped by the sudden snowstorm.（登山者被突如其来的暴风雪困住了。）',
        'She felt trapped in her boring job.（她觉得自己被困在无聊的工作中。——比喻用法）',
        'A bear was trapped in the net.（一只熊被困在网里了。）',
      ],
      synonyms: [
        { word: 'stuck', note: '卡住、困住，更口语化，程度可轻可重' },
        { word: 'confined', note: '被限制、禁闭，侧重空间上的约束' },
        { word: 'imprisoned', note: '被监禁，更正式，强调法律或官方的关押' },
      ],
    },
  ],
  book_03: [
    {
      word: 'thick',
      phonetic: '/θɪk/',
      brief: '厚的，浓密的',
      pos: 'adjective',
      detail:
        'thick 指"厚的、浓密的"，反义词为 thin（薄的）。可形容具体物体的厚度（a thick book 一本厚书），也可形容植被、毛发、雾气等覆盖物的浓密程度。原文中"A thick layer of moss covered the monkey"——一层厚厚的苔藓覆盖了猴子，thick 强调苔藓层之厚，暗示五百年风吹日晒、与世隔绝的漫长岁月。',
      examples: [
        'The wall is very thick.（这面墙非常厚。）',
        'She has thick hair.（她的头发很浓密。）',
        'The fog was so thick that I couldn\'t see anything.（雾太浓了，我什么都看不见。）',
      ],
      synonyms: [
        { word: 'dense', note: '密集的、浓密的，侧重单位面积内数量多' },
        { word: 'heavy', note: '重的、厚的，侧重重量感' },
        { word: 'thin', note: '反义词：薄的、稀疏的' },
      ],
    },
    {
      word: 'cheat',
      phonetic: '/tʃiːt/',
      brief: '欺骗，作弊',
      pos: 'verb',
      detail:
        'cheat 意为"欺骗、作弊"，指通过不诚实手段获取利益。原文中 Buddha 说东方的人们"lie, cheat, and steal"（撒谎、欺骗、偷窃），三个动词并列，层层递进地描述人性的堕落，cheat 在此强调人们互相欺骗、不守诚信。',
      examples: [
        'He cheated on the exam.（他在考试中作弊。）',
        'Don\'t cheat your friends.（不要欺骗你的朋友。）',
        'She was cheated out of her money.（她被骗走了钱。）',
      ],
      synonyms: [
        { word: 'deceive', note: '欺骗，侧重隐瞒真相或制造假象' },
        { word: 'trick', note: '耍花招，侧重用巧妙手段迷惑对方' },
        { word: 'lie', note: '说谎，侧重言语上的不诚实' },
      ],
    },
    {
      word: 'steal',
      phonetic: '/stiːl/',
      brief: '偷窃，盗窃',
      pos: 'verb',
      detail:
        'steal 意为"偷窃、盗窃"，指未经允许拿走他人的财物。原文中 Buddha 描述东方人的恶行："They lie, cheat, and steal"——撒谎、欺骗、偷窃，steal 是三个并列动词的最后一个，描绘行为从言语（lie）到欺骗（cheat）再到实际行动（steal）的升级，层层递进。',
      examples: [
        'Someone stole my bicycle.（有人偷了我的自行车。）',
        'He was caught stealing from the store.（他在商店偷东西被抓了。）',
        'She stole a glance at the letter.（她偷偷瞥了一眼那封信。）',
      ],
      synonyms: [
        { word: 'rob', note: '抢劫，侧重使用暴力或威胁' },
        { word: 'thieve', note: '偷窃，较正式/文学用语' },
        { word: 'take', note: '拿走，中性词，不隐含非法意图' },
      ],
    },
    {
      word: 'greedy',
      phonetic: '/ˈɡriːdi/',
      brief: '贪婪的，贪心的',
      pos: 'adjective',
      detail:
        'greedy 意为"贪婪的、贪心的"，指对财富、食物等有过度的欲望。原文中 Buddha 说"They are greedy and constantly fighting"——他们贪婪且不断争斗，greedy 与 fighting 搭配，揭示贪欲是争斗的根源，与佛教中"贪"作为三毒（贪、嗔、痴）之首的理念呼应。',
      examples: [
        'He is greedy for power.（他对权力贪得无厌。）',
        'Don\'t be so greedy—leave some for others.（别这么贪心，给别人留点。）',
        'The greedy dog tried to steal the bone.（那只贪婪的狗想偷骨头。）',
      ],
      synonyms: [
        { word: 'avaricious', note: '贪财的，正式用语，侧重对金钱的贪欲' },
        { word: 'selfish', note: '自私的，侧重只顾自己不顾他人' },
        { word: 'generous', note: '反义词：慷慨的，大方的' },
      ],
    },
    {
      word: 'bundle',
      phonetic: '/ˈbʌndl/',
      brief: '捆，束，包',
      pos: 'noun',
      detail:
        'bundle 意为"捆、束、包"，指用绳或布将多个物品扎在一起的包裹。原文中"He held up a bundle of scrolls"——他举起一捆经卷，bundle of scrolls 形象地描绘了 True Scriptures 作为一卷卷扎好的古代经书的样子，增强了画面的具体感。',
      examples: [
        'She carried a bundle of clothes.（她抱着一捆衣服。）',
        'He tied the sticks into a bundle.（他把树枝扎成一捆。）',
        'The baby was wrapped in a bundle of blankets.（婴儿被裹在一堆毯子里。）',
      ],
      synonyms: [
        { word: 'pack', note: '包，背包，侧重容器功能' },
        { word: 'parcel', note: '包裹，侧重邮寄或包装的物品' },
        { word: 'bunch', note: '束，串，多用于花、钥匙等小型物品' },
      ],
    },
    {
      word: 'Empire',
      phonetic: '/ˈempaɪər/',
      brief: '帝国',
      pos: 'noun',
      detail:
        'Empire 意为"帝国"，指由皇帝统治的大范围领土及其人民。原文中"the Tang Empire"即唐朝帝国，是故事发生的主要背景。Buddha 说东方的 Tang Empire 需要帮助，为后续取经之旅设定了地理与政治背景。',
      examples: [
        'The Roman Empire lasted for centuries.（罗马帝国延续了数百年。）',
        'She built a business empire.（她建立了一个商业帝国。）',
      ],
      synonyms: [
        { word: 'kingdom', note: '王国，由国王统治' },
        { word: 'realm', note: '领域，王国，文学色彩较浓' },
      ],
    },
    {
      word: 'Emperor',
      phonetic: '/ˈempərər/',
      brief: '皇帝',
      pos: 'noun',
      detail:
        'Emperor 意为"皇帝"，指帝国的最高统治者。原文中"The Tang Emperor"即唐太宗，他是推动取经的关键人物——正是他派遣玄奘法师前往西天取经。该词在本书中出现多次，是重要的人物称谓。',
      examples: [
        'The emperor ruled with wisdom.（这位皇帝以智慧治国。）',
        'Qin Shi Huang was the first emperor of China.（秦始皇是中国第一位皇帝。）',
      ],
      synonyms: [
        { word: 'king', note: '国王，统治范围通常比 emperor 小' },
        { word: 'ruler', note: '统治者，泛指任何掌权者' },
      ],
    },
    {
      word: 'religious',
      phonetic: '/rɪˈlɪdʒəs/',
      brief: '宗教的，虔诚的',
      pos: 'adjective',
      detail:
        'religious 意为"宗教的、与宗教相关的"，也可形容人"虔诚的"。原文中"old religious texts"指古老的宗教经文，暗示唐僧当时读的是旧版佛经，为后文引出"True Scriptures"（真经）做铺垫——旧经不够完善，需要真经来替代。',
      examples: [
        'They built a religious temple.（他们建了一座宗教寺庙。）',
        'She is a very religious person.（她是一个非常虔诚的人。）',
      ],
      synonyms: [
        { word: 'spiritual', note: '精神的，灵性的，不一定与具体宗教相关' },
        { word: 'sacred', note: '神圣的，强调值得崇敬' },
      ],
    },
    {
      word: 'contain',
      phonetic: '/kənˈteɪn/',
      brief: '包含，容纳',
      pos: 'verb',
      detail:
        'contain 意为"包含、容纳"，指某物内部持有或包括其他内容。原文中"They contain many lessons"——真经包含许多教义，contain 突出真经作为知识容器的意象，里面蕴藏着能让人解脱苦难的智慧。',
      examples: [
        'The box contains old letters.（盒子里装着旧信件。）',
        'This book contains useful information.（这本书包含有用的信息。）',
        'Water contains hydrogen and oxygen.（水含有氢和氧。）',
      ],
      synonyms: [
        { word: 'include', note: '包括，侧重组成部分' },
        { word: 'hold', note: '持有、容纳，侧重物理上的盛放' },
      ],
    },
    {
      word: 'suffer',
      phonetic: '/ˈsʌfər/',
      brief: '受苦，遭受',
      pos: 'verb',
      detail:
        'suffer 意为"受苦、遭受痛苦"，指经历身体或精神上的折磨。原文中"People who learn the lessons never have to suffer again"——学得真经教义的人将不再受苦，suffer 在此直指佛教的核心诉求：脱离苦难（解脱），与"lie, cheat, steal"形成因果——恶行导致苦难，真经带来解脱。',
      examples: [
        'Many people suffered during the war.（许多人在战争中遭受苦难。）',
        'She suffers from headaches.（她饱受头痛之苦。）',
        'He suffered a lot of pain.（他承受了巨大的痛苦。）',
      ],
      synonyms: [
        { word: 'endure', note: '忍受、忍耐，侧重承受力' },
        { word: 'experience', note: '经历，中性词，不含痛苦意味' },
      ],
    },
    {
      word: 'Beams',
      phonetic: '/biːmz/',
      brief: '光束，光线',
      pos: 'noun',
      detail:
        'beam 意为"光束、光线"，指一道集中的光。原形为 beam，此处为复数形式 Beams。原文中"Beams of light shone from it"——光芒从袈裟中射出，Beams of light 营造出神圣、超自然的视觉效果，暗示这件袈裟和这位女子（Guanyin 化身）并非凡间之物。',
      examples: [
        'A beam of sunlight came through the window.（一束阳光从窗户照进来。）',
        'Beams of light lit up the stage.（多束光照亮了舞台。）',
      ],
      synonyms: [
        { word: 'ray', note: '光线，通常指单条细线状的光' },
        { word: 'glow', note: '光辉、柔光，侧重柔和扩散的光' },
      ],
    },
    {
      word: 'shone',
      phonetic: '/ʃɒn/',
      brief: '照耀，发光（shine 的过去式）',
      pos: 'verb',
      detail:
        'shone 是 shine 的过去式，意为"发光、照耀"。原文中"Beams of light shone from it"——光芒从袈裟中射出，shone 作为过去式描述已经发生的动作，配合 Beams 描绘出袈裟被穿上后立刻发光的神奇场景。',
      examples: [
        'The sun shone brightly all day.（阳光一整天都灿烂地照耀着。）',
        'Her eyes shone with excitement.（她的眼睛闪烁着兴奋的光芒。）',
        'The polished metal shone like new.（抛光的金属像新的一样闪闪发亮。）',
      ],
      synonyms: [
        { word: 'glowed', note: '发出柔和的光，侧重温暖、持续的光' },
        { word: 'sparkled', note: '闪烁、闪耀，侧重亮点跳跃' },
      ],
    },
    {
      word: 'gasped',
      phonetic: '/ɡæspt/',
      brief: '倒吸一口气，惊喘',
      pos: 'verb',
      detail:
        'gasp 意为"倒吸一口气"，指因惊讶、恐惧或疼痛而突然急促地吸气。原文为 gasped（过去式）。原文中"The emperor gasped"——皇帝看到袈裟发光后震惊地倒吸一口气，gasped 精准地传达了皇帝面对神迹时震惊、敬畏的瞬间反应。',
      examples: [
        'She gasped when she saw the price.（她看到价格时倒吸了一口气。）',
        'He gasped for air after running.（他跑步后大口喘气。）',
        'The crowd gasped in amazement.（人群惊叹地倒吸一口气。）',
      ],
      synonyms: [
        { word: 'panted', note: '气喘吁吁，侧重体力消耗后的急促呼吸' },
        { word: 'startled', note: '受惊的，侧重突然被吓到' },
      ],
    },
    {
      word: 'glowing',
      phonetic: '/ˈɡləʊɪŋ/',
      brief: '发光的，熠熠生辉的',
      pos: 'adjective',
      detail:
        'glowing 是 glow 的现在分词形式作形容词，意为"发光的、光辉的"，形容物体发出柔和、温暖的光。原文中"the glowing robe"——那件发光的袈裟，glowing 赋予袈裟持续发光的动态感（-ing 形式强调状态持续），与前一句的 Beams/shone 形成呼应。',
      examples: [
        'The glowing embers kept us warm.（发光的余烬让我们保持温暖。）',
        'She had a glowing smile.（她有灿烂的笑容。）',
        'The fireflies were glowing in the dark.（萤火虫在黑暗中发光。）',
      ],
      synonyms: [
        { word: 'radiant', note: '光辉灿烂的，侧重光芒向外辐射' },
        { word: 'luminous', note: '发光的，侧重自体发光' },
      ],
    },
    {
      word: 'Fierce',
      phonetic: '/fɪəs/',
      brief: '凶猛的，凶恶的',
      pos: 'adjective',
      detail:
        'fierce 意为"凶猛的、凶恶的、猛烈的"，形容具有攻击性或危险力量的事物。原文中"Fierce creatures and evil demons"——凶猛的妖兽和邪恶的恶魔，fierce 与 evil 并列修饰取经路上的威胁，预示旅途充满危险。',
      examples: [
        'The fierce dog guarded the house.（那只凶猛的狗守卫着房子。）',
        'A fierce storm hit the coast.（一场猛烈的暴风雨袭击了海岸。）',
        'She is a fierce competitor.（她是一个强劲的竞争者。）',
      ],
      synonyms: [
        { word: 'ferocious', note: '残忍的、凶残的，程度比 fierce 更强' },
        { word: 'savage', note: '野蛮的、凶猛的，侧重原始暴力' },
        { word: 'gentle', note: '反义词：温和的，温柔的' },
      ],
    },
    {
      word: 'attack',
      phonetic: '/əˈtæk/',
      brief: '攻击，袭击',
      pos: 'verb',
      detail:
        'attack 意为"攻击、袭击"，指以武力或言语对目标发起进攻。原文中"evil demons will try to attack you"——邪恶的恶魔会试图攻击你，attack 在此描述取经路上的具体威胁动作，与前文的 Fierce 呼应，构建出旅途的险恶画面。',
      examples: [
        'The lion attacked the zebra.（狮子攻击了斑马。）',
        'The army attacked at dawn.（军队在黎明时发起进攻。）',
        'He was attacked by a swarm of bees.（他被一群蜜蜂袭击了。）',
      ],
      synonyms: [
        { word: 'assault', note: '猛攻、突击，侧重猛烈程度' },
        { word: 'strike', note: '打击、攻击，动作更快速突然' },
        { word: 'defend', note: '反义词：防御，保卫' },
      ],
    },
    {
      word: 'crowd',
      phonetic: '/kraʊd/',
      brief: '人群，群众',
      pos: 'noun',
      detail:
        'crowd 意为"人群、群众"，指聚集在一起的大量人群。原文中"A big crowd gathered to say good-bye"——一大群人聚集来送行，crowd 体现了唐僧取经之事在国中引起的关注，人们自发前来告别，烘托出唐僧出发时的隆重场面。',
      examples: [
        'A large crowd gathered outside the stadium.（一大群人聚集在体育场外。）',
        'The crowd cheered loudly.（人群大声欢呼。）',
        'He pushed his way through the crowd.（他从人群中挤了过去。）',
      ],
      synonyms: [
        { word: 'mob', note: '暴民、混乱的人群，带负面色彩' },
        { word: 'audience', note: '观众、听众，侧重有组织地观看/聆听' },
      ],
    },
    {
      word: 'uneasily',
      phonetic: '/ʌnˈiːzɪli/',
      brief: '不安地，不自在地',
      pos: 'adverb',
      detail:
        'uneasily 是 uneasy（不安的）的副词形式，意为"不安地、不自在地"。原文中"He looked around uneasily"——他不安地四处张望，uneasily 精准描绘了唐僧在荒山中感到的紧张和恐惧，为下一句突然传来的巨响（boomed）做铺垫，营造悬念。',
      examples: [
        'She shifted uneasily in her chair.（她在椅子上不安地挪动身体。）',
        'He glanced around uneasily.（他不安地四处张望。）',
        'The students waited uneasily for the test results.（学生们不安地等待考试结果。）',
      ],
      synonyms: [
        { word: 'nervously', note: '紧张地，侧重精神上的焦虑' },
        { word: 'anxiously', note: '焦虑地，侧重对未来的担忧' },
        { word: 'calmly', note: '反义词：平静地，从容地' },
      ],
    },
    {
      word: 'boomed',
      phonetic: '/buːmd/',
      brief: '发出低沉的轰鸣声（boom 的过去式）',
      pos: 'verb',
      detail:
        'boomed 是 boom 的过去式，意为"发出低沉、洪亮的轰鸣声"，常形容大嗓门或巨大的声响。原文中"Suddenly a voice boomed"——突然一个声音轰然响起，boomed 不仅描述声音之大，更暗示说话者的力量与威严，让读者和唐僧一起被突如其来的巨响震住，制造出戏剧性的出场效果。',
      examples: [
        'Thunder boomed in the distance.（远处雷声隆隆。）',
        '"Come here!" he boomed.（"过来！"他大声吼道。）',
        'The cannon boomed across the valley.（大炮的轰鸣声响彻山谷。）',
      ],
      synonyms: [
        { word: 'roared', note: '咆哮、怒吼，侧重如野兽般的凶猛声音' },
        { word: 'thundered', note: '如雷鸣般轰响，声音更大更震撼' },
        { word: 'whispered', note: '反义词：低语，轻声说' },
      ],
    },
  ],
};

export default vocab;
