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
  // book_02: [ ... ],
  // book_03: [ ... ],
};

export default vocab;
