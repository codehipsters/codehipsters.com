---
layout: post
title: "Федор Индутный, io.js и столовые приборы"
author: Витя Суздалев
description: Code Hipsters связались с Федором Индутным и распросили его про io.js, о котором все говорят.
localized_date: 14 января 2015
share_image: /images/sitnik-header.jpg
published: false
---
Соскучились по нам? [Code Hipsters](https://vk.com/codehipsters) связались с [Федором Индутным](https://blog.indutny.com/) из Яндекса и распросили его про [io.js](https://github.com/iojs/io.js), о котором все говорят.

**Code Hipsters:** Добрый день, Федор! Об [io.js](https://github.com/iojs/io.js), наверное, все очевидные вопросы уже задали; можете объяснить для тех, кто все еще не понял, что на самом деле произошло?

**Федор Индутный:** Произошло следующее: в октябре появился форк [node-forward](https://github.com/node-forward), поддерживаемый большей частью основной команды Node.js. Помимо более активной разработки, в нем так же происходило обсуждение проблем в сообществе и способов их решения. Главной идей можно назвать "Moving node forward". Причиной появления этого форка было недовольство скоростью релизов и разработки Node.js. Ожидаемым результатом был и является merge с оригинальным репозиторием и передача руководства над проектом от компании Joyent к Community (Open Governance).

Репозиторий node-forward/node какое-то время был публичным, но в скором времени *Scott Hammond* (CEO компании Joyent) выразил свое недовольство использованием торговой марки Node.js и потребовал сделать форк приватным или переименовать его. Какое-то время репозиторий действительно был закрытым, однако это не было приемлемым как для меня, так и для некоторых других участников проекта. Мы ведь работали над Open Source проектом, а получалось, что весь код был доступен только ограниченному количеству людей, которых мы лично приглашали.

Тем не менее, мы ожидали действий со стороны Joyent и продолжали работу в закрытом репозитории около месяца. Но в виду отсутствия движения со стороны Joyent и медленно протекающих и закрытых встреч Advisory Board я решил опубликовать наши наработки с другим именем проекта (io.js) и посмотреть, как отреагирует сообщество.

**Code Hipsters:** Как вы думаете, почему новость о форке вызвала такой резонанс?

**Федор Индутный:** Реакция была ошеломляющая. На мой взгляд, многие увидели, что проект снова "набирает обороты", и у них появилось желание помочь. Активность в [iojs/io.js](https://github.com/iojs/io.js) сейчас огромная. Сообщество обсуждает множество вопросов: от логотипов до кода. Technical Commitee проводит еженедельные публичные встречи, на которых обсуждаются обозначенные сообществом проблемы.

Собственно, это вся история произошедшего. 

**Code Hipsters:** Является ли io.js восстанием против тирании Joyent, и есть ли эта тирания?

**Федор Индутный:** Я достаточно далек от "политики" и стараюсь не участвовать в дискуссиях об отношении Joyent к проекту.

**Code Hipsters:** Какую роль в io.js играете лично вы? Вдохновитель/руководитель/член команды? Какие личные планы связаны с проектом?

**Федор Индутный:** Я просто член команды. Руководство — не моя стихия.

**Code Hipsters:** Чем io.js будет отличаться от Node.js? На какие функциональные нововведения вы нацеливаетесь в первую очередь?

**Федор Индутный:** Главные отличия от Node.js — скорость разработки и релизов. Функционально проект будет совместим с joyent/node настолько, насколько это возможно.

**Code Hipsters:** Чем вы занимаетесь в Яндексе, много ли рабочего времени занимает node/io.js? Как компания относится к вашей активной опенсорсной деятельности?

**Федор Индутный:**  В Яндексе я занимаюсь разработкой различных инструментов-помощников для других программистов. io.js занимает огромное количество времени. К моей большой радости, руководство к этому относится очень положительно и отзывчиво.

**Code Hipsters:** Какие серверные JavaScript технологии и подходы, по вашему мнению, будут в тренде в 2015? С чем надо разбираться как можно скорее, чтобы не отстать?

**Федор Индутный:** Мне тяжело рассуждать о трендах, так как большую часть кода я пишу на "vanilla" JavaScript и C++. Возможно, в следующем году мы увидим активное использование iterators и promises, так как они будут работать без флагов командной строки в io.js

**Code Hipsters:** Будет ли io.js работать с ES6 по умолчанию, или включенными окажутся только какие-то части стандарта — те же генераторы?

**Федор Индутный:** Насчет ES6 — наша политика очень простая: если что-то начинает работать без флага в v8, оно будет работать без флага и у нас.

**Code Hipsters:** Какая функциональная фича первая в плане? В каком направлении сейчас движется io.js — новый стандарт языка по умолчанию, какие-то улучшения производительности или API?

**Федор Индутный:** Сейчас io.js движется в направлении релиза 1.0.0, после этого мы начнем работу над новыми вещами.

**Code Hipsters:** Низкая скорость релизов сама по себе не кажется достаточной причиной для форка; кроме режима принятия решений, какие проблемы в сообществе node.js встали наиболее остро в последнее время?

**Федор Индутный:** Низкая скорость релизов — это очень веская причина лично для меня.

**Code Hipsters:** Вы говорите, что большую часть времени пишете на чистом JavaScript; что, на ваш взгляд, является самым важным в ES6?

**Федор Индутный:** Мне очень нравятся iterators, WeakMap/WeakSet, destructuring.

**Code Hipsters:** Как вы относитесь к языкам, компилируемым в JavaScript? Почему не используете тот же CoffeeScript?

**Федор Индутный:** В целом, я не имею ничего против CoffeeScript и прочих языков. Мой любимый язык программирования — C, наверное, поэтому лично мне комфортнее работать с JavaScript. TypeScript мне кажется довольно интересным, но не думаю, что я буду использовать его в ближайшее время.

**Code Hipsters:** Очень большую часть дискуссий вокруг фронтенда, да и программирования в целом, занимает функциональный подход, FRP и все связанное. Как вы оцениваете перспективы FRP и того же [bacon.js](https://baconjs.github.io/) на сервере?

**Федор Индутный:** О, функциональные языки программирования! Мне они очень нравятся, но опять таки C — мой фаворит. На мой взгляд, не имеет большого значения, на чем именно (или с использованием чего именно) написан серверный код. Все решает опыт и умение разработчика.

**Code Hipsters:** Научится ли серверный JavaScript варить кофе?

**Федор Индутный:** Кофе варить можно будет разве что в прямом смысле. Планов перехода на CoffeeScript нет.

**Code Hipsters:** Под "варить кофе" я имел в виду настоящий кофе. 

**Федор Индутный:** Есть целое сообщество, посвященное использованию Node.js с различной электроникой (arduino и т.п.). Думаю, кофе варить рано или поздно мы научимся :)

**Code Hipsters:** А нет ли планов перейти на Go?

**Федор Индутный:** Переход на Go не планируется :)

**Code Hipsters:** Спасибо за ваши ответы!

**P.S.** io.js сегодня [добрался до релиза 1.0](https://github.com/iojs/io.js/blob/v1.x/CHANGELOG.md)! Поздравляем Федора и команду с достижением этой приятной отправной точки и желаем успехов!