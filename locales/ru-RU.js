export default {
  navigation: {
    introduction: 'Вступление',
    faq: 'Частые вопросы',
    gallery: 'Галерея',
    download: 'Скачать',
  },
  pages: {
    index: {
      intro: {
        heading: 'Iris Shaders',
        description:
          'Iris это совместный проект с открытым исходным кодом, созданный командой увлеченных разработчиков, стремящихся сделать опыт игры с шейдерами на Minecraft с Fabirc максимально качественным. Iris разработан обществом, для общества.',
        buttons: {
          downloads: 'Загрузки',
          learn_more: 'Узнать больше',
        },
        author_copyright:
          'Прекрасные фотографии от <b>{0}</b>, <b>{1}</b> и <b>{2}</b>',
      },
      features: {
        title: 'Особенности',
        optifine_parity: {
          title: 'Равенство с OptiFine',
          description:
            'Iris старается поддерживать все текущие и будущие шейдерпаки с OptiFine, их число постоянно и быстро растет.',
        },
        sodium_support: {
          title: 'Поддержка Sodium',
          description:
            'Iris совместим с модами на оптимизацию от CaffeineMC, такими как Sodium и Phosphor, позволяя отображать завораживающую картинку с частотой кадров равной или большей чем в ванильной игре.',
        },
      },
      advantages: {
        title: 'Преимущества',
        advantages: [
          {
            title: 'Оптимизация теней',
            description:
              'Используя технологию фрустум кулинга для теней Iris позволяет достичь лучшей производительности без влияния на качество освещения и теней.',
          },
          {
            title: 'Эффективный рендеринг сущностей',
            description:
              'Iris улучшает способ, которым Minecraft рендерит сущности и блоки-сущности, например сундуки, свиньи, и рамки предметов.',
          },
          {
            title: 'Современная архитектура',
            description:
              'Iris был создан с нуля с упором на расширяемость и легкость обновления. Попрощайтесь с неделям ожидания, когда можно будет использовать шейдеры на последней версии Minecraft!',
          },
        ],
      },
      download_now: {
        title: 'Скачайте прямо сейчас',
        buttonText: 'Перейти на страницу загрузки',
      },
    },
    downloads: {
      title: 'Пара кликов для получения шейдеров',
      description:
        'Мы создали автоматический установщик для нашего мода, он самостоятельно скачает и установит Iris и Sodium для приятной графики и производительности.',
      subinfo: `Последняя версия Iris это <a href="/releases">{0}</a> и установщика <a href="https://github.com/IrisShaders/Iris-Installer/releases"
        >{1}</a>`,
      buttonInstaller: 'Скачать установщик',
      manualTitle: 'Предпочитаете ручную установку? Без проблем.',
    },
    gallery: {
      title: 'Фотографии, сделанные сообществом Iris',
      photo_copyright: 'от',
    },
    faq: {
      title: 'Давайте исправим вашу проблему',
      solutions: [
        {
          title: 'Почему не работает установщик Iris?',
          description: [
            `Вам нужна Java, скачать ее можно на <a href="https://adoptopenjdk.net/?variant=openjdk16&jvmVariant=hotspot">AdoptOpenJDK</a>`,
          ],
        },
        {
          title: 'Как открыть конфигурацию шейдеров?',
          description: [
            `Сейчас это невозможно, но эта возможность появится в будущих версиях.`,
          ],
        },
        {
          title: 'Почему (вставьте шейдер) не работает?',
          description: [
            `Этот шейдер не поддерживается, но скоро его поддержка может быть добавлена.`,
          ],
        },
        {
          title: 'Как мне отключить шейдеры?',
          description: [
            `Нажмите K для отключения шейдеров не используя интерфейс.`,
          ],
        },
        {
          title: 'Я установил Iris, почему игра крашится?',
          description: [
            `• Ваша версия Iris получена с Modrinth или Curseforge. Эта версия сразу имеет Sodium внутри себя и использование еще одного Sodium вызывает вылет.`,
            `• Вы используете устаревшую версию Indium, Sodium Extras или Better Sodium Menu`,
            `• Вы используете Iris на версии 1.17 на Intel (Все) или AMD GPU на Linux (MESA)`,
            `• Вы используете шейдеры без поддержки`,
            `• Вы используете MacOS, которая имеет ограниченную поддержку`,
            `• У вас установлен несовместимый мод, такой как Immersive Portals. (Совместимость с Immersive Portals в разработке.)`,
          ],
        },
        {
          title: 'Какие шейдеры работают с Iris?',
          description: [
            `<b>Хорошая работа:</b>`,
            `Astralex, BSL Shaders, Complementary Shaders, Continuum 1.3 , Continuum 2.0.4, PSXify, SEUS V11, SEUS Renewed, Sildur's Enhanced Default, Sildur's Vibrant Shaders, Skylec v4.0, Tea V1.5.3, XorDev's shaders`,
            `<br>`,
            `<b>Незначительные проблемы:</b>`,
            `BeyondBeliefShaders V1.2.0 [отражения сломаны], BQ Shaders Low [отражения сломаны], Project Luma [Нет неба, сломаны порталы в энд/врата], Triliton V8 [отражения сломаны], Windom [отражения сломаны]
            `,
          ],
        },
      ],
    },
  },
  footer: {
    about: {
      title: 'О проекте Iris',
      description:
        'Iris был создан для заполнения пустоты, которую я видел в кастомизации и комьюнити, улучшающем графику игры Minecraft. Отсутствие мода на шейдеры с открытым исходным кодом, который позволил бы мне использовать мои любимые шейдеры на последних версиях игры, не затрагивая производительность и совместимость с модпаками.',
    },
    links: {
      title: 'Ссылки',
      items: {
        download_now: 'Скачать сейчас',
        curseforge: 'Страница на CurseForge',
        modrinth: 'Страница на Modrinth',
      },
    },
    socials: {
      title: 'Социальные сети',
      items: {
        github: 'GitHub',
        discord: 'Discord',
        patreon: 'Patreon',
      },
    },
    copyright: [
      '© Copyright 2021 IrisShaders. Все права защищены.',
      'Разработал',
    ],
  },
}
