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
    {
      word: 'trembled',
      phonetic: '/ˈtrembld/',
      brief: '颤抖，发抖',
      pos: 'verb',
      detail:
        'trembled 是 tremble 的过去式，意为"颤抖、发抖"，多因恐惧、寒冷或激动引起的不自主身体震动。原文中"The Tang Monk trembled with fear"——唐僧吓得发抖，trembled with fear 是经典搭配，生动描绘了唐僧听到山底传来的怒声时的恐惧反应。',
      examples: [
        'She trembled with cold.（她冷得发抖。）',
        'His hands trembled as he opened the letter.（他拆信时双手颤抖。）',
        'The dog trembled with fear during the storm.（暴风雨中那只狗吓得直发抖。）',
      ],
      synonyms: [
        { word: 'shivered', note: '战栗、哆嗦，多因寒冷或恐惧引起' },
        { word: 'shook', note: '摇动、发抖，动作幅度通常比 tremble 大' },
        { word: 'quivered', note: '微微颤动，侧重轻微的、持续的抖动' },
      ],
    },
    {
      word: 'tumbled',
      phonetic: '/ˈtʌmbld/',
      brief: '滚落，翻滚下来',
      pos: 'verb',
      detail:
        'tumbled 是 tumble 的过去式，意为"滚落、翻滚"，指人或物体失去平衡后沿着斜面翻滚而下。原文中"He fell off his horse and tumbled down the mountain"——他从马上摔下来，沿山坡翻滚而下，tumbled 比 fell 更具画面感，强调连续翻滚的动作，而非单纯的下坠。',
      examples: [
        'The rocks tumbled down the hillside.（岩石从山坡上滚落。）',
        'She tumbled off the bike and scraped her knee.（她从自行车上摔下来，擦破了膝盖。）',
        'The child tumbled into the pile of leaves.（孩子一头扎进了落叶堆里。）',
      ],
      synonyms: [
        { word: 'rolled', note: '滚动，强调物体沿某个方向持续转动' },
        { word: 'fell', note: '落下、掉落，最基础的说法，不强调翻滚动作' },
        { word: 'plummeted', note: '垂直坠落，速度更快、更危险' },
      ],
    },
    {
      word: 'gasped',
      phonetic: '/ɡæspt/',
      brief: '倒吸一口气，惊喘',
      pos: 'verb',
      detail:
        'gasped 是 gasp 的过去式，意为"倒吸一口气、惊喘"，指因惊讶、恐惧或疼痛而突然猛吸一口气。原文中出现了两次：第一次 Wukong 听到唐僧身份时 gasped（惊讶地倒吸一口气）；第二次唐僧看到整座山飞起时 gasped（震惊地倒吸一口气）。两次 gasped 都标志着关键剧情转折——先是对身份的确认，后是对法力的震撼。',
      examples: [
        'She gasped when she saw the surprise.（她看到惊喜时倒吸了一口气。）',
        'He gasped in pain as the doctor touched his wound.（医生碰到伤口时他痛得倒吸凉气。）',
        '"You did what?!" she gasped.（"你做了什么？！"她惊喘道。）',
      ],
      synonyms: [
        { word: 'panted', note: '气喘吁吁，侧重运动后大口喘气' },
        { word: 'choked', note: '呛到、哽咽，侧重呼吸困难' },
        { word: 'exclaimed', note: '惊叫，侧重声音表达而非呼吸动作' },
      ],
    },
    {
      word: 'supposed to',
      phonetic: '/səˈpoʊzd tə/',
      brief: '应该，理应',
      pos: 'phrase',
      detail:
        'be supposed to 意为"应该、理应"，表示根据约定、计划或期望某人应该做某事。原文中"I\'m supposed to go with you!"——我理应跟你一起去！Wukong 用 supposed to 强调这不是他自己的主意，而是 Guanyin 安排的命运——他被"注定"要保护唐僧取经。',
      examples: [
        'You are supposed to hand in your homework today.（你今天应该交作业。）',
        'The meeting was supposed to start at 9.（会议本应在9点开始。）',
        'She is supposed to be the best student in class.（她应该是班里最好的学生。）',
      ],
      synonyms: [
        { word: 'meant to', note: '注定、本应，语气与 supposed to 接近' },
        { word: 'expected to', note: '被期望做某事，侧重他人期待' },
        { word: 'ought to', note: '应该，更正式，带有道德义务意味' },
      ],
    },
    {
      word: 'went on',
      phonetic: '/wɛnt ɒn/',
      brief: '继续说，接着讲',
      pos: 'phrase',
      detail:
        'went on 是 go on 的过去式，在此意为"继续说、接着讲"，用于描述一个人说完一段话后接着往下说。原文中"The bodhisattva Guanyin visited me, Wukong went on"——悟空继续说道。went on 在对话中起到连接上下文的作用，表明 Wukong 在前文的惊呼后进一步解释自己的来历。',
      examples: [
        '"And then," she went on, "we found the treasure."（"然后，"她继续说，"我们发现了宝藏。"）',
        'He went on to explain the rules.（他继续解释规则。）',
        'After a pause, she went on with her story.（停顿了一下后，她继续讲她的故事。）',
      ],
      synonyms: [
        { word: 'continued', note: '继续，最中性的说法，不如 went on 口语化' },
        { word: 'added', note: '补充说，侧重增加新信息' },
        { word: 'proceeded', note: '继续进行，更正式' },
      ],
    },
    {
      word: 'shrubs',
      phonetic: '/ʃrʌbz/',
      brief: '灌木，矮树丛',
      pos: 'noun',
      detail:
        'shrubs 是 shrub 的复数形式，意为"灌木、矮树丛"，指没有明显主干、靠近地面分枝的矮小木本植物。原文中"He pushed aside shrubs and brambles"——他拨开灌木和荆棘，shrubs 和 brambles 并列，描绘唐僧上山寻纸条时一路披荆斩棘的艰难场景。',
      examples: [
        'The garden was full of flowering shrubs.（花园里开满了花的灌木。）',
        'He hid behind the shrubs.（他躲在灌木丛后面。）',
        'The gardener trimmed the shrubs into shapes.（园丁把灌木修剪成各种形状。）',
      ],
      synonyms: [
        { word: 'bushes', note: '灌木，与 shrubs 几乎同义，更口语化' },
        { word: 'thickets', note: '密林、灌丛，侧重茂密难行' },
        { word: 'hedges', note: '树篱，人工种植排列成行的灌木' },
      ],
    },
    {
      word: 'brambles',
      phonetic: '/ˈbræmblz/',
      brief: '荆棘，带刺灌木',
      pos: 'noun',
      detail:
        'brambles 是 bramble 的复数形式，意为"荆棘、带刺灌木"，特指结浆果的带刺藤蔓植物（如黑莓丛）。原文中与 shrubs 并列出现——"pushed aside shrubs and brambles"——唐僧拨开灌木和荆棘，brambles 比 shrubs 更难通行，因为带有尖刺，暗示上山之路越走越艰辛。',
      examples: [
        'We had to push through the brambles.（我们不得不从荆棘丛中穿过。）',
        'Wild blackberries grow on brambles.（野黑莓长在荆棘藤上。）',
        'The brambles scratched her arms.（荆棘划伤了她的手臂。）',
      ],
      synonyms: [
        { word: 'thorns', note: '刺、荆棘，侧重尖锐的刺本身' },
        { word: 'thickets', note: '密灌丛，侧重茂密，不一定有刺' },
        { word: 'briers', note: '荆棘，与 bramble 近义，多见于英式英语' },
      ],
    },
    {
      word: 'boulders',
      phonetic: '/ˈboʊldərz/',
      brief: '巨石，大圆石',
      pos: 'noun',
      detail:
        'boulders 是 boulder 的复数形式，意为"巨石、大圆石"，指体积很大的光滑岩石，通常由风化或水流磨圆。原文中"pulled himself over large boulders"——他攀过巨大的圆石，boulders 表明山路上的巨石大到需要攀爬（pull himself over），进一步强调唐僧为了取下纸条而付出的体力。',
      examples: [
        'The hikers sat on a boulder to rest.（徒步者坐在一块巨石上休息。）',
        'Boulders lined the riverbank.（河岸边排列着大圆石。）',
        'The climbers scrambled over the boulders.（攀岩者手脚并用爬过巨石。）',
      ],
      synonyms: [
        { word: 'rocks', note: '岩石，泛指，大小不限' },
        { word: 'stones', note: '石头，通常比 boulders 小' },
        { word: 'crags', note: '峭壁岩石，多指悬崖上的突起' },
      ],
    },
    {
      word: 'peak',
      phonetic: '/piːk/',
      brief: '山峰，山顶',
      pos: 'noun',
      detail:
        'peak 意为"山峰、山顶"，指山的最高点。也可作形容词表示"巅峰的、最高的"。原文中"reached the mountain\'s peak"——到达了山顶，peak 标志着唐僧攀爬的终点，也是故事的关键转折——山顶上的纸条封印着 Wukong，取下纸条意味着即将释放齐天大圣。',
      examples: [
        'We finally reached the peak of the mountain.（我们终于到达了山顶。）',
        'The mountain peak was covered in snow.（山顶被雪覆盖。）',
        'Traffic reaches its peak during rush hour.（交通在高峰期达到顶峰。）',
      ],
      synonyms: [
        { word: 'summit', note: '顶峰，更正式，常用于指最高级别的会议或成就' },
        { word: 'top', note: '顶部，最通用的说法' },
        { word: 'crest', note: '山脊、顶端，侧重线条的隆起部分' },
      ],
    },
    {
      word: 'breeze',
      phonetic: '/briːz/',
      brief: '微风，和风',
      pos: 'noun',
      detail:
        'breeze 意为"微风、和风"，指轻柔的风。原文中"a breeze swept it from his hand"——一阵微风将它从他手中吹走。看似自然的风，实则是封印解除的超自然现象——纸条被风带回归佛陀手中。breeze 用轻柔的自然意象包裹了神圣的法力，体现了中国神话中"道法自然"的审美。',
      examples: [
        'A cool breeze blew through the window.（一阵凉风从窗口吹进来。）',
        'The sea breeze felt wonderful.（海风让人心旷神怡。）',
        'Let\'s go for a walk and enjoy the breeze.（我们去散步，享受微风吧。）',
      ],
      synonyms: [
        { word: 'wind', note: '风，泛指，不强调强弱' },
        { word: 'gust', note: '一阵强风，突然且猛烈' },
        { word: 'zephyr', note: '和风，文学化用词，源自希腊神话中的西风之神' },
      ],
    },
    {
      word: 'swept',
      phonetic: '/swept/',
      brief: '席卷，横扫（sweep 的过去式）',
      pos: 'verb',
      detail:
        'swept 是 sweep 的过去式，意为"席卷、横扫、扫过"，指快速有力地将某物带走或掠过某个区域。原文中"a breeze swept it from his hand"——一阵微风将纸条从他手中卷走，swept 与 breeze 搭配，微风虽轻却有力地夺走了纸条，暗示这并非普通的风，而是佛法的力量在运作。',
      examples: [
        'The flood swept away everything in its path.（洪水冲走了沿途的一切。）',
        'She swept the floor clean.（她把地板扫得干干净净。）',
        'A wave of excitement swept through the crowd.（一阵兴奋的情绪席卷了人群。）',
      ],
      synonyms: [
        { word: 'blew', note: '吹，最基础的说法，不强调力度和范围' },
        { word: 'carried', note: '带走，侧重搬运，不一定有"扫过"的动态感' },
        { word: 'snatched', note: '一把夺走，侧重突然性和力度' },
      ],
    },
    {
      word: 'among',
      phonetic: '/əˈmʌŋ/',
      brief: '在…之中，被…所包围',
      pos: 'preposition',
      detail:
        'among 意为"在…之中"，表示某人或某物处于一群同类事物之间或被其包围。原文中"disappeared among the clouds"——消失在云层之中，among 描绘了纸条飘入天空后被层层云朵吞没的画面，暗示它回归了天界。',
      examples: [
        'She sat among the flowers.（她坐在花丛中。）',
        'The house was hidden among the trees.（房子隐藏在树林之中。）',
        'He is popular among his classmates.（他在同学中很受欢迎。）',
      ],
      synonyms: [
        { word: 'amongst', note: 'among 的变体，英式英语更常用，含义完全相同' },
        { word: 'between', note: '在…之间，通常用于两者之间，而 among 用于三者或以上' },
        { word: 'amid', note: '在…当中，较正式/文学化，强调被包围的状态' },
      ],
    },
    {
      word: 'gulped',
      phonetic: '/ɡʌlpt/',
      brief: '猛咽一口（气），紧张地吞咽',
      pos: 'verb',
      detail:
        'gulped 是 gulp 的过去式，意为"猛咽一口气、紧张地吞咽"，常因紧张、害怕或震惊而不自觉地用力吞口水。原文中"The Tang Monk gulped"——唐僧猛咽了一口，发生在 Wukong 变成老虎的瞬间。gulped 比前文的 gasped 更侧重于"害怕到喉咙发紧"的身体反应，生动刻画了唐僧面对法力高强的徒弟时的不安。',
      examples: [
        'He gulped nervously before speaking.（他紧张地咽了口口水才开始说话。）',
        'She gulped down the water.（她大口灌下了水。）',
        'The boy gulped when he saw the dog.（男孩看到狗时紧张地咽了一下。）',
      ],
      synonyms: [
        { word: 'swallowed hard', note: '使劲咽了一下，同样的紧张反应' },
        { word: 'gasped', note: '倒吸一口气，侧重惊喘而非吞咽' },
        { word: 'choked', note: '呛到、噎住，侧重呼吸困难' },
      ],
    },
    {
      word: 'vulture',
      phonetic: '/ˈvʌltʃər/',
      brief: '秃鹫，兀鹫',
      pos: 'noun',
      detail:
        'vulture 意为"秃鹫、兀鹫"，是一种大型猛禽，以食腐为生，头部无羽毛。原文中 Wukong 展示变化之术时变成蛇、秃鹫等动物，vulture 作为一种令人畏惧的猛禽出现在变身序列中，突出了 Wukong 变化能力的多样性和震撼力。',
      examples: [
        'A vulture circled high above the desert.（一只秃鹫在沙漠上空盘旋。）',
        'Vultures feed on dead animals.（秃鹫以动物尸体为食。）',
        'The vulture swooped down to the ground.（秃鹫猛扑到地面上。）',
      ],
      synonyms: [
        { word: 'eagle', note: '鹰，捕食活物的猛禽，比 vulture 更威猛' },
        { word: 'hawk', note: '隼、鹰，体型比 eagle 和 vulture 小' },
        { word: 'falcon', note: '猎鹰，以速度著称的猛禽' },
      ],
    },
    {
      word: 'shrank',
      phonetic: '/ʃræŋk/',
      brief: '缩小，收缩（shrink 的过去式）',
      pos: 'verb',
      detail:
        'shrank 是 shrink 的过去式，意为"缩小、收缩"，指尺寸、体积变小。原文中"He shrank to the size of a bee"——他缩小到蜜蜂那么大，shrank 与前一句的"grow big"形成鲜明对比，展示 Wukong 的七十二变中自由变换大小的能力。',
      examples: [
        'The sweater shrank in the wash.（毛衣洗后缩水了。）',
        'The company shrank its workforce.（公司缩减了员工人数。）',
        'She shrank back in fear.（她吓得往后缩。）',
      ],
      synonyms: [
        { word: 'dwindled', note: '逐渐减少、缩小，侧重缓慢过程' },
        { word: 'contracted', note: '收缩，较正式，可指物理或经济领域' },
        { word: 'grew', note: '反义词：增长、变大' },
      ],
    },
    {
      word: 'spun',
      phonetic: '/spʌn/',
      brief: '旋转，转动（spin 的过去式）',
      pos: 'verb',
      detail:
        'spun 是 spin 的过去式，意为"旋转、快速转动"，指物体绕轴心快速旋转。原文中"The monkey spun it around"——悟空把金箍棒旋转起来，spun 刻画了 Wukong 挥舞金箍棒的熟练动作，旋转的画面感暗示他驾驭武器的力量和技巧。',
      examples: [
        'The dancer spun around on stage.（舞者在舞台上旋转。）',
        'He spun the wheel.（他转动了轮子。）',
        'The earth spins on its axis.（地球绕地轴自转。）',
      ],
      synonyms: [
        { word: 'whirled', note: '急旋、飞转，速度更快更猛烈' },
        { word: 'rotated', note: '旋转，较中性正式，不强调速度' },
        { word: 'twirled', note: '轻快地转动，动作更优雅' },
      ],
    },
    {
      word: 'struck',
      phonetic: '/strʌk/',
      brief: '击打，猛击（strike 的过去式）',
      pos: 'verb',
      detail:
        'struck 是 strike 的过去式，意为"击打、猛击"，指用力撞击某物。原文中"spun it around and then struck a huge boulder"——旋转金箍棒后猛击一块巨石，struck 与前文的 spun 形成连续动作链：旋转蓄力→猛然击打，一气呵成地展示了 Wukong 的惊人力量。',
      examples: [
        'He struck the nail with a hammer.（他用锤子敲钉子。）',
        'Lightning struck the tree.（闪电劈中了那棵树。）',
        'She struck him across the face.（她扇了他一巴掌。）',
      ],
      synonyms: [
        { word: 'hit', note: '打、击，最通用的说法' },
        { word: 'smashed', note: '猛砸、粉碎，侧重将目标打碎' },
        { word: 'slammed', note: '猛撞、重拍，力度大且带响声' },
      ],
    },
    {
      word: 'boulder',
      phonetic: '/ˈboʊldər/',
      brief: '巨石，大圆石',
      pos: 'noun',
      detail:
        'boulder 是 boulders 的单数形式，意为"巨石、大圆石"。原文中出现两次：第一次 Wukong 用金箍棒猛击一块巨石（struck a huge boulder），第二次巨石被击碎后炸成碎片（The boulder exploded）。与前面唐僧攀爬时遇到的 boulders（复数）不同，这里的 boulder 是 Wukong 展示力量的靶子，一块巨石在他面前不堪一击。',
      examples: [
        'A huge boulder blocked the path.（一块巨石挡住了去路。）',
        'They sat on a boulder by the river.（他们坐在河边的一块大圆石上。）',
      ],
      synonyms: [
        { word: 'boulders', note: '复数形式，本书前文已注' },
        { word: 'rock', note: '岩石，泛指，大小不限' },
      ],
    },
    {
      word: 'pieces',
      phonetic: '/ˈpiːsɪz/',
      brief: '碎片，碎块',
      pos: 'noun',
      detail:
        'pieces 是 piece 的复数形式，意为"碎片、碎块、片断"。原文中"exploded into tiny pieces"——炸成无数细小碎片，into pieces 是经典搭配，描述物体被打碎的结果。配合 exploded 使用，pieces 形象地展示了金箍棒的威力——整块巨石瞬间化为齑粉。',
      examples: [
        'The vase broke into pieces.（花瓶碎成了碎片。）',
        'She tore the letter into pieces.（她把信撕成了碎片。）',
        'The puzzle has a hundred pieces.（这个拼图有一百片。）',
      ],
      synonyms: [
        { word: 'fragments', note: '碎片、断片，较正式，侧重不完整的部分' },
        { word: 'shards', note: '碎片、破片，多指玻璃、陶瓷等尖锐碎片' },
        { word: 'bits', note: '小块、一点，口语化，量较小' },
      ],
    },
    {
      word: 'horror',
      phonetic: '/ˈhɒrər/',
      brief: '恐惧，惊骇',
      pos: 'noun',
      detail:
        'horror 意为"恐惧、惊骇"，指极度的害怕和震惊。原文中"The Tang Monk watched in horror"——唐僧惊恐地看着，in horror 是固定搭配，表示"惊恐地"。唐僧亲眼目睹 Wukong 一棒击碎巨石，horror 准确捕捉了他此刻复杂的心情：既是震撼，也有对这个凶猛徒弟的畏惧。',
      examples: [
        'She stared in horror at the accident.（她惊恐地盯着那场事故。）',
        'He watched in horror as the building collapsed.（他惊骇地看着大楼倒塌。）',
        'The movie is a horror film.（那部电影是恐怖片。）',
      ],
      synonyms: [
        { word: 'terror', note: '极度恐惧，比 horror 更强烈，侧重对即时危险的害怕' },
        { word: 'fear', note: '害怕、恐惧，最通用的说法' },
        { word: 'dread', note: '畏惧、忧虑，侧重对未来可能发生之事的恐惧' },
      ],
    },
    {
      word: 'farther',
      phonetic: '/ˈfɑːrðər/',
      brief: '更远地，更远处',
      pos: 'adverb',
      detail:
        'farther 是 far 的比较级，意为"更远地、更远处"，用于描述物理距离的延伸。原文中"The two traveled farther"——两人继续前行，走得更远了，farther 标志着场景的转换——从 Wukong 展示力量的段落过渡到遇见强盗的新危机，推动了故事发展。',
      examples: [
        'We walked farther down the road.（我们沿着路走得更远了。）',
        'Can you throw the ball farther?（你能把球扔得更远吗？）',
        'The village is farther than I thought.（村庄比我预想的更远。）',
      ],
      synonyms: [
        { word: 'further', note: '更远、进一步，物理距离可用 farther/further 互换，但抽象程度用 further' },
        { word: 'onward', note: '向前，侧重方向而非距离' },
        { word: 'ahead', note: '前方、在前头，侧重位置' },
      ],
    },
    {
      word: 'rough',
      phonetic: '/rʌf/',
      brief: '粗暴的，粗野的',
      pos: 'adjective',
      detail:
        'rough 意为"粗暴的、粗野的"，形容人或行为举止粗鲁不文明。也可形容表面粗糙不平。原文中"The men looked rough"——那些人看起来很粗野，rough 从外貌和气质上勾勒出一群强盗的形象，让读者立刻感到危险逼近。',
      examples: [
        'He has a rough voice.（他嗓音粗犷。）',
        'The surface is rough, not smooth.（表面粗糙，不光滑。）',
        'They had a rough time during the trip.（他们旅途艰辛。）',
      ],
      synonyms: [
        { word: 'tough', note: '强悍的、坚韧的，可含褒义（坚强）或贬义（粗暴）' },
        { word: 'coarse', note: '粗鲁的、粗糙的，侧重言行或质地' },
        { word: 'gentle', note: '反义词：温和的、轻柔的' },
      ],
    },
    {
      word: 'mean',
      phonetic: '/miːn/',
      brief: '凶恶的，刻薄的',
      pos: 'adjective',
      detail:
        'mean 作形容词意为"凶恶的、刻薄的、不友善的"，形容人心地不好或对他人不友善。原文中"The men looked rough and mean"——那些人看起来又粗野又凶恶，rough 描绘外表，mean 描绘内在性情，两个形容词叠加刻画出强盗的完整形象。',
      examples: [
        'Don\'t be mean to your little brother.（别对弟弟那么刻薄。）',
        'He is a mean old man.（他是个刻薄的老头。）',
        'That was a mean thing to say.（说那种话太刻薄了。）',
      ],
      synonyms: [
        { word: 'cruel', note: '残忍的，程度比 mean 更重，带有伤害意图' },
        { word: 'nasty', note: '恶毒的、令人厌恶的，语气更强' },
        { word: 'kind', note: '反义词：善良的、友好的' },
      ],
    },
    {
      word: 'shaking',
      phonetic: '/ˈʃeɪkɪŋ/',
      brief: '发抖，颤抖',
      pos: 'verb',
      detail:
        'shaking 是 shake 的现在分词形式，意为"发抖、颤抖"，指身体不由自主地快速晃动，常因恐惧、寒冷或激动引起。原文中"The Tang Monk looked at the robbers. He was shaking"——唐僧看着强盗，浑身发抖，shaking 直观地表现了唐僧面对强盗时的极度恐惧，与前文的 trembled with fear 形成呼应。',
      examples: [
        'She was shaking with fear.（她吓得浑身发抖。）',
        'His hands were shaking as he held the letter.（他拿着信时双手在发抖。）',
        'The dog was shaking from the cold.（狗冻得直发抖。）',
      ],
      synonyms: [
        { word: 'trembling', note: '颤抖，与 shaking 近义，侧重细微的持续抖动' },
        { word: 'quivering', note: '微微颤动，幅度更小更轻' },
        { word: 'shivering', note: '战栗、哆嗦，多因寒冷引起' },
      ],
    },
    {
      word: 'strike',
      phonetic: '/straɪk/',
      brief: '击打，猛击',
      pos: 'verb',
      detail:
        'strike 意为"击打、猛击"，指用力向目标打击。原文中"Wukong raised the iron bar, ready to strike"——悟空举起铁棒，准备猛击，strike 在此描绘了悟空即将对逃跑的强盗发起致命一击的紧张瞬间。注意此处 strike 是动词原形（与不定式 ready to 搭配），而非过去式 struck。',
      examples: [
        'He was ready to strike.（他准备发起攻击。）',
        'The snake struck at the mouse.（蛇向老鼠发起攻击。）',
        'She struck the ball with all her strength.（她用尽全力击球。）',
      ],
      synonyms: [
        { word: 'hit', note: '打、击，最通用的说法' },
        { word: 'attack', note: '攻击，侧重发动进攻的意图' },
        { word: 'smash', note: '猛砸、粉碎，侧重将目标打碎' },
      ],
    },
    {
      word: 'rather',
      phonetic: '/ˈrɑːðər/',
      brief: '宁愿，宁可',
      pos: 'adverb',
      detail:
        'rather 在此意为"宁愿、宁可"，常与 would 搭配构成 would rather... than...（宁愿……也不……）。原文中"I would rather get hurt than hurt someone else"——我宁愿自己受伤也不愿伤害别人，would rather... than... 句型完美表达了佛教"宁可自苦、不害他人"的慈悲理念。',
      examples: [
        'I would rather stay at home than go out.（我宁愿待在家里也不想出去。）',
        'She would rather read than watch TV.（她宁愿读书也不看电视。）',
        'He would rather fail than cheat.（他宁愿失败也不作弊。）',
      ],
      synonyms: [
        { word: 'prefer to', note: '更喜欢，侧重个人偏好而非选择' },
        { word: 'sooner', note: '宁愿，与 would 搭配：would sooner... than...' },
      ],
    },
    {
      word: 'beaten them up',
      phonetic: '/ˈbiːtn ðɛm ʌp/',
      brief: '把他们揍了一顿',
      pos: 'phrase',
      detail:
        'beat up 是短语动词，意为"痛打、狠揍"，指对某人进行暴力殴打。原文中"We should have beaten them up"——我们应该把他们揍一顿，这是 should have + 过去分词的虚拟语气结构，表示"本应该做但没做的事"。Wukong 用此短语表达对唐僧阻止他教训强盗的不满。',
      examples: [
        'The bullies beat up the little boy.（恶霸把小男孩揍了一顿。）',
        'He was beaten up after school.（他放学后被揍了一顿。）',
        'They beat up the thief and handed him to the police.（他们把小偷揍了一顿后交给了警察。）',
      ],
      synonyms: [
        { word: 'pummel', note: '用拳头连续猛击' },
        { word: 'thrash', note: '痛打、猛揍，力度更大' },
        { word: 'assault', note: '袭击、殴打，较正式的法律用语' },
      ],
    },
    {
      word: 'cruel',
      phonetic: '/ˈkruːəl/',
      brief: '残忍的，残酷的',
      pos: 'adjective',
      detail:
        'cruel 意为"残忍的、残酷的"，指故意给他人造成痛苦而无同情心。原文中唐僧指责悟空"You are cruel and violent"——你既残忍又暴力。cruel 侧重心理和道德层面的冷酷无情（故意伤害），violent 侧重行为上的暴力倾向，二者并列从内心到行为全面否定了悟空的做法。该词在 Chapter 15-16 中多次出现，是师徒冲突的核心争议词。',
      examples: [
        'It is cruel to hurt animals.（伤害动物是残忍的。）',
        'The cruel king punished his people.（残忍的国王惩罚他的人民。）',
        'Don\'t be cruel to others.（不要对他人残忍。）',
      ],
      synonyms: [
        { word: 'merciless', note: '无情的、不宽恕的，强调没有怜悯心' },
        { word: 'brutal', note: '野蛮的、凶残的，侧重行为极端暴力' },
        { word: 'kind', note: '反义词：善良的、仁慈的' },
      ],
    },
    {
      word: 'violent',
      phonetic: '/ˈvaɪələnt/',
      brief: '暴力的，暴烈的',
      pos: 'adjective',
      detail:
        'violent 意为"暴力的、暴烈的"，形容使用武力伤害他人的行为或倾向。原文中唐僧多次用 violent 指责悟空——"You are cruel and violent"、"he got angry when I scolded him for being violent"。violent 侧重外在行为上的暴力倾向，与 cruel（内心残忍）搭配使用，构成了唐僧否定暴力行为的完整表述。',
      examples: [
        'He has a violent temper.（他脾气暴躁。）',
        'The protest turned violent.（抗议演变成了暴力冲突。）',
        'She hates violent movies.（她讨厌暴力电影。）',
      ],
      synonyms: [
        { word: 'aggressive', note: '好斗的、攻击性的，侧重主动挑衅' },
        { word: 'fierce', note: '凶猛的，侧重天生的猛烈气质' },
        { word: 'peaceful', note: '反义词：和平的、宁静的' },
      ],
    },
    {
      word: 'scold',
      phonetic: '/skoʊld/',
      brief: '责骂，训斥',
      pos: 'verb',
      detail:
        'scold 意为"责骂、训斥"，指因不满某人的行为而以严厉的言语批评对方。原文中"How dare you scold me"——你竟敢训斥我！悟空认为唐僧没有资格训斥他，因为是他救了唐僧的命。该词还以过去式 scolded 出现在后文——"he got angry when I scolded him"。scold 侧重长辈对晚辈、上级对下级的训斥，暗示权力关系。',
      examples: [
        'My mother scolded me for being late.（妈妈因为我迟到而训斥了我。）',
        'The teacher scolded the noisy students.（老师训斥了吵闹的学生。）',
        'Don\'t scold the child in public.（不要当众训斥孩子。）',
      ],
      synonyms: [
        { word: 'rebuke', note: '严厉斥责，更正式，语气更重' },
        { word: 'reprimand', note: '训斥、惩戒，正式用语，常用于职场或官方场合' },
        { word: 'praise', note: '反义词：表扬、赞美' },
      ],
    },
    {
      word: 'treatment',
      phonetic: '/ˈtriːtmənt/',
      brief: '对待，待遇',
      pos: 'noun',
      detail:
        'treatment 意为"对待、待遇"，指某人被他人对待的方式。原文中"I don\'t have to accept this treatment"——我不必接受这种对待。Wukong 用 treatment 指代唐僧对他的训斥和否定，暗示他认为自己的付出（救了唐僧的命）不该换来这样的"待遇"，语气中带着委屈和愤愤不平。',
      examples: [
        'She received fair treatment from the teacher.（她得到了老师公平的对待。）',
        'The animals were subjected to cruel treatment.（动物们遭受了残忍的对待。）',
        'He complained about his treatment at the hotel.（他抱怨在酒店受到的待遇。）',
      ],
      synonyms: [
        { word: 'handling', note: '处理、对待，侧重方式方法' },
        { word: 'behavior toward', note: '对……的行为态度' },
      ],
    },
    {
      word: 'misbehaves',
      phonetic: '/ˌmɪsbɪˈheɪvz/',
      brief: '行为不端，调皮捣蛋',
      pos: 'verb',
      detail:
        'misbehave 意为"行为不端、调皮捣蛋"，指不守规矩或做出不良行为。此处 misbehaves 是第三人称单数形式（主语为 he）。原文中 Guanyin 化身的老妇给唐僧金箍，说"Whenever he misbehaves, recite the Tight Headband spell"——每当他不听话时，就念紧箍咒。misbehaves 在此暗示 Guanyin 预见悟空的顽劣本性，需要一种约束机制来管教他。',
      examples: [
        'The child misbehaved in class.（那孩子在课堂上不守规矩。）',
        'If you misbehave, you will be punished.（如果你行为不端，你会受到惩罚。）',
        'He always misbehaves when guests come over.（客人来时他总是调皮捣蛋。）',
      ],
      synonyms: [
        { word: 'acts up', note: '调皮捣蛋，口语化，侧重不服从管教' },
        { word: 'misconducts', note: '行为不当，更正式' },
        { word: 'behaves', note: '反义词：行为端正、守规矩' },
      ],
    },
    {
      word: 'sipped',
      phonetic: '/sɪpt/',
      brief: '小口抿，啜饮（sip 的过去式）',
      pos: 'verb',
      detail:
        'sipped 是 sip 的过去式，意为"小口抿、啜饮"，指少量地、慢慢喝饮料。原文中"The Dragon King sipped his tea"——龙王小口抿着茶。sipped 这个动作营造出悠闲、从容的氛围，与悟空急躁的性格形成对比。同时，龙王一边品茶一边询问悟空的计划，暗示他作为智者的从容和引导者的角色。',
      examples: [
        'She sipped her coffee slowly.（她慢慢地抿着咖啡。）',
        'He sipped the hot soup carefully.（他小心翼翼地啜饮热汤。）',
        'They sat by the fire, sipping wine.（他们坐在火旁，小口品着酒。）',
      ],
      synonyms: [
        { word: 'nursed', note: '慢慢喝，侧重长时间持有饮品' },
        { word: 'drank', note: '喝，最通用的说法，不强调小口慢饮' },
        { word: 'gulped', note: '大口吞咽，反义——猛灌而非小抿' },
      ],
    },
    {
      word: 'shrugged',
      phonetic: '/ʃrʌɡd/',
      brief: '耸肩（表示无所谓或无奈）',
      pos: 'verb',
      detail:
        'shrugged 是 shrug 的过去式，意为"耸肩"，这是一个常见的肢体语言动作，通常表示无所谓、不确定或无奈的态度。原文中"Wukong shrugged"——悟空耸了耸肩，然后说"I\'m not doing it anymore"（我不想再做了）。耸肩配合放弃的话语，体现了悟空对取经之事漫不经心、无所谓的态度。',
      examples: [
        'She shrugged and said, "I don\'t know."（她耸了耸肩说："我不知道。"）',
        'He shrugged off the criticism.（他对批评不屑一顾。）',
        '"Whatever," he shrugged.（"无所谓，"他耸了耸肩。）',
      ],
      synonyms: [
        { word: 'dismissed', note: '不予理会，侧重态度上的拒绝接受' },
        { word: 'brushed off', note: '不当回事，口语化的轻视表达' },
      ],
    },
    {
      word: 'attitude',
      phonetic: '/ˈætɪtjuːd/',
      brief: '态度，心态',
      pos: 'noun',
      detail:
        'attitude 意为"态度、心态"，指对某事或某人的看法和行为方式。原文中多次出现：Wukong 说"That monk had a bad attitude"（那和尚态度很差），Dragon King 反驳说"it is you who has a bad attitude"（态度差的人其实是你）。attitude 在此成为师徒双方互相指责的焦点词——悟空指责唐僧的训斥是"态度不好"，龙王反将一军，指出悟空自己的态度才是问题所在。',
      examples: [
        'She has a positive attitude toward life.（她对生活有积极的态度。）',
        'His bad attitude got him fired.（他糟糕的态度使他被解雇了。）',
        'You need to change your attitude.（你需要改变你的态度。）',
      ],
      synonyms: [
        { word: 'mindset', note: '心态、思维模式，侧重思考方式' },
        { word: 'outlook', note: '观点、看法，侧重对事物的整体态度' },
        { word: 'approach', note: '方式、方法，侧重处理问题的角度' },
      ],
    },
    {
      word: 'has a point',
      phonetic: '/hæz ə pɔɪnt/',
      brief: '有道理，说得对',
      pos: 'phrase',
      detail:
        'have a point 是固定搭配，意为"说得有道理、有几分道理"，用于承认对方的观点有合理性。原文中龙王对悟空说"The monk has a point"——那个和尚说得有道理。龙王虽然是在劝悟空回去，但他用 has a point 这个委婉的说法，先肯定唐僧的观点，再引导悟空反思自己，比直接批评更有效。',
      examples: [
        '"She has a point," he admitted.（"她说得有道理，"他承认道。）',
        'I think you have a point there.（我觉得你说得有道理。）',
        'He grudgingly agreed that she had a point.（他不情愿地同意她说得有道理。）',
      ],
      synonyms: [
        { word: 'makes sense', note: '说得通、有道理，更口语化' },
        { word: 'is right', note: '是对的，更直接的肯定' },
      ],
    },
    {
      word: 'glared',
      phonetic: '/ɡleərd/',
      brief: '怒目而视，狠狠地瞪',
      pos: 'verb',
      detail:
        'glared 是 glare 的过去式，意为"怒目而视、狠狠地瞪"，指带着愤怒或敌意长时间盯着某人。原文中"Wukong glared at the king"——悟空怒视着龙王。glared 发生在龙王说唐僧"说得有道理"之后——悟空原以为龙王会站在自己一边，却没想到被"背叛"，因此愤怒地瞪着对方。这个动作精准地刻画了悟空被冒犯时的即时情绪反应。',
      examples: [
        'She glared at him angrily.（她愤怒地瞪着他。）',
        'The teacher glared at the noisy students.（老师狠狠地瞪了吵闹的学生。）',
        'He glared at me across the room.（他从房间另一头怒视着我。）',
      ],
      synonyms: [
        { word: 'scowled', note: '皱眉怒视，侧重面部表情的凶狠' },
        { word: 'stared', note: '凝视，中性词，不一定带有怒意' },
        { word: 'frowned', note: '皱眉，侧重不满的表情，程度比 glare 轻' },
      ],
    },
    {
      word: 'alongside',
      phonetic: '/əˈlɒŋˈsaɪd/',
      brief: '在…旁边，沿着',
      pos: 'preposition',
      detail:
        'alongside 意为"在…旁边、沿着"，表示与某物并排、挨着。原文中"He found the Tang Monk traveling alongside a stream"——他发现唐僧正沿着一条小溪前行，alongside a stream 描绘了唐僧独自赶路时与溪流并行的画面，营造出宁静的氛围，与后文金箍的紧张情节形成反差。',
      examples: [
        'She walked alongside her friend.（她走在朋友旁边。）',
        'The boat docked alongside the pier.（船停靠在码头旁边。）',
        'He worked alongside his father in the shop.（他和父亲一起在店里工作。）',
      ],
      synonyms: [
        { word: 'beside', note: '在…旁边，侧重位置关系，不如 alongside 强调并行' },
        { word: 'next to', note: '紧挨着，最通用的说法' },
        { word: 'parallel to', note: '与…平行，侧重方向一致' },
      ],
    },
    {
      word: 'marvelous',
      phonetic: '/ˈmɑːvələs/',
      brief: '奇妙的，极好的',
      pos: 'adjective',
      detail:
        'marvelous 意为"奇妙的、极好的、令人惊叹的"，形容令人赞叹不已的事物。原文中 Wukong 看到金箍时惊呼"This headband is marvelous!"——这头箍太妙了！marvelous 体现了悟空被金箍外表吸引时的真心赞叹，但讽刺的是，他正夸赞的物件将成为控制他的枷锁，制造了强烈的戏剧反差。',
      examples: [
        'What a marvelous idea!（多妙的想法！）',
        'The view from the top was marvelous.（从顶上看下去的景色令人惊叹。）',
        'She did a marvelous job on the project.（她在这个项目上做得非常出色。）',
      ],
      synonyms: [
        { word: 'wonderful', note: '极好的，最通用的赞叹词，程度稍弱' },
        { word: 'magnificent', note: '壮丽的、宏伟的，侧重视觉上的壮观' },
        { word: 'fantastic', note: '极好的，口语化，带有兴奋语气' },
      ],
    },
    {
      word: 'closely',
      phonetic: '/ˈkləʊsli/',
      brief: '密切地，仔细地',
      pos: 'adverb',
      detail:
        'closely 意为"密切地、仔细地"，表示以高度关注的方式观察或跟随。原文中"the monk, watching the monkey closely"——唐僧密切地注视着悟空，closely 暗示唐僧此刻并不只是随意地看着悟空，而是按照 Guanyin 的指示，密切观察时机，等待悟空主动戴上金箍。这个词营造了一种暗中算计的紧张氛围。',
      examples: [
        'The teacher watched the students closely during the exam.（考试时老师密切注视着学生。）',
        'She listened closely to every word.（她仔细地听着每一个字。）',
        'The police are closely monitoring the situation.（警方正在密切监控局势。）',
      ],
      synonyms: [
        { word: 'carefully', note: '小心地、仔细地，侧重谨慎而非关注程度' },
        { word: 'intently', note: '专注地、目不转睛地，精神集中程度更强' },
        { word: 'attentively', note: '聚精会神地，侧重用心聆听或观察' },
      ],
    },
    {
      word: 'reflection',
      phonetic: '/rɪˈflekʃən/',
      brief: '倒影，反射',
      pos: 'noun',
      detail:
        'reflection 意为"倒影、反射"，指光或物像在镜子、水面等光滑表面上形成的影像。原文中"He looked at his reflection in the stream"——他看着自己在溪水中的倒影，reflection 在此营造了一个充满讽刺的画面：悟空在水中欣赏自己的倒影，觉得戴金箍的自己很帅，却不知这金箍将给他带来巨大的痛苦。',
      examples: [
        'She saw her reflection in the mirror.（她在镜子里看到了自己的倒影。）',
        'The reflection of the mountains in the lake was beautiful.（山在湖中的倒影很美。）',
        'He stared at his reflection in the window.（他盯着自己在窗户上的倒影。）',
      ],
      synonyms: [
        { word: 'image', note: '影像、形象，泛指任何可见的像' },
        { word: 'mirror image', note: '镜像，强调与原物左右对称' },
        { word: 'shadow', note: '影子，由光线遮挡形成，不是反射' },
      ],
    },
    {
      word: 'bulged',
      phonetic: '/bʌldʒd/',
      brief: '凸出，鼓起（bulge 的过去式）',
      pos: 'verb',
      detail:
        'bulged 是 bulge 的过去式，意为"凸出、鼓起"，指某物向外膨胀、突出于正常轮廓。原文中"His eyes bulged"——他的眼睛凸了出来，bulged 精准刻画了悟空念紧箍咒时因极度痛苦而眼球外凸的身体反应，画面感极强，让读者直观感受到金箍收紧时那种难以忍受的剧痛。',
      examples: [
        'His eyes bulged with surprise.（他惊讶得眼睛都凸了出来。）',
        'The bag bulged with books.（包被书塞得鼓鼓的。）',
        'Her stomach bulged slightly after the meal.（饭后她的肚子微微鼓了起来。）',
      ],
      synonyms: [
        { word: 'protruded', note: '突出、伸出，较正式，常用于描述物体' },
        { word: 'swelled', note: '膨胀、肿大，侧重体积增大' },
        { word: 'popped', note: '弹出、瞪出，更口语化，动作更突然' },
      ],
    },
    {
      word: 'explode',
      phonetic: '/ɪkˈspləʊd/',
      brief: '爆炸，炸开',
      pos: 'verb',
      detail:
        'explode 意为"爆炸、炸开"，指因内部压力过大而猛烈破裂。原文中悟空痛呼"My head\'s going to explode!"——我的头要炸了！explode 用夸张的手法表达金箍收紧时头部的剧烈疼痛，虽然并非真的爆炸，但这种比喻让痛苦变得可感可知。后文唐僧威胁"If you do, I\'ll recite the spell until your head really does explode"，用 really does 加强语气。',
      examples: [
        'The bomb could explode at any moment.（炸弹随时可能爆炸。）',
        'She wanted to explode with anger.（她气得快炸了。）',
        'The balloon exploded with a loud bang.（气球砰的一声炸了。）',
      ],
      synonyms: [
        { word: 'burst', note: '破裂、爆开，侧重突然裂开' },
        { word: 'erupt', note: '喷发、爆发，常用于火山或强烈情绪' },
        { word: 'blow up', note: '炸毁、爆炸，口语化，也可指充气' },
      ],
    },
    {
      word: 'lunged',
      phonetic: '/lʌndʒd/',
      brief: '猛扑，突然冲向（lunge 的过去式）',
      pos: 'verb',
      detail:
        'lunged 是 lunge 的过去式，意为"猛扑、突然冲向"，指快速向前冲去攻击或抓取。原文中"Wukong pulled out his iron bar and lunged at the Tang Monk"——悟空抽出铁棒猛扑向唐僧。lunged 刻画了悟空被怒火驱使的瞬间爆发——从听到指责到拔棒猛扑，一气呵成，没有任何犹豫，展现了他暴烈冲动的性格。',
      examples: [
        'The dog lunged at the intruder.（狗向入侵者猛扑过去。）',
        'He lunged forward to catch the ball.（他猛冲上前去接球。）',
        'The tiger lunged at its prey.（老虎向猎物猛扑。）',
      ],
      synonyms: [
        { word: 'charged', note: '冲锋、猛冲，侧重持续向前的冲击力' },
        { word: 'dived', note: '扑过去，侧重身体向前倾倒的动作' },
        { word: 'rushed', note: '冲过去，最通用，不强调攻击意图' },
      ],
    },
    {
      word: 'pounded',
      phonetic: '/ˈpaʊndɪd/',
      brief: '剧烈跳动，猛击（pound 的过去式）',
      pos: 'verb',
      detail:
        'pounded 是 pound 的过去式，意为"剧烈跳动、猛击"，可形容心脏因恐惧或疼痛而剧烈搏动，也可形容头部因疼痛而感觉像被重锤敲打。原文中"Wukong\'s head pounded"——悟空的头剧烈地疼，pounded 将头部的疼痛具象化为"被反复重击"的感觉，配合紧箍咒的效果，让读者仿佛能感受到那种一波又一波的剧痛。',
      examples: [
        'Her heart pounded with fear.（她的心因恐惧而剧烈跳动。）',
        'He pounded on the door.（他用力砸门。）',
        'My head was pounding after the loud concert.（吵闹的音乐会后我的头剧烈地疼。）',
      ],
      synonyms: [
        { word: 'throbbed', note: '抽痛、阵痛，侧重有节奏的痛感' },
        { word: 'hammered', note: '锤击，比喻反复重击的动作感' },
        { word: 'beat', note: '跳动、敲打，最基础的说法' },
      ],
    },
    {
      word: 'swelled',
      phonetic: '/swɛld/',
      brief: '涌起，膨胀（swell 的过去式）',
      pos: 'verb',
      detail:
        'swelled 是 swell 的过去式，意为"涌起、膨胀、隆起"，指体积增大或水面升高。原文中"the water swelled and a dragon leaped from it"——河水涌起，一条龙从中跃出，swelled 描绘了水面突然隆起的动态画面，作为恶龙出场的先兆，营造出惊心动魄的视觉效果——平静的河水骤然翻涌，预示危险降临。',
      examples: [
        'The river swelled after the heavy rain.（暴雨后河水上涨了。）',
        'Her ankle swelled after the fall.（她摔倒后脚踝肿了起来。）',
        'The crowd swelled to over a thousand people.（人群壮大到超过一千人。）',
      ],
      synonyms: [
        { word: 'surged', note: '涌动、激增，侧重力量的猛烈和突然' },
        { word: 'rose', note: '升起、上涨，最基础的说法' },
        { word: 'bulged', note: '凸起、鼓出，侧重局部突出而非整体升高' },
      ],
    },
    {
      word: 'yanked',
      phonetic: '/jæŋkt/',
      brief: '猛拉，一把拽（yank 的过去式）',
      pos: 'verb',
      detail:
        'yanked 是 yank 的过去式，意为"猛拉、一把拽"，指突然用力拉扯某物。原文中"He yanked the Tang Monk off the horse"——他一把将唐僧从马上拽下来。yanked 刻画了悟空在危急关头的果断行动——恶龙袭来瞬间，他不顾唐僧的感受，猛力将其拽离危险区域，体现了悟空虽然脾气暴躁，但关键时刻保护师父的本能反应。',
      examples: [
        'She yanked the door open.（她一把拉开门。）',
        'He yanked the rope to get attention.（他猛拉绳子以引起注意。）',
        'The teacher yanked the phone from the student\'s hand.（老师一把夺过学生手里的手机。）',
      ],
      synonyms: [
        { word: 'jerked', note: '猛扯、急拉，动作更突然更粗暴' },
        { word: 'pulled', note: '拉，最基础的说法，不强调力度和突然性' },
        { word: 'tugged', note: '用力拉，侧重持续用力而非瞬间爆发' },
      ],
    },
    {
      word: 'slipped',
      phonetic: '/slɪpt/',
      brief: '滑入，溜走（slip 的过去式）',
      pos: 'verb',
      detail:
        'slipped 是 slip 的过去式，意为"滑入、溜走"，指平滑、顺畅地进入或离开某处，动作轻巧而不留痕迹。原文中"the dragon swallowed the horse and then slipped back underwater"——恶龙吞掉白马后便滑回水下，slipped 刻画了恶龙入水的动作之流畅、迅速，仿佛不曾出现一般，与前一秒的凶猛攻击形成对比——来得猛烈，退得无声。',
      examples: [
        'The fish slipped back into the water.（鱼滑回了水中。）',
        'She slipped out of the room quietly.（她悄悄溜出了房间。）',
        'He slipped on the wet floor.（他在湿滑的地板上滑倒了。）',
      ],
      synonyms: [
        { word: 'glided', note: '滑行、轻滑，侧重优雅流畅的动作' },
        { word: 'dived', note: '潜入、跳入，侧重主动向下进入' },
        { word: 'vanished', note: '消失，侧重从视线中完全消失' },
      ],
    },
    {
      word: 'attacked',
      phonetic: '/əˈtækt/',
      brief: '攻击，袭击（attack 的过去式）',
      pos: 'verb',
      detail:
        'attacked 是 attack 的过去式，意为"攻击、袭击"，指以武力对目标发起进攻。原文中两次出现：Wukong 用铁棒攻击恶龙，但恶龙每次都用尾巴挡住后潜入水中。attacked 与 blocking、dived 形成固定的动作循环——攻击→格挡→逃离，突出了水战中被动的拉锯局面。',
      examples: [
        'The army attacked at dawn.（军队在黎明时发起进攻。）',
        'She was attacked by a stray dog.（她被一条流浪狗袭击了。）',
        'He attacked the problem from a new angle.（他从一个新角度攻克这个问题。）',
      ],
      synonyms: [
        { word: 'assaulted', note: '猛攻，语气更重，侧重猛烈程度' },
        { word: 'struck', note: '击打，侧重单次有力的一击' },
        { word: 'charged', note: '冲锋，侧重快速向前冲击' },
      ],
    },
    {
      word: 'Coward',
      phonetic: '/ˈkaʊərd/',
      brief: '胆小鬼，懦夫',
      pos: 'noun',
      detail:
        'coward 意为"胆小鬼、懦夫"，指面对危险或困难时退缩不敢面对的人，常用来侮辱对方。原文中 Wukong 对潜入水中的恶龙大喊"Coward!"——胆小鬼！这个词是悟空用来激怒恶龙、逼迫它再次出水的激将法，体现了悟空暴躁且好斗的性格。',
      examples: [
        'He called her a coward for running away.（他骂她逃跑是胆小鬼。）',
        'Don\'t be a coward—stand up for yourself!（别当懦夫，为你自己站出来！）',
        'Only a coward would do that.（只有懦夫才会那样做。）',
      ],
      synonyms: [
        { word: 'chicken', note: '胆小鬼，口语化，语气较轻' },
        { word: 'weakling', note: '弱者，侧重身体或精神上的软弱' },
        { word: 'hero', note: '反义词：英雄，勇士' },
      ],
    },
    {
      word: 'swirled',
      phonetic: '/swɜːld/',
      brief: '搅动，使旋转（swirl 的过去式）',
      pos: 'verb',
      detail:
        'swirled 是 swirl 的过去式，意为"搅动、使旋转"，指液体或气体呈螺旋状流动。原文中"The monkey swirled the water with his iron bar"——悟空用铁棒搅动河水，swirled 刻画了悟空将铁棒插入水中用力搅动的画面，河水随之旋转翻涌，配合后文的 rough、crashed、churned 形成一组气势汹汹的水战描写。',
      examples: [
        'She swirled the wine in her glass.（她摇动杯中的红酒。）',
        'The wind swirled the leaves into the air.（风把落叶卷上了天空。）',
        'He swirled the water with a stick.（他用棍子搅动水面。）',
      ],
      synonyms: [
        { word: 'stirred', note: '搅拌，侧重均匀混合' },
        { word: 'whirled', note: '急旋，速度更快更猛烈' },
        { word: 'churned', note: '剧烈搅动，力度更大' },
      ],
    },
    {
      word: 'crashed',
      phonetic: '/kræʃt/',
      brief: '撞击，拍打（crash 的过去式）',
      pos: 'verb',
      detail:
        'crashed 是 crash 的过去式，意为"撞击、猛烈碰撞"，可指物体碰撞发出的巨响，也可形容海浪猛烈拍打。原文中"Waves crashed and churned"——波浪拍打着翻涌，crashed 描绘巨浪撞击的壮观场面，与 churned 并列使用，从声音（crashed）和动态（churned）两个维度刻画悟空搅河时的混乱景象。',
      examples: [
        'The waves crashed against the rocks.（海浪拍打着岩石。）',
        'The car crashed into a tree.（汽车撞上了一棵树。）',
        'Thunder crashed overhead.（头顶雷声轰鸣。）',
      ],
      synonyms: [
        { word: 'smashed', note: '猛砸，侧重将目标打碎' },
        { word: 'pounded', note: '连续重击，侧重反复的力度' },
        { word: 'slammed', note: '猛撞，侧重力量的突然爆发' },
      ],
    },
    {
      word: 'churned',
      phonetic: '/tʃɜːnd/',
      brief: '翻涌，剧烈搅动（churn 的过去式）',
      pos: 'verb',
      detail:
        'churned 是 churn 的过去式，意为"翻涌、剧烈搅动"，指液体被搅动得剧烈翻腾。原文中"Waves crashed and churned"——波浪拍打着翻涌，churned 与 crashed 并列描绘被悟空搅乱的河面，churned 侧重水体的翻腾搅动（不是平静的流动），配合前文的 swirled 形成递进：搅动→翻涌。',
      examples: [
        'Her stomach churned with anxiety.（她紧张得胃里翻腾。）',
        'The boat rocked in the churning water.（船在翻涌的水中摇晃。）',
        'The butter churned into cream.（牛奶被搅成了奶油。）',
      ],
      synonyms: [
        { word: 'boiled', note: '沸腾般翻滚，强调剧烈程度' },
        { word: 'seethed', note: '翻滚、激荡，也可形容愤怒的情绪' },
        { word: 'rippled', note: '泛起涟漪，程度比 churned 轻得多' },
      ],
    },
    {
      word: 'dragged up',
      phonetic: '/ˈdræɡd ʌp/',
      brief: '从底部搅起，拽上来',
      pos: 'phrase',
      detail:
        'dragged up 是 drag up 的过去式，意为"从底部搅起、拽上来"，指将沉在底部的物体拉到水面。原文中"The water dragged up dirt from the river bottom"——河水把河底的泥沙搅了上来，dragged up 描绘了悟空搅河的破坏力之大——连河底的泥沙都被卷了上来，河水因此变得浑浊不堪。',
      examples: [
        'The storm dragged up debris from the ocean floor.（风暴把海底的碎片卷了上来。）',
        'She dragged up old memories.（她翻出了旧日的记忆——比喻用法。）',
        'They dragged up the sunken boat.（他们把沉船打捞了上来。）',
      ],
      synonyms: [
        { word: 'stirred up', note: '搅起，侧重使底部物质悬浮' },
        { word: 'brought up', note: '带上来的，更通用的说法' },
        { word: 'dredged up', note: '打捞、挖掘，侧重从深处的提取' },
      ],
    },
    {
      word: 'insults',
      phonetic: '/ˈɪnsʌlts/',
      brief: '辱骂，侮辱性的话',
      pos: 'noun',
      detail:
        'insults 是 insult 的复数形式，意为"辱骂、侮辱性的话"，指故意伤害他人尊严的言语。原文中"He yelled all kinds of insults"——他大喊各种辱骂的话，insults 体现了悟空面对不肯出来的恶龙时的愤怒与无奈，只能用言语攻击来泄愤，但恶龙依然不为所动。',
      examples: [
        'He shouted insults at the referee.（他对裁判大喊辱骂。）',
        'She ignored their insults.（她无视了他们的侮辱。）',
        'The insults hurt her feelings.（那些辱骂伤害了她的感情。）',
      ],
      synonyms: [
        { word: 'abuse', note: '谩骂、虐待，程度更重，可包含身体伤害' },
        { word: 'taunts', note: '嘲讽、讥讽，侧重用言语刺激挑衅' },
        { word: 'compliments', note: '反义词：赞美，称赞' },
      ],
    },
    {
      word: 'tough',
      phonetic: '/tʌf/',
      brief: '难对付的，强悍的',
      pos: 'adjective',
      detail:
        'tough 意为"难对付的、强悍的"，形容人或事物难以击败或处理。原文中"That dragon is tough"——那条龙很难对付，tough 在此表示悟空对恶龙实力的认可——虽然他不害怕，但也承认单凭蛮力无法取胜，为后文求助于 Guanyin 埋下伏笔。',
      examples: [
        'This is a tough problem.（这是个棘手的问题。）',
        'He is a tough opponent.（他是一个难对付的对手。）',
        'She had a tough childhood.（她有一个艰难的童年。）',
      ],
      synonyms: [
        { word: 'formidable', note: '可怕的、令人敬畏的，程度更强' },
        { word: 'stubborn', note: '顽固的，侧重不肯改变或让步' },
        { word: 'easy', note: '反义词：容易的，好对付的' },
      ],
    },
    {
      word: 'felt',
      phonetic: '/fɛlt/',
      brief: '摸了摸，触碰（feel 的过去式）',
      pos: 'verb',
      detail:
        'felt 是 feel 的过去式，意为"触摸、摸了摸"，指用手触碰以感知某物。原文中"Wukong felt the headband and shot a look at the monk"——悟空摸了摸头上的金箍，狠狠瞪了唐僧一眼。felt 这个动作虽小却意味深长——金箍是他被控制的象征，摸它是不甘心的身体语言，配合 shot a look（狠狠瞪了一眼），传达了复杂的情绪：怨恨、无奈、认命。',
      examples: [
        'She felt the fabric to check its quality.（她摸了摸布料检查质量。）',
        'He felt his pocket for the keys.（他摸了摸口袋找钥匙。）',
        'The doctor felt his forehead.（医生摸了摸他的额头。）',
      ],
      synonyms: [
        { word: 'touched', note: '触碰，最通用的说法' },
        { word: 'stroked', note: '抚摸，动作更轻柔' },
        { word: 'grabbed', note: '一把抓住，力度更大更粗暴' },
      ],
    },
    {
      word: 'pagoda',
      phonetic: '/pəˈɡəʊdə/',
      brief: '宝塔，佛塔',
      pos: 'noun',
      detail:
        'pagoda 意为"宝塔、佛塔"，是一种东亚传统多层塔式建筑，通常与佛教寺庙相关。原文中"Guanyin was in a garden next to her pagoda"——观音在她的宝塔旁的花园里，pagoda 点明了 Guanyin 居所的神圣属性——这不是普通的建筑，而是佛教圣地的标志性建筑。',
      examples: [
        'The ancient pagoda stood on the hilltop.（古老的宝塔矗立在山顶。）',
        'Tourists visited the famous pagoda.（游客们参观了那座著名的宝塔。）',
        'The pagoda has five stories.（这座宝塔有五层。）',
      ],
      synonyms: [
        { word: 'tower', note: '塔，泛指，不限于佛教建筑' },
        { word: 'stupa', note: '佛塔，源于印度，半球形，与东亚的 pagoda 形制不同' },
        { word: 'temple', note: '寺庙，泛指宗教场所' },
      ],
    },
    {
      word: 'setting',
      phonetic: '/ˈsɛtɪŋ/',
      brief: '放火，点燃（set 的现在分词）',
      pos: 'verb',
      detail:
        'setting 是 set 的现在分词形式。在此处 set fire to 是固定搭配，意为"放火、点燃"，指故意使某物燃烧。原文中"he was being punished for setting fire to his father\'s palace"——他因放火烧了父亲的宫殿而受到惩罚。setting fire to 是西游记中白龙马（西海龙王三太子）的核心背景故事——他因纵火毁坏殿上明珠而被判死罪，后经观音搭救才得以活命。',
      examples: [
        'Someone was caught setting fire to the building.（有人放火烧楼时被抓住了。）',
        'He was accused of setting fire to the forest.（他被指控纵火烧林。）',
        'The police are investigating who set fire to the car.（警方正在调查谁放火烧了那辆车。）',
      ],
      synonyms: [
        { word: 'igniting', note: '点燃，侧重引燃的过程' },
        { word: 'lighting', note: '点火，较中性，可用于正常用途' },
        { word: 'extinguishing', note: '反义词：扑灭，熄灭' },
      ],
    },
    {
      word: 'earn',
      phonetic: '/ɜːn/',
      brief: '赢得，获得',
      pos: 'verb',
      detail:
        'earn 意为"赢得、获得"，指通过努力或付出而得到应有的回报。原文中"he can earn forgiveness"——他可以赢得宽恕，earn 在此强调宽恕不是白白赐予的，而是需要通过行动（保护唐僧取经）来换取，体现了佛教中"功德赎罪"的观念。',
      examples: [
        'She earned a lot of money.（她赚了很多钱。）',
        'He earned the respect of his colleagues.（他赢得了同事们的尊重。）',
        'You have to earn your place on the team.（你得凭实力赢得在队中的位置。）',
      ],
      synonyms: [
        { word: 'gain', note: '获得，较通用，不强调付出与回报的关系' },
        { word: 'deserve', note: '值得、应得，侧重是否配得上' },
        { word: 'lose', note: '反义词：失去' },
      ],
    },
    {
      word: 'Sparkling',
      phonetic: '/ˈspɑːklɪŋ/',
      brief: '闪耀的，闪闪发光的',
      pos: 'adjective',
      detail:
        'sparkling 是 sparkle 的现在分词作形容词，意为"闪耀的、闪闪发光的"，形容发出明亮、细碎而连续的光芒。原文中"Sparkling light surrounded the dragon"——闪耀的光芒环绕着龙，Sparkling 营造了 Guanyin 施法将龙变为白马时的超自然视觉效果，光芒闪烁暗示神力的运作，是一场庄严的变身仪式。',
      examples: [
        'The sparkling diamonds caught everyone\'s eye.（闪闪发光的钻石吸引了所有人的目光。）',
        'We swam in the sparkling blue sea.（我们在波光粼粼的蓝色大海中游泳。）',
        'Her sparkling eyes showed her excitement.（她闪闪发光的眼睛透露出她的兴奋。）',
      ],
      synonyms: [
        { word: 'glittering', note: '璀璨的，侧重多面反射的亮点' },
        { word: 'shining', note: '发光的，最通用的说法，不强调闪烁感' },
        { word: 'dazzling', note: '耀眼得令人目眩的，程度更强' },
      ],
    },
    {
      word: 'faded',
      phonetic: '/ˈfeɪdɪd/',
      brief: '消退，逐渐消失（fade 的过去式）',
      pos: 'verb',
      detail:
        'faded 是 fade 的过去式，意为"消退、逐渐消失"，指光线、颜色或声音等慢慢减弱直至不见。原文中"When the light faded, a horse stood where the dragon had been"——当光芒消退时，一匹马站在龙原来的位置。faded 描绘了变身完成后光芒缓缓消散的过渡画面，与前一秒的 Sparkling 形成前后呼应——光起（Sparkling）→光灭（faded）→龙变为马。',
      examples: [
        'The colors of the sunset faded slowly.（日落的色彩慢慢消退了。）',
        'The sound faded into the distance.（声音逐渐消失在远方。）',
        'Her smile faded when she heard the news.（听到这个消息后她的笑容消失了。）',
      ],
      synonyms: [
        { word: 'dimmed', note: '变暗，侧重光线减弱' },
        { word: 'vanished', note: '消失，更突然、更彻底' },
        { word: 'brightened', note: '反义词：变亮' },
      ],
    },
    {
      word: 'shore',
      phonetic: '/ʃɔːr/',
      brief: '岸边，河岸，海岸',
      pos: 'noun',
      detail:
        'shore 意为"岸边、河岸、海岸"，指水域与陆地交界处的陆地部分。原文中两次出现：第一次"A boat had arrived next to the shore"——一条船靠到了岸边；第二次"the monkey led the horse onto the shore"——猴子牵着马上了岸。shore 在本章中反复出现，标志着渡河场景中的空间转换——从水中到陆地、从此岸到彼岸。',
      examples: [
        'We walked along the shore of the lake.（我们沿着湖岸散步。）',
        'The ship was visible from the shore.（从岸边可以看到那艘船。）',
        'They built a house near the shore.（他们在岸边附近建了一座房子。）',
      ],
      synonyms: [
        { word: 'bank', note: '河岸，多用于河流' },
        { word: 'coast', note: '海岸，侧重整条海岸线' },
        { word: 'beach', note: '海滩，侧重沙质或砾石的岸' },
      ],
    },
    {
      word: 'plains',
      phonetic: '/pleɪnz/',
      brief: '平原，草原',
      pos: 'noun',
      detail:
        'plains 是 plain 的复数形式，意为"平原、草原"，指大片平坦开阔的陆地，通常没有树木。原文中"continued their journey over hills and across plains"——翻山越岭、穿过平原。plains 与 hills 形成地形对比——山上山下、高低起伏，概括了取经途中地貌的多样性和旅途的漫长艰辛。',
      examples: [
        'The Great Plains stretch across central North America.（大平原横跨北美中部。）',
        'Buffalo once roamed the plains.（野牛曾在草原上游荡。）',
        'They traveled across the flat plains for days.（他们在平坦的平原上行进了数日。）',
      ],
      synonyms: [
        { word: 'flatlands', note: '平地，侧重地形平坦' },
        { word: 'grasslands', note: '草地，草原，侧重植被' },
        { word: 'valleys', note: '山谷，两侧有山的低地' },
      ],
    },
    {
      word: 'barely',
      phonetic: '/ˈbeəli/',
      brief: '几乎不，勉强',
      pos: 'adverb',
      detail:
        'barely 意为"几乎不、勉强"，表示某事勉强达到某个程度，差一点就不行。原文中"We\'ve barely started our journey"——我们几乎还没开始旅程。barely 在此强调取经之路的漫长——虽然已经走了很远了（过了河、过了山和平原），但悟空说"才刚开始"，暗示前方的路还远得很。',
      examples: [
        'She barely passed the exam.（她勉强通过了考试。）',
        'I barely had time to eat breakfast.（我几乎没时间吃早饭。）',
        'He could barely believe his eyes.（他几乎不敢相信自己的眼睛。）',
      ],
      synonyms: [
        { word: 'scarcely', note: '几乎不，与 barely 近义，更正式' },
        { word: 'hardly', note: '几乎不，与 barely 近义，更口语化' },
        { word: 'almost', note: '几乎——但 almost 表肯定，barely 表否定，方向相反' },
      ],
    },
    {
      word: 'honor',
      phonetic: '/ˈɒnər/',
      brief: '荣誉，荣幸',
      pos: 'noun',
      detail:
        'honor 意为"荣誉、荣幸"，指因获得某种特别机会或认可而感到光荣。原文中"That is quite an honor"——那真是一项殊荣。方丈听到唐僧被选中去取真经后如此感叹，honor 在此表示被 Bodhisattva 选中是一种极高的荣誉和信任，方丈的语气中充满敬意。',
      examples: [
        'It is an honor to meet you.（很荣幸见到您。）',
        'He won many honors in his career.（他在职业生涯中赢得了许多荣誉。）',
        'They held a ceremony in honor of the heroes.（他们举行了仪式向英雄们致敬。）',
      ],
      synonyms: [
        { word: 'privilege', note: '特权、殊荣，侧重难得的机会' },
        { word: 'glory', note: '荣耀、光辉，侧重辉煌感和外在的光芒' },
        { word: 'shame', note: '反义词：耻辱，羞愧' },
      ],
    },
    {
      word: 'treasure',
      phonetic: '/ˈtreʒər/',
      brief: '珍宝，宝物',
      pos: 'noun',
      detail:
        'treasure 意为"珍宝、宝物"，指极具价值的人或物。原文中"It\'s a Buddhist treasure"——那是一件佛教珍宝，唐僧这样介绍观音所赐的锦襕袈裟。treasure 在此强调了袈裟的神圣和珍贵属性，也为后文方丈起了贪心、想要占为己有的情节埋下伏笔——正因为是 treasure，才引发贪念。',
      examples: [
        'The pirates buried their treasure on the island.（海盗把宝藏埋在了岛上。）',
        'She is a treasure to her family.（她是家里的宝贝。）',
        'The museum displays ancient treasures.（博物馆展出古代珍宝。）',
      ],
      synonyms: [
        { word: 'valuable', note: '贵重物品，较泛指' },
        { word: 'gem', note: '宝石、珍品，侧重小巧珍贵' },
        { word: 'junk', note: '反义词：破烂，废物' },
      ],
    },
    {
      word: 'admired',
      phonetic: '/ədˈmaɪərd/',
      brief: '欣赏，赞赏（admire 的过去式）',
      pos: 'verb',
      detail:
        'admired 是 admire 的过去式，意为"欣赏、赞赏、钦佩"，指带着喜爱或敬意观看某物。原文中"The priest admired it for a moment"——方丈欣赏了片刻。admired 表面上是欣赏袈裟的美，但结合后文他借走袈裟并起了贪心的情节，admired 暗含了从欣赏到贪欲的转变——"admired"只是贪念的伪装。',
      examples: [
        'She admired the beautiful painting.（她欣赏那幅美丽的画作。）',
        'I admire your courage.（我钦佩你的勇气。）',
        'He admired himself in the mirror.（他对着镜子欣赏自己。）',
      ],
      synonyms: [
        { word: 'appreciated', note: '欣赏、感激，侧重理解和认同' },
        { word: 'marveled at', note: '惊叹于，侧重对奇观的赞叹' },
        { word: 'despised', note: '反义词：鄙视，蔑视' },
      ],
    },
    {
      word: 'gazing at',
      phonetic: '/ˈɡeɪzɪŋ æt/',
      brief: '凝视，目不转睛地看着',
      pos: 'phrase',
      detail:
        'gaze at 意为"凝视、目不转睛地看着"，指长时间专注地注视某物，带有深思、痴迷或敬畏的情感色彩。此处 gazing at 是现在分词形式，与 was 构成过去进行时。原文中"the priest was awake, gazing at the robe"——方丈彻夜未眠，凝视着袈裟。gazing at 暗示方丈已从前一句的"admired"（欣赏）滑向执念——他不是随便看看，而是长时间痴迷地盯着看，为下一句"I can\'t return this robe. I must have it!"的贪念爆发做铺垫。',
      examples: [
        'She stood by the window, gazing at the stars.（她站在窗边凝视着星空。）',
        'He was gazing at the painting for a long time.（他长时间凝视着那幅画。）',
        'The child gazed at the toy in wonder.（那个孩子惊奇地注视着那个玩具。）',
      ],
      synonyms: [
        { word: 'staring at', note: '盯着看，侧重目光固定，不一定有情感投入' },
        { word: 'glaring at', note: '怒视，带有敌意' },
        { word: 'glancing at', note: '瞥一眼，快速短暂的看，与 gazing 形成对比' },
      ],
    },
  ],
  book_04: [
    {
      word: 'courtyard',
      phonetic: '/ˈkɔːrtjɑːrd/',
      brief: '庭院，院子',
      pos: 'noun',
      detail:
        'courtyard 意为"庭院、院子"，指被建筑物或墙壁围起来的露天空间。原文中"two priests walking across the courtyard"——两个和尚穿过庭院。courtyard 点明了场景空间——寺院中僧人们日常活动的露天区域，也是深夜搬运柴火时的必经之路。',
      examples: [
        'The children played in the courtyard.（孩子们在院子里玩耍。）',
        'The hotel has a beautiful courtyard with a fountain.（酒店有一个带喷泉的美丽庭院。）',
        'She sat in the courtyard reading a book.（她坐在院子里看书。）',
      ],
      synonyms: [
        { word: 'yard', note: '院子，较口语化，可指任何围起来的空地' },
        { word: 'patio', note: '露台、天井，通常铺有地面，用于休闲' },
        { word: 'plaza', note: '广场，规模更大的开阔空间' },
      ],
    },
    {
      word: 'bundles',
      phonetic: '/ˈbʌndlz/',
      brief: '捆，束（bundle 的复数）',
      pos: 'noun',
      detail:
        'bundles 是 bundle 的复数形式，意为"捆、束"，指用绳索或布绑扎在一起的包裹。原文中"They were carrying bundles of firewood"——他们扛着一捆捆柴火。bundles of firewood 描绘了两个和尚深夜搬运成捆柴火的画面，为放火焚寺的阴谋提供了视觉线索。',
      examples: [
        'She carried a bundle of clothes.（她抱着一捆衣服。）',
        'He tied the sticks into bundles.（他把树枝扎成一捆一捆的。）',
        'Bundles of newspapers were stacked by the door.（门边堆着一捆捆报纸。）',
      ],
      synonyms: [
        { word: 'bales', note: '大包、大捆，通常指压缩打包的货物' },
        { word: 'parcels', note: '包裹，侧重包装好的物品' },
        { word: 'loads', note: '负荷、担子，侧重所搬运的量' },
      ],
    },
    {
      word: 'stacked',
      phonetic: '/stækt/',
      brief: '堆放，整齐地叠放（stack 的过去式）',
      pos: 'verb',
      detail:
        'stacked 是 stack 的过去式，意为"堆放、整齐地叠放"，指将物品一个叠一个地放好。原文中"The priests stacked the firewood next to the building"——和尚们把柴火堆放在唐僧住的房间旁边。stacked 强调柴火被有目的地、整齐地堆放在目标建筑旁，暗示这是一场精心策划的纵火。',
      examples: [
        'She stacked the books on the shelf.（她把书整齐地摞在书架上。）',
        'The plates were stacked in the cupboard.（盘子被叠放在橱柜里。）',
        'He stacked the boxes by the door.（他把箱子堆在门边。）',
      ],
      synonyms: [
        { word: 'piled', note: '堆积，侧重杂乱地堆，不如 stacked 整齐' },
        { word: 'heaped', note: '堆成堆，侧重随意地聚拢' },
        { word: 'arranged', note: '排列、布置，侧重有秩序地摆放' },
      ],
    },
    {
      word: 'lit',
      phonetic: '/lɪt/',
      brief: '点燃，点火（light 的过去式）',
      pos: 'verb',
      detail:
        'lit 是 light 的过去式，意为"点燃、点火"，指使某物开始燃烧。原文中"the priests lit the wood on fire"——和尚们点燃了柴火。lit 是整个纵火情节的关键动作词——从搬运柴火（bundles）、堆放（stacked）到点燃（lit），三个动作构成完整的犯罪链条。',
      examples: [
        'She lit a candle.（她点燃了一根蜡烛。）',
        'He lit the fire in the fireplace.（他点燃了壁炉里的火。）',
        'They lit fireworks to celebrate.（他们放烟花庆祝。）',
      ],
      synonyms: [
        { word: 'ignited', note: '点燃，较正式，侧重引燃的过程' },
        { word: 'kindled', note: '生火、点燃，侧重慢慢引燃' },
        { word: 'extinguished', note: '反义词：熄灭，扑灭' },
      ],
    },
    {
      word: 'screamed',
      phonetic: '/skriːmd/',
      brief: '尖叫，惊叫（scream 的过去式）',
      pos: 'verb',
      detail:
        'screamed 是 scream 的过去式，意为"尖叫、惊叫"，指因恐惧、痛苦或激动而发出高声喊叫。原文中"The priests screamed and ran"——和尚们尖叫着逃跑。screamed 刻画了火势失控后僧人们的极度恐惧，与前一秒他们还在执行纵火任务的画面形成戏剧性反差——害人者反被其所害。',
      examples: [
        'She screamed when she saw the spider.（她看到蜘蛛时尖叫起来。）',
        'The crowd screamed with excitement.（人群兴奋地尖叫。）',
        'He screamed for help.（他大声呼救。）',
      ],
      synonyms: [
        { word: 'shrieked', note: '尖叫，声音更尖锐刺耳' },
        { word: 'yelled', note: '大喊，侧重声音大而非恐惧' },
        { word: 'whispered', note: '反义词：低语，轻声说' },
      ],
    },
    {
      word: 'crumbled',
      phonetic: '/ˈkrʌmbld/',
      brief: '崩塌，碎裂（crumble 的过去式）',
      pos: 'verb',
      detail:
        'crumbled 是 crumble 的过去式，意为"崩塌、碎裂"，指建筑物或固体结构因外力而破碎坍塌。原文中两次出现：第一次"Walls crumbled and roofs caved in"——墙壁崩塌，屋顶塌陷；第二次"the buildings\' walls were black and crumbled"——建筑物的墙壁焦黑且碎裂。crumbled 生动描绘了大火吞噬寺院后的毁坏场景。',
      examples: [
        'The old wall crumbled under the weight.（旧墙在重压下崩塌了。）',
        'The cookie crumbled in his hand.（饼干在他手中碎裂了。）',
        'The ancient ruins were slowly crumbling.（古遗址在慢慢风化崩塌。）',
      ],
      synonyms: [
        { word: 'collapsed', note: '倒塌，侧重整体垮掉' },
        { word: 'shattered', note: '粉碎，侧重突然碎裂成片' },
        { word: 'stood', note: '反义词：矗立，完好无损' },
      ],
    },
    {
      word: 'caved in',
      phonetic: '/keɪvd ɪn/',
      brief: '塌陷，凹陷（cave in 的过去式）',
      pos: 'phrase',
      detail:
        'caved in 是 cave in 的过去式，意为"塌陷、凹陷"，指屋顶、地面或墙壁向内塌落。原文中"Walls crumbled and roofs caved in"——墙壁崩塌，屋顶塌陷。caved in 侧重向内坍塌的方向性——屋顶不是被炸飞，而是向内垮塌，让人联想到建筑内部被火焰吞噬后支撑力丧失的画面。',
      examples: [
        'The roof caved in under the weight of the snow.（屋顶在积雪的重压下塌了。）',
        'The tunnel caved in during the earthquake.（地震中隧道塌方了。）',
        'The old bridge finally caved in.（那座旧桥终于坍塌了。）',
      ],
      synonyms: [
        { word: 'collapsed', note: '倒塌、坍塌，最通用的说法' },
        { word: 'gave way', note: '支撑不住而垮掉，侧重断裂的过程' },
        { word: 'caved out', note: '挖空、掏空，与 cave in 方向相反' },
      ],
    },
    {
      word: 'gasped',
      phonetic: '/ɡæspt/',
      brief: '倒吸一口气，惊喘',
      pos: 'verb',
      detail:
        'gasped 是 gasp 的过去式，意为"倒吸一口气、惊喘"，指因惊讶或震惊而突然急促吸气。原文中"The Tang Monk woke up and opened the door. He gasped."——唐僧醒来打开门，倒吸了一口气。gasped 精准捕捉了唐僧看到寺院废墟时震惊的瞬间反应——前一秒还在平安沉睡，推开门便面对一片焦土。',
      examples: [
        'She gasped when she saw the price.（她看到价格时倒吸了一口气。）',
        'He gasped in surprise.（他惊讶地倒吸一口气。）',
        'The crowd gasped at the magician\'s trick.（人群对魔术师的戏法惊叹不已。）',
      ],
      synonyms: [
        { word: 'startled', note: '受惊的，侧重突然被吓到的反应' },
        { word: 'choked', note: '哽咽、说不出话，侧重因情绪激动而语塞' },
        { word: 'exhaled', note: '反义词：呼气，吐气' },
      ],
    },
    {
      word: 'drifted',
      phonetic: '/ˈdrɪftɪd/',
      brief: '飘动，弥漫（drift 的过去式）',
      pos: 'verb',
      detail:
        'drifted 是 drift 的过去式，意为"飘动、弥漫"，指轻柔地随风或随水缓缓移动。原文中"Smoke drifted through the air"——烟雾弥漫在空气中。drifted 描绘了火灾后烟雾缓缓飘散的画面，与 crumbled、burned 等词共同构建了灾后废墟的视觉场景。',
      examples: [
        'The boat drifted down the river.（小船顺水漂流而下。）',
        'Leaves drifted in the wind.（落叶随风飘荡。）',
        'The smell of coffee drifted from the kitchen.（咖啡的香气从厨房飘来。）',
      ],
      synonyms: [
        { word: 'floated', note: '漂浮，侧重轻盈地悬在空中或水面' },
        { word: 'wafted', note: '飘荡，侧重气味或声音的轻柔传送' },
        { word: 'rushed', note: '反义词：冲、猛冲，速度快且猛烈' },
      ],
    },
    {
      word: 'spread',
      phonetic: '/sprɛd/',
      brief: '蔓延，扩散',
      pos: 'verb',
      detail:
        'spread 意为"蔓延、扩散"，指从中心向四周扩展、延伸。原文中"The spell made the fire spread everywhere else"——咒语使火向其他所有地方蔓延。spread 在此描述火势的蔓延，与悟空"保护唐僧所住的建筑"的法术形成对比——一边被保护，另一边火势反而被推动扩散。',
      examples: [
        'The fire spread quickly through the forest.（大火在森林中迅速蔓延。）',
        'The rumor spread across the school.（谣言传遍了整个学校。）',
        'She spread butter on the bread.（她把黄油涂在面包上。）',
      ],
      synonyms: [
        { word: 'expanded', note: '扩展、膨胀，侧重面积或规模的增大' },
        { word: 'scattered', note: '散开、分散，侧重向不同方向散落' },
        { word: 'contained', note: '反义词：控制住、遏制' },
      ],
    },
    {
      word: 'shrugged',
      phonetic: '/ʃrʌɡd/',
      brief: '耸肩（表示不在乎或无所谓）',
      pos: 'verb',
      detail:
        'shrugged 是 shrug 的过去式，意为"耸肩"，是常见的肢体语言，表示不在乎、无所谓或轻描淡写。原文中"Wukong shrugged"——悟空耸了耸肩，紧接着说"The priests here are evil. They deserved what they got."。shrugged 配合冷酷的言语，表现了悟空对寺院被毁毫不愧疚的态度——在他看来，恶人遭到报应天经地义。',
      examples: [
        '"I don\'t know," she shrugged.（"我不知道，"她耸了耸肩。）',
        'He shrugged off the criticism.（他对批评满不在乎。）',
        'She shrugged and walked away.（她耸了耸肩走开了。）',
      ],
      synonyms: [
        { word: 'dismissed', note: '不予理会，侧重态度上的轻视' },
        { word: 'brushed off', note: '不当回事，口语化' },
      ],
    },
    {
      word: 'deserved',
      phonetic: '/dɪˈzɜːrvd/',
      brief: '罪有应得，活该（deserve 的过去式）',
      pos: 'verb',
      detail:
        'deserved 是 deserve 的过去式，意为"应得、罪有应得"，指某人因其行为而理应得到某种结果（好或坏）。原文中"They deserved what they got"——他们罪有应得。Wukong 用 deserved 表示那些试图纵火杀人的和尚们遭到报应是合理的，这个词语气强硬，体现了悟空"以牙还牙"的正义观。',
      examples: [
        'He deserved the award for his hard work.（他因努力工作而应得这个奖。）',
        'She got what she deserved.（她得到了应有的报应。）',
        'They deserved to be punished.（他们理应受到惩罚。）',
      ],
      synonyms: [
        { word: 'earned', note: '赢得、挣得，侧重通过付出获得，较正面' },
        { word: 'merited', note: '应得的，较正式' },
        { word: 'unfair', note: '反义词：不公平的，不该受到的' },
      ],
    },
    {
      word: 'Villains',
      phonetic: '/ˈvɪlənz/',
      brief: '恶棍，坏人（villain 的复数）',
      pos: 'noun',
      detail:
        'villains 是 villain 的复数形式，意为"恶棍、坏人"，指道德败坏、专门做坏事的人。原文中 Wukong 喝道"Villains!"——恶棍们！Wukong 用 villains 来指责那两个和尚试图纵火谋害唐僧。注意：虽然这两个和尚只是从犯，但悟空此刻还不知道真相，所以用 villains 统称所有参与阴谋的人。',
      examples: [
        'The villain was caught by the police.（恶棍被警察抓住了。）',
        'Every story needs a good villain.（每个故事都需要一个好反派。）',
        'He played the villain in the movie.（他在电影中演反派。）',
      ],
      synonyms: [
        { word: 'scoundrels', note: '无赖、恶棍，语气更强' },
        { word: 'criminals', note: '罪犯，侧重法律层面的罪行' },
        { word: 'heroes', note: '反义词：英雄' },
      ],
    },
    {
      word: 'club',
      phonetic: '/klʌb/',
      brief: '用棍棒打，猛击',
      pos: 'verb',
      detail:
        'club 作动词意为"用棍棒打、猛击"，指用粗重的棒状物击打某人。原文中"I should club you with my iron bar!"——我应该用铁棒打你们！club 在此是 Wukong 威胁僧人的用语，以动词形式出现，与他手中标志性的武器（iron bar）搭配，画面感极强。',
      examples: [
        'He tried to club the attacker with a stick.（他试图用棍子击打攻击者。）',
        'The seal was clubbed to death.（海豹被棍棒打死。）',
        'She clubbed him over the head.（她用棍子猛击他的头部。）',
      ],
      synonyms: [
        { word: 'beat', note: '打、击打，最通用的说法' },
        { word: 'bludgeon', note: '用重棍猛打，力度更大更残忍' },
        { word: 'strike', note: '击打，侧重一次有力的打击' },
      ],
    },
    {
      word: 'shaking',
      phonetic: '/ˈʃeɪkɪŋ/',
      brief: '发抖，颤抖',
      pos: 'verb',
      detail:
        'shaking 是 shake 的现在分词形式，意为"发抖、颤抖"，指身体不由自主地快速晃动，多因恐惧引起。原文中"He was shaking"——他在发抖。shaking 描绘了那个和尚面对悟空威胁时的极度恐惧，他一边承认袈裟丢了，一边全身颤抖，暗示接下来的消息（袈裟不见了）将引发更大的危机。',
      examples: [
        'She was shaking with fear.（她吓得浑身发抖。）',
        'His hands were shaking as he held the letter.（他拿着信时双手在发抖。）',
        'The dog was shaking from the cold.（狗冻得直发抖。）',
      ],
      synonyms: [
        { word: 'trembling', note: '颤抖，侧重细微持续的抖动' },
        { word: 'quivering', note: '微微颤动，幅度更小更轻' },
        { word: 'steady', note: '反义词：平稳的，不晃动的' },
      ],
    },
    {
      word: 'glared',
      phonetic: '/ɡleərd/',
      brief: '怒目而视，狠狠地瞪（glare 的过去式）',
      pos: 'verb',
      detail:
        'glared 是 glare 的过去式，意为"怒目而视、狠狠地瞪"，指带着愤怒或敌意长时间盯着某人。原文中"Wukong glared at the two scared priests"——悟空怒视着两个吓坏了的和尚。glared 发生在得知袈裟丢失后，悟空的怒火从方丈转向了眼前的僧人，但紧箍咒随即制止了他的暴力冲动。',
      examples: [
        'She glared at him angrily.（她愤怒地瞪着他。）',
        'The teacher glared at the noisy students.（老师狠狠地瞪了吵闹的学生。）',
        'He glared at me without saying a word.（他一言不发地怒视着我。）',
      ],
      synonyms: [
        { word: 'scowled', note: '皱眉怒视，侧重面部表情的凶狠' },
        { word: 'stared', note: '凝视，中性词，不一定带有怒意' },
        { word: 'smiled', note: '反义词：微笑' },
      ],
    },
    {
      word: 'screaming',
      phonetic: '/ˈskriːmɪŋ/',
      brief: '尖叫，大喊大叫',
      pos: 'verb',
      detail:
        'screaming 是 scream 的现在分词形式，意为"尖叫、大喊大叫"，指因恐惧、疼痛或愤怒而发出高声叫喊。原文中"Wukong rolled around, kicking and screaming"——悟空满地打滚，又踢又叫。screaming 与 kicking 并列，生动描绘了悟空被紧箍咒折磨时的剧烈反应——不是普通的疼痛，而是痛到满地翻滚、又踢又叫的程度。',
      examples: [
        'The baby was screaming in pain.（婴儿痛得尖叫。）',
        'She came running out of the house, screaming.（她尖叫着从房子里跑了出来。）',
        'The fans were screaming with excitement.（粉丝们兴奋地尖叫。）',
      ],
      synonyms: [
        { word: 'yelling', note: '大喊，侧重声音大而非恐惧' },
        { word: 'shrieking', note: '尖叫，声音更尖锐刺耳' },
        { word: 'whimpering', note: '呜咽，低声哭泣，程度比 screaming 轻' },
      ],
    },
    {
      word: 'boulder',
      phonetic: '/ˈboʊldər/',
      brief: '巨石，大圆石',
      pos: 'noun',
      detail:
        'boulder 意为"巨石、大圆石"，指体积很大的光滑岩石，通常由风化或水流磨圆。原文中两次出现：第一次 Wukong 躲在巨石后面偷听（Peeking over a boulder），第二次跳过巨石冲入妖群（jumped over the boulder）。boulder 在此既作为隐蔽观察的掩体，也作为悟空发起冲锋的跳板，一块石头承载了两个截然不同的场景功能。',
      examples: [
        'The hikers sat on a boulder to rest.（徒步者坐在一块巨石上休息。）',
        'A huge boulder blocked the road.（一块巨石挡住了去路。）',
        'We climbed over the boulder.（我们爬过了那块巨石。）',
      ],
      synonyms: [
        { word: 'rock', note: '岩石，泛指，大小不限' },
        { word: 'crag', note: '峭壁岩石，多指悬崖上的突起' },
        { word: 'pebble', note: '鹅卵石，小石头，与 boulder 大小相反' },
      ],
    },
    {
      word: 'throwing a feast',
      phonetic: '/ˈθroʊɪŋ ə fiːst/',
      brief: '举办宴会，设宴',
      pos: 'phrase',
      detail:
        'throw a feast 是固定搭配，意为"举办宴会、设宴"，指举办一场丰盛的宴席来庆祝。throwing 是 throw 的现在分词形式，在此处并非字面意义的"投掷"，而是引申为"举办"。原文中黑熊精说"I\'m throwing a feast to celebrate!"——我要办一场宴会来庆祝！黑熊精偷了佛教珍宝后大摆宴席庆祝，表现出妖怪的嚣张和不知天高地厚。类似搭配还有 throw a party（举办派对）。',
      examples: [
        'They are throwing a feast for the festival.（他们为节日举办盛宴。）',
        'She threw a feast for her birthday.（她为生日设了一场盛宴。）',
        'The king threw a feast to welcome the hero.（国王设宴欢迎英雄。）',
      ],
      synonyms: [
        { word: 'hosting a banquet', note: '举办宴会，更正式的说法' },
        { word: 'holding a celebration', note: '举行庆祝活动' },
        { word: 'fasting', note: '反义词：禁食，斋戒' },
      ],
    },
    {
      word: 'fled',
      phonetic: '/flɛd/',
      brief: '逃跑，逃散（flee 的过去式）',
      pos: 'verb',
      detail:
        'fled 是 flee 的过去式，意为"逃跑、逃离"，指因恐惧而快速逃离某处。原文中"The spirits all fled in different directions"——妖怪们四散逃窜。fled in different directions 描绘了群妖见到悟空后惊慌失措、向四面八方逃散的画面，突出了悟空的威慑力。',
      examples: [
        'The soldiers fled from the battlefield.（士兵们从战场上逃跑了。）',
        'The thief fled when he heard the police coming.（小偷听到警察来了就逃跑了。）',
        'The villagers fled the flood.（村民们逃离了洪水。）',
      ],
      synonyms: [
        { word: 'escaped', note: '逃脱，侧重成功摆脱困境或追捕' },
        { word: 'scattered', note: '散开、四散，侧重向不同方向分散' },
        { word: 'approached', note: '反义词：靠近、接近' },
      ],
    },
    {
      word: 'pounded',
      phonetic: '/ˈpaʊndɪd/',
      brief: '猛敲，重重地捶打（pound 的过去式）',
      pos: 'verb',
      detail:
        'pounded 是 pound 的过去式，意为"猛敲、重重地捶打"，指用力反复敲击。原文中"Wukong pounded on the cave\'s door"——悟空猛敲洞门。pounded 刻画了悟空追到黑熊精洞口后急不可耐、暴力砸门的画面，力度感十足。',
      examples: [
        'He pounded on the door.（他用力砸门。）',
        'She pounded the table with her fist.（她用拳头重重地捶桌子。）',
        'The waves pounded against the cliff.（海浪猛烈拍打着悬崖。）',
      ],
      synonyms: [
        { word: 'banged', note: '砰砰地敲，侧重撞击的声音' },
        { word: 'hammered', note: '锤击，侧重反复用力的敲打' },
        { word: 'tapped', note: '反义词：轻敲，轻轻叩击' },
      ],
    },
    {
      word: 'smash',
      phonetic: '/smæʃ/',
      brief: '砸碎，猛击',
      pos: 'verb',
      detail:
        'smash 意为"砸碎、猛击"，指用力将某物打碎或猛然撞击。原文中"I\'ll smash this door down!"——我要把这扇门砸烂！smash 在此是 Wukong 的威胁用语，配合"down"表示要将门完全砸开，语气强硬而暴力。',
      examples: [
        'He smashed the window with a rock.（他用石头砸碎了窗户。）',
        'The car smashed into a tree.（汽车撞上了一棵树。）',
        'She smashed the plate on the floor.（她把盘子摔碎在地上。）',
      ],
      synonyms: [
        { word: 'shatter', note: '粉碎、碎裂，侧重碎片飞溅的效果' },
        { word: 'crush', note: '压碎、碾碎，侧重施加重压' },
        { word: 'fix', note: '反义词：修理、修补' },
      ],
    },
    {
      word: 'lance',
      phonetic: '/læns/',
      brief: '长矛，长枪',
      pos: 'noun',
      detail:
        'lance 意为"长矛、长枪"，是一种长柄武器，尖端有金属矛头，历史上骑兵冲锋时使用。原文中三次出现，都是黑熊精手持长矛与悟空交战的场景。lance 作为妖怪的武器，与悟空的铁棒（iron bar）形成对抗——长兵器对短兵器，各有所长。',
      examples: [
        'The knight charged with his lance.（骑士手持长矛冲锋。）',
        'The soldier thrust his lance at the enemy.（士兵将长矛刺向敌人。）',
        'Lances were used by medieval cavalry.（长矛是中世纪骑兵的武器。）',
      ],
      synonyms: [
        { word: 'spear', note: '矛、枪，与 lance 近义，更通用的说法' },
        { word: 'pike', note: '长枪，比 lance 更长，步兵使用' },
        { word: 'shield', note: '反义词：盾牌（防御性武器）' },
      ],
    },
    {
      word: 'pound',
      phonetic: '/paʊnd/',
      brief: '猛敲，重重地捶打',
      pos: 'verb',
      detail:
        'pound 意为"猛敲、重重地捶打"，指用力反复敲击。此处是动词原形，出现在黑熊精的质问中："How dare you pound on my door and yell at me!"——你竟敢砸我的门还对我大吼！pound 与前文 Wukong 的 pounded 是同一个词的不同时态——Wukong 先 pounded（过去式），然后黑熊精用原形 pound 回应，强调指责。',
      examples: [
        'He pounded on the door.（他猛敲着门。）',
        'She pounded the dough with her fists.（她用拳头反复捶打面团。）',
        'The rain pounded on the roof.（雨猛烈地敲打着屋顶。）',
      ],
      synonyms: [
        { word: 'bang', note: '砰砰地敲，侧重撞击声' },
        { word: 'hammer', note: '锤击，侧重反复用力敲打' },
        { word: 'stroke', note: '反义词：轻抚，轻轻碰触' },
      ],
    },
    {
      word: 'snorted',
      phonetic: '/snɔːrtɪd/',
      brief: '嗤之以鼻，哼了一声（snort 的过去式）',
      pos: 'verb',
      detail:
        'snorted 是 snort 的过去式，意为"嗤之以鼻、哼了一声"，指通过鼻子发出短促的哼声来表示轻蔑或不屑。原文中"The Black Wind King snorted. You don\'t impress me."——黑风王哼了一声：你吓不到我。snorted 配合"You don\'t impress me"，生动刻画了黑熊精对悟空大名鼎鼎的过往毫不在意的傲慢态度。',
      examples: [
        'He snorted in disgust.（他厌恶地哼了一声。）',
        '"Yeah, right," she snorted.（"得了吧，"她嗤之以鼻。）',
        'The horse snorted and stamped its hoof.（马打了个响鼻，跺了跺蹄子。）',
      ],
      synonyms: [
        { word: 'scoffed', note: '嘲笑、冷笑，侧重口头上的嘲讽' },
        { word: 'sneered', note: '嗤笑，侧重面部表情的不屑' },
        { word: 'nodded', note: '反义词：点头表示赞同' },
      ],
    },
    {
      word: 'impress',
      phonetic: '/ɪmˈprɛs/',
      brief: '使…印象深刻，使…敬畏',
      pos: 'verb',
      detail:
        'impress 意为"使…印象深刻、使…敬畏"，指通过某方面的优秀表现让他人感到钦佩。原文中"You don\'t impress me"——你吓不到我/你打动不了我。这是黑熊精的挑衅之语——悟空自称大闹天宫，但黑熊精并不以为然。impress 在否定句中表示"不放在眼里"。',
      examples: [
        'She impressed the judges with her performance.（她的表演给评委留下了深刻印象。）',
        'He tried to impress his boss.（他试图给老板留下好印象。）',
        'I was impressed by her courage.（我被她的勇气打动了。）',
      ],
      synonyms: [
        { word: 'awe', note: '使敬畏，程度更强，侧重令人惊叹' },
        { word: 'intimidate', note: '威慑、恐吓，侧重使对方害怕' },
        { word: 'disappoint', note: '反义词：使失望' },
      ],
    },
    {
      word: 'jabbed',
      phonetic: '/ˈdʒæbd/',
      brief: '猛刺，猛戳（jab 的过去式）',
      pos: 'verb',
      detail:
        'jabbed 是 jab 的过去式，意为"猛刺、猛戳"，指快速、短促地向前刺击。原文中"He jabbed his lance at Wukong"——他向悟空猛刺长矛。jabbed 刻画了黑熊精发起攻击的动作——快速、短促、精准的刺击，与 lunge（猛扑）相比更侧重武器的尖端刺击。',
      examples: [
        'He jabbed his finger at the map.（他用手指猛戳地图。）',
        'The boxer jabbed at his opponent\'s face.（拳击手朝对手脸上刺了一拳。）',
        'She jabbed the needle into the fabric.（她把针猛扎进布料里。）',
      ],
      synonyms: [
        { word: 'thrust', note: '猛刺、插入，力度更大更深入' },
        { word: 'stabbed', note: '刺、捅，侧重尖锐物体刺入' },
        { word: 'patted', note: '反义词：轻拍' },
      ],
    },
    {
      word: 'tumbled',
      phonetic: '/ˈtʌmbld/',
      brief: '滚落，翻滚下来（tumble 的过去式）',
      pos: 'verb',
      detail:
        'tumbled 是 tumble 的过去式，意为"滚落、翻滚"，指人或物体失去平衡后沿斜面翻滚而下。原文中"Rocks tumbled and rolled downhill as the two warriors fought"——两个勇士激战时，岩石滚落翻下山坡。tumbled 刻画了悟空与黑熊精战斗的激烈程度——连山上的岩石都被震得滚落，侧面展现了双方力量的惊人。',
      examples: [
        'The rocks tumbled down the hillside.（岩石从山坡上滚落。）',
        'She tumbled off the bike.（她从自行车上摔了下来。）',
        'The child tumbled into the pile of leaves.（孩子一头扎进了落叶堆里。）',
      ],
      synonyms: [
        { word: 'rolled', note: '滚动，强调沿某个方向持续转动' },
        { word: 'fell', note: '落下，最基础的说法' },
        { word: 'climbed', note: '反义词：攀爬，向上移动' },
      ],
    },
    {
      word: 'warriors',
      phonetic: '/ˈwɒriərz/',
      brief: '勇士，战士（warrior 的复数）',
      pos: 'noun',
      detail:
        'warriors 是 warrior 的复数形式，意为"勇士、战士"，指擅长战斗、勇敢善战的人。原文中"the two warriors fought"——两位勇士激烈交战。warriors 在此将悟空和黑熊精平等地并称为"战士"，暗示两人实力相当、棋逢对手，为后文黑熊精提出"午休"的荒诞转折做铺垫——即使是势均力敌的勇士，也需要吃午饭。',
      examples: [
        'The warriors fought bravely in the battle.（勇士们在战斗中英勇作战。）',
        'He was a great warrior in ancient times.（他是古代的一位伟大战士。）',
        'The samurai were Japanese warriors.（武士是日本的战士。）',
      ],
      synonyms: [
        { word: 'fighters', note: '斗士，侧重格斗或战斗的人' },
        { word: 'champions', note: '冠军、斗士，侧重胜者身份' },
        { word: 'cowards', note: '反义词：胆小鬼，懦夫' },
      ],
    },
    {
      word: 'jaw',
      phonetic: '/dʒɔː/',
      brief: '下巴，颌',
      pos: 'noun',
      detail:
        'jaw 意为"下巴、颌"，指嘴部下方的骨头。原文中"Wukong\'s jaw fell open"——悟空的下巴掉了下来（嘴巴大张）。jaw fell open / jaw dropped 是英语中形容"极度惊讶、目瞪口呆"的固定表达。悟空之所以震惊，是因为黑熊精居然在激战正酣时说"我要吃午饭了"——这种荒诞的转折让齐天大圣也惊得合不拢嘴。',
      examples: [
        'Her jaw dropped when she heard the news.（她听到消息时惊得合不拢嘴。）',
        'He broke his jaw in the accident.（他在事故中摔断了下巴。）',
        'My jaw hurts from chewing too much.（我嚼太多东西下巴都疼了。）',
      ],
      synonyms: [
        { word: 'chin', note: '下巴尖，指下颌最前端的部分' },
        { word: 'mouth', note: '嘴巴，泛指整个口腔区域' },
      ],
    },
    {
      word: 'insults',
      phonetic: '/ˈɪnsʌlts/',
      brief: '辱骂，侮辱性的话',
      pos: 'noun',
      detail:
        'insults 是 insult 的复数形式，意为"辱骂、侮辱性的话"，指故意伤害他人尊严的言语。原文中"I kicked the door and yelled insults at him"——我踢着门对他大喊辱骂。yelled insults 描绘了悟空对紧闭洞门的黑熊精进行言语攻击的画面——物理攻击（踢门）与言语攻击（辱骂）并用，但都无济于事。',
      examples: [
        'He shouted insults at the referee.（他对裁判大喊辱骂。）',
        'She ignored their insults.（她无视了他们的侮辱。）',
        'The insults hurt her feelings.（那些辱骂伤害了她的感情。）',
      ],
      synonyms: [
        { word: 'abuse', note: '谩骂、虐待，程度更重，可包含身体伤害' },
        { word: 'taunts', note: '嘲讽、讥讽，侧重用言语刺激挑衅' },
        { word: 'compliments', note: '反义词：赞美，称赞' },
      ],
    },
    {
      word: 'treasure',
      phonetic: '/ˈtreʒər/',
      brief: '珍宝，宝物',
      pos: 'noun',
      detail:
        'treasure 意为"珍宝、宝物"，指极具价值的人或物。原文中在本章多次出现：Guanyin 说"The robe is a Buddhist treasure"，黑熊精称袈裟为"a new robe that is a Buddhist treasure"，狼精也说"to celebrate your new Buddhist treasure"。treasure 在本章中成为多方争夺的核心物件——人人都知道它是宝物，人人都想要它。',
      examples: [
        'The pirates buried their treasure on the island.（海盗把宝藏埋在了岛上。）',
        'The museum displays ancient treasures.（博物馆展出古代珍宝。）',
        'She is a treasure to her family.（她是家里的宝贝。）',
      ],
      synonyms: [
        { word: 'valuable', note: '贵重物品，较泛指' },
        { word: 'gem', note: '宝石、珍品，侧重小巧珍贵' },
        { word: 'junk', note: '反义词：破烂，废物' },
      ],
    },
    {
      word: 'pebble',
      phonetic: '/ˈpɛbl/',
      brief: '小石头，鹅卵石',
      pos: 'noun',
      detail:
        'pebble 意为"小石头、鹅卵石"，指体积小、表面光滑的石头，通常由水流长期冲刷磨圆。原文中"He kicked a pebble"——他踢了一颗小石子。这是一个极其微妙的动作描写——悟空被 Guanyin 批评后踢石子，表现出一种孩子般的委屈和不服气，与他平日里桀骜不驯的形象形成有趣的反差。',
      examples: [
        'The beach was covered in smooth pebbles.（海滩上铺满了光滑的鹅卵石。）',
        'She skipped a pebble across the water.（她打水漂让石子在水面上弹跳。）',
        'He picked up a pebble and threw it.（他捡起一颗小石子扔了出去。）',
      ],
      synonyms: [
        { word: 'stone', note: '石头，泛指，大小不限' },
        { word: 'boulder', note: '巨石，与 pebble 大小相反' },
        { word: 'gravel', note: '碎石、砾石，指大量小石子的集合' },
      ],
    },
    {
      word: 'mumbled',
      phonetic: '/ˈmʌmbld/',
      brief: '含糊地说，嘟囔（mumble 的过去式）',
      pos: 'verb',
      detail:
        'mumbled 是 mumble 的过去式，意为"含糊地说、嘟囔"，指说话声音低且不清楚，常因心虚、害羞或不情愿。原文中"\'I know,\' he mumbled"——"我知道，"他嘟囔着说。mumbled 精准刻画了悟空被 Guanyin 批评后认错却不甘心的微妙心理——嘴上说"我知道"，但声音含糊低调，既承认了错误，又流露出一丝不服。',
      examples: [
        'She mumbled something I couldn\'t hear.（她嘟囔了什么我没听清。）',
        'He mumbled an apology.（他含糊地道了歉。）',
        '"I\'m sorry," he mumbled.（"对不起，"他嘟囔着说。）',
      ],
      synonyms: [
        { word: 'muttered', note: '低声嘀咕，侧重不满或抱怨地小声说' },
        { word: 'whispered', note: '耳语、低语，侧重刻意压低声音' },
        { word: 'shouted', note: '反义词：大喊，高声叫嚷' },
      ],
    },
    {
      word: 'sneak',
      phonetic: '/sniːk/',
      brief: '悄悄地走，偷偷靠近',
      pos: 'verb',
      detail:
        'sneak 意为"悄悄地走、偷偷靠近"，指不发出声响地移动以避免被发现。原文中"We should sneak up to it"——我们应该悄悄靠近。sneak up to 是固定搭配，意为"悄悄接近"。悟空建议不直接正面硬闯，而是偷偷摸到洞口，体现了他战斗中不仅有蛮力，也有策略头脑。',
      examples: [
        'The cat sneaked up on the bird.（猫悄悄靠近那只鸟。）',
        'She sneaked out of the house at night.（她夜里偷偷溜出了家门。）',
        'He tried to sneak past the guard.（他试图偷偷从守卫身边溜过去。）',
      ],
      synonyms: [
        { word: 'creep', note: '蹑手蹑脚地走，侧重小心不发出声响' },
        { word: 'tiptoe', note: '踮脚走，侧重用脚尖走路' },
        { word: 'march', note: '反义词：大步走，堂而皇之地行进' },
      ],
    },
    {
      word: 'Daoist',
      phonetic: '/ˈdaʊɪst/',
      brief: '道教的，道士',
      pos: 'adjective / noun',
      detail:
        'Daoist（也写作 Taoist）意为"道教的、道士的"，与道教相关。原文中"a Daoist priest"指一个道士。在中国宗教传统中，佛教（Buddhist）和道教（Daoist）是两大主要宗教。这里狼精化身道士出现，暗示妖怪世界中佛道两教的力量交织——黑熊精偷了佛教珍宝，狼精却打扮成道士来贺。',
      examples: [
        'Daoist temples are found across China.（道教寺庙遍布中国各地。）',
        'He studied Daoist philosophy.（他研究了道家哲学。）',
        'The Daoist priest performed a ritual.（道士举行了一场法事。）',
      ],
      synonyms: [
        { word: 'Taoist', note: '道教的，Daoist 的另一种拼法，发音相同' },
        { word: 'Buddhist', note: '佛教的，与 Daoist 并列的中国主要宗教' },
      ],
    },
    {
      word: 'tray',
      phonetic: '/treɪ/',
      brief: '托盘，浅盘',
      pos: 'noun',
      detail:
        'tray 意为"托盘、浅盘"，指用来承载物品的扁平盘子。原文中多次出现——狼精手持托盘，上面放着一颗紫色仙丹（pill）。tray 在此是一个关键道具——托盘上的仙丹是悟空计谋的核心，他后来变化成这颗仙丹钻进黑熊精肚子里制服它。',
      examples: [
        'She carried a tray of drinks.（她端着一托盘饮料。）',
        'The waiter brought the food on a tray.（服务员用托盘端来了食物。）',
        'He put his keys on the tray by the door.（他把钥匙放在门边的托盘上。）',
      ],
      synonyms: [
        { word: 'platter', note: '大浅盘，通常用于盛放食物' },
        { word: 'plate', note: '盘子，比 tray 更深，边缘更高' },
      ],
    },
    {
      word: 'realized',
      phonetic: '/ˈriːəlaɪzd/',
      brief: '意识到，发觉（realize 的过去式）',
      pos: 'verb',
      detail:
        'realized 是 realize 的过去式，意为"意识到、发觉"，指突然明白或认识到某事。原文中"That\'s not a priest! Wukong realized"——那不是和尚！悟空意识到。realized 标志着悟空用火眼金睛识破狼精伪装的关键瞬间——从"看到"到"意识到"，真相揭开。',
      examples: [
        'She realized she had left the stove on.（她意识到自己忘了关炉子。）',
        'He suddenly realized the truth.（他突然意识到了真相。）',
        'I realized that I was going the wrong way.（我发觉自己走错了方向。）',
      ],
      synonyms: [
        { word: 'discovered', note: '发现，侧重找到隐藏的事物' },
        { word: 'noticed', note: '注意到，侧重感官上的察觉' },
        { word: 'ignored', note: '反义词：忽视，不理会' },
      ],
    },
    {
      word: 'lit up',
      phonetic: '/lɪt ʌp/',
      brief: '亮了起来，（眼睛）闪亮',
      pos: 'phrase',
      detail:
        'lit up 是 light up 的过去式，意为"亮了起来、闪亮"，可形容灯光照亮，也可形容人的表情突然变得兴奋。原文中"The monkey\'s eyes lit up"——猴子的眼睛亮了起来。lit up 在此形容悟空想出妙计时的兴奋——他刚识破狼精伪装，立刻计上心来，眼睛闪烁着灵光，与前面被 Guanyin 批评时踢石子的沮丧形成鲜明对比。',
      examples: [
        'Her face lit up with joy.（她的脸上绽放出喜悦的光芒。）',
        'The fireworks lit up the sky.（烟花照亮了天空。）',
        'His eyes lit up when he saw the gift.（他看到礼物时眼睛亮了起来。）',
      ],
      synonyms: [
        { word: 'brightened', note: '变亮，侧重光线或表情的明亮' },
        { word: 'beamed', note: '满面春风，侧重笑容灿烂' },
        { word: 'dimmed', note: '反义词：变暗，黯淡' },
      ],
    },
    {
      word: 'pesky',
      phonetic: '/ˈpɛski/',
      brief: '讨厌的，烦人的',
      pos: 'adjective',
      detail:
        'pesky 意为"讨厌的、烦人的"，指令人烦恼、不断制造麻烦的人或事物，语气较轻，常用于口语。原文中"A pesky monkey spirit was here"——一只讨厌的猴子精来过。黑熊精用 pesky 形容悟空，语气中既有厌烦又有一丝轻蔑——在他看来，悟空不过是只烦人的猴子，不值得认真对待。',
      examples: [
        'Those pesky mosquitoes are everywhere.（那些讨厌的蚊子到处都是。）',
        'Stop being so pesky!（别这么烦人！）',
        'The pesky little brother kept interrupting.（那个烦人的小弟弟一直打断说话。）',
      ],
      synonyms: [
        { word: 'annoying', note: '令人恼火的，最通用的说法' },
        { word: 'troublesome', note: '惹麻烦的，较正式' },
        { word: 'delightful', note: '反义词：令人愉快的' },
      ],
    },
    {
      word: 'banging',
      phonetic: '/ˈbæŋɪŋ/',
      brief: '砰砰地敲，猛砸',
      pos: 'verb',
      detail:
        'banging 是 bang 的现在分词形式，意为"砰砰地敲、猛砸"，指用力撞击发出巨响。原文中"He kept banging on my door and yelling at me"——他一直砸我的门还对我大吼。banging 侧重撞击的声响——不同于 pounded 的沉重感，banging 更强调反复撞击发出的"砰砰"声，让读者仿佛能听到悟空疯狂砸门的声音。',
      examples: [
        'Someone was banging on the door.（有人在砰砰地敲门。）',
        'He kept banging the table.（他不停地敲桌子。）',
        'The door was banging in the wind.（门在风中砰砰作响。）',
      ],
      synonyms: [
        { word: 'pounding', note: '猛敲，侧重反复用力的敲打' },
        { word: 'hammering', note: '锤击，侧重连续有力的敲打' },
        { word: 'tapping', note: '反义词：轻敲，轻轻叩击' },
      ],
    },
    {
      word: 'stroked',
      phonetic: '/stroʊkt/',
      brief: '抚摸，捋（stroke 的过去式）',
      pos: 'verb',
      detail:
        'stroked 是 stroke 的过去式，意为"抚摸、捋"，指用手轻轻沿着物体表面滑动。原文中"The Black Wind King stroked his chin"——黑风王抚摸着下巴。stroked his chin 是经典的"思考"肢体语言，配合"You know, I was just thinking..."，刻画出黑熊精听到长生不老药后的贪婪盘算。',
      examples: [
        'She stroked the cat\'s fur.（她抚摸着猫的毛。）',
        'He stroked his beard thoughtfully.（他若有所思地捋着胡须。）',
        'The mother stroked her child\'s hair.（母亲抚摸着孩子的头发。）',
      ],
      synonyms: [
        { word: 'rubbed', note: '摩擦、揉搓，力度比 stroke 大' },
        { word: 'patted', note: '轻拍，动作是上下轻拍而非沿表面滑动' },
        { word: 'slapped', note: '反义词：拍打，力度大且突然' },
      ],
    },
    {
      word: 'wiggled',
      phonetic: '/ˈwɪɡld/',
      brief: '扭动，蠕动（wiggle 的过去式）',
      pos: 'verb',
      detail:
        'wiggled 是 wiggle 的过去式，意为"扭动、蠕动"，指小幅度地左右或上下快速摆动。原文中"the pill wiggled"——仙丹扭动了一下。wiggled 是一个关键伏笔——这颗"仙丹"其实是悟空变化的，他变身成仙丹被狼精端到黑熊精面前，当仙丹突然扭动时，预示着悟空即将在黑熊精肚子里大闹。',
      examples: [
        'The worm wiggled in the dirt.（虫子在泥土里蠕动。）',
        'The child wiggled his loose tooth.（小孩摇晃他那颗松动的牙齿。）',
        'She wiggled her toes in the sand.（她在沙子里扭动脚趾。）',
      ],
      synonyms: [
        { word: 'wriggled', note: '扭动、挣扎，幅度比 wiggle 大' },
        { word: 'squirmed', note: '蠕动、局促不安地扭动，侧重不适感' },
        { word: 'stayed still', note: '反义词：保持不动' },
      ],
    },
    {
      word: 'slid',
      phonetic: '/slɪd/',
      brief: '滑入，溜入（slide 的过去式）',
      pos: 'verb',
      detail:
        'slid 是 slide 的过去式，意为"滑入、溜入"，指平滑顺畅地进入或通过某处。原文中"It shot into his mouth and slid down his throat"——它射入他的口中，滑入他的喉咙。slid down his throat 描绘了悟空变化成的仙丹顺滑地滑进黑熊精食道的瞬间——从 wiggled（扭动预兆）到 shot（射入口中）再到 slid（滑入喉咙），三个动词构成一连串不可逆的动作。',
      examples: [
        'The book slid off the table.（书从桌上滑落了。）',
        'She slid the key into the lock.（她把钥匙滑入锁孔。）',
        'The snake slid through the grass.（蛇从草丛中滑过。）',
      ],
      synonyms: [
        { word: 'slipped', note: '滑入、溜入，侧重顺畅无阻' },
        { word: 'glided', note: '滑行，侧重优雅流畅的动作' },
        { word: 'got stuck', note: '反义词：卡住' },
      ],
    },
    {
      word: 'disguise',
      phonetic: '/dɪsˈɡaɪz/',
      brief: '伪装，假扮',
      pos: 'noun',
      detail:
        'disguise 意为"伪装、假扮"，指改变外貌以隐藏真实身份。原文中"You tricked me with a disguise!"——你用伪装骗了我！黑熊精发现眼前的"道士"其实是 Guanyin 变化而成的，disguise 在此指 Guanyin 和悟空共同策划的变身计谋——Guanyin 变成狼精的模样，悟空变成仙丹，层层伪装。',
      examples: [
        'He wore a disguise to the party.（他化装去了派对。）',
        'She recognized him despite his disguise.（尽管他伪装了，她还是认出了他。）',
        'The spy was in disguise.（间谍乔装打扮。）',
      ],
      synonyms: [
        { word: 'costume', note: '服装、戏服，侧重装饰性而非隐藏身份' },
        { word: 'mask', note: '面具，侧重遮盖面部的道具' },
        { word: 'true self', note: '反义词：真实面目' },
      ],
    },
    {
      word: 'groaned',
      phonetic: '/ɡroʊnd/',
      brief: '呻吟，痛苦地哼声（groan 的过去式）',
      pos: 'verb',
      detail:
        'groaned 是 groan 的过去式，意为"呻吟、痛苦地哼声"，指因疼痛或不适发出低沉的声音。原文中两次出现：第一次"He held his stomach and groaned"——他捂着肚子呻吟；第二次"He fell to his knees and groaned again"——他跪倒在地又呻吟起来。两次 groaned 对应悟空在肚子里不同阶段的攻击——先是隐痛，然后剧痛到跪倒。',
      examples: [
        'The patient groaned in pain.（病人痛苦地呻吟。）',
        'He groaned when he saw the bill.（他看到账单时痛苦地哼了一声。）',
        'She groaned and rolled over in bed.（她呻吟着在床上翻了个身。）',
      ],
      synonyms: [
        { word: 'moaned', note: '呻吟、哀叹，声音更长更持续' },
        { word: 'grunted', note: '哼哼声，短促而低沉' },
        { word: 'cheered', note: '反义词：欢呼' },
      ],
    },
    {
      word: 'punched',
      phonetic: '/pʌntʃt/',
      brief: '用拳猛击，捶打（punch 的过去式）',
      pos: 'verb',
      detail:
        'punched 是 punch 的过去式，意为"用拳猛击、捶打"，指握紧拳头用力击打。原文中"The monkey punched and kicked the bear\'s insides"——猴子在黑熊精体内拳打脚踢。punched and kicked 是经典搭配，描绘了悟空在妖怪肚子里的暴烈攻击——配合拟声词 Boomph! Pow!，读者仿佛能听到拳头击打内脏的闷响。',
      examples: [
        'He punched the wall in anger.（他愤怒地捶墙。）',
        'She punched him in the stomach.（她一拳打在他肚子上。）',
        'The boxer punched his opponent.（拳击手击打了对手。）',
      ],
      synonyms: [
        { word: 'struck', note: '击打，通用说法，不限于拳头' },
        { word: 'slugged', note: '猛击，口语化，侧重沉重的一拳' },
        { word: 'caressed', note: '反义词：轻抚，温柔地触摸' },
      ],
    },
    {
      word: 'flips',
      phonetic: '/flɪps/',
      brief: '空翻，翻跟头（flip 的复数）',
      pos: 'noun',
      detail:
        'flips 是 flip 的复数形式，意为"空翻、翻跟头"，指身体在空中完成翻转的动作。原文中"Wukong jumped up and down, did flips, and ran around in circles"——悟空上蹿下跳、翻跟头、绕圈跑。flips 展现了悟空在黑熊精肚子里肆无忌惮地运动——不仅拳打脚踢，还翻跟头、绕圈跑，把妖怪的肚子当成了游乐场。',
      examples: [
        'The gymnast did three flips in a row.（体操运动员连续翻了三个跟头。）',
        'He did a back flip off the diving board.（他从跳板上做了个后空翻入水。）',
        'The acrobat performed amazing flips.（杂技演员表演了惊人的空翻。）',
      ],
      synonyms: [
        { word: 'somersaults', note: '翻筋斗，更正式的体操术语' },
        { word: 'tumbles', note: '翻滚，侧重翻滚而非空中翻转' },
      ],
    },
    {
      word: 'charged',
      phonetic: '/tʃɑːrdʒd/',
      brief: '猛冲，冲锋（charge 的过去式）',
      pos: 'verb',
      detail:
        'charged 是 charge 的过去式，意为"猛冲、冲锋"，指快速、凶猛地向目标冲去。原文中"the Black Wind King charged at Guanyin"——黑风王向观音猛冲过去。charged 发生在悟空离开去取袈裟的间隙——黑熊精趁机试图偷袭 Guanyin，暴露了他"投降"的虚伪，也为 Guanyin 用金属环制服他提供了正当理由。',
      examples: [
        'The bull charged at the matador.（公牛向斗牛士冲去。）',
        'The soldiers charged the enemy.（士兵们向敌人冲锋。）',
        'He charged across the field.（他猛冲过田野。）',
      ],
      synonyms: [
        { word: 'rushed', note: '猛冲，最通用的说法' },
        { word: 'lunged', note: '猛扑，侧重突然的前冲动作' },
        { word: 'retreated', note: '反义词：撤退，后退' },
      ],
    },
    {
      word: 'clamped onto',
      phonetic: '/klæmpt ˈɒntə/',
      brief: '紧紧夹住，扣住（clamp onto 的过去式）',
      pos: 'phrase',
      detail:
        'clamped onto 是 clamp onto 的过去式，意为"紧紧夹住、扣住"，指用力合拢并牢牢固定在某物上。原文中两次出现：两条金属环扣住了黑熊精的手腕，另外两条扣住了脚踝。clamped onto 描绘了金属环自动收紧、牢牢箍住四肢的机械感——一旦扣上就无法挣脱，与悟空头上的金箍一样是永久性的约束。',
      examples: [
        'The crab clamped onto his finger.（螃蟹紧紧夹住了他的手指。）',
        'She clamped the paper onto the clipboard.（她把纸紧紧夹在写字板上。）',
        'The vise clamped onto the wood.（虎钳紧紧夹住了木头。）',
      ],
      synonyms: [
        { word: 'gripped', note: '紧握，侧重手的抓握' },
        { word: 'fastened to', note: '固定在…上，较中性' },
        { word: 'released', note: '反义词：松开，释放' },
      ],
    },
    {
      word: 'wrists',
      phonetic: '/rɪsts/',
      brief: '手腕（wrist 的复数）',
      pos: 'noun',
      detail:
        'wrists 是 wrist 的复数形式，意为"手腕"，指手臂与手之间的关节处。原文中"Two clamped onto his wrists"——两条（金属环）扣住了他的手腕。wrists 和 ankles 并列出现，描述 Guanyin 用金属环束缚黑熊精四肢的过程——双手双脚都被金属环紧紧箍住，使其无法反抗。',
      examples: [
        'She wore a bracelet on her wrist.（她手腕上戴着一只手镯。）',
        'He sprained his wrist playing tennis.（他打网球时扭伤了手腕。）',
        'The handcuffs clicked onto his wrists.（手铐咔嗒一声铐住了他的手腕。）',
      ],
      synonyms: [
        { word: 'joints', note: '关节，泛指，不限于手腕' },
      ],
    },
    {
      word: 'ankles',
      phonetic: '/ˈæŋklz/',
      brief: '脚踝（ankle 的复数）',
      pos: 'noun',
      detail:
        'ankles 是 ankle 的复数形式，意为"脚踝"，指小腿与脚之间的关节处。原文中"The other two clamped onto his ankles"——另外两条（金属环）扣住了他的脚踝。ankles 与 wrists 配对出现，描述四肢被束缚的完整画面——双手双脚各被一个金属环扣住，黑熊精彻底失去了行动自由。',
      examples: [
        'She twisted her ankle while running.（她跑步时扭伤了脚踝。）',
        'His ankles were swollen after the hike.（徒步后他的脚踝肿了。）',
        'The chain was fastened to his ankles.（锁链锁在了他的脚踝上。）',
      ],
      synonyms: [
        { word: 'feet', note: '脚，泛指整只脚而非特指脚踝' },
      ],
    },
    {
      word: 'mercy',
      phonetic: '/ˈmɜːrsi/',
      brief: '仁慈，宽恕',
      pos: 'noun',
      detail:
        'mercy 意为"仁慈、宽恕"，指对有罪或处于自己掌控中的人给予宽容和怜悯。原文中"I will show him mercy"——我会对他仁慈。Guanyin 用 mercy 描述她对黑熊精的处置——虽然黑熊精偷了佛教珍宝、袭击了悟空，但 Guanyin 选择宽恕他，让他成为自己在普陀山的守卫。mercy 体现了佛教"慈悲为怀"的核心精神。',
      examples: [
        'The king showed mercy to the prisoner.（国王对囚犯展现了仁慈。）',
        'They begged for mercy.（他们乞求宽恕。）',
        'Have mercy on us!（请宽恕我们！）',
      ],
      synonyms: [
        { word: 'compassion', note: '同情、怜悯，侧重感同身受的关怀' },
        { word: 'forgiveness', note: '原谅、宽恕，侧重对过错的释然' },
        { word: 'cruelty', note: '反义词：残忍，残酷' },
      ],
    },
    {
      word: 'snout',
      phonetic: '/snaʊt/',
      brief: '（动物的）口鼻部，猪嘴',
      pos: 'noun',
      detail:
        'snout 意为"动物的口鼻部"，特指猪、熊等动物突出的长嘴巴。原文中"The creature had a pig\'s snout and ears"——那生物长着猪一样的嘴巴和耳朵。snout 在此是辨认猪八戒外貌的关键词——虽然他能像人一样直立行走，但 snout 和 ears 暴露了他的猪妖身份。',
      examples: [
        'The pig rooted around with its snout.（猪用鼻子到处拱。）',
        'The dog pushed its snout into the bag.（狗把嘴拱进了袋子里。）',
        'The crocodile has a long snout.（鳄鱼有长长的嘴巴。）',
      ],
      synonyms: [
        { word: 'muzzle', note: '动物的口鼻部，多用于狗、马等' },
        { word: 'nose', note: '鼻子，通用词，人类和动物通用' },
      ],
    },
    {
      word: 'Surrender',
      phonetic: '/səˈrɛndər/',
      brief: '投降，放弃抵抗',
      pos: 'verb',
      detail:
        'Surrender 意为"投降、放弃抵抗"，指在战斗或冲突中承认失败、停止反抗。原文中悟空大喊"Surrender now!"——现在投降！这是悟空与猪八戒交战时的喊话，展现出悟空自信满满的战斗风格——先让对方投降，不投降再动手。',
      examples: [
        'The soldiers surrendered to the enemy.（士兵向敌人投降了。）',
        '"Surrender!" shouted the police.（"投降！"警察喊道。）',
        'She surrendered after a long struggle.（她经过长时间挣扎后放弃了。）',
      ],
      synonyms: [
        { word: 'give up', note: '放弃，口语化，不限于战斗场景' },
        { word: 'yield', note: '屈服、让步，较正式' },
        { word: 'resist', note: '反义词：抵抗，反抗' },
      ],
    },
    {
      word: 'lunged',
      phonetic: '/lʌndʒd/',
      brief: '猛扑，突然冲向（lunge 的过去式）',
      pos: 'verb',
      detail:
        'lunged 是 lunge 的过去式，意为"猛扑、突然冲向"，指快速用力地向前扑去，常用于攻击动作。原文中两次出现：第一次猪八戒"He lunged at the monkey again"——他又向猴子猛扑过去；第二次老虎"Then he lunged at Bajie"——然后他向八戒猛扑过来。lunged 强调攻击时的突然性和爆发力。',
      examples: [
        'The dog lunged at the intruder.（狗向闯入者猛扑过去。）',
        'He lunged forward to catch the ball.（他猛地向前冲去接球。）',
        'The tiger lunged at its prey.（老虎向猎物猛扑过去。）',
      ],
      synonyms: [
        { word: 'charged', note: '冲锋，侧重持续向前的冲力' },
        { word: 'pounced', note: '猛扑，多用于猫科动物突然跳扑猎物' },
        { word: 'retreated', note: '反义词：撤退，后退' },
      ],
    },
    {
      word: 'punished',
      phonetic: '/ˈpʌnɪʃt/',
      brief: '受到惩罚，被处罚（punish 的过去式/过去分词）',
      pos: 'verb',
      detail:
        'punished 是 punish 的过去式/过去分词，意为"受到惩罚、被处罚"，指因犯错或做坏事而承受不良后果。原文中"I thought you were being punished"——我以为你正在受罚呢。猪八戒用 punished 来调侃悟空——既然大闹天宫后被压在山下五百年，那就应该还在"服刑"中。punished 在此揭示了猪八戒与悟空的共同背景——都是天庭的"罪人"。',
      examples: [
        'He was punished for lying.（他因为撒谎而受到了惩罚。）',
        'The criminal was punished by the law.（罪犯受到了法律的制裁。）',
        'She punished her son by taking away his toys.（她没收玩具来惩罚儿子。）',
      ],
      synonyms: [
        { word: 'penalized', note: '被处罚，较正式，多用于规则或法律层面' },
        { word: 'disciplined', note: '被管教，侧重教育和纠正' },
        { word: 'rewarded', note: '反义词：被奖励' },
      ],
    },
    {
      word: 'supposed to',
      phonetic: '/səˈpoʊzd tuː/',
      brief: '应该，理应（做某事）',
      pos: 'phrase',
      detail:
        'be supposed to 意为"应该、理应"，表示按计划、约定或期望应该做某事。原文中两次出现：猪八戒说"I\'m supposed to go with him too"——我也应该跟着他走；悟空说"Going to the Western Paradise is supposed to be difficult"——去西天取经本来就应该是艰难的。supposed to 在此强调"命运安排"——无论是八戒加入取经队伍，还是旅途注定艰辛，都是"本该如此"。',
      examples: [
        'You are supposed to be here by 8 am.（你应该早上8点到这里。）',
        'The movie is supposed to be really good.（据说这部电影非常好。）',
        'I\'m supposed to meet her at the station.（我应该去车站接她。）',
      ],
      synonyms: [
        { word: 'meant to', note: '注定、本该，侧重命运的安排' },
        { word: 'expected to', note: '被期望做，侧重他人的期望' },
      ],
    },
    {
      word: 'complaining',
      phonetic: '/kəmˈpleɪnɪŋ/',
      brief: '抱怨，发牢骚',
      pos: 'verb',
      detail:
        'complaining 是 complain 的现在分词形式，意为"抱怨、发牢骚"，指表达不满或诉说不如意。原文中两次出现：叙述者说"the pig kept complaining"——猪一直在抱怨；悟空说"Stop complaining"——别抱怨了。complaining 是猪八戒标志性的性格特征——他贪吃、怕累、爱发牢骚，与悟空的勇猛果断形成鲜明对比。',
      examples: [
        'She is always complaining about the weather.（她总是抱怨天气不好。）',
        'Stop complaining and do your homework!（别抱怨了，做作业去！）',
        'He kept complaining about the food.（他不停地抱怨饭菜不好。）',
      ],
      synonyms: [
        { word: 'grumbling', note: '嘟嘟囔囔地抱怨，声音低沉' },
        { word: 'whining', note: '哀怨地抱怨，语气更委屈' },
        { word: 'praising', note: '反义词：赞美，称赞' },
      ],
    },
    {
      word: 'snapped',
      phonetic: '/snæpt/',
      brief: '厉声说，怒气冲冲地说（snap 的过去式）',
      pos: 'verb',
      detail:
        'snapped 在此是 snap 的过去式，意为"厉声说、怒气冲冲地说话"，指突然且不客气地回话。原文中"Stop complaining, snapped Wukong"——别抱怨了，悟空厉声说道。snapped 刻画了悟空对八戒不停发牢骚的厌烦——不是温和地劝说，而是毫不客气地打断。snap 本义是"猛然折断"，引申为说话时语气的突然和尖锐。',
      examples: [
        '"Just do it!" she snapped.（"做就是了！"她厉声说道。）',
        'He snapped at me when I asked the question.（我问问题时他对我吼了一声。）',
        '"I\'m busy," she snapped.（"我忙着呢，"她不耐烦地说。）',
      ],
      synonyms: [
        { word: 'barked', note: '大声呵斥，语气粗暴' },
        { word: 'retorted', note: '反驳、回嘴，侧重针锋相对' },
        { word: 'whispered', note: '反义词：低语，轻声说' },
      ],
    },
    {
      word: 'moaned',
      phonetic: '/moʊnd/',
      brief: '呻吟，哀叹（moan 的过去式）',
      pos: 'verb',
      detail:
        'moaned 是 moan 的过去式，意为"呻吟、哀叹"，指因疼痛、不满或悲伤而发出低沉的哼声。原文中"The pig moaned. I\'m hungry too."——猪哼哼唧唧地说：我还饿呢。moaned 配合"我还饿"的台词，生动刻画了八戒贪吃懒做的形象——刚吃完早饭又喊饿，还要配上哼哼唧唧的抱怨声。',
      examples: [
        'The patient moaned in pain.（病人痛苦地呻吟着。）',
        'She moaned about having to get up early.（她哀叹要早起。）',
        'He moaned that the movie was too long.（他抱怨电影太长了。）',
      ],
      synonyms: [
        { word: 'groaned', note: '呻吟，声音更低沉，多因疼痛' },
        { word: 'whined', note: '哀怨地哼唧，语气更委屈' },
        { word: 'cheered', note: '反义词：欢呼' },
      ],
    },
    {
      word: 'bend',
      phonetic: '/bɛnd/',
      brief: '弯道，拐角处',
      pos: 'noun',
      detail:
        'bend 作名词意为"弯道、拐角处"，指道路转弯的地方。原文中"They went around a bend and saw a large tiger"——他们转过弯道，看见一只大老虎。bend 在此是故事转折的场景标记——弯道之前是轻松的赶路闲聊，弯道之后立刻遭遇老虎妖怪，一弯之间从喜剧切换到危机。',
      examples: [
        'The car slowed down at the bend in the road.（汽车在路弯处减速了。）',
        'There was a house just around the bend.（拐过弯就有一座房子。）',
        'The river has a sharp bend.（河流有一个急弯。）',
      ],
      synonyms: [
        { word: 'curve', note: '曲线、弯道，较平缓的弯曲' },
        { word: 'turn', note: '转弯处，最通用的说法' },
        { word: 'straight', note: '反义词：直道，直线段' },
      ],
    },
    {
      word: 'hosting',
      phonetic: '/ˈhoʊstɪŋ/',
      brief: '举办，做东（host 的现在分词）',
      pos: 'verb',
      detail:
        'hosting 是 host 的现在分词形式，意为"举办、做东"，指作为主人招待客人或组织活动。原文中"My master, the great king Yellow Wind, is hosting a feast"——我主人大王黄风正在举办宴席。hosting 在此以进行时态出现，说明宴席正在进行中，老虎是出来为宴席"采购食材"的——而这个"食材"就是唐僧。',
      examples: [
        'She is hosting a dinner party tonight.（她今晚举办晚宴。）',
        'The city is hosting the Olympics.（这座城市正在举办奥运会。）',
        'Who is hosting the meeting?（谁在主持这次会议？）',
      ],
      synonyms: [
        { word: 'organizing', note: '组织、筹办，侧重策划安排' },
        { word: 'throwing', note: '举办（口语），如 throw a party' },
        { word: 'attending', note: '反义词：参加（作为客人而非主人）' },
      ],
    },
    {
      word: 'pale',
      phonetic: '/peɪl/',
      brief: '苍白的，没有血色的',
      pos: 'adjective',
      detail:
        'pale 意为"苍白的、没有血色的"，指脸色因恐惧或疾病而失去血色。原文中"The Tang Monk\'s face turned pale"——唐僧的脸变得惨白。pale 是经典的恐惧反应描写——听到妖怪说要吃自己，唐僧吓得脸色苍白，甚至从马上摔了下来。turned pale 是固定搭配，形容因惊吓而脸色突变。',
      examples: [
        'She turned pale when she heard the news.（她听到消息时脸色变得苍白。）',
        'He looked pale after being sick.（他病后面色苍白。）',
        'The walls were painted a pale blue.（墙壁被漆成了淡蓝色。）',
      ],
      synonyms: [
        { word: 'ashen', note: '灰白色的，程度更重，如死灰一般' },
        { word: 'wan', note: '病态的苍白，多因疾病或疲惫' },
        { word: 'flushed', note: '反义词：脸红的，满面红光的' },
      ],
    },
    {
      word: 'dare',
      phonetic: '/dɛr/',
      brief: '胆敢，竟敢',
      pos: 'verb',
      detail:
        'dare 意为"胆敢、竟敢"，表示对某人做某事的震惊或愤怒，常用于否定句和疑问句中表示强烈的警告。原文中"Don\'t you dare harm our master!"——你竟敢伤害我们的师傅！don\'t you dare 是固定搭配，表示强烈的警告和威慑——八戒虽然贪吃懒做，但面对威胁唐僧的敌人时也展现出了护主的勇气。',
      examples: [
        'Don\'t you dare talk to me like that!（你竟敢这样跟我说话！）',
        'How dare you!（你怎么敢！）',
        'I dare you to do it.（我量你也不敢/你敢做吗。）',
      ],
      synonyms: [
        { word: 'venture', note: '胆敢，较正式' },
        { word: 'have the nerve to', note: '竟有脸做某事，口语化' },
      ],
    },
    {
      word: 'claws',
      phonetic: '/klɔːz/',
      brief: '爪子，利爪（claw 的复数）',
      pos: 'noun',
      detail:
        'claws 是 claw 的复数形式，意为"爪子、利爪"，指动物脚上尖锐弯曲的指甲。原文中"The tiger showed his claws"——老虎亮出了利爪。showed his claws 是展示攻击性的动作——老虎没有直接扑上来，而是先亮出武器，这是一种威慑性的示威行为。',
      examples: [
        'The cat scratched me with its claws.（猫用爪子抓了我。）',
        'Eagles have sharp claws.（鹰有锋利的爪子。）',
        'The bear\'s claws were huge.（熊的爪子非常大。）',
      ],
      synonyms: [
        { word: 'talons', note: '猛禽的利爪，如鹰、隼的爪' },
        { word: 'nails', note: '指甲，人类手指甲' },
      ],
    },
    {
      word: 'dodged',
      phonetic: '/ˈdɒdʒd/',
      brief: '闪避，躲开（dodge 的过去式）',
      pos: 'verb',
      detail:
        'dodged 是 dodge 的过去式，意为"闪避、躲开"，指快速移动身体以避开攻击或危险。原文中"The tiger dodged the bar"——老虎躲开了铁棒。dodged 刻画了老虎的身手敏捷——面对悟空打来的铁棒，它不是硬接而是灵巧闪避，说明这只老虎妖怪不是普通的野兽，有一定的战斗能力。',
      examples: [
        'He dodged the ball at the last second.（他在最后一秒躲开了球。）',
        'She dodged the question.（她回避了那个问题。）',
        'The boxer dodged the punch.（拳击手躲过了那一拳。）',
      ],
      synonyms: [
        { word: 'evaded', note: '规避、躲开，较正式' },
        { word: 'ducked', note: '低头躲过，侧重弯腰或低头闪避' },
        { word: 'confronted', note: '反义词：正面面对，迎击' },
      ],
    },
    {
      word: 'lay',
      phonetic: '/leɪ/',
      brief: '平放着，搁在…上面（lie 的过去式）',
      pos: 'verb',
      detail:
        'lay 是 lie 的过去式，意为"平放、躺"，指物体水平地放置在某处。原文中"a tiger skin lay over a rock"——一块虎皮平铺在石头上。lay 在此揭示了真相——悟空和八戒追踪的"老虎"其实已经逃走了，只留下了一张虎皮铺在石头上，说明老虎被吓得不轻，连皮都"跑掉了"。',
      examples: [
        'The book lay on the table.（书平放在桌子上。）',
        'A blanket lay over the bed.（毯子铺在床上。）',
        'The cat lay in the sun.（猫躺在阳光下。）',
      ],
      synonyms: [
        { word: 'rested', note: '搁在、放在，较中性' },
        { word: 'was spread', note: '被铺开，侧重展开的状态' },
      ],
    },
    {
      word: 'ran right out of',
      phonetic: '/ræn raɪt aʊt ʌv/',
      brief: '直接从…跑出来（夸张用法）',
      pos: 'phrase',
      detail:
        'ran right out of 在此是夸张的幽默表达，字面意思是"直接从…里面跑了出来"。原文中"He was so scared, he ran right out of his skin!"——他吓得不轻，连皮都直接跑出来了！正常情况下不可能从自己的皮里"跑出来"，但这里是悟空的玩笑话——老虎跑得太快，连虎皮都留在了原地，就好像老虎从自己的皮里钻出来逃跑了一样。',
      examples: [
        'He jumped right out of his chair.（他直接从椅子上跳了起来。）',
        'The dog ran right out of the yard.（狗直接从院子里跑了出去。）',
        'She was so scared she almost jumped right out of her skin.（她吓得魂飞魄散。）',
      ],
      synonyms: [
        { word: 'burst out of', note: '从…中冲出来，强调爆发力' },
        { word: 'escaped from', note: '从…中逃脱，侧重摆脱困境' },
      ],
    },
    {
      word: 'slapped',
      phonetic: '/slæpt/',
      brief: '拍打，拍…的背（slap 的过去式）',
      pos: 'verb',
      detail:
        'slapped 是 slap 的过去式，意为"拍打、掌击"，指用手掌快速击打。原文中"He slapped Bajie on the back"——他拍了一下八戒的后背。slapped someone on the back 是西方文化中表示庆祝、鼓励或友好的常见肢体动作（相当于中文的"拍肩膀"），这里悟空用这个动作庆祝他们的胜利。',
      examples: [
        'He slapped his friend on the back.（他拍了拍朋友的后背。）',
        'She slapped the mosquito on her arm.（她一巴掌拍死了胳膊上的蚊子。）',
        'The coach slapped the player on the back to congratulate him.（教练拍拍球员的后背表示祝贺。）',
      ],
      synonyms: [
        { word: 'patted', note: '轻拍，力度更轻更温柔' },
        { word: 'whacked', note: '重拍、猛打，力度比 slap 大得多' },
        { word: 'stroked', note: '反义词：抚摸，温柔地触碰' },
      ],
    },
    {
      word: 'slumped',
      phonetic: '/slʌmpt/',
      brief: '瘫软地垂着，无力地耷拉',
      pos: 'verb',
      detail:
        'slumped 是 slump 的过去式，意为"瘫倒、无力地垂着"，指身体因失去力气或意识而耷拉下来。原文中"The Tang Monk was slumped over the tiger\'s shoulder"——唐僧无力地耷拉在老虎的肩膀上。slumped over 描绘了唐僧被绑架时的状态——不是站立或行走，而是像一袋面粉一样软绵绵地搭在妖怪肩上，暗示他可能已昏迷或吓得动弹不得。',
      examples: [
        'He slumped in his chair, exhausted.（他筋疲力尽地瘫坐在椅子里。）',
        'She was slumped over the steering wheel.（她无力地趴在方向盘上。）',
        'The unconscious man slumped to the ground.（那个失去知觉的人瘫倒在地上。）',
      ],
      synonyms: [
        { word: 'slouched', note: '没精打采地垂着，侧重姿态懒散' },
        { word: 'collapsed', note: '倒塌、瘫倒，侧重突然倒下' },
        { word: 'sat upright', note: '反义词：笔直地坐着' },
      ],
    },
    {
      word: 'trembled',
      phonetic: '/ˈtrɛmbld/',
      brief: '发抖，颤抖（tremble 的过去式）',
      pos: 'verb',
      detail:
        'trembled 是 tremble 的过去式，意为"发抖、颤抖"，指身体因恐惧、寒冷或激动而轻微快速地抖动。原文中"Yellow Wind trembled. A monkey?"——黄风大王颤抖了一下。"一只猴子？"trembled 刻画了黄风大王听到"猴子"时的本能恐惧反应——尽管他自己是强大的妖王，但齐天大圣的名号足以让他发抖，侧面说明了悟空在天庭的威名远扬。',
      examples: [
        'She trembled with fear.（她吓得发抖。）',
        'His hands trembled as he opened the letter.（他拆信时双手颤抖。）',
        'The dog trembled in the cold.（狗冻得直哆嗦。）',
      ],
      synonyms: [
        { word: 'shivered', note: '哆嗦，多因寒冷' },
        { word: 'quaked', note: '剧烈颤抖，程度比 tremble 更强' },
        { word: 'remained calm', note: '反义词：保持镇定' },
      ],
    },
    {
      word: 'distracted',
      phonetic: '/dɪˈstræktɪd/',
      brief: '转移注意力，分散（distract 的过去式）',
      pos: 'verb',
      detail:
        'distracted 是 distract 的过去式，意为"转移注意力、分散注意力"，指用某种手段让对手的注意力从正事上移开。原文中"I distracted them with a fake tiger skin"——我用一张假虎皮转移了他们的注意力。distracted 在此是老虎向黄风大王邀功的关键词——他用伪装的虎皮让悟空和八戒以为他已经脱皮逃跑，实际是金蝉脱壳之计。',
      examples: [
        'The noise distracted me from my work.（噪音让我无法专心工作。）',
        'She distracted the baby with a toy.（她用玩具转移了宝宝的注意力。）',
        'He was distracted by his phone.（他被手机分散了注意力。）',
      ],
      synonyms: [
        { word: 'diverted', note: '转移、使转向，较正式' },
        { word: 'misled', note: '误导，侧重给出错误信息' },
        { word: 'focused', note: '反义词：集中注意力' },
      ],
    },
    {
      word: 'spices',
      phonetic: '/ˈspaɪsɪz/',
      brief: '香料，调味品（spice 的复数）',
      pos: 'noun',
      detail:
        'spices 是 spice 的复数形式，意为"香料、调味品"，指用于给食物增添风味的植物性调料。原文中"prepare some spices"——准备一些香料。老虎提到要准备香料来烹饪唐僧，这个细节既增添了黑色幽默——把吃人当作烹饪美食一样认真对待，也展现了妖怪世界的"日常生活感"。',
      examples: [
        'Indian food uses many spices.（印度菜使用很多香料。）',
        'She added spices to the soup.（她往汤里加了香料。）',
        'The market sells a variety of spices.（市场上出售各种香料。）',
      ],
      synonyms: [
        { word: 'seasonings', note: '调味料，包括盐、酱油等，范围更广' },
        { word: 'herbs', note: '草本调料，如罗勒、迷迭香等' },
      ],
    },
    {
      word: 'get rid of',
      phonetic: '/ɡɛt rɪd ʌv/',
      brief: '摆脱，除掉，赶走',
      pos: 'phrase',
      detail:
        'get rid of 意为"摆脱、除掉、赶走"，指消除、处理掉不需要或讨厌的人或事物。原文中"I will get rid of them"——我会除掉他们。老虎用 get rid of 表示要"解决掉"悟空和八戒，语气轻松自信，仿佛收拾两个人只是举手之劳。get rid of 既可用于人也可用于物，是非常高频的口语表达。',
      examples: [
        'We need to get rid of the old furniture.（我们需要处理掉旧家具。）',
        'How can I get rid of this headache?（我怎么才能摆脱这个头痛？）',
        'She got rid of the unwanted guests.（她打发走了不受欢迎的客人。）',
      ],
      synonyms: [
        { word: 'eliminate', note: '消灭、消除，较正式，语气更重' },
        { word: 'dispose of', note: '处理掉，侧重丢弃或销毁' },
        { word: 'keep', note: '反义词：保留' },
      ],
    },
    {
      word: 'crashing',
      phonetic: '/ˈkræʃɪŋ/',
      brief: '碰撞声，轰隆声',
      pos: 'verb / adjective',
      detail:
        'crashing 是 crash 的现在分词形式，在此作形容词用，意为"碰撞的、轰隆作响的"，形容物体撞击发出的巨大声响。原文中"there was some yelling and then a crashing sound"——先是一些叫喊声，接着是一声轰隆巨响。crashing sound 暗示了外面发生了猛烈的撞击——悟空和八戒正在痛击老虎妖怪，声音从洞外传到洞内。',
      examples: [
        'We heard a crashing sound from the kitchen.（我们听到厨房传来一阵轰隆声。）',
        'The crashing waves hit the shore.（轰隆作响的海浪拍打着岸边。）',
        'There was a crashing noise as the tree fell.（树倒下时发出一阵轰隆声。）',
      ],
      synonyms: [
        { word: 'smashing', note: '猛烈的，侧重破碎的声音' },
        { word: 'thundering', note: '雷鸣般的，声音极大' },
        { word: 'silent', note: '反义词：安静的' },
      ],
    },
    {
      word: 'disaster',
      phonetic: '/dɪˈzæstər/',
      brief: '灾难，大祸',
      pos: 'noun',
      detail:
        'disaster 意为"灾难、大祸"，指突然发生的严重不幸事件。原文中小妖跑进来大喊"Great king, disaster!"——大王，大祸临头了！disaster 在此是紧急报警的用语——老虎被八戒一耙打死，说明外面的猴猪组合远比预想的强大，整个洞穴的安全都受到威胁。',
      examples: [
        'The earthquake was a terrible disaster.（地震是一场可怕的灾难。）',
        'The party was a complete disaster.（派对彻底搞砸了。）',
        'We need a plan to prevent disasters.（我们需要一个防灾计划。）',
      ],
      synonyms: [
        { word: 'catastrophe', note: '大灾难，程度比 disaster 更重' },
        { word: 'calamity', note: '灾祸，较正式，多用于书面语' },
        { word: 'triumph', note: '反义词：大捷，辉煌胜利' },
      ],
    },
    {
      word: 'trident',
      phonetic: '/ˈtraɪdənt/',
      brief: '三叉戟，三尖兵器',
      pos: 'noun',
      detail:
        'trident 意为"三叉戟、三尖兵器"，是一种有三个尖头的长柄武器，在西方神话中海神波塞冬手持的就是三叉戟。原文中两次出现：黄风大王先"grabbed a trident"——抓起一把三叉戟，然后用它挡住了悟空的铁棒。trident 作为妖王的武器，与悟空的 iron bar 形成对峙——三叉对一棒，各有威势。',
      examples: [
        'Poseidon carries a trident in Greek mythology.（希腊神话中波塞冬手持三叉戟。）',
        'The statue shows Neptune with his trident.（雕像展示海王手持三叉戟。）',
        'The warrior fought with a trident.（战士用三叉戟作战。）',
      ],
      synonyms: [
        { word: 'spear', note: '长矛，有两个尖头或一个尖头' },
        { word: 'pitchfork', note: '干草叉，农具，外形类似三叉戟' },
      ],
    },
    {
      word: 'puffed out',
      phonetic: '/pʌft aʊt/',
      brief: '鼓起来，挺起（胸膛）',
      pos: 'phrase',
      detail:
        'puffed out 是 puff out 的过去式，意为"鼓起来、挺起"，指身体某部分因充气或用力而膨胀突出。原文中"He puffed out his chest"——他挺起了胸膛。puffed out his chest 是经典的肢体语言，表示自信、骄傲或虚张声势。黄风大王听到悟空大名时先是 trembled（发抖），但随即 puff out his chest（挺起胸膛），展现了妖怪"先怕后逞强"的心理转变。',
      examples: [
        'He puffed out his chest proudly.（他骄傲地挺起了胸膛。）',
        'The bird puffed out its feathers in the cold.（鸟在寒冷中把羽毛蓬起来保暖。）',
        'She puffed out her cheeks and blew.（她鼓起腮帮子吹气。）',
      ],
      synonyms: [
        { word: 'swelled', note: '膨胀、鼓起，侧重体积增大' },
        { word: 'inflated', note: '充气膨胀，较正式' },
        { word: 'shrank', note: '反义词：缩小，收缩' },
      ],
    },
    {
      word: 'stomped out',
      phonetic: '/stɒmpt aʊt/',
      brief: '怒气冲冲地走出去（stomp out 的过去式）',
      pos: 'phrase',
      detail:
        'stomped out 是 stomp out 的过去式，意为"怒气冲冲地走出去"，指用力踩着脚步、带着怒气离开某处。原文中"He stomped out of the cave"——他怒气冲冲地走出洞穴。stomped out 与前面的 puffed out his chest 形成连贯动作链——先挺胸壮胆，再大步流星地走出洞穴迎战，刻画了黄风大王虚张声势的出场。',
      examples: [
        'She stomped out of the room in anger.（她怒气冲冲地跺着脚走出了房间。）',
        'He stomped out of the meeting.（他气冲冲地离开了会议。）',
        'The child stomped out, slamming the door.（孩子跺着脚走出去，砰地关上了门。）',
      ],
      synonyms: [
        { word: 'stormed out', note: '怒气冲冲地冲出去，速度更快更猛烈' },
        { word: 'marched out', note: '大步走出去，侧重步伐坚定' },
        { word: 'tiptoed out', note: '反义词：蹑手蹑脚地走出去' },
      ],
    },
    {
      word: 'Dozens',
      phonetic: '/ˈdʌzənz/',
      brief: '几十个，许多（dozen 的复数）',
      pos: 'noun',
      detail:
        'dozens 是 dozen 的复数形式，dozen 意为"一打、十二个"，复数 dozens 引申为"几十个、许多"。原文中"Dozens of little Wukongs ran toward the demon king"——几十个小悟空朝妖王冲去。Dozens of 是固定搭配，表示"大量的"。悟空用拔毛变身的法术变出几十个分身围攻敌人，这是他标志性的战斗技能之一。',
      examples: [
        'There were dozens of people at the party.（派对上有几十个人。）',
        'She has dozens of books on her shelf.（她的书架上有几十本书。）',
        'We need dozens of eggs for the recipe.（这个食谱需要几十个鸡蛋。）',
      ],
      synonyms: [
        { word: 'scores of', note: '许多、大量，约二十的倍数' },
        { word: 'numerous', note: '无数的、大量的，不强调具体数量' },
      ],
    },
  ],
  book_05: [
    {
      word: 'moaned',
      phonetic: '/moʊnd/',
      brief: '呻吟，抱怨地说',
      pos: 'verb (past tense of moan)',
      detail:
        'moan 指发出低沉的呻吟声，表示痛苦、不满或疲倦。原文中八戒在战斗结束后抱怨"Ugh, I need a nap"，moaned 体现了他懒散、怕吃苦的性格——明明师父还被妖怪抓着，他却只想着睡觉。',
      examples: [
        'The patient moaned in pain.（病人在痛苦中呻吟。）',
        '"I\'m so tired," she moaned.（"我太累了，"她抱怨道。）',
      ],
      synonyms: [
        { word: 'groaned', note: '发出低沉不满的声音，更侧重痛苦或厌烦' },
        { word: 'complained', note: '直接用语言抱怨，没有呻吟的语气' },
      ],
    },
    {
      word: 'sneak',
      phonetic: '/sniːk/',
      brief: '偷偷溜进去，潜入',
      pos: 'verb',
      detail:
        'sneak 指悄悄地、不被人发现地移动或进入某处。原文中悟空说"I\'ll sneak into the cave"，表示他要变身成蚊子偷偷潜入妖怪洞府打探情况。这是悟空常用的策略——不正面硬闯，而是用变化之术暗中行动。',
      examples: [
        'He sneaked into the room quietly.（他悄悄地溜进了房间。）',
        'The cat sneaked up on the bird.（猫悄悄地靠近那只鸟。）',
      ],
      synonyms: [
        { word: 'slip into', note: '悄悄进入，强调动作流畅不引人注意' },
        { word: 'creep into', note: '蹑手蹑脚地进入，强调小心谨慎' },
      ],
    },
    {
      word: 'mosquito',
      phonetic: '/məˈskiːtoʊ/',
      brief: '蚊子',
      pos: 'noun',
      detail:
        'mosquito 是一种会叮咬人的小飞虫。原文中悟空把自己变成一只蚊子（mosquito），从洞门的缝隙中挤进去。这是悟空七十二变的经典运用——变成极小的生物来隐藏自己、通过狭窄空间。该词在文中出现两次，分别描述悟空变身进入洞府和向唐僧解释自己的形态。',
      examples: [
        'Mosquitoes buzz around in summer.（夏天蚊子嗡嗡地飞来飞去。）',
        'A mosquito bit me on the arm.（一只蚊子叮了我的手臂。）',
      ],
      synonyms: [
        { word: 'insect', note: '泛指昆虫，不特指蚊子' },
        { word: 'bug', note: '口语中泛指小虫子' },
      ],
    },
    {
      word: 'raced',
      phonetic: '/reɪst/',
      brief: '飞速奔跑，疾驰',
      pos: 'verb (past tense of race)',
      detail:
        'race 作动词表示"快速移动、疾驰"，比 run 更强调速度感。原文中悟空得知只有灵吉菩萨能制服黄风怪后，立刻驾云赶往须弥山，raced 表现了他焦急的心情——师父随时可能被妖怪吃掉，他必须争分夺秒。',
      examples: [
        'She raced to the hospital.（她飞奔赶往医院。）',
        'The car raced down the highway.（汽车在高速公路上疾驰。）',
      ],
      synonyms: [
        { word: 'dashed', note: '猛冲，强调突然性和爆发力' },
        { word: 'hurried', note: '急忙赶路，速度感不如 race 强' },
      ],
    },
    {
      word: 'pagoda',
      phonetic: '/pəˈɡoʊdə/',
      brief: '宝塔',
      pos: 'noun',
      detail:
        'pagoda 指东亚传统多层塔式建筑，多为佛教寺庙所建。原文中灵吉菩萨住在须弥山的一座宝塔（pagoda）中，这体现了佛教文化的背景设定。在《西游记》中，许多神仙和菩萨的居所都与佛教建筑有关。',
      examples: [
        'The ancient pagoda overlooks the city.（那座古老的宝塔俯瞰着城市。）',
        'Tourists visit the famous five-story pagoda.（游客们参观那座著名的五层宝塔。）',
      ],
      synonyms: [
        { word: 'tower', note: '泛指塔楼，不一定是佛教建筑风格' },
        { word: 'stupa', note: '佛教舍利塔，半球形，与多层 pagoda 不同' },
      ],
    },
    {
      word: 'weasel',
      phonetic: '/ˈwiːzəl/',
      brief: '黄鼠狼',
      pos: 'noun',
      detail:
        'weasel 是一种小型肉食性哺乳动物，身体细长灵活。原文揭示了黄风大王的真实身份——他其实是一只黄鼠狼精（weasel spirit）。灵吉菩萨奉佛祖之命监视他，但他没有安分守己，反而兴风作浪抓了唐僧。该词在文中出现三次：第一次是灵吉揭露其身份，第二次是他被打回原形，第三次是灵吉把他提起带走。',
      examples: [
        'A weasel slipped through the fence.（一只黄鼠狼从篱笆缝隙中钻了过去。）',
        'Weasels are known for being cunning.（黄鼠狼以狡猾著称。）',
      ],
      synonyms: [
        { word: 'stoat', note: '白鼬，与黄鼠狼近似的动物' },
        { word: 'ferret', note: '雪貂，常被驯养用来捕猎' },
      ],
    },
    {
      word: 'staff',
      phonetic: '/stæf/',
      brief: '杖，棍棒',
      pos: 'noun',
      detail:
        'staff 指长杆状的手杖或武器。原文中灵吉菩萨拿起一根杖（staff），后来他把这根杖掷出变成一条金龙来制服黄风怪。注意不要与悟空的金箍棒（iron bar）混淆——staff 更像是法杖，带有法力色彩。该词出现两次。',
      examples: [
        'The wizard carried a magic staff.（巫师拿着一根魔杖。）',
        'He leaned on his wooden staff for support.（他拄着木杖支撑身体。）',
      ],
      synonyms: [
        { word: 'cane', note: '手杖，拐杖，较短，多为辅助行走' },
        { word: 'rod', note: '细长的杆，不一定是法杖' },
      ],
    },
    {
      word: 'pile',
      phonetic: '/paɪl/',
      brief: '一堆',
      pos: 'noun',
      detail:
        'pile 指"一堆、一叠"，表示东西堆叠在一起的状态。原文中悟空一棒砸碎洞门后，门变成了一堆碎石（a pile of rubble），形象地描绘了破坏的彻底程度。',
      examples: [
        'There is a pile of books on the desk.（桌上有一堆书。）',
        'Leaves formed a pile in the corner.（树叶在角落里堆成了一堆。）',
      ],
      synonyms: [
        { word: 'heap', note: '一堆，更强调杂乱无序' },
        { word: 'stack', note: '整齐地堆放，有秩序的一叠' },
      ],
    },
    {
      word: 'rubble',
      phonetic: '/ˈrʌbəl/',
      brief: '碎石，瓦砾',
      pos: 'noun',
      detail:
        'rubble 指建筑破碎后残留的碎石瓦砾。原文中悟空用金箍棒把洞门砸成"一堆碎石"（a pile of rubble），生动展现了他惊人的力量——一棒之下，整扇门化为碎片。',
      examples: [
        'The building collapsed into rubble.（建筑倒塌成了一片瓦砾。）',
        'They cleared the rubble from the road.（他们清理了路上的碎石。）',
      ],
      synonyms: [
        { word: 'debris', note: '碎片残骸，范围更广，不限于建筑材料' },
        { word: 'fragments', note: '碎块，强调破碎的小片' },
      ],
    },
    {
      word: 'pearl',
      phonetic: '/pɜːrl/',
      brief: '珍珠',
      pos: 'noun',
      detail:
        'pearl 指珍珠，也泛指珠状的宝物。原文中灵吉菩萨手持的"定风珠"（wind-stopping pearl）是佛祖赐予的法宝，能克制黄风怪的妖风。黄风怪看到此珠后立刻惊呼，说明这是他最畏惧的克星。该词出现两次。',
      examples: [
        'She wore a necklace of pearls.（她戴着一条珍珠项链。）',
        'The dragon guarded a giant pearl.（龙守护着一颗巨大的珍珠。）',
      ],
      synonyms: [
        { word: 'gem', note: '宝石，泛指珍贵石头' },
        { word: 'jewel', note: '珠宝，贵重饰物' },
      ],
    },
    {
      word: 'against',
      phonetic: '/əˈɡenst/',
      brief: '撞在……上，靠着',
      pos: 'preposition',
      detail:
        'against 在此处表示"撞到、碰到"某物上。原文中金龙把黄风怪摔向岩石（threw Yellow Wind against some rocks），against 描绘了妖王被猛烈撞击到岩石上的画面，展现了灵吉菩萨法宝的威力。',
      examples: [
        'The car crashed against the wall.（汽车撞在了墙上。）',
        'He leaned against the tree.（他靠在树上。）',
      ],
      synonyms: [
        { word: 'into', note: '撞入，强调穿透或嵌入' },
        { word: 'onto', note: '撞到……上面，强调表面接触' },
      ],
    },
    {
      word: 'just',
      phonetic: '/dʒʌst/',
      brief: '仅仅，只是（强调语气）',
      pos: 'adverb',
      detail:
        'just 在此处用于强调语气，表示"仅仅、只是"。原文中悟空说佛祖不会把真经给"just anyone"（随便什么人），意思是真经只给经过考验的人，不是谁都行的。just 在这里缩小了范围，强调"不是任何人都能得到的"。',
      examples: [
        'He\'s not just a friend—he\'s my brother.（他不只是一个朋友——他是我的兄弟。）',
        'It\'s not just about money.（这不仅仅是钱的问题。）',
      ],
      synonyms: [
        { word: 'merely', note: '仅仅，只是，更正式' },
        { word: 'simply', note: '简直，只不过，可带感情色彩' },
      ],
    },
    {
      word: 'surviving',
      phonetic: '/sərˈvaɪvɪŋ/',
      brief: '存活，幸存',
      pos: 'verb (present participle of survive)',
      detail:
        'survive 指"在困难或危险中活下来、幸存"。原文中悟空告诉唐僧，取经之路需要通过"surviving a long and difficult journey"来证明自己配得上真经。surviving 这里用动名词形式，强调"一路活下来"这个过程本身就是考验。',
      examples: [
        'She survived the earthquake.（她在地震中幸存下来。）',
        'Surviving in the wilderness requires skills.（在荒野中生存需要技能。）',
      ],
      synonyms: [
        { word: 'enduring', note: '忍耐、坚持，侧重承受苦难' },
        { word: 'lasting', note: '持续、持久，侧重时间维度' },
      ],
    },
    {
      word: 'spear',
      phonetic: '/spɪr/',
      brief: '矛，枪',
      pos: 'noun',
      detail:
        'spear 是一种长柄刺击武器，前端有尖锐的金属头。原文中河中妖怪（后来的沙悟净）手持长矛冲出水面，悟空用金箍棒挡住了他的矛（blocked the monster\'s spear）。这是沙悟净加入取经团队前的首次亮相。',
      examples: [
        'Ancient warriors fought with spears.（古代武士用矛战斗。）',
        'He threw his spear at the target.（他把矛投向目标。）',
      ],
      synonyms: [
        { word: 'lance', note: '长矛，多为骑兵所用' },
        { word: 'pike', note: '超长矛，步兵方阵武器' },
      ],
    },
    {
      word: 'shore',
      phonetic: '/ʃɔːr/',
      brief: '岸边，岸上',
      pos: 'noun',
      detail:
        'shore 指水域边缘的陆地，即"岸边"。原文中八戒两次提到 shore：第一次是建议等妖怪完全上岸（comes all the way up on shore）再动手，第二次是抱怨悟空没等妖怪上岸就出手。该词出现两次，体现了"上岸才能安全战斗"的策略。',
      examples: [
        'We walked along the shore of the lake.（我们沿着湖边散步。）',
        'The ship was anchored near the shore.（船停泊在岸边附近。）',
      ],
      synonyms: [
        { word: 'bank', note: '河岸，多指河流两岸' },
        { word: 'coast', note: '海岸，多指海洋的边缘' },
      ],
    },
    {
      word: 'impatient',
      phonetic: '/ɪmˈpeɪʃənt/',
      brief: '不耐烦的，急躁的',
      pos: 'adjective',
      detail:
        'impatient 指无法等待或忍受延迟，"急躁、不耐烦"。原文中八戒批评悟空"You\'re too impatient"——悟空没有等妖怪上岸就急急忙忙出手，导致妖怪逃回水中。这是悟空性格中急躁一面的体现，也是八戒难得正确的一次判断。',
      examples: [
        'Don\'t be so impatient—the bus will come.（别这么不耐烦——公交车会来的。）',
        'She was growing impatient with the delay.（她对延误越来越不耐烦了。）',
      ],
      synonyms: [
        { word: 'restless', note: '坐立不安的，侧重身体上的不安' },
        { word: 'hasty', note: '仓促的，侧重行动过于急躁' },
      ],
    },
    {
      word: 'attacked',
      phonetic: '/əˈtækt/',
      brief: '攻击，进攻',
      pos: 'verb (past tense of attack)',
      detail:
        'attack 指"发起攻击、进攻"。原文中沙悟净和八戒互相指责对方先动手——"They attacked me!" 对 "You attacked us first!" 这段对话充满喜剧效果，两人在菩萨面前像小孩子一样争吵。该词出现两次，分别代表双方各执一词。',
      examples: [
        'The enemy attacked at dawn.（敌人在黎明时发动了攻击。）',
        'The dog attacked the intruder.（狗攻击了闯入者。）',
      ],
      synonyms: [
        { word: 'assaulted', note: '猛烈攻击，更正式、语气更重' },
        { word: 'struck', note: '击打，侧重单次打击动作' },
      ],
    },
    {
      word: 'crimes',
      phonetic: '/kraɪmz/',
      brief: '罪行，罪过',
      pos: 'noun (plural of crime)',
      detail:
        'crime 指"罪行、犯罪行为"。原文中悟空说"Bajie and I were punished for crimes in Heaven too"，揭示了取经团队的共同背景——三个徒弟都曾因在天庭犯下过错而受到惩罚：悟空大闹天宫、八戒调戏嫦娥、沙僧打碎琉璃盏。这呼应了"赎罪之旅"的主题。',
      examples: [
        'He was punished for his crimes.（他因罪行受到了惩罚。）',
        'The city has a low crime rate.（这座城市的犯罪率很低。）',
      ],
      synonyms: [
        { word: 'offenses', note: '过错，违规行为，语气较轻' },
        { word: 'sins', note: '罪孽，偏宗教语境的过失' },
      ],
    },
    {
      word: 'doubtful',
      phonetic: '/ˈdaʊtfəl/',
      brief: '怀疑的，不确信的',
      pos: 'adjective',
      detail:
        'doubtful 指"感到怀疑、不确定"。原文中沙悟净对白龙马的身份表示怀疑——"This horse is too slow to be a dragon"。他刚加入团队，还不了解这匹马其实是小白龙变的，所以一脸不信的样子。doubtful 在这里表达了明显的怀疑态度。',
      examples: [
        'She looked doubtful about the plan.（她对这个计划看起来很怀疑。）',
        'I\'m doubtful that he will come.（我怀疑他会不会来。）',
      ],
      synonyms: [
        { word: 'skeptical', note: '持怀疑态度的，更强调理性质疑' },
        { word: 'suspicious', note: '起疑心的，带有警惕和不安' },
      ],
    },
    {
      word: 'struck',
      phonetic: '/strʌk/',
      brief: '打，击（strike 的过去式）',
      pos: 'verb (past tense of strike)',
      detail:
        'strike 的过去式，指"用力击打"。原文中悟空为了向沙悟净证明白马确实是龙，"struck the horse"——他拍了马一下，白马立刻以闪电般的速度飞奔出去。这一"击"不是为了伤害，而是为了激活白龙马的真身力量。',
      examples: [
        'He struck the table with his fist.（他用拳头捶了桌子。）',
        'Lightning struck the tree.（闪电击中了那棵树。）',
      ],
      synonyms: [
        { word: 'hit', note: '打，击，最通用的表达' },
        { word: 'smacked', note: '拍打，侧重用手掌或扁平物体' },
      ],
    },
    {
      word: 'reins',
      phonetic: '/reɪnz/',
      brief: '缰绳',
      pos: 'noun (plural)',
      detail:
        'reins 指骑马时用来控制方向的缰绳，通常成对使用（所以用复数）。原文中白马被悟空激活后飞奔如闪电，缰绳从沙悟净手中被扯脱（reins were ripped from Wujing\'s hand），说明马的速度和力量之大，让人根本抓不住。',
      examples: [
        'She pulled on the reins to stop the horse.（她拉紧缰绳让马停下来。）',
        'He held the reins loosely.（他松松地握着缰绳。）',
      ],
      synonyms: [
        { word: 'harness', note: '马具套具，包含缰绳在内的整套装备' },
        { word: 'leash', note: '牵绳，多用于牵狗等小型动物' },
      ],
    },
    {
      word: 'ripped',
      phonetic: '/rɪpt/',
      brief: '被猛地扯掉，被撕裂',
      pos: 'verb (past participle of rip)',
      detail:
        'rip 指"猛力撕裂、扯开"。原文中缰绳从沙悟净手中被"ripped"——不是慢慢滑落，而是被强大的力量瞬间扯脱。这个动词突出了白马化为龙形后爆发出的惊人速度和力量。',
      examples: [
        'The wind ripped the roof off the house.（狂风把屋顶掀掉了。）',
        'She ripped the letter open.（她一把撕开了信。）',
      ],
      synonyms: [
        { word: 'torn', note: '撕开，撕裂，更通用' },
        { word: 'snatched', note: '一把夺走，侧重快速抢夺' },
      ],
    },
    {
      word: 'wolves',
      phonetic: '/ˈwʊlvz/',
      brief: '狼（wolf 的复数）',
      pos: 'noun (plural of wolf)',
      detail:
        'wolf 的复数形式，指狼群。原文中唐僧被白马带到一片黑暗森林后，发现林中"filled with wolves, bears, and tigers"——狼、熊、虎三种猛兽同时出现，营造出极度危险的氛围。这是悟空调皮拍马带来的意外后果，让唐僧陷入了险境。',
      examples: [
        'Wolves hunt in packs.（狼群成群捕猎。）',
        'The howling of wolves echoed through the valley.（狼嚎声在山谷中回荡。）',
      ],
      synonyms: [
        { word: 'predators', note: '捕食者，泛指所有食肉猛兽' },
        { word: 'beasts', note: '野兽，泛指凶猛动物' },
      ],
    },
    {
      word: 'trembled',
      phonetic: '/ˈtrembəld/',
      brief: '发抖，颤抖',
      pos: 'verb (past tense of tremble)',
      detail:
        'tremble 指"因恐惧、寒冷或激动而发抖"。原文中唐僧独自在黑暗森林中面对狼群、熊和老虎时 trembled with fear（吓得发抖），生动描绘了他作为凡人在面对危险时的恐惧。这个动词强调身体不受控制地颤抖，比单纯的"害怕"更加具体、形象。',
      examples: [
        'She trembled with fear when she saw the snake.（她看到蛇时吓得发抖。）',
        'His hands trembled as he opened the letter.（他拆信时双手颤抖。）',
      ],
      synonyms: [
        { word: 'shivered', note: '因寒冷或恐惧而颤抖，更强调身体反应' },
        { word: 'quivered', note: '微微颤抖，更强调细微的颤动' },
      ],
    },
    {
      word: 'fangs',
      phonetic: '/fæŋz/',
      brief: '尖牙，毒牙',
      pos: 'noun (plural of fang)',
      detail:
        'fang 指动物（尤其是猛兽或毒蛇）口中又长又尖的牙齿。原文中森林里的猛兽"showed their fangs"——露出尖牙，这是动物威吓和准备攻击的姿态。用 fangs 而不是 teeth，更强调了这些野兽的危险性和攻击性。',
      examples: [
        'The snake bared its fangs.（蛇露出了毒牙。）',
        'The wolf showed its fangs menacingly.（狼凶狠地露出尖牙。）',
      ],
      synonyms: [
        { word: 'teeth', note: '牙齿，泛指所有牙齿，不强调尖锐' },
        { word: 'tusks', note: '獠牙，多指大象或野猪的长牙' },
      ],
    },
    {
      word: 'beasts',
      phonetic: '/biːsts/',
      brief: '野兽，猛兽',
      pos: 'noun (plural of beast)',
      detail:
        'beast 指"野兽、猛兽"，通常暗示体型大、凶猛的动物。原文中唐僧说"Those beasts were going to attack me!"，用 beasts 而不是 animals 强调了这些猛兽的危险性。beast 带有"凶猛、可怕"的语气色彩，在奇幻文学中常用来形容怪物。',
      examples: [
        'The beasts roamed the dark forest.（野兽在黑暗的森林中游荡。）',
        'A wild beast attacked the village.（一头野兽袭击了村庄。）',
      ],
      synonyms: [
        { word: 'animals', note: '动物，中性词，不暗示凶猛' },
        { word: 'creatures', note: '生物，范围更广' },
      ],
    },
    {
      word: 'attack',
      phonetic: '/əˈtæk/',
      brief: '攻击，袭击',
      pos: 'verb',
      detail:
        'attack 指"发动攻击、袭击"。原文中唐僧愤怒地指责悟空："Those beasts were going to attack me!"——那些猛兽差点就攻击了他。注意本书之前"attacked"（过去式）已经出现过，这里是动词原形，用于 were going to attack（差点发动攻击）的语境中。',
      examples: [
        'The dog tried to attack the mailman.（狗试图攻击邮递员。）',
        'The army planned to attack at dawn.（军队计划在黎明时发动攻击。）',
      ],
      synonyms: [
        { word: 'assault', note: '猛烈攻击，更正式，语气更重' },
        { word: 'strike', note: '击打，侧重单次动作' },
      ],
    },
    {
      word: 'Daoist',
      phonetic: '/ˈdaʊɪst/',
      brief: '道教的，道士的',
      pos: 'adjective',
      detail:
        'Daoist 指"道教的"，也可作名词指"道教徒、道士"。原文中唐僧看到前方一座建筑，说"That looks like a Daoist abbey"——看起来像一座道观。《西游记》的世界中佛道并存，道观（Daoist abbey）是道士修行的地方，与佛教的寺庙（temple）不同。这里故事进入了一个道教背景的场景——镇元大仙（Great Immortal）的道观。',
      examples: [
        'Daoist philosophy emphasizes living in harmony with nature.（道家哲学强调与自然和谐共处。）',
        'They visited a Daoist temple on the mountain.（他们参观了山上的道观。）',
      ],
      synonyms: [
        { word: 'Taoist', note: '道教的，另一种拼写方式' },
      ],
    },
    {
      word: 'Immortal',
      phonetic: '/ɪˈmɔːrtəl/',
      brief: '仙人，不朽者',
      pos: 'noun',
      detail:
        'Immortal 作名词指"仙人、长生不老之人"，在道教语境中指修炼得道、超越生死的存在。原文中道士称其主人为"the Great Immortal"——大仙，即镇元大仙。他是道教中极为古老且法力高强的地仙，与天庭神仙不同，属于地仙之祖。注意首字母大写表示尊称。',
      examples: [
        'In Chinese mythology, immortals can live forever.（在中国神话中，仙人可以长生不老。）',
        'The emperor sought the secret of becoming immortal.（皇帝寻求成为仙人的秘密。）',
      ],
      synonyms: [
        { word: 'deity', note: '神灵，更偏西方宗教概念' },
        { word: 'celestial', note: '天神，侧重天庭的神仙' },
      ],
    },
    {
      word: 'doubt',
      phonetic: '/daʊt/',
      brief: '怀疑，不相信',
      pos: 'verb',
      detail:
        'doubt 作动词指"怀疑、不相信"。原文中悟空听到镇元大仙的名号后毫不在意地说"I doubt he\'s very powerful"——他怀疑大仙是否真的有那么厉害。这体现了悟空一贯的傲慢性格——在他看来，除了佛祖和少数几位，没有什么神仙值得他畏惧。注意 b 是不发音的，发音为 /daʊt/。',
      examples: [
        'I doubt he will come to the party.（我怀疑他会不会来参加聚会。）',
        'Nobody doubted her ability.（没有人怀疑她的能力。）',
      ],
      synonyms: [
        { word: 'question', note: '质疑，侧重提出疑问' },
        { word: 'suspect', note: '怀疑，侧重猜疑有某种情况' },
      ],
    },
    {
      word: 'scowled',
      phonetic: '/skaʊld/',
      brief: '皱眉怒视，板着脸',
      pos: 'verb (past tense of scowl)',
      detail:
        'scowl 指"皱着眉头，面带怒色地看"，是不满或生气时的面部表情。原文中唐僧在悟空轻慢镇元大仙时 scowled（板起了脸），然后低声教训他要"show some respect"。scowled 精准描绘了唐僧作为师父既要维持礼仪又不好当众发火的微妙表情。',
      examples: [
        'The teacher scowled at the noisy students.（老师对吵闹的学生皱眉怒视。）',
        'He scowled when he heard the bad news.（他听到坏消息时板起了脸。）',
      ],
      synonyms: [
        { word: 'frowned', note: '皱眉，语气较轻，不一定是生气' },
        { word: 'glared', note: '怒目而视，比 scowl 更强的敌意' },
      ],
    },
    {
      word: 'respect',
      phonetic: '/rɪˈspekt/',
      brief: '尊重，敬意',
      pos: 'noun',
      detail:
        'respect 作名词指"尊重、尊敬"。原文中唐僧低声对悟空说"Show some respect"——让悟空对别人表现出应有的尊重。这是唐僧反复教导悟空的一个主题：无论对方身份如何，作为客人应该有基本的礼貌。这里 respect 强调"对长辈或修行者应有的恭敬态度"。',
      examples: [
        'You should show respect to your elders.（你应该尊敬长辈。）',
        'He earned everyone\'s respect through hard work.（他通过努力赢得了大家的尊重。）',
      ],
      synonyms: [
        { word: 'courtesy', note: '礼貌，客套，侧重行为上的得体' },
        { word: 'honor', note: '敬意，荣誉，语气更庄重' },
      ],
    },
    {
      word: 'annoyed',
      phonetic: '/əˈnɔɪd/',
      brief: '恼怒的，不高兴的',
      pos: 'adjective',
      detail:
        'annoyed 指"感到恼火、不高兴"，程度比 angry 轻。原文中道士们听到悟空质疑他们师父的实力后 looked annoyed——面露不悦。他们虽然不满，但还没有到愤怒的程度，只是觉得悟空的傲慢态度令人反感。annoyed 常用于描述因被打扰、被冒犯而产生的轻度不满。',
      examples: [
        'She was annoyed by the loud music.（她对吵闹的音乐感到恼火。）',
        'He looked annoyed when I interrupted him.（我打断他时他显得很不高兴。）',
      ],
      synonyms: [
        { word: 'irritated', note: '被激怒的，更强调持续的不快' },
        { word: 'frustrated', note: '沮丧的，受挫的，侧重无能为力的不满' },
      ],
    },
    {
      word: 'shrugged',
      phonetic: '/ʃrʌɡd/',
      brief: '耸肩（表示无所谓或不以为然）',
      pos: 'verb (past tense of shrug)',
      detail:
        'shrug 指"耸肩"，这个肢体动作通常表示"无所谓、不在乎"或"我不知道"。原文中悟空对道士说师父能上天庭拜访朋友一事 shrugged（耸了耸肩），说"I used to live in Heaven. The place isn\'t that great."——他满不在乎地表示自己当年就在天庭住过，觉得也没什么了不起。shrugged 完美刻画了悟空傲慢不逊的态度。',
      examples: [
        'She shrugged and said, "I don\'t know."（她耸了耸肩说："我不知道。"）',
        'He shrugged off the criticism.（他对批评不以为然。）',
      ],
      synonyms: [
        { word: 'dismissed', note: '不以为然地打发掉，用语言行为表示不在意' },
        { word: 'brushed off', note: '敷衍了事，不把某事故在心上' },
      ],
    },
    {
      word: 'tend',
      phonetic: '/tend/',
      brief: '照料，照看',
      pos: 'verb',
      detail:
        'tend 指"照料、照看"，多用于照顾人或动物。原文中唐僧让悟空去"tend the horse"——照看马匹。这是唐僧有意把悟空支开，因为悟空在道士面前表现得太过傲慢无礼。tend 在这里指喂马、遛马等日常照料工作。',
      examples: [
        'She tended the garden every morning.（她每天早上照料花园。）',
        'The shepherd tends his flock of sheep.（牧羊人照看他的羊群。）',
      ],
      synonyms: [
        { word: 'care for', note: '照顾，语气更温柔' },
        { word: 'look after', note: '照看，口语化的表达' },
      ],
    },
    {
      word: 'ripe',
      phonetic: '/raɪp/',
      brief: '成熟的',
      pos: 'adjective',
      detail:
        'ripe 指"（水果等）成熟的"，可以食用了。原文中道士介绍人参果时说"takes ten thousand years to become ripe"——要一万年才能成熟。这夸张的时间暗示了人参果的珍稀程度。ripe 还可以引申为"时机成熟的"。',
      examples: [
        'The apples are ripe and ready to eat.（苹果熟了，可以吃了。）',
        'Wait until the bananas are ripe.（等到香蕉熟了再说。）',
      ],
      synonyms: [
        { word: 'mature', note: '成熟的，更常用于人或抽象事物' },
        { word: 'ready', note: '准备好的，更通用' },
      ],
    },
    {
      word: 'According',
      phonetic: '/əˈkɔːrdɪŋ/',
      brief: '根据（According to）',
      pos: 'phrase',
      detail:
        'According to 是固定搭配，表示"根据……所说"。原文中道士说"According to legend, one bite of the fruit will make you live forever"——根据传说，吃一口人参果就能长生不老。这里 According to legend 用来引用古老的传说作为人参果神奇功效的依据。',
      examples: [
        'According to the weather report, it will rain tomorrow.（根据天气预报，明天会下雨。）',
        'According to legend, the castle is haunted.（传说这座城堡闹鬼。）',
      ],
      synonyms: [
        { word: 'based on', note: '基于，侧重依据' },
        { word: 'as stated by', note: '如……所述，更正式' },
      ],
    },
    {
      word: 'legend',
      phonetic: '/ˈledʒənd/',
      brief: '传说，传奇故事',
      pos: 'noun',
      detail:
        'legend 指"传说、传奇故事"，通常指世代口耳相传的古老故事。原文中道士引用"According to legend"来讲述人参果的神奇功效——吃一口就能长生不老。在《西游记》的世界里，legend 往往不是虚构的，而是真实存在的神奇力量。',
      examples: [
        'The legend of King Arthur is famous worldwide.（亚瑟王的传说举世闻名。）',
        'According to local legend, a dragon lives in the lake.（据当地传说，湖里住着一条龙。）',
      ],
      synonyms: [
        { word: 'myth', note: '神话，侧重涉及神灵的故事' },
        { word: 'tale', note: '故事，更泛指' },
      ],
    },
    {
      word: 'tray',
      phonetic: '/treɪ/',
      brief: '托盘，盘子',
      pos: 'noun',
      detail:
        'tray 指"托盘"，用来端食物或物品的扁平容器。原文中道士用人参果放在托盘（tray）上端给唐僧，唐僧看到后尖叫——因为托盘上躺着一个像婴儿一样的人参果。tray 在此处出现两次，第一次是道士端着进来，第二次是唐僧看到托盘上的"婴儿"。该词出现两次。',
      examples: [
        'She carried a tray of drinks.（她端着一托盘饮料。）',
        'The waiter brought the food on a silver tray.（服务员用银托盘端来了食物。）',
      ],
      synonyms: [
        { word: 'platter', note: '大托盘，多用于盛放菜肴' },
        { word: 'plate', note: '盘子，碟子，多为单个平盘' },
      ],
    },
    {
      word: 'mortal',
      phonetic: '/ˈmɔːrtəl/',
      brief: '凡人，会死的',
      pos: 'noun / adjective',
      detail:
        'mortal 作名词指"凡人、终有一死的人"，与神仙（immortal）相对。原文中道士解释唐僧之所以看到人参果像婴儿，是因为"you\'re a mortal"——你是凡人。在《西游记》的世界观中，凡人（mortal）无法看到事物的本质，只能看到表象。注意 mortal 与 Immortal（仙人）是反义词。',
      examples: [
        'All mortals must die someday.（凡人终有一死。）',
        'Mortal fear gripped his heart.（致命的恐惧攫住了他的心。）',
      ],
      synonyms: [
        { word: 'human', note: '人类，中性词，不强调与神仙的对比' },
        { word: 'earthly', note: '尘世的，凡间的，侧重"属于凡间"的含义' },
      ],
    },
    {
      word: 'convince',
      phonetic: '/kənˈvɪns/',
      brief: '说服，使相信',
      pos: 'verb',
      detail:
        'convince 指"说服某人相信某事"。原文中道士们试图说服（tried to convince）唐僧人参果不是婴儿，但唐僧只是摇头不信。convince 强调用道理或证据让人改变想法，但在这里道士们的努力失败了——唐僧作为凡人无法接受一个"看起来像婴儿"的东西是水果。',
      examples: [
        'I tried to convince her to come with us.（我试图说服她和我们一起去。）',
        'He convinced me that he was telling the truth.（他让我相信他说的是实话。）',
      ],
      synonyms: [
        { word: 'persuade', note: '劝说，侧重通过说理使人行动' },
        { word: 'assure', note: '向……保证，消除疑虑' },
      ],
    },
    {
      word: 'growled',
      phonetic: '/ˈɡraʊld/',
      brief: '发出低沉吼声，（肚子）咕噜作响',
      pos: 'verb (past tense of growl)',
      detail:
        'growl 指"发出低沉的吼叫声"，常用于动物（如狗的低吼）。原文中八戒听到道士们谈论人参果的美味后，肚子发出了 growled——肚子咕噜叫。这里 growled 幽默地用在了肚子上，把八戒的饥饿具象化了。这个拟声效果也为下一章八戒怂恿悟空偷果做了铺垫。',
      examples: [
        'The dog growled at the stranger.（狗对陌生人发出低吼。）',
        'His stomach growled because he was hungry.（他因为饿了，肚子咕噜叫。）',
      ],
      synonyms: [
        { word: 'rumbled', note: '隆隆响，低沉的轰鸣' },
        { word: 'snarled', note: '龇牙低吼，更侧重凶狠的威胁' },
      ],
    },
    {
      word: 'steal',
      phonetic: '/stiːl/',
      brief: '偷，偷窃',
      pos: 'verb',
      detail:
        'steal 指"偷窃、盗取"。原文中八戒反问"What did we steal?"——我们偷什么了？这里 steal 用在疑问句中，是动词原形（在助动词 did 之后）。注意本书中 steal 出现了多种形态：stole（过去式）出现三次，stealing（现在分词）出现一次，steal（原形）出现一次。它们共享同一个基本含义，但语法形式不同。',
      examples: [
        'Don\'t steal other people\'s things.（不要偷别人的东西。）',
        'What did he steal from the store?（他从商店偷了什么？）',
      ],
      synonyms: [
        { word: 'rob', note: '抢劫，强调暴力夺取' },
        { word: 'pilfer', note: '小偷小摸，语气较轻' },
      ],
    },
    {
      word: 'sparkled',
      phonetic: '/ˈspɑːrkəld/',
      brief: '闪闪发光，闪烁',
      pos: 'verb (past tense of sparkle)',
      detail:
        'sparkle 指"发出闪烁的光芒"，常用于宝石、露珠或灯光等。原文中人参果在阳光下 sparkled（闪闪发光），这个画面暗示了人参果的神奇与珍贵——普通水果不会发光，只有仙家宝物才会如此。sparkled 强调光芒一闪一闪的效果，比 shine 更有动态感。',
      examples: [
        'The diamonds sparkled in the light.（钻石在光线下闪闪发光。）',
        'Her eyes sparkled with excitement.（她的眼睛因兴奋而闪闪发亮。）',
      ],
      synonyms: [
        { word: 'glittered', note: '闪耀，更强调耀眼夺目' },
        { word: 'shimmered', note: '微光闪烁，更柔和朦胧' },
      ],
    },
    {
      word: 'sunlight',
      phonetic: '/ˈsʌnlaɪt/',
      brief: '阳光',
      pos: 'noun',
      detail:
        'sunlight 是 sun（太阳）和 light（光）的复合词，指"阳光、日光"。原文中人参果在阳光（sunlight）下闪闪发光，营造出一幅美丽而神秘的画面——在道观后院的古树上，金灿灿的人参果沐浴在阳光中。',
      examples: [
        'The room was filled with warm sunlight.（房间里充满了温暖的阳光。）',
        'Plants need sunlight to grow.（植物需要阳光才能生长。）',
      ],
      synonyms: [
        { word: 'sunshine', note: '阳光，更强调晴朗天气的感受' },
        { word: 'daylight', note: '日光，白天自然光' },
      ],
    },
    {
      word: 'plucked',
      phonetic: '/plʌkt/',
      brief: '采摘，摘下',
      pos: 'verb (past tense of pluck)',
      detail:
        'pluck 指"用手快速摘取、拔下"。原文中悟空从人参果树上 plucked three pieces——摘了三个人参果。pluck 比 pick 更强调动作的果断和利落，暗示悟空轻而易举地就摘到了珍贵的人参果。pluck 还可以表示"鼓起勇气"（pluck up courage）。',
      examples: [
        'She plucked a flower from the garden.（她从花园里摘了一朵花。）',
        'He plucked a apple from the branch.（他从树枝上摘下一个苹果。）',
      ],
      synonyms: [
        { word: 'picked', note: '采摘，最通用的表达' },
        { word: 'gathered', note: '采集，收集，侧重整体收获' },
      ],
    },
    {
      word: 'ashamed',
      phonetic: '/əˈʃeɪmd/',
      brief: '羞愧的，惭愧的',
      pos: 'adjective',
      detail:
        'ashamed 指"感到羞耻、惭愧"。原文中悟空批评八戒"You should be ashamed of yourself"——你应该为自己感到羞耻，因为八戒把人参果整个吞下去连味都没尝到。"be ashamed of oneself" 是固定搭配，表示为自己的行为感到羞愧。',
      examples: [
        'She was ashamed of her behavior.（她为自己的行为感到羞愧。）',
        'You should be ashamed of yourself!（你应该为自己感到惭愧！）',
      ],
      synonyms: [
        { word: 'embarrassed', note: '尴尬的，侧重在他人面前的难堪' },
        { word: 'guilty', note: '有罪恶感的，侧重做了错事的内疚' },
      ],
    },
    {
      word: 'chew',
      phonetic: '/tʃuː/',
      brief: '咀嚼，嚼',
      pos: 'verb',
      detail:
        'chew 指"咀嚼、嚼碎食物"。原文中八戒把人参果一口吞下去，悟空批评他"You didn\'t even chew!"——你连嚼都没嚼！八戒辩解说自己太饿了顾不上嚼（too hungry to chew）。这个细节是八戒贪吃性格的经典写照。该词出现两次。',
      examples: [
        'Chew your food well before swallowing.（吞咽前要充分咀嚼食物。）',
        'The dog was chewing on a bone.（狗在啃骨头。）',
      ],
      synonyms: [
        { word: 'munch', note: '用力嚼，发出声响地吃' },
        { word: 'nibble', note: '小口啃，轻咬' },
      ],
    },
    {
      word: 'groaned',
      phonetic: '/ɡroʊnd/',
      brief: '呻吟，发出不满声',
      pos: 'verb (past tense of groan)',
      detail:
        'groan 指"发出低沉的呻吟声"，表示痛苦、不满或失望。原文中八戒后悔没尝到人参果的味道，groaned（发出一声哀叹），然后说真想再来一个。这里的 groaned 生动表现了八戒的遗憾——美味就在嘴边却没尝到，比直接说"他很难过"更有画面感。',
      examples: [
        'The patient groaned in pain.（病人在痛苦中呻吟。）',
        'The students groaned when the teacher gave more homework.（老师布置更多作业时，学生们发出不满的哀叹。）',
      ],
      synonyms: [
        { word: 'moaned', note: '呻吟，抱怨，更侧重发声表达不满' },
        { word: 'sighed', note: '叹气，较轻微的不满或无奈' },
      ],
    },
    {
      word: 'criminals',
      phonetic: '/ˈkrɪmɪnəlz/',
      brief: '罪犯，罪人',
      pos: 'noun (plural of criminal)',
      detail:
        'criminal 指"罪犯、犯罪的人"。原文中道士愤怒地指责唐僧的徒弟们："Your companions are criminals!"——你的同伴们是罪犯！这是非常严厉的指控——在他们看来，偷吃主人珍贵的人参果就是犯罪行为。注意 criminal 既可作名词（罪犯），也可作形容词（犯罪的）。',
      examples: [
        'The criminals were caught by the police.（罪犯被警察抓住了。）',
        'He was treated like a criminal.（他被当作罪犯对待。）',
      ],
      synonyms: [
        { word: 'offenders', note: '违法者，语气较轻' },
        { word: 'thieves', note: '小偷，侧重偷窃行为' },
      ],
    },
    {
      word: 'stole',
      phonetic: '/stoʊl/',
      brief: '偷，偷窃（steal 的过去式）',
      pos: 'verb (past tense of steal)',
      detail:
        'steal 的过去式，指"偷窃、盗取"。原文中道士指控唐僧的徒弟们偷了人参果——"They stole some of our ginseng fruit!"。该词在文中出现三次，分别代表不同立场的表述：道士的指控、八戒的反问"What did we steal?"、以及八戒指责悟空"You\'re the one who stole the fruit!"。三次使用勾勒出一场推卸责任的闹剧。',
      examples: [
        'Someone stole my wallet.（有人偷了我的钱包。）',
        'He stole a glance at her.（他偷偷看了她一眼。）',
      ],
      synonyms: [
        { word: 'took', note: '拿走，中性词，不一定是偷' },
        { word: 'snatched', note: '一把夺走，强调快速和暴力' },
      ],
    },
    {
      word: 'juice',
      phonetic: '/dʒuːs/',
      brief: '汁，汁水，果汁',
      pos: 'noun',
      detail:
        'juice 指"汁水、果汁"，水果或食物中流出的液体。原文中沙悟净在被道士指责偷吃人参果时，嘴边还残留着人参果的汁（juice）——他连忙擦掉嘴角的东西。这个细节极具喜剧效果：嘴上的汁水就是偷吃的铁证，怎么抵赖都没用。',
      examples: [
        'I\'d like a glass of orange juice.（我要一杯橙汁。）',
        'The juice from the steak was delicious.（牛排的肉汁很美味。）',
      ],
      synonyms: [
        { word: 'sap', note: '树液，植物汁液' },
        { word: 'liquid', note: '液体，泛指' },
      ],
    },
    {
      word: 'giggled',
      phonetic: '/ˈɡɪɡəld/',
      brief: '咯咯笑，傻笑',
      pos: 'verb (past tense of giggle)',
      detail:
        'giggle 指"咯咯地笑、吃吃地笑"，通常是压抑不住的轻声笑。原文中悟空看到沙悟净擦嘴角的汁水时 giggled（咯咯笑了起来）——他觉得这个场面太好笑了，偷吃了还不擦干净嘴。giggled 表现了悟空调皮、不在乎的性格，与道士们的愤怒形成鲜明对比。',
      examples: [
        'The girls giggled at the joke.（女孩们听了笑话咯咯笑起来。）',
        'He tried to stop giggling during class.（他努力忍住不在课堂上咯咯笑。）',
      ],
      synonyms: [
        { word: 'chuckled', note: '轻声笑，低声笑，更温和' },
        { word: 'snickered', note: '窃笑，暗笑，带有不尊重的意味' },
      ],
    },
    {
      word: 'liars',
      phonetic: '/ˈlaɪərz/',
      brief: '说谎者，骗子',
      pos: 'noun (plural of liar)',
      detail:
        'liar 指"说谎的人、骗子"。原文中道士怒骂悟空等人是"thieves and liars"——小偷和骗子。他们不仅偷了人参果，还假装不知道发生了什么，所以被骂为骗子。liar 是非常严重的侮辱，说明道士们已经怒不可遏。',
      examples: [
        'Nobody likes a liar.（没有人喜欢骗子。）',
        'He called her a liar in front of everyone.（他当着所有人的面说她是骗子。）',
      ],
      synonyms: [
        { word: 'cheats', note: '骗子，侧重欺骗行为' },
        { word: 'frauds', note: '冒牌货，骗子，侧重身份造假' },
      ],
    },
    {
      word: 'stealing',
      phonetic: '/ˈstiːlɪŋ/',
      brief: '偷窃，盗窃',
      pos: 'verb (present participle of steal)',
      detail:
        'steal 的现在分词形式，此处用于"by stealing from us"——通过偷窃来回报我们。原文中道士愤怒地说"We invited you into our abbey as guests! And you repay us by stealing from us!"——我们把你当客人请进来，你却用偷窃来回报我们。by stealing 表示手段或方式，强调"以偷窃作为回报"的讽刺和忘恩负义。',
      examples: [
        'He was caught stealing from the store.（他在商店偷东西时被抓住了。）',
        'Stealing is wrong no matter what the reason.（无论什么原因，偷窃都是不对的。）',
      ],
      synonyms: [
        { word: 'theft', note: '偷窃（名词），更正式的法律用语' },
        { word: 'robbery', note: '抢劫，暴力夺取' },
      ],
    },
    {
      word: 'what if',
      phonetic: '/wʌt ɪf/',
      brief: '那又怎样，就算...又如何',
      pos: 'phrase',
      detail:
        'what if 在此处表示不满的反问语气，意思是"那又怎样？就算...又如何？"。原文中悟空不以为然地说"So what if we ate some ginseng fruit?"——就算我们吃了几个人参果又怎样？他认为吃几个果子没什么大不了的，完全没有意识到这棵人参果树对镇元大仙的意义。what if 通常用于假设，但在这里结合 So 表示"就算...也无所谓"的态度。',
      examples: [
        'So what if we\'re late? The movie doesn\'t start until 8.（就算迟到又怎样？电影八点才开始。）',
        'What if it rains tomorrow?（如果明天下雨怎么办？）',
      ],
      synonyms: [
        { word: 'who cares', note: '谁在乎呢，更口语化的无所谓' },
        { word: 'does it matter', note: '有关系吗，反问语气较轻' },
      ],
    },
    {
      word: 'crack',
      phonetic: '/kræk/',
      brief: '断裂声，爆裂声',
      pos: 'noun',
      detail:
        'crack 作名词指"断裂声、爆裂声"，模拟物体断裂时发出的尖锐声响。原文中悟空用金箍棒猛击人参果树，发出一声巨响"There was a loud crack"——一声巨大的断裂声。crack 是拟声词，让读者仿佛听到了树干断裂的声音，增强了破坏场面的冲击力。',
      examples: [
        'The ice cracked under his weight.（冰在他脚下发出断裂声。）',
        'A loud crack of thunder made her jump.（一声巨雷吓得她跳了起来。）',
      ],
      synonyms: [
        { word: 'snap', note: '啪嗒断裂，更清脆' },
        { word: 'bang', note: '砰的一声，更响亮沉闷' },
      ],
    },
    {
      word: 'crashed',
      phonetic: '/kræʃt/',
      brief: '轰然倒下，坠毁',
      pos: 'verb (past tense of crash)',
      detail:
        'crash 指"猛烈撞击、轰然倒塌"。原文中悟空一棒之下，整棵万年人参果树 crashed to the ground——轰然倒在地上。crashed 强调了倒下时的巨大力量和声响，暗示人参果树被彻底毁坏。这棵比天地还古老的树就这样被悟空毁了，为后续镇元大仙的怒火埋下了伏笔。',
      examples: [
        'The tree crashed to the ground in the storm.（暴风雨中，树轰然倒在地上。）',
        'The car crashed into the wall.（汽车撞上了墙。）',
      ],
      synonyms: [
        { word: 'collapsed', note: '倒塌，强调结构性的垮塌' },
        { word: 'toppled', note: '倾倒，翻倒，强调从高处翻下' },
      ],
    },
    {
      word: 'gasped',
      phonetic: '/ɡæspt/',
      brief: '倒吸一口气，惊喘',
      pos: 'verb (past tense of gasp)',
      detail:
        'gasp 指"因惊讶或震惊而突然吸气"，通常伴随张大嘴巴的动作。原文中两个道士跑到外面看到人参果树倒在地上时 gasped（倒吸一口凉气）——他们完全没想到一夜之间这棵比天地还古老的树竟然被毁了。gasp 强调的是震惊到说不出话的那一瞬间反应。',
      examples: [
        'She gasped when she saw the bill.（她看到账单时倒吸了一口气。）',
        'The audience gasped at the magician\'s trick.（观众对魔术师的表演惊叹不已。）',
      ],
      synonyms: [
        { word: 'startled', note: '被吓一跳，强调突然受惊' },
        { word: 'choked', note: '因情绪激动而说不出话' },
      ],
    },
    {
      word: 'gray',
      phonetic: '/ɡreɪ/',
      brief: '灰色的，（脸色）苍白的',
      pos: 'adjective',
      detail:
        'gray 指"灰色的"，在此处形容人参果树倒下后变成灰色，暗示它已经完全枯死——原本翠绿的枝叶全都消失了。用灰色而不用 brown（褐色）或 dry（干枯），是因为灰色更能传达"生命完全消逝"的感觉，像是一切色彩都被抽走。',
      examples: [
        'The old man has gray hair.（那位老人头发花白。）',
        'The sky turned gray before the storm.（暴风雨前天空变成了灰色。）',
      ],
      synonyms: [
        { word: 'pale', note: '苍白的，强调缺乏血色或色彩' },
        { word: 'ashy', note: '灰白的，像灰烬一样的颜色' },
      ],
    },
    {
      word: 'scolding',
      phonetic: '/ˈskoʊldɪŋ/',
      brief: '责骂，训斥',
      pos: 'verb (present participle of scold)',
      detail:
        'scold 指"责骂、训斥"，通常指长辈对晚辈、上级对下级的不满批评。原文中唐僧在道观内训斥徒弟们（scolding his companions）——他们是客人却偷了主人的东西，唐僧作为师父既感到丢脸又生气。scolding 比 telling off 更正式，带有"教训"的意味。',
      examples: [
        'The mother was scolding her child for running into the street.（母亲在训斥跑到马路上的孩子。）',
        'He got a scolding for being late.（他因为迟到被训了一顿。）',
      ],
      synonyms: [
        { word: 'reprimanding', note: '正式训斥，更严肃、更官方' },
        { word: 'lecturing', note: '说教，长篇大论地批评' },
      ],
    },
    {
      word: 'apology',
      phonetic: '/əˈpɑːlədʒi/',
      brief: '道歉，歉意',
      pos: 'noun',
      detail:
        'apology 指"道歉、认错"，表示承认自己做错了事并请求原谅。原文中道士们先是假意道歉（owe you an apology），说人参果一个也没少——其实他们在演戏，为了稳住唐僧一行人。八戒信以为真还道了谢，完全没有察觉到这是个陷阱。该词在文中出现两次，第一次是道士假道歉，第二次是八戒感谢"道歉"。',
      examples: [
        'She made a sincere apology for her mistake.（她为自己的错误做了真诚的道歉。）',
        'I owe you an apology.（我欠你一个道歉。）',
      ],
      synonyms: [
        { word: 'regret', note: '遗憾，后悔，语气比 apology 轻' },
        { word: 'confession', note: '坦白，承认错误，侧重认错本身' },
      ],
    },
    {
      word: 'suspicious',
      phonetic: '/səˈspɪʃəs/',
      brief: '怀疑的，起疑心的',
      pos: 'adjective',
      detail:
        'suspicious 指"觉得可疑的、心生怀疑的"。原文中悟空给了道士们一个怀疑的眼神（a suspicious look）——他凭直觉感到道士在说谎，只是不知道为什么。这体现了悟空的警觉性和敏锐的直觉，与其他徒弟的懵懂形成对比。',
      examples: [
        'The police officer gave him a suspicious look.（警察怀疑地看了他一眼。）',
        'I\'m suspicious of his motives.（我对他的动机感到怀疑。）',
      ],
      synonyms: [
        { word: 'doubtful', note: '怀疑的，更侧重不确定' },
        { word: 'wary', note: '警惕的，侧重小心防备' },
      ],
    },
    {
      word: 'slammed',
      phonetic: '/slæmd/',
      brief: '猛地关上，砰地关上',
      pos: 'verb (past tense of slam)',
      detail:
        'slam 指"用力猛关"，发出巨大的声响。原文中道士把门猛地关上（slammed the door shut）——这不是普通的关门，而是故意用力关上并上了锁，说明道士们已经发现了人参果树被毁的真相，准备把唐僧一行人困住等师父回来处置。',
      examples: [
        'She slammed the door in his face.（她当着他的面砰地关上了门。）',
        'He slammed the book on the table.（他把书重重地摔在桌上。）',
      ],
      synonyms: [
        { word: 'banged', note: '砰地撞击，侧重声音大' },
        { word: 'shut', note: '关上，普通用词，不含力度' },
      ],
    },
    {
      word: 'glared',
      phonetic: '/ɡlerd/',
      brief: '怒目而视，瞪着眼看',
      pos: 'verb (past tense of glare)',
      detail:
        'glare 指"怒目而视"，比 scowl 语气更重——不仅是板着脸，而是带着明显的怒意直视对方。原文中唐僧怒视他的徒弟们（glared at his companions），因为他既生气又失望——偷果子、毁树，一路上尽是徒弟们惹的祸。glared 表现了他作为师父恨铁不成钢的愤怒。',
      examples: [
        'The teacher glared at the students who were talking.（老师怒视着在说话的学生。）',
        'She glared at him in silence.（她一言不发地瞪着他。）',
      ],
      synonyms: [
        { word: 'scowled', note: '皱眉板脸，语气稍轻' },
        { word: 'stared down', note: '用目光压倒对方，侧重气势' },
      ],
    },
    {
      word: 'ever',
      phonetic: '/ˈevər/',
      brief: '究竟，到底（用于强调语气）',
      pos: 'adverb',
      detail:
        'ever 在此处用于疑问句中加强语气，表示"究竟、到底"。原文中唐僧绝望地问"How will I ever reach the Western Paradise?"——我到底怎样才能到达西天？ever 让这个问题更加绝望和无力，暗示"以这种状况，根本不可能到达"。这种用法是 ever 在口语中常见的强调功能。',
      examples: [
        'How will I ever finish this project on time?（我到底怎样才能按时完成这个项目？）',
        'Will he ever learn?（他到底能不能吸取教训？）',
      ],
      synonyms: [
        { word: 'possibly', note: '可能地，用于否定和疑问句中表示怀疑' },
        { word: 'at all', note: '究竟，到底，放在句末加强语气' },
      ],
    },
    {
      word: 'lock-picking',
      phonetic: '/ˈlɑːkˌpɪkɪŋ/',
      brief: '撬锁，开锁术',
      pos: 'noun / adjective',
      detail:
        'lock-picking 是个复合词，指"撬锁、开锁的技术"。原文中悟空说他要用 lock-picking magic（开锁法术）来逃出道观——当然他不是用工具撬锁，而是用变化法术。lock-picking 加上 magic，巧妙地把世俗的开锁概念和悟空的神奇能力结合在一起。',
      examples: [
        'Lock-picking is a skill used by locksmiths.（撬锁是锁匠的技能。）',
        'He learned lock-picking from a book.（他从书上学了开锁术。）',
      ],
      synonyms: [
        { word: 'locksmithing', note: '锁匠技术，更正式的职业用语' },
      ],
    },
    {
      word: 'glanced',
      phonetic: '/ɡlænst/',
      brief: '瞥了一眼，匆匆看了下',
      pos: 'verb (past tense of glance)',
      detail:
        'glance 指"匆匆看一眼"，动作快速而短暂。原文中唐僧紧张地瞥了徒弟们一眼（glanced nervously），然后才吞吞吐吐地回答"嗯，是的"——他在路上遇到镇元大仙（伪装成老人），不敢直接说谎，但又不能暴露真相。glanced nervously 精准地描绘了他左右为难的窘态。',
      examples: [
        'She glanced at her watch.（她瞥了一眼手表。）',
        'He glanced nervously around the room.（他紧张地环顾了一下房间。）',
      ],
      synonyms: [
        { word: 'peeked', note: '偷看，瞄一眼，侧重悄悄看' },
        { word: 'looked quickly', note: '快速看了一眼，更直白的表达' },
      ],
    },
    {
      word: 'Cosmos',
      phonetic: '/ˈkɑːzmɑːs/',
      brief: '宇宙，天地',
      pos: 'noun',
      detail:
        'Cosmos 指"宇宙、天地万物"，比 universe 更带有哲学和诗意的色彩。原文中镇元大仙展示的绝招叫"Magic of the Cosmos in the Sleeve"（袖里乾坤）——字面意思是"袖子里的宇宙"，形容他的袖子能容纳整个天地。这是道教神话中的经典法术概念，用 Cosmos 强调了其法力的宏大。',
      examples: [
        'The cosmos is vast and mysterious.（宇宙广袤而神秘。）',
        'Scientists study the origins of the cosmos.（科学家研究宇宙的起源。）',
      ],
      synonyms: [
        { word: 'universe', note: '宇宙，更通用的科学用语' },
        { word: 'heavens', note: '天地，苍天，偏文学化' },
      ],
    },
    {
      word: 'swooped',
      phonetic: '/swuːpt/',
      brief: '猛扑下来，突然俯冲',
      pos: 'verb (past tense of swoop)',
      detail:
        'swoop 指"从高处猛然扑下"，常用来形容猛禽俯冲捕猎的动作。原文中镇元大仙挥臂时袖子向悟空一行人猛扑下来（swooped down）——用袖子像猛禽一样从天而降，把所有人卷走。swooped 强调了动作的迅猛和不可抵挡。',
      examples: [
        'The eagle swooped down and grabbed the fish.（鹰猛扑下来抓住了鱼。）',
        'The car swooped around the corner.（汽车猛地转过弯。）',
      ],
      synonyms: [
        { word: 'dived', note: '俯冲，侧重自上而下快速下降' },
        { word: 'plunged', note: '猛然投入，更强调速度和力度' },
      ],
    },
    {
      word: 'swept up',
      phonetic: '/swept ʌp/',
      brief: '被卷起，被一扫而空',
      pos: 'phrase (past participle)',
      detail:
        'sweep up 意为"把……卷起来、一扫而空"。原文中镇元大仙施展"袖里乾坤"，他的袖子像旋风一样把唐僧师徒全部卷走。这个短语形象地描绘了他们被一股巨大力量席卷而去的场景——毫无还手之力。该词在文中出现两次，第二次是悟空他们逃跑后再次被同样的法术捕获。',
      examples: [
        'The tornado swept up everything in its path.（龙卷风把沿途的一切都卷了起来。）',
        'She was swept up by the crowd.（她被人群裹挟着走了。）',
      ],
      synonyms: [
        { word: 'engulfed', note: '吞噬，吞没，强调被完全包围' },
        { word: 'scooped up', note: '一把捞起来，侧重被容器般的物体收取' },
      ],
    },
    {
      word: 'refused',
      phonetic: '/rɪˈfjuːzd/',
      brief: '拒绝',
      pos: 'verb (past tense of refuse)',
      detail:
        'refuse 指"明确地拒绝做某事"。原文中八戒推卸责任，对悟空说"你应该拒绝去偷（refused to steal it）"——明明是他自己嘴馋提议偷人参果的，现在却反过来怪悟空不该答应。这种"自己犯错却怪别人"的台词是八戒的经典喜剧形象。',
      examples: [
        'She refused to help him.（她拒绝帮助他。）',
        'He refused to apologize.（他拒绝道歉。）',
      ],
      synonyms: [
        { word: 'declined', note: '婉拒，语气比较客气' },
        { word: 'rejected', note: '驳回，断然拒绝，更坚决' },
      ],
    },
    {
      word: 'pea',
      phonetic: '/piː/',
      brief: '豌豆',
      pos: 'noun',
      detail:
        'pea 是一种绿色小圆豆，常见蔬菜。原文中悟空念咒缩小到豌豆大小（the size of a pea），这样才能从绳索的缝隙中挣脱。"豌豆大小"是英语中形容极小的常见比喻，就像中文说"米粒大小"一样。',
      examples: [
        'She added some peas to the soup.（她在汤里加了一些豌豆。）',
        'The insect was no bigger than a pea.（那只虫子还没有一颗豌豆大。）',
      ],
      synonyms: [
        { word: 'bean', note: '豆子，泛指各种豆类' },
      ],
    },
    {
      word: 'slipped',
      phonetic: '/slɪpt/',
      brief: '滑脱，悄悄挣脱',
      pos: 'verb (past tense of slip)',
      detail:
        'slip 指"悄悄滑动、溜出"，动作轻巧不引人注意。原文中悟空变成豌豆大小后从绳索中 slipped out（悄悄挣脱）——绳索绑不住一个只有豌豆大小的身体。slipped 强调了动作的灵活和无声无息，没有被任何人发现。',
      examples: [
        'The fish slipped out of his hands.（鱼从他的手中滑脱了。）',
        'She slipped out of the room quietly.（她悄悄地溜出了房间。）',
      ],
      synonyms: [
        { word: 'wriggled', note: '扭动身体挣脱，强调身体扭曲的动作' },
        { word: 'squeezed out', note: '挤出来，强调从狭窄空间挤出' },
      ],
    },
    {
      word: 'tiptoed',
      phonetic: '/ˈtɪptoʊd/',
      brief: '踮着脚走，蹑手蹑脚',
      pos: 'verb (past tense of tiptoe)',
      detail:
        'tiptoe 指"踮着脚尖走"，为了不发出声响。原文中师徒一行人蹑手蹑脚地穿过黑暗安静的道观（tiptoed through the dark and silent abbey）——他们刚从绑绳中逃脱，必须尽可能安静地离开，否则会被道士发现。tiptoed 生动地描绘了他们小心翼翼的样子。',
      examples: [
        'She tiptoed into the bedroom so as not to wake the baby.（她蹑手蹑脚地走进卧室，以免吵醒婴儿。）',
        'He tiptoed past the sleeping dog.（他踮着脚走过睡觉的狗旁边。）',
      ],
      synonyms: [
        { word: 'crept', note: '悄悄爬行，更强调身体低伏' },
        { word: 'sneaked', note: '偷偷溜走，侧重不被发现' },
      ],
    },
    {
      word: 'boomed',
      phonetic: '/buːmd/',
      brief: '发出隆隆巨响，声如洪钟地说',
      pos: 'verb (past tense of boom)',
      detail:
        'boom 指"发出深沉、响亮的声音"，形容声音低沉而极具穿透力。原文中镇元大仙突然出现在路上，他的声音 boomed（如洪钟般响起）——"你们逃不掉的！"boomed 不仅说明声音大，更暗示说话者法力强大、气势惊人，让逃跑的师徒瞬间被恐惧笼罩。',
      examples: [
        'Thunder boomed in the distance.（远处雷声隆隆。）',
        '"Stop right there!" he boomed.（"站住！"他声如洪钟地喝道。）',
      ],
      synonyms: [
        { word: 'thundered', note: '如雷鸣般轰响，更强调声音的震撼' },
        { word: 'bellowed', note: '大声吼叫，侧重人发出的怒吼' },
      ],
    },
    {
      word: 'moved out',
      phonetic: '/muːvd aʊt/',
      brief: '闪开，移开',
      pos: 'phrase',
      detail:
        'move out 在此处指"移开、闪到一旁"，避开攻击。原文中镇元大仙轻松闪开了悟空的铁棒攻击（moved out of the way）——他法力高强，悟空的攻击在他看来只是花拳绣腿。move out 强调了躲避的从容和优雅。',
      examples: [
        'He moved out of the way to let the car pass.（他闪到一边让汽车过去。）',
        'She moved out of the crowd.（她从人群中走出来。）',
      ],
      synonyms: [
        { word: 'dodged', note: '灵巧闪避，侧重敏捷躲避攻击' },
        { word: 'sidestepped', note: '侧身闪开，强调向旁边迈步' },
      ],
    },
    {
      word: 'stabbed',
      phonetic: '/stæbd/',
      brief: '刺，戳',
      pos: 'verb (past tense of stab)',
      detail:
        'stab 指"用尖锐武器刺、戳"。原文中沙悟净用他的降妖宝杖刺向镇元大仙（stabbed with his spear）——宝杖的前端尖锐如枪，适合刺击。stab 强调的是尖锐武器向前突刺的动作，与悟空的挥打（swung）和八戒的拍击（struck）形成对比，三种攻击方式各不相同。',
      examples: [
        'He stabbed the meat with a fork.（他用叉子戳了戳肉。）',
        'The soldier stabbed the enemy with his sword.（士兵用剑刺向敌人。）',
      ],
      synonyms: [
        { word: 'pierced', note: '穿透，刺穿，强调刺入深处' },
        { word: 'thrust', note: '猛力推刺，强调力量的集中' },
      ],
    },
    {
      word: 'criminals',
      phonetic: '/ˈkrɪmɪnəlz/',
      brief: '罪犯，罪人',
      pos: 'noun (plural of criminal)',
      detail:
        'criminal 指"罪犯、犯罪的人"。原文中镇元大仙怒斥唐僧师徒为 criminals，要油炸他们——在道观中偷吃仙果、毁掉万年神树，在他看来这确实是不可饶恕的罪行。用 criminals 而不是 thieves（小偷），表明镇元大仙认为他们的行为已经超出了偷窃，是严重的犯罪。',
      examples: [
        'The police arrested the criminals.（警察逮捕了那些罪犯。）',
        'Criminals will be punished.（罪犯将受到惩罚。）',
      ],
      synonyms: [
        { word: 'offenders', note: '犯错者，违法者，语气较正式' },
        { word: 'wrongdoers', note: '做坏事的人，语气较轻' },
      ],
    },
    {
      word: 'enormous',
      phonetic: '/ɪˈnɔːrməs/',
      brief: '巨大的，庞大的',
      pos: 'adjective',
      detail:
        'enormous 指"非常大的、巨大的"，远超正常大小。原文中道士们抬来一口巨大的平底锅（an enormous frying pan）——要炸一个人需要多大的锅？enormous 夸张地描绘了这场惩罚的规模，也暗示镇元大仙道观的非同寻常。',
      examples: [
        'The elephant was enormous.（那头大象非常巨大。）',
        'They live in an enormous house.（他们住在一栋巨大的房子里。）',
      ],
      synonyms: [
        { word: 'gigantic', note: '庞大的，强调超出想象的大' },
        { word: 'massive', note: '大而重的，侧重体积和重量' },
      ],
    },
    {
      word: 'mortal',
      phonetic: '/ˈmɔːrtəl/',
      brief: '凡人的，会死的',
      pos: 'adjective',
      detail:
        'mortal 指"终有一死的、凡人的"，与 immortal（长生不老的）形成对比。原文中悟空心想"唐僧是凡人（mortal），会被烧焦"——悟空和八戒、沙僧都有法力护体不怕火，但唐僧是普通人类，经不起油锅的考验。mortal 在神话故事中是核心概念，区分了神仙和凡人。',
      examples: [
        'All humans are mortal.（人终有一死。）',
        'Mortal danger awaited them.（致命的危险正等着他们。）',
      ],
      synonyms: [
        { word: 'human', note: '人类的，不含"与神仙对比"的意味' },
        { word: 'fragile', note: '脆弱的，强调容易被伤害' },
      ],
    },
    {
      word: 'crisp',
      phonetic: '/krɪsp/',
      brief: '酥脆的，焦脆的',
      pos: 'adjective',
      detail:
        'crisp 本义是"脆的、酥的"，形容食物外表烤得又脆又干。原文中"burned to a crisp"是个固定表达，意思是"被烧得焦脆"——悟空担心唐僧如果被扔进油锅，会像炸食物一样被炸到焦脆。这个比喻既生动又有点黑色幽默，因为悟空想到的是"炸脆"而不是"烧死"。',
      examples: [
        'The bacon was fried to a crisp.（培根被炸得焦脆。）',
        'She likes her toast crisp.（她喜欢吐司烤得脆脆的。）',
      ],
      synonyms: [
        { word: 'charred', note: '烧焦的，侧重表面被烧黑' },
        { word: 'brittle', note: '易碎的，干硬的，不含烧焦的意思' },
      ],
    },
    {
      word: 'panting',
      phonetic: '/ˈpæntɪŋ/',
      brief: '气喘吁吁，大口喘气',
      pos: 'verb (present participle of pant)',
      detail:
        'pant 指"因体力消耗或炎热而急促喘气"。原文中道士们抬着悟空变成的石像时气喘吁吁（panting）——石像比真正的悟空重得多，两个道士使出吃奶的力气才勉强搬动。panting 与前面的"breathing heavily"呼应，从不同角度描绘了石像之重。',
      examples: [
        'The dog was panting after the long run.（狗跑了很远之后气喘吁吁。）',
        'He was panting heavily after climbing the stairs.（他爬完楼梯后大口喘气。）',
      ],
      synonyms: [
        { word: 'gasping', note: '大口吸气，更强调呼吸困难' },
        { word: 'wheezing', note: '呼哧呼哧地喘，带有声响' },
      ],
    },
    {
      word: 'rotten',
      phonetic: '/ˈrɑːtn/',
      brief: '糟糕透顶的，讨厌的',
      pos: 'adjective',
      detail:
        'rotten 本义是"腐烂的、变质的"，口语中常用来骂人"讨厌的、卑鄙的"。原文中八戒骂悟空"That rotten monkey!"（那个臭猴子！）——他以为悟空只顾自己逃命，把师父和师弟们丢下了。rotten 在这里不是字面意思"腐烂"，而是愤怒的骂人话，相当于中文的"臭""烂"。',
      examples: [
        'That rotten kid broke my window!（那个臭小子打破了我的窗户！）',
        'The fruit has gone rotten.（水果腐烂了。）',
      ],
      synonyms: [
        { word: 'lousy', note: '差劲的，糟糕的，口语骂人用词' },
        { word: 'wicked', note: '邪恶的，恶劣的，语气更重' },
      ],
    },
  ],
  book_06: [
    {
      word: 'shook',
      phonetic: '/ʃʊk/',
      brief: '发抖，摇动（shake 的过去式）',
      pos: 'verb (past tense of shake)',
      detail:
        'shake 的过去式，指"摇动、发抖"。本章中出现两次：第一次是唐僧吓得发抖（shook with fear），因为镇元大仙威胁要炸他；第二次是八戒摇头（shook his head），表示对悟空能否救他们感到绝望。同一个动词，两种完全不同的身体语言——一个表示恐惧，一个表示失望。',
      examples: [
        'She shook with cold.（她冻得发抖。）',
        'He shook his head slowly.（他慢慢摇了摇头。）',
      ],
      synonyms: [
        { word: 'trembled', note: '颤抖，侧重因恐惧或寒冷而不自主发抖' },
        { word: 'quivered', note: '微微颤动，更轻微的抖动' },
      ],
    },
    {
      word: 'doomed',
      phonetic: '/duːmd/',
      brief: '注定完蛋的，在劫难逃的',
      pos: 'adjective',
      detail:
        'doomed 指"注定要失败的、注定灭亡的"。原文中八戒说"We\'re doomed"——我们完蛋了。这是八戒的典型台词，每次遇到危险他就会悲观地认为大家都没救了。doomed 含有"命运已定、无法改变"的意味，比简单的"we\'re going to die"更有宿命感。',
      examples: [
        'The plan was doomed from the start.（这个计划从一开始就注定失败。）',
        'Without water, the plants are doomed.（没有水，这些植物注定活不了。）',
      ],
      synonyms: [
        { word: 'destined', note: '命中注定的，中性词，不含失败意味' },
        { word: 'condemned', note: '被判死刑的，语气更重' },
      ],
    },
    {
      word: 'suspicious',
      phonetic: '/səˈspɪʃəs/',
      brief: '怀疑的，起疑心的',
      pos: 'adjective',
      detail:
        'suspicious 指"感到怀疑的、起疑心的"。原文中观音菩萨给悟空一个 suspicious look（怀疑的眼神），因为她猜到人参果树的事肯定跟悟空有关。这个形容词暗示观音已经从悟空的语气和表情中察觉到了什么。注意重音在第二个音节 /ˈspɪʃ/。',
      examples: [
        'She gave him a suspicious glance.（她怀疑地看了他一眼。）',
        'The police found his behavior suspicious.（警方觉得他的行为很可疑。）',
      ],
      synonyms: [
        { word: 'doubtful', note: '怀疑的，侧重不确定感' },
        { word: 'skeptical', note: '持怀疑态度的，更强调理性质疑' },
      ],
    },
    {
      word: 'rare',
      phonetic: '/rer/',
      brief: '稀有的，珍贵的',
      pos: 'adjective',
      detail:
        'rare 指"稀有的、罕见的"。原文中观音说人参果树是 a rare treasure——一件稀世珍宝，因为它比天地还要古老。rare 强调某物的珍贵和难得，不是随便就能找到的。注意发音中不含任何 r 之间的元音，只有一个音节 /rer/。',
      examples: [
        'This is a rare book.（这是一本珍贵的稀有书。）',
        'Snow is rare in this region.（这个地区很少下雪。）',
      ],
      synonyms: [
        { word: 'scarce', note: '稀少的，侧重数量不足' },
        { word: 'precious', note: '珍贵的，侧重价值和情感意义' },
      ],
    },
    {
      word: 'shrugged',
      phonetic: '/ʃrʌɡd/',
      brief: '耸了耸肩（shrug 的过去式）',
      pos: 'verb (past tense of shrug)',
      detail:
        'shrug 指"耸肩"，表示无所谓、不知道或不以为然。原文中悟空被观音批评推倒人参果树后，他耸了耸肩（shrugged），说了句"I was angry"——我生气了嘛。这个耸肩的动作完美展现了悟空满不在乎的态度：他知道自己做错了，但不想承认，只好用耸肩来敷衍。这是一个非常典型的身体语言词。',
      examples: [
        'She shrugged and walked away.（她耸了耸肩就走了。）',
        'He shrugged off the criticism.（他对批评不屑一顾。）',
      ],
      synonyms: [
        { word: 'dismissed', note: '不当回事，侧重心理上的轻视' },
        { word: 'gestured', note: '做手势，泛指用手势表达' },
      ],
    },
    {
      word: 'anger',
      phonetic: '/ˈæŋɡər/',
      brief: '愤怒，怒气',
      pos: 'noun',
      detail:
        'anger 是名词，指"愤怒、怒气"。原文中观音告诫悟空"You must learn to control your anger"——你必须学会控制你的愤怒。这是整部《西游记》的一个重要主题：悟空的冲动和怒火经常给他和团队带来麻烦。control one\'s anger（控制愤怒）是一个常用搭配。',
      examples: [
        'He could not hide his anger.（他无法掩饰自己的愤怒。）',
        'Anger management is important for everyone.（情绪管理对每个人都很重要。）',
      ],
      synonyms: [
        { word: 'fury', note: '狂怒，程度比 anger 更强烈' },
        { word: 'rage', note: '暴怒，失去理智的愤怒' },
      ],
    },
    {
      word: 'shelf',
      phonetic: '/ʃelf/',
      brief: '架子，搁板',
      pos: 'noun',
      detail:
        'shelf 指"架子、搁板"，用来放置物品。原文中观音站起来，走到架子旁（went to a shelf），从上面拿了一个花瓶。注意 shelf 的复数是 shelves，不是 shelfs。在佛塔中，shelf 上放着法器，暗示这个花瓶不是普通物品。',
      examples: [
        'She put the book on the top shelf.（她把书放在了最上面的架子上。）',
        'The medicine is on the second shelf.（药在第二层架子上。）',
      ],
      synonyms: [
        { word: 'rack', note: '挂架，侧重悬挂式支架' },
        { word: 'ledge', note: '壁架，凸出的窄平台' },
      ],
    },
    {
      word: 'vase',
      phonetic: '/veɪs/',
      brief: '花瓶，瓶',
      pos: 'noun',
      detail:
        'vase 指"花瓶、装饰瓶"。原文中观音从架子上取下的净瓶（vase），在佛教中叫"净瓶"或"甘露瓶"，是观音菩萨的法器，里面装着能起死回生的甘露。这个花瓶不是用来插花的普通容器，而是拥有强大法力的宝物。注意英式发音 /vɑːz/，美式发音 /veɪs/。',
      examples: [
        'She arranged flowers in a beautiful vase.（她把花插在漂亮的花瓶里。）',
        'The antique vase is worth millions.（这个古董花瓶价值数百万。）',
      ],
      synonyms: [
        { word: 'jar', note: '广口瓶，罐子，通常有盖' },
        { word: 'pitcher', note: '水壶，有把手和嘴的容器' },
      ],
    },
    {
      word: 'dew',
      phonetic: '/duː/',
      brief: '露水，甘露',
      pos: 'noun',
      detail:
        'dew 指"露水"。原文中观音净瓶里装的是 magic dew——神奇的甘露。这种甘露具有起死回生的力量，能让枯萎的人参果树重新复活。在中国文化中，"甘露"（sweet dew）被视为天降的祥瑞之物，具有治愈和再生的象征意义。dew 强调清晨凝结在植物上的水珠，纯净而美好。',
      examples: [
        'Morning dew sparkled on the grass.（晨露在草地上闪闪发光。）',
        'The leaves were covered with dew.（树叶上布满了露水。）',
      ],
      synonyms: [
        { word: 'moisture', note: '水分，湿气，泛指' },
        { word: 'condensation', note: '凝结水，科学用语' },
      ],
    },
    {
      word: 'bring',
      phonetic: '/brɪŋ/',
      brief: '使…复活（bring...back to life 固定搭配）',
      pos: 'phrase (bring...back to life)',
      detail:
        'bring 本义是"带来"，原文中用于固定搭配 bring...back to life——"使……复活"。结构是 bring + 宾语 + back to life，中间插入被"复活"的对象。原文中观音说甘露能 bring spirit plants back to life——让仙树起死回生。bring 在这里不是简单的"带来"，而是搭配 back to life 后引申为"恢复生命"的意思。',
      examples: [
        'The rain brought the flowers back to life.（雨水让花儿重新活了过来。）',
        'Doctors brought the patient back to life.（医生把病人从死亡线上拉了回来。）',
        'The old song brought back memories of my childhood.（这首老歌唤起了我对童年的回忆。）',
      ],
      synonyms: [
        { word: 'restore', note: '恢复，侧重修复到原来的状态' },
        { word: 'revive', note: '使复苏，侧重重新激活' },
      ],
    },
    {
      word: 'dew droplets',
      phonetic: '/duː ˈdrɒpləts/',
      brief: '露珠，露滴',
      pos: 'noun phrase',
      detail:
        'dew droplets 是"dew（露水）+ droplets（小水滴）"的组合，指"露珠"。原文描写甘露洒落在人参果树枝上时，露珠（dew droplets）在枝干上滚动，光芒闪烁。droplet 是 drop 的指小词，强调水滴的细小圆润。这种细致的描写营造出一种神奇的视觉效果。',
      examples: [
        'Tiny dew droplets glistened on the spider web.（微小的露珠在蜘蛛网上闪闪发光。）',
        'Droplets of water fell from the leaf.（水珠从叶子上滴落。）',
      ],
      synonyms: [
        { word: 'beads', note: '珠子，形容水珠圆润如珠' },
        { word: 'moisture drops', note: '水滴，更直白的描述' },
      ],
    },
    {
      word: 'host',
      phonetic: '/hoʊst/',
      brief: '主办，举办',
      pos: 'verb',
      detail:
        'host 作动词指"主办、举办（活动）"。原文中镇元大仙为了感谢大家，决定 host a feast——举办一场盛宴。host 在这里从名词"主人"转化为动词"做东请客"，表示他是这场宴会的发起者和主办者。这是表示感谢和友好的社交行为。',
      examples: [
        'They hosted a dinner party last night.（他们昨晚举办了一场晚宴。）',
        'The city will host the Olympic Games.（这座城市将主办奥运会。）',
      ],
      synonyms: [
        { word: 'organize', note: '组织，侧重策划和安排' },
        { word: 'throw', note: '举办（非正式），如 throw a party' },
      ],
    },
    {
      word: 'trays',
      phonetic: '/treɪz/',
      brief: '托盘，盘子（tray 的复数）',
      pos: 'noun (plural of tray)',
      detail:
        'tray 指"托盘、浅盘"，用来盛放或运送食物、物品。原文中两个小道士用 trays 端着人参果进来——托盘上摆满了珍贵的人参果。用 trays 而不是 plates（盘子），说明人参果是整颗摆放展示的，而不是切成片的食物，体现了人参果的珍贵。',
      examples: [
        'She carried a tray of drinks.（她端着一托盘饮料。）',
        'The waiter brought our food on a silver tray.（服务员用银色托盘端来了我们的食物。）',
      ],
      synonyms: [
        { word: 'platters', note: '大浅盘，侧重扁平的大盘子' },
        { word: 'plates', note: '盘子，日常餐具' },
      ],
    },
    {
      word: 'assured',
      phonetic: '/əˈʃʊrd/',
      brief: '向……保证，使放心',
      pos: 'verb (past tense of assure)',
      detail:
        'assure 指"向某人保证、使某人放心"。原文中观音告诉唐僧人参果可以吃，assured him——让他放心。唐僧之前因为人参果长得像婴儿而不敢吃，观音用 assured 表达了她的权威保证——连菩萨都说安全了，你不用担心。assure 常用于消除别人的疑虑或恐惧。',
      examples: [
        'She assured me that everything would be fine.（她向我保证一切都会好的。）',
        'The doctor assured the patient about the surgery.（医生让病人对手术放心。）',
      ],
      synonyms: [
        { word: 'guaranteed', note: '保证，承诺，更正式且有法律意味' },
        { word: 'convinced', note: '说服，使确信' },
      ],
    },
    {
      word: 'heat',
      phonetic: '/hiːt/',
      brief: '炎热，高温',
      pos: 'noun',
      detail:
        'heat 作名词指"炎热、高温"。原文中描写取经团队在路上经历了各种天气："rain and sunshine, heat and cold"——风雨晴热寒。heat 在这里与 cold 对比，表示极端的天气条件。heat 还可以作动词表示"加热"，但这里显然是名词用法，指旅途中的酷热。',
      examples: [
        'The heat of the desert is unbearable.（沙漠的酷热令人难以忍受。）',
        'She couldn\'t sleep because of the heat.（因为太热她睡不着。）',
      ],
      synonyms: [
        { word: 'warmth', note: '温暖，程度较轻，令人舒适' },
        { word: 'scorching', note: '灼热，程度更极端' },
      ],
    },
    {
      word: 'disguise',
      phonetic: '/dɪsˈɡaɪz/',
      brief: '伪装，假扮',
      pos: 'noun',
      detail:
        'disguise 指"伪装、 disguises"，用来隐藏真实身份。原文中白骨精知道唐僧身边有厉害的徒弟，所以决定用 disguise——伪装来接近他。她先后变成年轻女子、老妇人和老头，三次伪装都是为了骗过唐僧的肉眼。disguise 既可作名词也可作动词，这里是名词用法。',
      examples: [
        'She wore a disguise to the party.（她化了伪装去参加聚会。）',
        'The spy was in disguise.（间谍乔装打扮了。）',
      ],
      synonyms: [
        { word: 'costume', note: '服装，戏服，侧重外表装扮' },
        { word: 'mask', note: '面具，侧重遮盖面部的伪装' },
      ],
    },
    {
      word: 'orchard',
      phonetic: '/ˈɔːrtʃərd/',
      brief: '果园',
      pos: 'noun',
      detail:
        'orchard 指"果园"，专门种植果树的田地。原文中悟空用火眼金睛看到千里之外有一片桃树 orchard——桃园，于是飞去摘桃子给大家当午饭。orchard 和 garden 不同，garden 可以是花园或菜园，而 orchard 专指种果树的园地。',
      examples: [
        'They own an apple orchard.（他们拥有一座苹果园。）',
        'We went apple picking at the orchard.（我们去果园摘苹果了。）',
      ],
      synonyms: [
        { word: 'grove', note: '小树林，不一定是果树' },
        { word: 'plantation', note: '种植园，规模更大，常指经济作物' },
      ],
    },
    {
      word: 'miles',
      phonetic: '/maɪlz/',
      brief: '英里（mile 的复数）',
      pos: 'noun (plural of mile)',
      detail:
        'mile 是英制长度单位，1 英里约等于 1.6 公里。原文中悟空看到"thousands of miles away"——数千里之外的桃园。miles 在英语中常用来表示"很远的距离"，不一定精确计算。注意 mile 的复数是 miles，发音为 /maɪlz/。',
      examples: [
        'The nearest town is five miles away.（最近的镇子在五英里外。）',
        'We walked for miles.（我们走了好几英里。）',
      ],
      synonyms: [
        { word: 'kilometers', note: '公里，公制单位，1 英里 ≈ 1.6 公里' },
        { word: 'leagues', note: '里格，旧时距离单位，约 3 英里' },
      ],
    },
    {
      word: 'held out',
      phonetic: '/hɛld aʊt/',
      brief: '伸出，递出',
      pos: 'phrase (past tense of hold out)',
      detail:
        'hold out 指"伸出（手或物品）"。原文中白骨精变成的年轻女子 held out a bowl——伸出一只碗，假装要给唐僧送饭。held 是 hold 的过去式。这个短语形象地描写了"把手臂向前伸展、把东西递向对方"的动作。在语境中，"伸出一碗饭"是白骨精诱骗唐僧的手段。',
      examples: [
        'She held out her hand to shake.（她伸出手来握手。）',
        'He held out the letter to me.（他把信递给了我。）',
      ],
      synonyms: [
        { word: 'reached out', note: '伸出手，侧重伸手够东西' },
        { word: 'offered', note: '递上，提供，侧重给予的动作' },
      ],
    },
    {
      word: 'struck',
      phonetic: '/strʌk/',
      brief: '击打，猛击（strike 的过去式）',
      pos: 'verb (past tense of strike)',
      detail:
        'strike 的过去式，指"用力击打"。原文中悟空第一次出手时 struck at the young woman——朝年轻女子打去。注意 struck at 和 struck 的区别：struck at 表示"朝…打去"，不一定打中（原文她消失了，所以确实没打中）。struck 是一个不规则动词变化：strike → struck → struck。',
      examples: [
        'He struck the table with his fist.（他用拳头捶了桌子。）',
        'Lightning struck the tree.（闪电击中了那棵树。）',
      ],
      synonyms: [
        { word: 'swung', note: '挥击，侧重挥动武器' },
        { word: 'smashed', note: '猛击，侧重力量的破坏性' },
      ],
    },
    {
      word: 'Unfortunately',
      phonetic: '/ʌnˈfɔːrtʃənətli/',
      brief: '不幸的是，遗憾的是',
      pos: 'adverb',
      detail:
        'unfortunately 指"不幸的是、遗憾地"，用于引出坏消息或令人失望的情况。原文中悟空说"Unfortunately she got away"——遗憾的是她跑了。这个词用来表示说话者对结果的不满和遗憾。由 un-（不）+ fortunate（幸运的）+ -ly（副词后缀）构成。在句首使用时，后面通常加逗号。',
      examples: [
        'Unfortunately, the tickets are sold out.（遗憾的是，票已经卖完了。）',
        'The weather was unfortunately bad that day.（那天天气很不好。）',
      ],
      synonyms: [
        { word: 'sadly', note: '令人遗憾的是，语气更温和' },
        { word: 'regrettably', note: '可惜地，更正式' },
      ],
    },
    {
      word: 'cruel',
      phonetic: '/ˈkruːəl/',
      brief: '残忍的，残酷的',
      pos: 'adjective',
      detail:
        'cruel 指"残忍的、冷酷无情的"。原文中唐僧质问悟空"Why are you so cruel?"——你为什么这么残忍？因为唐僧用肉眼看到的只是一个年轻女子在送饭，而悟空却一棒打过去。在唐僧看来，悟空的行为是 cruel（残忍的）；而在悟空看来，他是在保护师父。cruel 是理解这师徒矛盾的关键词。',
      examples: [
        'It\'s cruel to leave him outside in the cold.（让他待在外面挨冻太残忍了。）',
        'The cruel king punished his people.（残暴的国王惩罚了他的人民。）',
      ],
      synonyms: [
        { word: 'heartless', note: '无情的，侧重缺乏同情心' },
        { word: 'brutal', note: '野蛮的，暴力的，程度更重' },
      ],
    },
    {
      word: 'ridiculous',
      phonetic: '/rɪˈdɪkjələs/',
      brief: '荒唐的，可笑的',
      pos: 'adjective',
      detail:
        'ridiculous 指"荒唐可笑的、不合理的"。原文中悟空反驳八戒的污蔑时说"That\'s ridiculous"——那简直荒唐！八戒谎称悟空用妖术把食物变成了虫子，悟空认为这个说法太荒谬了。ridiculous 比 funny 或 silly 更强烈，暗示对方的说法不值得认真对待。',
      examples: [
        'That\'s a ridiculous idea!（那个想法太荒唐了！）',
        'He looked ridiculous in that hat.（他戴着那顶帽子看起来很滑稽。）',
      ],
      synonyms: [
        { word: 'absurd', note: '荒谬的，更强调不合逻辑' },
        { word: 'nonsense', note: '胡说八道，名词，不是形容词' },
      ],
    },
    {
      word: 'innocent',
      phonetic: '/ˈɪnəsənt/',
      brief: '无辜的，清白的',
      pos: 'adjective',
      detail:
        'innocent 指"无辜的、没有罪过的"。原文中八戒大喊"He killed another innocent person!"——他又杀了一个无辜的人！八戒用 innocent 来强调被悟空打倒的"老妇人"是一个好人、没有做错任何事。这是整个白骨精故事的核心矛盾：悟空看到的是妖怪，而其他人看到的是 innocent（无辜的）普通人。',
      examples: [
        'The jury found him innocent.（陪审团判定他无罪。）',
        'She has an innocent smile.（她的笑容天真无邪。）',
      ],
      synonyms: [
        { word: 'guiltless', note: '无罪的，法律语境' },
        { word: 'harmless', note: '无害的，侧重不会造成伤害' },
      ],
    },
    {
      word: 'whipped',
      phonetic: '/wɪpt/',
      brief: '猛地抽出，快速拔出',
      pos: 'verb (past tense of whip)',
      detail:
        'whip 本义是"鞭打"，这里指"猛地抽出、迅速拔出"。原文中悟空 whipped out his iron bar——猛地抽出金箍棒。whip out 是一个生动的短语动词，形容动作极快、像挥鞭子一样干脆利落。这体现了悟空第三次出手时的果断和坚决——前两次没打死妖怪，这次他毫不犹豫。',
      examples: [
        'She whipped out her phone and took a photo.（她迅速掏出手机拍了一张照。）',
        'He whipped out a knife.（他猛地拔出一把刀。）',
      ],
      synonyms: [
        { word: 'yanked', note: '猛拉，侧重用力拽出' },
        { word: 'drew', note: '拔出，较正式，速度不一定快' },
      ],
    },
    {
      word: 'skeleton',
      phonetic: '/ˈskɛlɪtən/',
      brief: '骷髅，骨架',
      pos: 'noun',
      detail:
        'skeleton 指"骷髅、骨架"，即人或动物的全副骨骼。原文中悟空第三次终于打死白骨精，烟雾散去后地上露出一具 skeleton——骷髅。白骨精的本体就是一堆白骨（"白骨"精），所以她的真身是一具骷髅。这个词在原文中出现两次：第一次描写地上躺着一具骷髅，第二次悟空宣布她是 evil skeleton spirit——邪恶的骷髅精。',
      examples: [
        'They found a human skeleton in the cave.（他们在洞穴里发现了一具人类骷髅。）',
        'The skeleton of the old building was all that remained.（那座旧建筑只剩下骨架了。）',
      ],
      synonyms: [
        { word: 'bones', note: '骨头，泛指，不一定是完整骨架' },
        { word: 'skull', note: '头骨，仅指头部骨骼' },
      ],
    },
  ],
};

export default vocab;
