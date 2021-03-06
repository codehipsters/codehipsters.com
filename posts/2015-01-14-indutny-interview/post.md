
[Code Hipsters](https://vk.com/codehipsters) связались с [Фёдором Индутным](https://blog.indutny.com/) из Яндекса и распросили его про [io.js](https://iojs.org/), поднявшего столько шума в конце прошлого года.

![](/images/indutny-header.png)

**Code Hipsters:** Добрый день, Фёдор! Об [io.js](https://iojs.org/), наверное, все очевидные вопросы уже задали; можете объяснить для тех, кто все еще не понял, что на самом деле произошло?

**Фёдор Индутный:** Произошло следующее: в октябре появился форк [node-forward](https://github.com/node-forward), поддерживаемый большей частью основной команды Node.js. Помимо более активной разработки, в нем так же происходило обсуждение проблем в сообществе и способов их решения. Главной идей можно назвать «Moving node forward». Причиной появления этого форка было недовольство скоростью релизов и разработки Node.js. Ожидаемым результатом был и является merge с оригинальным репозиторием и передача руководства над проектом от компании Joyent к Community (Open Governance).

Репозиторий node-forward/node какое-то время был публичным, но в скором времени *Scott Hammond* (CEO компании Joyent) выразил свое недовольство использованием торговой марки Node.js и потребовал сделать форк приватным или переименовать его. Какое-то время репозиторий действительно был закрытым, однако это не было приемлемым как для меня, так и для некоторых других участников проекта. Мы ведь работали над Open Source проектом, а получалось, что весь код был доступен только ограниченному количеству людей, которых мы лично приглашали.

Тем не менее, мы ожидали действий со стороны Joyent и продолжали работу в закрытом репозитории около месяца. Но в виду отсутствия движения со стороны Joyent и медленно протекающих и закрытых встреч Advisory Board я решил опубликовать наши наработки с другим именем проекта ([io.js](https://github.com/iojs/io.js)) и посмотреть, как отреагирует сообщество.

**Code Hipsters:** Как вы думаете, почему новость о форке вызвала такой резонанс?

**Фёдор Индутный:** Реакция была ошеломляющей! На мой взгляд, многие увидели, что проект снова «набирает обороты», и у них появилось желание помочь. Активность в [iojs/io.js](https://github.com/iojs/io.js) сейчас огромная. Сообщество обсуждает множество вопросов: от логотипов до кода. Technical Commitee проводит еженедельные публичные встречи, на которых обсуждаются обозначенные сообществом проблемы.

Собственно, это вся история произошедшего.

**Code Hipsters:** Является ли io.js восстанием против тирании Joyent, и есть ли эта тирания?

![](/images/indutny-reaction-cite.png)

**Фёдор Индутный:** Я достаточно далек от «политики» и стараюсь не участвовать в дискуссиях об отношении Joyent к проекту.

**Code Hipsters:** Какую роль в io.js играете лично вы? Вдохновитель/руководитель/член команды? Какие личные планы связаны с проектом?

**Фёдор Индутный:** Я просто член команды. Руководство — не моя стихия.

**Code Hipsters:** Чем io.js будет отличаться от Node.js? На какие функциональные нововведения вы нацеливаетесь в первую очередь?

**Фёдор Индутный:** Главные отличия от Node.js — скорость разработки и релизов. Функционально проект будет совместим с joyent/node настолько, насколько это возможно.

**Code Hipsters:** Чем вы занимаетесь в Яндексе, много ли рабочего времени занимает node/io.js? Как компания относится к вашей активной опенсорсной деятельности?

**Фёдор Индутный:**  В Яндексе я занимаюсь разработкой различных инструментов-помощников для других программистов. io.js занимает огромное количество времени. К моей большой радости, руководство к этому относится очень положительно и отзывчиво.

![](/images/indutny-typewriter-cite.png)

**Code Hipsters:** Какие серверные JavaScript технологии и подходы, по вашему мнению, будут в тренде в 2015? С чем надо разбираться как можно скорее, чтобы не отстать?

**Фёдор Индутный:** Мне тяжело рассуждать о трендах, так как большую часть кода я пишу на «vanilla» JavaScript и C++. Возможно, в следующем году мы увидим активное использование iterators и promises, так как они будут работать без флагов командной строки в io.js

**Code Hipsters:** Будет ли io.js работать с ES6 по умолчанию, или включенными окажутся только какие-то части стандарта — те же генераторы?

**Фёдор Индутный:** Насчет ES6 — наша политика очень простая: если что-то начинает работать без флага в v8, оно будет работать без флага и у нас.

**Code Hipsters:** Какая функциональная фича первая в плане? В каком направлении сейчас движется io.js — новый стандарт языка по умолчанию, какие-то улучшения производительности или API?

**Фёдор Индутный:** Сейчас io.js движется в направлении релиза 1.0.0, после этого мы начнем работу над новыми вещами.

**Code Hipsters:** Низкая скорость релизов сама по себе не кажется достаточной причиной для форка; кроме режима принятия решений, какие проблемы в сообществе node.js встали наиболее остро в последнее время?

**Фёдор Индутный:** Низкая скорость релизов — это очень веская причина лично для меня.

**Code Hipsters:** Вы говорите, что большую часть времени пишете на чистом JavaScript; что, на ваш взгляд, является самым важным в ES6?

**Фёдор Индутный:** Мне очень нравятся iterators, WeakMap/WeakSet, destructuring.

**Code Hipsters:** Как вы относитесь к языкам, компилируемым в JavaScript? Почему не используете тот же CoffeeScript?

**Фёдор Индутный:** В целом, я не имею ничего против CoffeeScript и прочих языков. Мой любимый язык программирования — C, наверное, поэтому лично мне комфортнее работать с JavaScript. TypeScript мне кажется довольно интересным, но не думаю, что я буду использовать его в ближайшее время.

**Code Hipsters:** Очень большую часть дискуссий вокруг фронтенда, да и программирования в целом, занимает функциональный подход, FRP и все связанное. Как вы оцениваете перспективы FRP и того же [bacon.js](https://baconjs.github.io/) на сервере?

**Фёдор Индутный:** О, функциональные языки программирования! Мне они очень нравятся, но опять таки C — мой фаворит. На мой взгляд, не имеет большого значения, на чем именно (или с использованием чего именно) написан серверный код. Все решает опыт и умение разработчика.

**Code Hipsters:** Научится ли серверный JavaScript варить кофе?

**Фёдор Индутный:** Кофе варить можно будет разве что в прямом смысле. Планов перехода на CoffeeScript нет.

![](/images/indutny-coffee-cite.png)

**Code Hipsters:** Под «варить кофе» я имел в виду настоящий кофе.

**Фёдор Индутный:** Есть целое сообщество, посвященное использованию Node.js с различной электроникой (arduino и т.п.). Думаю, кофе варить рано или поздно мы научимся :)

**Code Hipsters:** А нет ли планов перейти на Go?

**Фёдор Индутный:** Переход на Go не планируется :)

**Code Hipsters:** Спасибо за ваши ответы!

**P.S.** io.js сегодня [добрался до релиза 1.0](https://github.com/iojs/io.js/blob/v1.x/CHANGELOG.md)! Поздравляем Фёдора и команду с достижением этой приятной отправной точки и желаем успехов!
